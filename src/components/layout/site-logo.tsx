import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
};

export function SiteLogo({ className, imageClassName }: SiteLogoProps) {
  return (
    <Link
      aria-label={site.name}
      className={cn("inline-flex items-center", className)}
      href="/"
    >
      <Image
        alt={`${site.name} logo`}
        className={cn("h-auto w-[72px] sm:w-[80px]", imageClassName)}
        height={34}
        priority
        src="/images/brand/vibelife-logo-transparent.png"
        width={80}
      />
    </Link>
  );
}
