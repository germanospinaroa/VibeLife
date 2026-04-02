import type { Variants } from "framer-motion";

const ease = [0.21, 1, 0.35, 1] as const;

export function createFadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.72, ease },
    },
  };
}

export function createFade(delay = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay, duration: 0.64, ease },
    },
  };
}

export function createScale(delay = 0): Variants {
  return {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay, duration: 0.7, ease },
    },
  };
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem = createFadeUp();
