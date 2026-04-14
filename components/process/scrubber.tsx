"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rule } from "@/components/ui/rule";

const STAGES = [
  {
    code: "01",
    name: "PREP",
    head: "PREP",
    body: "A conversation, then a treatment. We send one pitch deck, not three. Scout, shot-list, and a cost estimate that tells the truth.",
    meta: "2–4 WEEKS",
  },
  {
    code: "02",
    name: "SHOOT",
    head: "SHOOT",
    body: "Small crew, long days, no filler. We run a tight set — you can come, you don't have to. The footage comes back cataloged same-night.",
    meta: "1–6 DAYS",
  },
  {
    code: "03",
    name: "CUT",
    head: "CUT",
    body: "Offline edit with two review rounds built in. You'll see a rough within a week of wrap. We don't ghost between cuts.",
    meta: "2–6 WEEKS",
  },
  {
    code: "04",
    name: "DELIVER",
    head: "DELIVER",
    body: "Sound mix, color, titles, and whatever deliverables your broadcaster, festival, or agency needs. Archive goes to cold storage we keep for seven years.",
    meta: "1–2 WEEKS",
  },
];

export default function ProcessScrubber() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const width = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative px-6 md:px-10 py-24 md:py-32 bg-paper">
      <Rule label="HOW A SHOOT GOES" index="— 04" />

      <div className="max-w-[1600px] mx-auto mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-display text-ink max-w-[14ch] break-words"
          style={{
            fontSize: "clamp(34px, 7vw, 120px)",
            fontWeight: 900,
            overflowWrap: "anywhere",
          }}
        >
          FOUR STAGES. NO SURPRISES<span className="text-signal">.</span>
        </motion.h2>

        {/* scrubber bar */}
        <div className="mt-20 relative">
          <div className="h-[2px] bg-rule relative">
            <motion.div
              style={{ width }}
              className="absolute left-0 top-0 h-[2px] bg-signal"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {STAGES.map((s) => (
              <div key={s.code} className="flex flex-col items-start">
                <div className="w-[2px] h-4 bg-ink -mt-[22px] mb-3" />
                <span className="h-slate text-signal">{s.code}</span>
                <span className="h-slate text-ink-dim mt-1">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* stage panels */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {STAGES.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="border-t-2 border-ink pt-6"
            >
              <div className="h-slate text-ink-dim">
                {s.code} / {s.name}
              </div>
              <h3
                className="h-display text-ink mt-4"
                style={{ fontSize: "clamp(30px, 3vw, 52px)", fontWeight: 900 }}
              >
                {s.head}
              </h3>
              <p className="mt-4 text-sm text-ink leading-relaxed">{s.body}</p>
              <div className="mt-6 h-slate text-signal">{s.meta}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
