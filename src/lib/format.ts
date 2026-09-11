export function peso(amount: number): string {
  return `₱${amount.toLocaleString("en-PH")}`;
}

export function clock(totalSeconds: number): string {
  const s = Math.max(0, totalSeconds);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
