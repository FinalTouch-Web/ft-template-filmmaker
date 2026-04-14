"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { easeFilmic } from "@/lib/motion";

export default function WorkIndex() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-10 bg-paper">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-baseline justify-between border-b border-rule pb-6">
          <span className="h-slate text-ink-dim">— WORK / FULL INDEX</span>
          <span className="h-slate text-ink-dim">
            {projects.length.toString().padStart(2, "0")} PROJECTS
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeFilmic }}
          className="h-display text-ink mt-10 break-words"
          style={{
            fontSize: "clamp(52px, 15vw, 240px)",
            fontWeight: 900,
            lineHeight: 0.88,
            overflowWrap: "anywhere",
          }}
        >
          EVERY<br />
          FRAME<br />
          WE'VE KEPT<span className="text-signal">.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 max-w-xl text-ink-dim leading-relaxed"
        >
          This is the full reel, from oldest surviving project to newest. Nothing
          pruned to make us look more consistent than we are.
        </motion.p>

        <div className="mt-24 border-t-2 border-ink">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: easeFilmic }}
              className="group border-b border-rule"
            >
              <Link
                href={`/work/${p.slug}`}
className="grid grid-cols-[60px_1fr] md:grid-cols-[60px_1.3fr_1fr_auto] gap-4 md:gap-8 items-center py-8 md:py-10"
              >
                <span className="h-slate text-ink-dim">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <div
                    className="h-display text-ink group-hover:text-signal transition-colors duration-500 break-words"
                    style={{
                      fontSize: "clamp(28px, 5.5vw, 92px)",
                      fontWeight: 900,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {p.title.toUpperCase()}
                  </div>
                  <div className="text-sm text-ink-dim mt-3 max-w-xl leading-relaxed">
                    {p.logline}
                  </div>
                </div>
                <div className="hidden md:block h-slate text-ink-dim leading-[1.8]">
                  <div>{p.client.toUpperCase()}</div>
                  <div>{p.format.toUpperCase()}</div>
                  <div>{p.role.toUpperCase()}</div>
                </div>
                <div className="hidden md:block h-slate text-signal text-right leading-[1.8]">
                  {p.year}
                  <div className="text-ink-dim mt-1">{p.runtime}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
