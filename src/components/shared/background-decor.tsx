import { cn } from "@/lib/utils";

type BackgroundDecorProps = {
  tone?: "default" | "leaf" | "teal" | "soft";
};

const toneMap: Record<NonNullable<BackgroundDecorProps["tone"]>, string> = {
  default:
    "from-[#9BC56A]/18 via-transparent to-[#456F78]/12",
  leaf: "from-[#9BC56A]/22 via-transparent to-[#B8C9A3]/16",
  teal: "from-[#456F78]/18 via-transparent to-[#3E6670]/12",
  soft: "from-white/65 via-transparent to-[#ECEDE8]/30",
};

export function BackgroundDecor({ tone = "default" }: BackgroundDecorProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div
        className={cn(
          "absolute left-[-8%] top-10 h-48 w-48 rounded-full bg-gradient-to-br blur-3xl sm:h-72 sm:w-72",
          toneMap[tone],
        )}
      />
      <div className="absolute right-[-10%] top-1/4 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85),rgba(255,255,255,0))] blur-3xl sm:h-80 sm:w-80" />
      <div className="section-mesh absolute inset-x-0 bottom-0 h-44 opacity-60" />
    </div>
  );
}
