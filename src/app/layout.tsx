import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { pt } from "@/dictionaries/pt";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: pt.meta.title,
  description: pt.meta.description,
  openGraph: {
    title: pt.meta.title,
    description: pt.meta.description,
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
  },
};

export const viewport: Viewport = { themeColor: "#09090b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
