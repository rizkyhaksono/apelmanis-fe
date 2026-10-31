"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { useTranslations } from "next-intl"
import { faqConfig } from "@/contents/faq"
import { whatsappLink } from "@/config/site"

export default function FAQPage() {
  const t = useTranslations("faq")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFAQs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return faqConfig
    return faqConfig.filter((item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query))
  }, [searchQuery])

  return (
    <div className="mx-auto grid max-w-[75rem] gap-10 px-4 pt-10 sm:px-6 md:grid-cols-12 md:gap-12 md:pt-16">
      <header className="md:sticky md:top-28 md:col-span-4 md:self-start">
        <h1 className="load-rise font-display text-h1">{t("title")}</h1>
        <p className="load-rise mt-4 text-moss [--i:1]">{t("description")}</p>

        <label className="load-rise relative mt-8 block [--i:2]">
          <span className="sr-only">{t("search")}</span>
          <Search size={18} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-moss" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("search")}
            className="h-12 w-full rounded-lg bg-paper pl-11 pr-4 shadow-[inset_0_0_0_1px_var(--color-line)] transition-shadow duration-200 placeholder:text-moss focus:shadow-[inset_0_0_0_1px_var(--color-leaf)] focus:outline-none focus-visible:outline-2 focus-visible:outline-skin [&::-webkit-search-cancel-button]:appearance-none"
          />
        </label>
      </header>

      <div className="md:col-span-7 md:col-start-6">
        {filteredFAQs.length === 0 ? (
          <div className="border-t border-line py-10">
            <p>{t("no_results", { query: searchQuery.trim() })}</p>
            <a href={whatsappLink(t("ask_prefill", { query: searchQuery.trim() }))} target="_blank" rel="noopener noreferrer" className="link-grow mt-2 inline-block pb-0.5 text-skin">
              {t("ask")}
            </a>
          </div>
        ) : (
          <ul>
            {filteredFAQs.map((item, i) => (
              <li key={item.question} className="rule-row">
                <details open={i === 0 && !searchQuery} className="group">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.125rem] md:text-lead [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span aria-hidden="true" className="relative size-4 shrink-0">
                      <span className="absolute inset-x-0 top-1/2 h-px bg-leaf" />
                      <span className="absolute inset-y-0 left-1/2 w-px bg-leaf transition-[rotate] duration-300 ease-(--ease-out-quint) group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="max-w-[38rem] pb-6 text-moss">
                    {item.answer.startsWith("http") ? (
                      <a href={item.answer} target="_blank" rel="noopener noreferrer" className="link-grow break-all text-leaf">
                        {item.answer}
                      </a>
                    ) : (
                      item.answer
                    )}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
