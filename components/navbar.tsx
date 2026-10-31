"use client"

import { useEffect, useState } from "react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { siteConfig, whatsappLink } from "@/config/site"
import { LocaleSwitch } from "@/components/locale-switch"
import { WhatsAppIcon } from "@/components/icons"

export const Navbar = () => {
  const pathName = usePathname()
  const t = useTranslations("nav")
  const tHome = useTranslations("home")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const links = siteConfig.navItems.map((item) => (
    <NextLink
      key={item.href}
      href={item.href}
      onClick={() => setOpen(false)}
      aria-current={pathName === item.href ? "page" : undefined}
      className={clsx("link-grow pb-0.5 transition-colors duration-200", pathName === item.href ? "text-leaf" : "text-moss hover:text-leaf")}
    >
      {t(item.key)}
    </NextLink>
  ))

  return (
    <header className="header-fill sticky top-0 z-40 bg-paper/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[75rem] items-center justify-between gap-6 px-4 sm:px-6">
        <NextLink href="/" className="py-2 font-display text-[1.375rem] leading-none text-leaf" onClick={() => setOpen(false)}>
          Apel Manis
        </NextLink>

        <nav aria-label="Utama" className="hidden items-center gap-8 md:flex">
          {links}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitch />
          <a
            href={whatsappLink(tHome("whatsapp_prefill"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-skin px-4 text-sm font-medium text-paper transition-[scale,background-color] duration-200 hover:bg-skin/90 motion-safe:active:scale-[0.97]"
          >
            <WhatsAppIcon size={16} />
            {t("whatsapp")}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t("close_menu") : t("menu")}
          className="-mr-2 grid size-10 place-items-center rounded-full text-leaf md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-line px-4 pb-6 pt-4 md:hidden">
        <nav aria-label="Utama" className="flex flex-col items-start gap-4 text-lead">
          {links}
        </nav>
        <div className="mt-6 flex items-center justify-between">
          <LocaleSwitch />
          <a
            href={whatsappLink(tHome("whatsapp_prefill"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-skin px-5 text-sm font-medium text-paper motion-safe:active:scale-[0.97] transition-[scale]"
          >
            <WhatsAppIcon size={16} />
            {t("whatsapp")}
          </a>
        </div>
      </div>
    </header>
  )
}
