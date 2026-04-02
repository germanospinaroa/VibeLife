import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#4f6a63] shadow-[0_8px_20px_rgba(62,102,112,0.08)] backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}
