import type { ReactNode } from "react";
import { pageContainerClassName } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return <div className={cn(pageContainerClassName, className)}>{children}</div>;
}
