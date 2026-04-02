import type { ReactNode } from "react";
import { BackgroundDecor } from "@/components/shared/background-decor";
import { PageContainer } from "@/components/layout/page-container";
import { sectionPaddingClassName } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  tone?: "default" | "leaf" | "teal" | "soft";
  className?: string;
  containerClassName?: string;
};

export function SectionShell({
  children,
  id,
  tone = "default",
  className,
  containerClassName,
}: SectionShellProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        sectionPaddingClassName,
        className,
      )}
      id={id}
    >
      <BackgroundDecor tone={tone} />
      <PageContainer className={cn("relative z-10", containerClassName)}>
        {children}
      </PageContainer>
    </section>
  );
}
