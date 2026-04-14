"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rule } from "@/components/ui/rule";

const QUOTES = [
  {
    body:
      "They showed up with three cases and left us a film we still point to when we're briefing other crews. I don't know how it keeps happening.",
    who: "Ada Wen",
    role: "Creative Director, House of Common",
  },
  {
    body:
      "Half of what they do is just being patient enough to wait for the right light. The other half is not flinching when it actually arrives.",
    who: "Idris Kahn",
    role: "Director, CBC Gem",
  },
  {
    body:
      "They cut the thing I wanted and then, quietly, cut a second version of the thing I didn't know I wanted. We ran the second one.",
    who: "Sofía Marín",
    role: "Brand Lead, Westcott Hospitality",
  },
];

export default function PullQuote() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % QUOTES.length), 7500);
    return () => window.clearInterval(id);
  }, []);

  const q = QUOTES[i];

  return (
    <section className="relative px-6 md:px-10 py-20 md:py-28 bg-paper overflow-hidden">
      <Rule label="WHAT THEY SAID AFTER" index="— 06" />

      <div className="max-w-[860px] mx-auto mt-14 md:mt-20">
        <div className="flex items-start justify-between gap-6 mb-6">
          <span
            className="h-display text-signal leading-none block"
            style={{
              fontSize: "clamp(56px, 6vw, 88px)",
              fontWeight: 900,
            }}
            aria-hidden
          >
            “
          </span>
          <div className="h-slate text-ink-dim mt-4 tabular-nums">
            {String(i + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="h-display text-ink"
              style={{
                fontSize: "clamp(20px, 2.5vw, 34px)",
                lineHeight: 1.12,
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              {q.body.toUpperCase()}
            </p>
            <footer className="mt-8 h-slate text-ink-dim">
              — {q.who.toUpperCase()} · {q.role.toUpperCase()}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-10 flex items-center gap-3">
          {QUOTES.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Show quote ${n + 1}`}
              className={`h-[3px] transition-all duration-500 ${
                n === i ? "w-14 bg-signal" : "w-8 bg-rule"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
