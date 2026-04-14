"use client";

import { motion } from "framer-motion";
import { Timecode } from "./timecode";
import { easeFilmic, easeSlate } from "@/lib/motion";
import { IMG, usrc } from "@/lib/unsplash";

const LINES = ["WE SHOOT", "STORIES", "THAT HOLD."];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-paper grain">
      {/* letterbox bars — paper matte frame, not black */}
      <motion.div
        initial={{ height: "50%" }}
        animate={{ height: "11%" }}
        transition={{ delay: 0.3, duration: 0.9, ease: easeSlate }}
        className="absolute top-0 left-0 right-0 bg-paper z-20 border-b border-rule"
      />
      <motion.div
        initial={{ height: "50%" }}
        animate={{ height: "7%" }}
        transition={{ delay: 0.3, duration: 0.9, ease: easeSlate }}
        className="absolute bottom-0 left-0 right-0 bg-paper z-20 border-t border-rule"
      />

      {/* hero reel plate — replace <img> with a <video> for client's looping reel */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 1.6, ease: easeFilmic }}
        className="absolute inset-0 z-10"
      >
        <img
          src={usrc(IMG.HERO_REEL, 2400)}
          alt="Longframe hero reel"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(0.35) contrast(1.02) brightness(1.05)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(241,237,227,0.75)_0%,rgba(241,237,227,0.2)_35%,rgba(241,237,227,0.25)_65%,rgba(241,237,227,0.85)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(217,56,21,0.14),transparent_55%)]" />
      </motion.div>

      {/* HUD top */}
      <div className="absolute top-[13%] left-0 right-0 z-30 px-5 md:px-14 flex justify-between items-start gap-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col gap-1"
        >
          <div className="h-slate text-ink-dim flex items-center gap-2">
            <span className="inline-block w-[7px] h-[7px] bg-signal hex" />
            REC
          </div>
          <div className="h-slate mt-2">
            <Timecode />
          </div>
          <div className="h-slate text-ink-dim mt-1">48.000 KHZ · 23.976</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-right flex flex-col gap-1"
        >
          <div className="h-slate text-ink-dim">SCENE 01 / TAKE 04</div>
          <div className="h-slate text-ink mt-1">INT. STUDIO — DAY</div>
          <div className="h-slate text-signal mt-1">ROLL A · MAG 003</div>
        </motion.div>
      </div>

      {/* headline block */}
      <div className="relative z-30 min-h-[100svh] flex items-end pb-[11%] sm:pb-[10%] px-5 md:px-14">
        <div className="max-w-[1600px] w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 bg-paper/85 backdrop-blur-sm border border-rule px-3 py-1.5"
          >
            <span className="w-[7px] h-[7px] bg-signal hex" />
            <span className="h-slate text-ink">— 00 / A CALGARY FILM CREW</span>
          </motion.div>

          <h1
            className="h-display text-ink break-words"
            style={{
              fontSize: "clamp(44px, 13vw, 210px)",
              fontWeight: 900,
              lineHeight: 0.92,
              overflowWrap: "anywhere",
            }}
          >
            {LINES.map((line, i) => (
              <span key={i} className="block line-clip">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: 1.3 + i * 0.12,
                    duration: 1.0,
                    ease: easeFilmic,
                  }}
                  className="block"
                >
                  {line.includes("HOLD") ? (
                    <>
                      THAT HOLD<span className="text-signal">.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.9, ease: easeFilmic }}
            className="mt-8 max-w-xl text-ink text-base md:text-lg leading-relaxed bg-paper/85 backdrop-blur-sm border border-rule p-5 md:p-6"
          >
            An independent production company based in Calgary, Alberta. We
            partner with brands, agencies, and broadcasters on commercial,
            documentary, and narrative work — directed, shot, and finished by
            the same team from first frame to final delivery.
          </motion.p>
        </div>
      </div>

      {/* bottom production strip — sits inside the bottom letterbox (7% tall) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-[7%] z-30 px-5 md:px-14 flex items-center justify-between gap-4 md:gap-8"
      >
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <div className="w-[7px] h-[7px] bg-signal hex animate-pulse shrink-0" />
          <span className="h-slate text-ink-dim truncate">SCROLL TO CONTINUE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 md:gap-8 h-slate text-ink-dim">
          <span>LENS 32MM · T1.9</span>
          <span className="hidden md:inline">MAG 003 · ROLL A</span>
          <span className="text-signal">ALEXA MINI LF</span>
        </div>
        <div className="h-slate text-ink-dim hidden md:block">48.000 KHZ · 23.976</div>
      </motion.div>
    </section>
  );
}
