"use client";

import { motion } from "framer-motion";
import CallSheet from "@/components/gear/call-sheet";
import ProcessScrubber from "@/components/process/scrubber";
import PullQuote from "@/components/testimonials/pull-quote";
import { easeFilmic } from "@/lib/motion";
import { IMG, usrc } from "@/lib/unsplash";

export default function AboutPage() {
  return (
    <main className="bg-paper">
      <section className="relative pt-32 pb-20 px-6 md:px-10 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="border-b border-rule pb-6 flex justify-between">
            <span className="h-slate text-ink-dim">— ABOUT / THE CREW</span>
            <span className="h-slate text-ink-dim">EST. 2019</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeFilmic }}
            className="h-display text-ink mt-12 md:mt-16 max-w-[16ch] break-words"
            style={{
              fontSize: "clamp(40px, 10.5vw, 190px)",
              fontWeight: 900,
              lineHeight: 0.92,
              overflowWrap: "anywhere",
            }}
          >
            THREE PEOPLE. ONE CAMERA. DELIBERATE FRAMES<span className="text-signal">.</span>
          </motion.h1>

          <div className="mt-20 grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-start">
            <div>
              <div className="h-slate text-ink-dim mb-8">— WHO WE ARE</div>
              <div className="space-y-6 max-w-2xl text-ink text-base md:text-lg leading-relaxed">
                <p>
                  Longframe is a director-led production company based in
                  Calgary, Alberta. Founded in 2019, we partner with brands,
                  agencies, and broadcasters on commercials, documentaries,
                  and narrative work across Western Canada and beyond.
                </p>
                <p>
                  Every project is handled in-house from concept to final
                  delivery. We bring our own Alexa Mini LF package, sound kit,
                  and lighting — the same small team is on the floor during
                  prep, principal, and post, which keeps the creative intent
                  intact from the first treatment to the final color pass.
                </p>
                <p>
                  We take on a limited number of projects each year so the
                  work can be treated with the attention it deserves. If
                  you're looking for a production partner rather than a
                  vendor, we should talk.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] md:aspect-[3/4] border-2 border-ink overflow-hidden bg-paper-2 md:sticky md:top-32">
              <img
                src={usrc(IMG.HERO_REEL, 1200)}
                alt="Longframe crew at work"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "grayscale(0.25) contrast(1.05)" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(10,10,11,0.45)_100%)]" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-2 bg-paper/85 backdrop-blur-sm border border-rule px-3 py-1.5">
                  <span className="w-[7px] h-[7px] bg-signal hex" />
                  <span className="h-slate text-ink">— BEHIND THE CAMERA</span>
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <span className="bg-paper/85 backdrop-blur-sm border border-rule px-3 py-1.5 h-slate text-ink">
                  LONGFRAME STUDIO
                </span>
                <span className="bg-paper/85 backdrop-blur-sm border border-rule px-3 py-1.5 h-slate text-signal">
                  CALGARY, AB
                </span>
              </div>
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {[
              { n: "06", l: "Years working" },
              { n: "48", l: "Projects shipped" },
              { n: "01", l: "Camera we own" },
            ].map((s) => (
              <div key={s.n} className="border-t-2 border-ink pt-6">
                <div
                  className="h-display text-signal leading-none"
                  style={{ fontSize: "clamp(72px, 11vw, 180px)", fontWeight: 900 }}
                >
                  {s.n}
                </div>
                <div className="h-slate text-ink-dim mt-4">{s.l.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessScrubber />
      <CallSheet />
      <PullQuote />
    </main>
  );
}
