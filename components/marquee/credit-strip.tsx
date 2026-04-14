const CREDITS = [
  "PATAGONIA",
  "ARC'TERYX",
  "CBC GEM",
  "WESTCOTT HOSPITALITY",
  "ALBERTA MOTOR ASSOC.",
  "★ CALGARY INT'L FILM FEST · OFFICIAL SELECTION 2024",
  "BANFF MOUNTAIN FILM · SHORTLIST 2023",
  "VIMEO STAFF PICK · 2024",
  "SUNDANCE SHORTS · SUBMITTED & REJECTED",
  "HOUSE OF COMMON",
  "PARKS CANADA",
  "RMR HOSPITALITY",
  "★ YORKTON FILM FESTIVAL · HONORABLE MENTION",
];

export default function CreditStrip() {
  const row = [...CREDITS, ...CREDITS];
  return (
    <section className="marquee-wrap relative border-y border-rule py-6 overflow-hidden bg-paper-2">
      <div className="marquee-track flex whitespace-nowrap">
        {row.map((c, i) => (
          <span
            key={i}
            className="text-[12px] font-semibold tracking-[0.24em] text-ink-dim mx-10 shrink-0 uppercase"
          >
            {c}
            <span className="text-signal ml-10">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
