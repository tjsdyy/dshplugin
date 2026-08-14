import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dshplugin.io"),
  title: { default: "DeepSeek Harness Plugin Marketplace | DSH Market", template: "%s | DSH Market" },
  description: "Discover 154 DeepSeek Harness plugins for tools, UI, memory, automation and integrations. Browse source code and copy ready-to-run DSH install commands.",
  keywords: ["deepseek harness plugin", "deepseek harness plugins", "DSH plugin", "DeepSeek plugin marketplace", "dsh plugin add"],
  authors: [{ name: "DSH Market", url: "https://github.com/tjsdyy/dshplugin" }],
  creator: "DSH Market",
  publisher: "DSH Market",
  category: "Developer Tools",
  alternates: { canonical: "/", languages: { "en": "/", "zh-CN": "/zh/", "x-default": "/" } },
  openGraph: { type: "website", locale: "en_US", alternateLocale: ["zh_CN"], url: "/", siteName: "DSH Market", title: "DeepSeek Harness Plugin Marketplace", description: "Search and install 154 community-built DeepSeek Harness plugins." },
  twitter: { card: "summary", title: "DeepSeek Harness Plugin Marketplace", description: "Search and install 154 community-built DeepSeek Harness plugins." },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
