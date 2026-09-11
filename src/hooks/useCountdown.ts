import { useEffect, useRef, useState } from "react";

/**
 * A shared 1-second ticker so N countdowns on the page share one interval
 * instead of each mounting its own setInterval.
 */
let subscribers = new Set<() => void>();
let tickHandle: number | null = null;

function subscribe(fn: () => void) {
  subscribers.add(fn);
  if (tickHandle == null) {
    tickHandle = window.setInterval(() => {
      subscribers.forEach((f) => f());
    }, 1000);
  }
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0 && tickHandle != null) {
      window.clearInterval(tickHandle);
      tickHandle = null;
    }
  };
}

export interface CountdownResult {
  totalSeconds: number;
  minutes: number;
  seconds: number;
  isUnderTwoMinutes: boolean;
  isDone: boolean;
}

/** Ticks down from `endsInSeconds` (an offset from first mount), real time, no layout shift. */
export function useCountdown(endsInSeconds: number): CountdownResult {
  const target = useRef(Date.now() + endsInSeconds * 1000);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => subscribe(() => setNow(Date.now())), []);

  const remaining = Math.max(0, Math.round((target.current - now) / 1000));
  return {
    totalSeconds: remaining,
    minutes: Math.floor(remaining / 60),
    seconds: remaining % 60,
    isUnderTwoMinutes: remaining <= 120 && remaining > 0,
    isDone: remaining <= 0,
  };
}
