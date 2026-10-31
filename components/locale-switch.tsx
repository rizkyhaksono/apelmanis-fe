"use client"

import clsx from "clsx"
import { useTranslations } from "next-intl"
import { useLocale } from "@/app/providers"

const locales = ["id", "en"] as const

export function LocaleSwitch() {
  const { locale, setLocale } = useLocale()
  const t = useTranslations("nav")

  return (
    <div role="group" aria-label={t("language")} className="flex items-center text-sm">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={locale === l}
          onClick={() => setLocale(l)}
          className={clsx("grid size-10 place-items-center rounded-full uppercase transition-colors duration-200", locale === l ? "text-leaf" : "text-moss hover:text-leaf")}
        >
          <span className={clsx(locale === l && "underline decoration-1 underline-offset-4")}>{l}</span>
        </button>
      ))}
    </div>
  )
}
