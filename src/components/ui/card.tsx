import type { HTMLAttributes } from "react";
import { softCardClassName } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        softCardClassName,
        "p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(62,102,112,0.14)] sm:p-8",
        className,
      )}
      {...props}
    />
  );
}
