import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/shared/section-shell";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";

export default function NotFound() {
  return (
    <SectionShell className="min-h-[65vh] place-content-center" tone="soft">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6e847d]">
          Page not found
        </span>
        <h1 className="mt-6 text-balance text-4xl font-semibold sm:text-5xl">
          This page is not available right now
        </h1>
        <p className="mt-5 text-pretty text-base leading-8 text-muted sm:text-lg">
          Let&apos;s head back to the VibeLife experience or continue the
          conversation directly on WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link className={buttonVariants()} href="/">
            Return Home
          </Link>
          <WhatsAppCta variant="ghost">Chat on WhatsApp</WhatsAppCta>
        </div>
      </div>
    </SectionShell>
  );
}
