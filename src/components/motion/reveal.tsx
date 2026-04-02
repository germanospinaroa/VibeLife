"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  createFade,
  createFadeUp,
  createScale,
} from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  preset?: "fade" | "fade-up" | "scale";
};

export function Reveal({
  children,
  className,
  delay = 0,
  preset = "fade-up",
}: RevealProps) {
  const variants =
    preset === "fade"
      ? createFade(delay)
      : preset === "scale"
        ? createScale(delay)
        : createFadeUp(delay);

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      variants={variants}
      viewport={{ amount: 0.2, once: true }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
