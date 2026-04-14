"use client";

import { motion } from "framer-motion";
import { Rule } from "@/components/ui/rule";
import { easeFilmic } from "@/lib/motion";

const COLUMNS = [
  {
    num: "A",
    head: "DIRECTING",
    lines: [
      "Concept & treatment",
      "Pitch deck, in-voice",
      "Casting (non-actors & actors)",
      "Location scouting",
      "On-set direction",
      "Story supervision on edits",
    ],
  },
  {
    num: "B",
    head: "CINEMATOGRAPHY",
    lines: [
      "Alexa Mini LF · Master Primes",
      "Available-light work",
      "Documentary handheld",
      "Long-lens observational",
      "Drone when the film asks for it",
      "Expired 16mm when nobody asks",
    ],
  },
  {
    num: "C",
    head: "POST & FINISH",
    lines: [
      "Offline edit (Premiere / Resolve)",
      "Sound design & mix",
      "Color — node-based, by eye",
      "Titles & end slates",
      "Festival & broadcast deliverables",
      "Archiving we actually keep",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-paper-2">
      <Rule label="WHAT WE ACTUALLY DO" index="— 03" />

      <div className="max-w-[1600px] mx-auto mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeFilmic }}
          className="h-display text-ink max-w-[16ch] break-words"
          style={{
            fontSize: "clamp(34px, 7vw, 120px)",
            fontWeight: 900,
            overflowWrap: "anywhere",
          }}
        >
          WE DO THE WHOLE THING<span className="text-signal">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-xl text-ink-dim leading-relaxed"
        >
          From the first pitch deck to the final color pass. Three people, one
          camera, deliberate frames. Below is what that looks like when you
          hire us.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {COLUMNS.map((col, i) => (
            <motion.div
              key={col.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: easeFilmic, delay: i * 0.08 }}
              className="border-t-2 border-ink pt-6 min-w-0"
            >
              <div className="flex items-baseline gap-3 min-w-0">
                <span className="h-slate text-signal shrink-0">CH. {col.num}</span>
                <h3
                  className="h-display text-ink min-w-0 break-words"
                  style={{
                    fontSize: "clamp(20px, 1.9vw, 30px)",
                    fontWeight: 800,
                    overflowWrap: "break-word",
                  }}
                >
                  {col.head}
                </h3>
              </div>
              <ul className="mt-8 space-y-3">
                {col.lines.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-[8px] block w-[7px] h-[7px] bg-ink hex shrink-0" />
                    <span className="text-ink">{l}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
