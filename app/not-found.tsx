"use client"

import NextLink from "next/link"
import { useTranslations } from "next-intl"

export default function NotFound() {
  const t = useTranslations("not_found")

  return (
    <section className="mx-auto max-w-[75rem] px-4 py-24 sm:px-6">
      <p className="load-rise font-display text-[clamp(6rem,20vw,12rem)] leading-none tabular-nums text-line">404</p>
      <h1 className="load-rise mt-6 font-display text-h1 [--i:1]">{t("title")}</h1>
      <p className="load-rise mt-4 max-w-[34rem] text-moss [--i:2]">{t("description")}</p>
      <NextLink
        href="/"
        className="load-rise mt-8 inline-flex h-12 items-center rounded-full bg-leaf px-6 font-medium text-paper transition-[scale] duration-200 [--i:3] motion-safe:active:scale-[0.97]"
      >
        {t("back")}
      </NextLink>
    </section>
  )
}
