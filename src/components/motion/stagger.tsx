"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
} from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

type SharedProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerGroup({ children, className }: SharedProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      variants={staggerContainer}
      viewport={{ amount: 0.15, once: true }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: SharedProps) {
  return (
    <motion.div className={cn(className)} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
