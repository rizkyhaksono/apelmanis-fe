import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import { ViewTransition } from "react"
import { Analytics } from "@vercel/analytics/next"
import clsx from "clsx"
import { siteConfig } from "@/config/site"
import { fontDisplay, fontSans } from "@/config/fonts"
import { Providers } from "./providers"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const ogImage = "/assets/gambar-7.jpeg"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: ogImage, width: 1200, height: 1600, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#eef0e6",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={clsx("min-h-svh bg-flesh font-sans text-body text-leaf", fontDisplay.variable, fontSans.variable)}>
        <Providers>
          <Navbar />
          <ViewTransition>
            <main>{children}</main>
          </ViewTransition>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
