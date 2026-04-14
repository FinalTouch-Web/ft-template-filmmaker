"use client";

import { useEffect, useState } from "react";

export function Timecode({ start = 0, running = true }: { start?: number; running?: boolean }) {
  const [frame, setFrame] = useState(start);
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setFrame((f) => f + 1), 1000 / 24);
    return () => window.clearInterval(id);
  }, [running]);

  const total = frame;
  const h = Math.floor(total / (24 * 60 * 60));
  const m = Math.floor((total / (24 * 60)) % 60);
  const s = Math.floor((total / 24) % 60);
  const f = total % 24;

  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <span className="text-signal tabular-nums font-semibold tracking-[0.1em] text-[12px]">
      {pad(h)}:{pad(m)}:{pad(s)}:{pad(f)}
    </span>
  );
}
