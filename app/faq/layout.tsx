import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Pertanyaan Umum",
  description: "Pertanyaan yang sering diajukan tentang Kost Apel Manis Madiun: syarat sewa, aturan kost, fasilitas, pembayaran, dan informasi lainnya.",
  keywords: ["faq kost madiun", "pertanyaan kost madiun", "info kost madiun", "syarat sewa kost madiun", "aturan kost madiun", "tanya jawab kost madiun", "informasi kost madiun", "panduan kost madiun"],
  openGraph: {
    title: "FAQ - Apel Manis Kost Madiun",
    description: "Pertanyaan yang sering diajukan tentang Kost Apel Manis Madiun.",
  },
}

export default function FAQLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">{children}</section>
}
