"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { Rule } from "@/components/ui/rule";
import { easeFilmic } from "@/lib/motion";
import { usrc } from "@/lib/unsplash";

export default function ReelIndex({
  limit,
  title = "SELECTED WORK",
  index = "02",
}: {
  limit?: number;
  title?: string;
  index?: string;
}) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-paper">
      <Rule label={title} index={`— ${index}`} />

      <div className="max-w-[1600px] mx-auto mt-8 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <div className="md:sticky md:top-32 md:self-start">
          <h2
            className="h-display text-ink"
            style={{
              fontSize: "clamp(36px, 5.2vw, 80px)",
              fontWeight: 900,
            }}
          >
            SELECTED<br />
            WORK<span className="text-signal">.</span>
          </h2>
          <p className="mt-8 text-ink-dim max-w-sm leading-relaxed">
            A reel index, by year. Each frame below has a story and a client who
            let us make it.
          </p>
          <Link
            href="/work"
            className="mt-10 inline-flex items-center gap-3 h-slate text-ink border-b-2 border-ink pb-2 hover:text-signal hover:border-signal transition-colors"
          >
            FULL INDEX
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="flex flex-col">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: easeFilmic, delay: i * 0.05 }}
              className="group border-t border-rule last:border-b"
            >
              <Link
                href={`/work/${p.slug}`}
className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[60px_1fr_auto] items-center gap-4 md:gap-6 py-6 md:py-8"
              >
                <span className="h-slate text-ink-dim">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <div className="flex flex-col min-w-0">
                  <span
                    className="h-display text-ink group-hover:text-signal transition-colors duration-500 break-words"
                    style={{
                      fontSize: "clamp(22px, 4vw, 68px)",
                      fontWeight: 800,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {p.title.toUpperCase()}
                  </span>
                  <span className="h-slate text-ink-dim mt-3">
                    {p.client.toUpperCase()} · {p.format.toUpperCase()} · {p.runtime}
                  </span>
                </div>
                <span className="h-slate text-ink-dim group-hover:text-signal transition-colors">
                  {p.year}
                </span>
              </Link>

              <div className="overflow-hidden max-h-0 group-hover:max-h-[400px] transition-[max-height] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="grid grid-cols-3 gap-3 pb-6 pl-[52px] md:pl-[84px]">
                  {p.stills.slice(0, 3).map((s, si) => (
                    <div
                      key={si}
                      className="relative aspect-[4/3] border border-rule bg-paper-2 overflow-hidden"
                    >
                      <img
                        src={usrc(s.img, 800)}
                        alt={s.caption}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
