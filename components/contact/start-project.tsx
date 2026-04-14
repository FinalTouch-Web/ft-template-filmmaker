"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rule } from "@/components/ui/rule";

const FIELDS: { key: string; label: string; type?: string; ta?: boolean }[] = [
  { key: "name", label: "NAME" },
  { key: "project", label: "PROJECT / COMPANY" },
  { key: "timeline", label: "TIMELINE" },
  { key: "budget", label: "BUDGET RANGE" },
  { key: "message", label: "TELL US WHAT YOU'RE MAKING", ta: true },
];

export default function StartProject({ minimal = false }: { minimal?: boolean }) {
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-paper">
      {!minimal && <Rule label="START A PROJECT" index="— 07" />}

      <div
        className={`max-w-[1600px] mx-auto ${
          minimal ? "" : "mt-16"
        } grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20`}
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-display text-ink break-words"
            style={{
              fontSize: "clamp(38px, 7vw, 120px)",
              fontWeight: 900,
              overflowWrap: "anywhere",
            }}
          >
            TELL US<br />
            WHAT YOU'RE<br />
            MAKING<span className="text-signal">.</span>
          </motion.h2>
          <p className="mt-10 max-w-md text-ink-dim leading-relaxed">
            We read every one of these. Usually we get back in under two days —
            longer if we're on a shoot. If it's urgent, call instead.
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <div className="h-slate text-ink-dim">— EMAIL</div>
              <a
                href="mailto:hello@longframe.studio"
                className="block h-display text-ink hover:text-signal transition-colors mt-2"
                style={{ fontSize: "24px", fontWeight: 700 }}
              >
                HELLO@LONGFRAME.STUDIO
              </a>
            </div>
            <div>
              <div className="h-slate text-ink-dim">— PHONE</div>
              <a
                href="tel:+14030000000"
                className="block h-display text-ink hover:text-signal transition-colors mt-2"
                style={{ fontSize: "24px", fontWeight: 700 }}
              >
                +1 (403) 000 0000
              </a>
            </div>
            <div>
              <div className="h-slate text-ink-dim">— STUDIO</div>
              <div
                className="h-display text-ink mt-2"
                style={{ fontSize: "24px", fontWeight: 700 }}
              >
                217A 11 AVE SE, CALGARY
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="border-t-2 border-ink"
        >
          {FIELDS.map((f, i) => {
            const isFocused = focused === f.key;
            return (
              <div
                key={f.key}
                className="relative border-b border-rule py-6"
                onFocus={() => setFocused(f.key)}
                onBlur={() => setFocused(null)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6">
                  <label
                    htmlFor={f.key}
                    className={`h-slate whitespace-nowrap shrink-0 transition-colors ${
                      isFocused ? "text-signal" : "text-ink-dim"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} / {f.label}
                  </label>
                  {f.ta ? (
                    <textarea
                      id={f.key}
                      name={f.key}
                      rows={3}
                      className="flex-1 text-ink text-base md:text-lg resize-none w-full"
                      placeholder="A LOGLINE, A NAPKIN SKETCH IN WORDS"
                    />
                  ) : (
                    <input
                      id={f.key}
                      name={f.key}
                      type={f.type ?? "text"}
                      className="flex-1 text-ink text-base md:text-lg w-full"
                      placeholder="…"
                    />
                  )}
                </div>
              </div>
            );
          })}

          <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="h-slate text-ink-dim">
              {sent ? "— MESSAGE RECEIVED" : "— PRESS SEND WHEN READY"}
            </div>
            <button
              type="submit"
              className="group relative h-display text-ink hover:text-signal transition-colors self-start sm:self-auto"
              style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900 }}
            >
              <span className="relative">
                SEND.
                <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-current" />
              </span>
              <span className="inline-block ml-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
