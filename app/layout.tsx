import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/react";
import { fontPoppins } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontPoppins.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
            <Analytics />
            <footer className="w-full flex items-center justify-center py-3">
              <Link isExternal className="flex items-center gap-1 text-current" href="https://github.com/rizkyhaksono" title="rizkyhaksono">
                <p className="text-sm">Build by Rizky Haksono</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
