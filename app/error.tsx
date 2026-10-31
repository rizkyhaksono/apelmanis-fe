"use client"

import { useEffect } from "react"
import { useTranslations } from "next-intl"
import { whatsappLink } from "@/config/site"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const t = useTranslations("error")

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="mx-auto max-w-[75rem] px-4 py-24 sm:px-6">
      <h1 className="load-rise font-display text-h1">{t("title")}</h1>
      <p className="load-rise mt-4 max-w-[34rem] text-moss [--i:1]">{t("description")}</p>
      <div className="load-rise mt-8 flex flex-wrap items-center gap-6 [--i:2]">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex h-12 items-center rounded-full bg-leaf px-6 font-medium text-paper transition-[scale] duration-200 motion-safe:active:scale-[0.97]"
        >
          {t("retry")}
        </button>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-grow pb-0.5">
          WhatsApp
        </a>
      </div>
    </section>
  )
}
