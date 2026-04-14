import type { Variants, Transition } from "framer-motion";

export const easeFilmic = [0.16, 1, 0.3, 1] as const;
export const easeSlate = [0.7, 0, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeFilmic },
  },
};

export const lineClipReveal: Variants = {
  hidden: { y: "110%" },
  show: (i: number = 0) => ({
    y: "0%",
    transition: { duration: 0.9, ease: easeFilmic, delay: 0.1 + i * 0.12 },
  }),
};

export const stagger = (delay = 0.08): Transition => ({
  staggerChildren: delay,
});

export const slateWipe: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: easeSlate },
  },
};
