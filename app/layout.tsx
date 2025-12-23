import "@/styles/globals.css"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { Analytics } from "@vercel/analytics/react"
import { fontPoppins } from "@/config/fonts"
import { Providers } from "./providers"
import { Navbar } from "@/components/navbar"
import { Link } from "@nextui-org/link"
import clsx from "clsx"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

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
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontPoppins.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main>{children}</main>
            <Analytics />
            <footer className="w-full flex flex-col items-center justify-center py-6 mt-8">
              <div className="section-divider w-full max-w-4xl mb-6" />
              <Link isExternal className="flex items-center gap-2 text-current hover:text-primary transition-colors group" href="https://github.com/rizkyhaksono" title="rizkyhaksono">
                <span className="text-sm font-medium">Built with ❤️ by</span>
                <span className="text-sm font-semibold gradient-text group-hover:opacity-80 transition-opacity">Rizky Haksono</span>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
