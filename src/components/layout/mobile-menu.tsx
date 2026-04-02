"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { useLanguage } from "@/components/providers/language-provider";
import { navigation } from "@/data/navigation";
import { localize } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";

function isActiveLink(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href.includes("#products")) {
    return pathname.startsWith("/products");
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (!open) {
      return undefined;
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <Button
        aria-expanded={open}
        aria-label={localize(
          open
            ? { es: "Cerrar menú de navegación", en: "Close navigation menu" }
            : { es: "Abrir menú de navegación", en: "Open navigation menu" },
          language,
        )}
        className={cn(
          "h-9 w-9 rounded-full border px-0 shadow-[0_5px_12px_rgba(62,102,112,0.04)] transition",
          open
            ? "border-[#35525b]/12 bg-[#35525b] text-white hover:bg-[#2f4c53]"
            : "border-white/60 bg-white/76 text-[#35525b] hover:bg-white",
        )}
        onClick={() => setOpen((current) => !current)}
        variant="ghost"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-[#eef4ef]/72 px-3 pb-6 pt-20 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mx-auto max-w-sm"
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="surface-panel rounded-[28px] p-4 shadow-[0_18px_40px_rgba(62,102,112,0.12)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <LanguageToggle />
                  <Button
                    aria-label={localize(
                      {
                        es: "Cerrar menú",
                        en: "Close menu",
                      },
                      language,
                    )}
                    className="h-9 w-9 rounded-[14px] border border-[#35525b]/10 bg-white text-[#35525b] shadow-none hover:bg-[#f5f8f7]"
                    onClick={() => setOpen(false)}
                    type="button"
                    variant="ghost"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <nav>
                  <div className="space-y-1.5">
                    {navigation.map((item) => (
                      <Link
                        className={cn(
                          "block rounded-[18px] px-4 py-3 text-base font-semibold transition",
                          isActiveLink(pathname, item.href)
                            ? "bg-[#456F78] text-white"
                            : "text-[#35525b] hover:bg-white/82",
                        )}
                        href={item.href}
                        key={item.href}
                        onClick={() => setOpen(false)}
                      >
                        {localize(item.label, language)}
                      </Link>
                    ))}
                  </div>
                </nav>

                <div className="mt-5 space-y-3">
                  <WhatsAppCta className="w-full justify-center rounded-[18px]" />
                  <p className="px-1 text-sm leading-6 text-muted">
                    {localize(
                      {
                        es: "Bienestar natural, opciones claras y atención directa por WhatsApp.",
                        en: "Natural wellness, clear options and direct guidance through WhatsApp.",
                      },
                      language,
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
