import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

type VariantOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.02em] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-white shadow-[0_16px_36px_rgba(69,111,120,0.24)] hover:-translate-y-0.5 hover:bg-teal-deep hover:shadow-[0_20px_42px_rgba(62,102,112,0.3)]",
  secondary:
    "bg-primary text-[#26433f] shadow-[0_16px_36px_rgba(155,197,106,0.2)] hover:-translate-y-0.5 hover:bg-primary-deep hover:text-white hover:shadow-[0_20px_42px_rgba(126,175,86,0.24)]",
  ghost:
    "border border-[#456F78]/15 bg-white/65 text-[#35525b] hover:-translate-y-0.5 hover:border-[#456F78]/30 hover:bg-white hover:shadow-[0_16px_34px_rgba(62,102,112,0.12)]",
  light:
    "bg-white text-[#35525b] shadow-[0_16px_36px_rgba(62,102,112,0.1)] hover:-translate-y-0.5 hover:bg-stone hover:shadow-[0_20px_42px_rgba(62,102,112,0.14)]",
};

const sizeClassNames: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs sm:text-sm",
  md: "h-12 px-5 text-sm sm:px-6",
  lg: "h-14 px-6 text-base sm:px-7",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: VariantOptions = {}) {
  return cn(baseClassName, variantClassNames[variant], sizeClassNames[size], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantOptions;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      type={type}
      {...props}
    />
  );
}
