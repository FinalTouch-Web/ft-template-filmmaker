"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { easeFilmic, easeSlate } from "@/lib/motion";
import { usrc } from "@/lib/unsplash";

export default function ProjectDetailClient({
  project: p,
  next,
}: {
  project: Project;
  next: Project;
}) {
  return (
    <main className="pt-32 pb-24 px-6 md:px-10 bg-paper">
      <div className="max-w-[1600px] mx-auto">
        {/* slate header */}
        <div className="border-t border-b border-rule py-6 flex flex-wrap items-center gap-6 justify-between">
          <Link href="/work" className="h-slate text-ink-dim hover:text-signal transition-colors">
            ← INDEX
          </Link>
          <span className="h-slate text-ink-dim">
            {p.year} · {p.format.toUpperCase()} · RUNTIME {p.runtime}
          </span>
        </div>

        {/* title block */}
        <div className="mt-16 grid md:grid-cols-[2fr_1fr] gap-12">
          <div>
            <div className="h-slate text-signal mb-8">
              CLIENT — {p.client.toUpperCase()}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: easeFilmic }}
              className="h-display text-ink break-words"
              style={{
                fontSize: "clamp(42px, 10.5vw, 200px)",
                fontWeight: 900,
                lineHeight: 0.9,
                overflowWrap: "anywhere",
              }}
            >
              {p.title.toUpperCase()}
              <span className="text-signal">.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="mt-10 max-w-2xl text-2xl md:text-3xl text-ink-dim leading-tight"
            >
              {p.logline}
            </motion.p>
          </div>
          <div className="md:pt-10">
            <div className="border-t-2 border-ink">
              {[
                ["DIRECTOR", p.director],
                ["ROLE", p.role],
                ["LOCATION", p.location],
                ["FORMAT", p.format],
                ["YEAR", p.year],
                ["RUNTIME", p.runtime],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between items-center py-4 border-b border-rule"
                >
                  <span className="h-slate text-ink-dim">{k}</span>
                  <span className="h-slate text-ink">{v?.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* hero still — letterboxed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: easeFilmic }}
          className="mt-16 md:mt-20 relative aspect-[2.39/1] border-2 border-ink overflow-hidden"
        >
          <img
            src={usrc(p.cover, 2400)}
            alt={p.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0.15)_0%,rgba(10,10,11,0.45)_100%)]" />
          <div className="absolute top-4 left-4 h-slate text-paper/90">
            {p.client.toUpperCase()} · {p.format.toUpperCase()}
          </div>
          <div className="absolute bottom-4 right-4 h-slate text-signal">{p.runtime}</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div              className="w-24 h-24 md:w-28 md:h-28 bg-signal hex flex items-center justify-center h-slate text-paper"
            >
              PLAY REEL
            </div>
          </div>
        </motion.div>

        {/* synopsis */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-[1fr_2fr] gap-12">
          <div className="h-slate text-ink-dim">— SYNOPSIS</div>
          <p
            className="h-display text-ink max-w-3xl break-words"
            style={{
              fontSize: "clamp(20px, 2.8vw, 42px)",
              lineHeight: 1.12,
              fontWeight: 700,
              overflowWrap: "anywhere",
            }}
          >
            {p.synopsis}
          </p>
        </div>

        {/* stills grid */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-center justify-between border-b border-rule pb-4">
            <span className="h-slate text-ink-dim">— STILLS</span>
            <span className="h-slate text-ink-dim">
              {p.stills.length.toString().padStart(2, "0")} FRAMES
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.stills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: easeFilmic }}
                className={`relative border border-rule aspect-[16/9] overflow-hidden bg-paper-2 ${
                  i % 3 === 0 ? "md:col-span-2 md:aspect-[2.39/1]" : ""
                }`}
              >
                <img
                  src={usrc(s.img, 1600)}
                  alt={s.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(10,10,11,0.6)_100%)]" />
                <div className="absolute top-3 left-3 h-slate text-paper/90">{s.label}</div>
                <div className="absolute bottom-3 left-3 right-3 h-slate text-paper/90">
                  {s.caption.toUpperCase()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* credits */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-[1fr_2fr] gap-12">
          <div className="h-slate text-ink-dim">— CREDITS</div>
          <div className="border-t-2 border-ink">
            {p.credits.map((c) => (
              <div
                key={c.role + c.name}
                className="flex justify-between items-center py-4 border-b border-rule"
              >
                <span className="h-slate text-ink-dim">{c.role}</span>
                <span
                  className="h-display text-ink"
                  style={{ fontSize: "18px", fontWeight: 700 }}
                >
                  {c.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* next project */}
        <div className="mt-32 border-t-2 border-ink pt-8">
          <div className="h-slate text-ink-dim mb-4">— UP NEXT</div>
          <Link href={`/work/${next.slug}`} className="group block">
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <div
                className="h-display text-ink group-hover:text-signal transition-colors duration-500 break-words"
                style={{
                  fontSize: "clamp(32px, 7vw, 120px)",
                  fontWeight: 900,
                  overflowWrap: "anywhere",
                }}
              >
                {next.title.toUpperCase()}
                <span className="text-signal">.</span>
              </div>
              <div className="h-slate text-ink-dim">
                {next.client.toUpperCase()} · {next.year} → PLAY
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
