import { ReactNode } from "react";

export function MonoLabel({
  children,
  className = "",
  dim = false,
}: {
  children: ReactNode;
  className?: string;
  dim?: boolean;
}) {
  return (
    <span className={`h-slate ${dim ? "text-ink-dim" : "text-ink"} ${className}`}>
      {children}
    </span>
  );
}
