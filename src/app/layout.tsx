import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LanguageProvider } from "@/components/providers/language-provider";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { site } from "@/data/site";
import "./globals.css";

const display = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline.en}`,
    template: `%s | ${site.name}`,
  },
  description: site.description.es,
  icons: {
    icon: "/images/brand/vibelife-logo-transparent.png",
  },
  openGraph: {
    title: "¿Cansada de intentar? Esto es diferente. — VibeLife",
    description: site.description.es,
    type: "website",
    siteName: site.name,
    images: [
      {
        url: "/images/brand/vibelife-logo-transparent.png",
        alt: `${site.name} logo`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col overflow-x-clip">
            <div data-site-header>
              <Header />
            </div>
            <main className="flex-1">{children}</main>
            <div data-site-footer>
              <Footer />
            </div>
            <div data-site-whatsapp>
              <FloatingWhatsApp />
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
