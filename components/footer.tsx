"use client"

import NextLink from "next/link"
import { useTranslations } from "next-intl"
import { siteConfig, whatsappLink } from "@/config/site"

export function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")

  return (
    <footer className="mt-20 border-t border-line md:mt-32">
      <div className="mx-auto grid max-w-[75rem] gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <p className="font-display text-h3">Apel Manis</p>
          <h2 className="mt-6 text-sm text-moss">{t("address")}</h2>
          <p className="mt-2 max-w-xs">{siteConfig.contact.address}</p>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-sm text-moss">{t("contact")}</h2>
          <ul className="mt-1">
            <li>
              <a className="link-grow inline-block py-2" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="link-grow inline-block py-2" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a className="link-grow inline-block py-2" href={siteConfig.contact.mapsUrl} target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label={t("pages")} className="md:col-span-3">
          <h2 className="text-sm text-moss">{t("pages")}</h2>
          <ul className="mt-1">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <NextLink className="link-grow inline-block py-2" href={item.href}>
                  {tNav(item.key)}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto flex max-w-[75rem] flex-wrap justify-between gap-x-4 gap-y-1 px-4 pb-10 text-sm text-moss sm:px-6">
        <p>© {new Date().getFullYear()} Apel Manis Kost</p>
        <p>
          {t("credit")}{" "}
          <a className="link-grow text-leaf" href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
            Rizky Haksono
          </a>
        </p>
      </div>
    </footer>
  )
}
