"use client"

import { Accordion, AccordionItem, Input } from "@nextui-org/react"
import { faqConfig } from "@/contents/faq"
import { title } from "@/components/primitives"
import { HelpCircle, Search } from "lucide-react"
import { useState, useMemo } from "react"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return faqConfig

    const query = searchQuery.toLowerCase()
    return faqConfig.filter((item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query))
  }, [searchQuery])

  return (
    <section className="max-w-3xl mx-auto py-8 px-4">
      {/* Page Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-white mb-4">
          <HelpCircle size={32} />
        </div>
        <h1 className={`${title({ color: "blue" })} section-title-decoration`}>FAQ</h1>
        <p className="text-default-500 mt-6">Pertanyaan yang sering diajukan seputar Kost Apel Manis.</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <Input
          placeholder="Cari pertanyaan..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          startContent={<Search size={18} className="text-default-400" />}
          variant="bordered"
          size="lg"
          classNames={{
            inputWrapper: "bg-default-50 dark:bg-default-100/10 border-default-200 dark:border-default-100/20 hover:border-primary focus-within:!border-primary",
          }}
        />
      </div>

      {/* No Results */}
      {filteredFAQs.length === 0 && (
        <div className="text-center py-10 text-default-500">
          <HelpCircle size={48} className="mx-auto mb-4 opacity-50" />
          <p>Tidak ada pertanyaan yang cocok dengan &quot;{searchQuery}&quot;</p>
        </div>
      )}

      {/* FAQ Accordion */}
      <Accordion variant="splitted" defaultExpandedKeys={["0"]} className="gap-3">
        {filteredFAQs.map((item, index) => (
          <AccordionItem
            key={index.toString()}
            aria-label={`Accordion ${index + 1}`}
            title={<span className="font-medium text-foreground">{item.question}</span>}
            startContent={<div className="p-2 rounded-lg bg-primary/10 text-primary font-bold text-sm min-w-[32px] text-center">{faqConfig.indexOf(item) + 1}</div>}
            classNames={{
              base: "bg-default-50 dark:bg-default-100/10 border border-default-200 dark:border-default-100/20 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all",
              trigger: "px-5 py-4",
              content: "px-5 pb-5 text-default-600",
              indicator: "text-primary",
            }}
          >
            <p className="leading-relaxed">
              {item.answer.includes("http") ? (
                <a href={item.answer} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                  {item.answer}
                </a>
              ) : (
                item.answer
              )}
            </p>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
