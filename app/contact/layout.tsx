import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Hubungi Kost Apel Manis Madiun untuk informasi ketersediaan kamar, harga sewa, dan booking. Lokasi strategis di pusat Kota Madiun, Jawa Timur.",
  keywords: ["kontak kost madiun", "alamat kost madiun", "lokasi kost madiun", "booking kost madiun", "reservasi kost madiun", "sewa kost madiun", "hubungi kost madiun", "telepon kost madiun", "whatsapp kost madiun"],
  openGraph: {
    title: "Hubungi Kami - Apel Manis Kost Madiun",
    description: "Hubungi Kost Apel Manis Madiun untuk informasi ketersediaan kamar, harga sewa, dan booking.",
  },
}

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <section>{children}</section>
}
