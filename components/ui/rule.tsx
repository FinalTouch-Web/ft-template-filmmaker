export function Rule({ label, index }: { label?: string; index?: string }) {
  return (
    <div className="relative flex items-center w-full py-6">
      <div className="flex-1 h-px bg-rule" />
      {label && (
        <div className="px-4 h-slate text-ink-dim whitespace-nowrap flex items-center gap-2">
          <span className="inline-block w-[7px] h-[7px] bg-signal hex" />
          {index && <span className="text-signal">{index}</span>}
          {index && <span className="text-ink-dim">/</span>}
          {label.toUpperCase()}
        </div>
      )}
      <div className="flex-1 h-px bg-rule" />
    </div>
  );
}
