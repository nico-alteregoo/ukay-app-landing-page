import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/** Simulates the room bidding: bumps the current bid a few times, then settles. */
export function useLiveBid(startingBid: number, startingCount: number, active: boolean) {
  const [bid, setBid] = useState(startingBid);
  const [count, setCount] = useState(startingCount);
  const [flash, setFlash] = useState(false);
  const bumpsLeft = useRef(4);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!active || reduced) return;
    const id = window.setInterval(
      () => {
        if (bumpsLeft.current <= 0) return;
        bumpsLeft.current -= 1;
        const step = [25, 50, 50, 100][Math.floor(Math.random() * 4)];
        setBid((b) => b + step);
        setCount((c) => c + 1);
        setFlash(true);
        window.setTimeout(() => setFlash(false), 650);
      },
      6000 + Math.random() * 5000,
    );
    return () => window.clearInterval(id);
  }, [active, reduced]);

  return { bid, count, flash };
}
