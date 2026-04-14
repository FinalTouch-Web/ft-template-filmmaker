"use client";

import { motion } from "framer-motion";
import StartProject from "@/components/contact/start-project";
import { easeFilmic } from "@/lib/motion";

export default function ContactPage() {
  return (
    <main className="pt-32 bg-paper">
      <section className="px-6 md:px-10 pb-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="border-b border-rule pb-6 flex justify-between">
            <span className="h-slate text-ink-dim">— CONTACT / NEW WORK</span>
            <span className="h-slate text-signal">ACCEPTING Q3 2026 BOOKINGS</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeFilmic }}
            className="h-display text-ink mt-12 md:mt-16 break-words"
            style={{
              fontSize: "clamp(44px, 12vw, 220px)",
              fontWeight: 900,
              lineHeight: 0.9,
              overflowWrap: "anywhere",
            }}
          >
            START THE<br />
            CONVERSATION<span className="text-signal">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-10 max-w-2xl text-xl md:text-2xl text-ink-dim leading-snug"
          >
            A paragraph is enough to start. We'll take it from there, or we'll
            tell you honestly if we're the wrong shop for it.
          </motion.p>
        </div>
      </section>

      <StartProject minimal />
    </main>
  );
}
