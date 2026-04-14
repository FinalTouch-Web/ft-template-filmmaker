"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { label: "WORK", href: "/work", idx: "01" },
  { label: "ABOUT", href: "/about", idx: "02" },
  { label: "CONTACT", href: "/contact", idx: "03" },
];

export default function TopNav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > 120 && y > lastY) setHidden(true);
      else setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 pt-4 md:pt-6"
      >
        <div
          className={`flex items-center justify-between transition-colors duration-500 ${
            scrolled ? "bg-paper/90 backdrop-blur-md" : "bg-paper/85 backdrop-blur-sm"
          } px-4 py-3 border border-rule`}
        >
          <Link href="/" className="group flex items-center gap-3 md:gap-4 min-w-0">
            <span className="inline-block w-[10px] h-[10px] bg-signal hex shrink-0" />
            <span className="h-display text-ink text-[16px] md:text-[20px] leading-none font-black tracking-[-0.01em] truncate">
              LONGFRAME
            </span>
            <span className="h-slate text-ink-dim hidden lg:inline">
              EST. 2019 · CALGARY, AB
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const active =
                pathname === l.href ||
                (l.href !== "/" && pathname?.startsWith(l.href));
              return (
                <Link key={l.href} href={l.href} className="group relative py-2">
                  <span className="h-slate text-ink-dim mr-2">{l.idx}</span>
                  <span
                    className={`h-slate ${
                      active ? "text-ink" : "text-ink-dim"
                    } group-hover:text-ink transition-colors`}
                  >
                    {l.label}
                  </span>
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-signal origin-left transition-transform duration-500 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden h-slate text-ink"
            aria-label="Open menu"
          >
            MENU
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-paper md:hidden"
          >
            <div className="absolute inset-0 grain pointer-events-none" />
            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="flex items-center justify-between">
                <span className="h-display text-[22px] font-black">LONGFRAME</span>
                <button onClick={() => setOpen(false)} className="h-slate">
                  CLOSE
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                  >
                    <Link href={l.href} className="block">
                      <span className="h-slate text-signal">{l.idx}</span>
                      <div className="h-display text-[56px] sm:text-[72px] leading-[0.9] mt-2 font-black break-words">
                        {l.label}
                        <span className="text-signal">.</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="h-slate text-ink-dim">
                HELLO@LONGFRAME.STUDIO · +1 403 000 0000
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
