"use client";

import { motion } from "framer-motion";
import { Rule } from "@/components/ui/rule";
import { IMG, usrc } from "@/lib/unsplash";

const GEAR = [
  { name: "Arri Alexa Mini LF", tag: "OWNED" },
  { name: "Arri Master Primes (16/25/32/50/75)", tag: "OWNED" },
  { name: "DZO Vespid macro 90mm", tag: "OWNED" },
  { name: "Angénieux EZ-1 zoom", tag: "RENTED" },
  { name: "DJI Ronin 2 + Mōvi Pro", tag: "OWNED" },
  { name: "Aputure 600x / 300x kit", tag: "OWNED" },
  { name: "Astera Titan Tubes x 8", tag: "OWNED" },
  { name: "Sound Devices 833 · Schoeps CMIT", tag: "OWNED" },
  { name: "DJI Inspire 3 · X9-8K", tag: "RENTED" },
  { name: "Bolex H16 · expired 16mm stock", tag: "ANTIQUE" },
];

const CREW = [
  {
    name: "MARA ODUYA",
    role: "Director / DP",
    img: IMG.PORTRAIT_2,
    quote:
      "I like films where you can tell a real person held the camera, and a real person was in front of it.",
  },
  {
    name: "CAM TRINH",
    role: "Editor / Post Lead",
    img: IMG.PORTRAIT_1,
    quote:
      "The cut is where the film actually gets written. Everything before is research.",
  },
  {
    name: "JULES PEREIRA",
    role: "Sound / 1st AC",
    img: IMG.PORTRAIT_3,
    quote:
      "If the room sounds right, you're already halfway home. Most sets don't care. We care.",
  },
];

export default function CallSheet() {
  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-paper-2">
      <Rule label="KIT & CREW" index="— 05" />

      <div className="max-w-[1600px] mx-auto mt-12">
        <div className="flex items-start justify-between mb-10 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-display text-ink break-words"
            style={{
              fontSize: "clamp(40px, 8vw, 140px)",
              fontWeight: 900,
              overflowWrap: "anywhere",
            }}
          >
            CALL SHEET<span className="text-signal">.</span>
          </motion.h2>
          <div className="text-right h-slate text-ink-dim hidden md:block leading-[1.6]">
            DAY 01 / 01<br />
            CALL 06:15 · WRAP 19:00
          </div>
        </div>

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12">
          {/* gear column */}
          <div className="border-t-2 border-ink">
            <div className="flex items-center justify-between py-3 border-b border-rule">
              <span className="h-slate text-ink-dim">— CAMERA, GRIP, SOUND</span>
              <span className="h-slate text-ink-dim">STATUS</span>
            </div>
            {GEAR.map((g, i) => (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.6 }}
                className="flex justify-between items-center gap-4 py-4 border-b border-rule"
              >
                <span className="text-ink text-xs sm:text-sm min-w-0 break-words">
                  {g.name}
                </span>
                <span
                  className={`h-slate ${
                    g.tag === "OWNED"
                      ? "text-signal"
                      : g.tag === "ANTIQUE"
                      ? "text-signal-2"
                      : "text-ink-dim"
                  }`}
                >
                  {g.tag}
                </span>
              </motion.div>
            ))}
          </div>

          {/* crew column */}
          <div className="border-t-2 border-ink">
            <div className="flex items-center justify-between py-3 border-b border-rule">
              <span className="h-slate text-ink-dim">— CREW</span>
              <span className="h-slate text-ink-dim">03 / 03</span>
            </div>
            <div className="space-y-10 pt-8">
              {CREW.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="grid grid-cols-[96px_1fr] gap-6"
                >
                  <div className="relative aspect-square border border-rule bg-paper-3 overflow-hidden">
                    <img
                      src={usrc(c.img, 400, 400)}
                      alt={c.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.1]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(10,10,11,0.35)_100%)]" />
                  </div>
                  <div>
                    <div
                      className="h-display text-ink"
                      style={{ fontSize: "28px", fontWeight: 900 }}
                    >
                      {c.name}
                    </div>
                    <div className="h-slate text-signal mt-1">
                      {c.role.toUpperCase()}
                    </div>
                    <div className="mt-3 text-sm text-ink-dim leading-relaxed">
                      “{c.quote}”
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
