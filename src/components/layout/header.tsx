"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { PageContainer } from "@/components/layout/page-container";
import { SiteLogo } from "@/components/layout/site-logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { useLanguage } from "@/components/providers/language-provider";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { navigation } from "@/data/navigation";
import { localize } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function isActiveLink(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href.includes("#products")) {
    return pathname.startsWith("/products");
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-1">
      <PageContainer className="max-w-[84rem] px-0">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border transition duration-300",
            isScrolled
              ? "min-h-[50px] border-white/72 bg-white/90 px-1.5 py-0 shadow-[0_5px_12px_rgba(62,102,112,0.045)] backdrop-blur-[3px] sm:min-h-[52px] md:min-h-[46px] md:px-1.5 lg:min-h-[46px]"
              : "min-h-[54px] border-white/64 bg-white/84 px-1.5 py-0 shadow-[0_4px_10px_rgba(62,102,112,0.03)] backdrop-blur-[2px] sm:min-h-[56px] md:min-h-[48px] md:px-1.5 lg:min-h-[48px]",
          )}
        >
          <SiteLogo className="rounded-full px-0.5 py-0" />

          <nav className="hidden items-center gap-0.5 md:flex">
            {navigation.map((item) => (
              <Link
                className={cn(
                  "rounded-full px-2 py-0.5 text-[12px] font-semibold text-[#48625c] transition hover:bg-white hover:text-[#2f4541]",
                  isActiveLink(pathname, item.href) &&
                    "bg-white text-[#2f4541] shadow-[0_5px_12px_rgba(62,102,112,0.07)]",
                )}
                href={item.href}
                key={item.href}
              >
                {localize(item.label, language)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-1 md:flex">
            <LanguageToggle />
            <WhatsAppCta className="h-7 rounded-full px-2.5 text-[10px]" size="sm" />
          </div>

          <MobileMenu />
        </div>
      </PageContainer>
    </header>
  );
}
