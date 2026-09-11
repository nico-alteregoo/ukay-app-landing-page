/** The printed tarpaulin frame around the whole page, and the paper grain overlay. */
export function PageFrame() {
  return (
    <>
      <div className="paper-grain" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-[6px] z-30 border-2 border-oxblood sm:inset-[10px]"
      />
    </>
  );
}
