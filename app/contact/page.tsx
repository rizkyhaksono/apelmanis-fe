"use client"

import { useTranslations } from "next-intl"
import { WhatsAppIcon } from "@/components/icons"
import { siteConfig, whatsappLink } from "@/config/site"

const field =
  "mt-2 w-full rounded-lg bg-paper px-4 shadow-[inset_0_0_0_1px_var(--color-line)] transition-shadow duration-200 placeholder:text-moss/80 focus:shadow-[inset_0_0_0_1px_var(--color-leaf)] focus:outline-none focus-visible:outline-2 focus-visible:outline-skin"

export default function ContactPage() {
  const t = useTranslations("contact")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const text = t("prefill", { name: String(data.get("name")).trim(), message: String(data.get("message")).trim() })
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer")
  }

  return (
    <div className="mx-auto grid max-w-[75rem] gap-12 px-4 pt-10 sm:px-6 md:pt-16 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <h1 className="load-rise font-display text-h1">{t("title")}</h1>
        <p className="load-rise mt-4 text-lead text-moss [--i:1]">{t("description")}</p>

        <dl className="load-rise mt-12 [--i:2]">
          <div className="rule-row py-4">
            <dt className="text-sm text-moss">{t("whatsapp")}</dt>
            <dd className="mt-1">
              <a className="link-grow" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                {siteConfig.contact.phoneDisplay}
              </a>
            </dd>
          </div>
          <div className="rule-row py-4">
            <dt className="text-sm text-moss">{t("email")}</dt>
            <dd className="mt-1">
              <a className="link-grow" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </dd>
          </div>
          <div className="rule-row py-4">
            <dt className="text-sm text-moss">{t("address")}</dt>
            <dd className="mt-1">
              <a className="link-grow" href={siteConfig.contact.mapsUrl} target="_blank" rel="noopener noreferrer">
                {siteConfig.contact.address}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <form onSubmit={onSubmit} className="load-rise self-start rounded-[12px] bg-paper/60 p-6 shadow-[inset_0_0_0_1px_var(--color-line)] [--i:3] sm:p-8 lg:col-span-6 lg:col-start-7">
        <h2 className="font-display text-h3">{t("form_title")}</h2>

        <label className="mt-6 block">
          <span className="text-sm">{t("name")}</span>
          <input name="name" required autoComplete="name" className={`${field} h-12`} />
        </label>

        <label className="mt-5 block">
          <span className="text-sm">{t("message")}</span>
          <textarea name="message" required rows={5} placeholder={t("message_placeholder")} className={`${field} resize-y py-3`} />
        </label>

        <button
          type="submit"
          className="mt-6 inline-flex h-12 items-center gap-2.5 rounded-full bg-skin px-6 font-medium text-paper transition-[scale,background-color] duration-200 hover:bg-skin/90 motion-safe:active:scale-[0.97]"
        >
          <WhatsAppIcon size={18} />
          {t("submit")}
        </button>
        <p className="mt-3 text-sm text-moss">{t("form_note")}</p>
      </form>
    </div>
  )
}
