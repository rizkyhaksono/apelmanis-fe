import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fasilitas Kost",
  description: "Fasilitas lengkap Kost Apel Manis Madiun: WiFi cepat, AC, kamar mandi dalam, parkir luas, keamanan 24 jam, dapur bersama, dan lokasi strategis di pusat kota Madiun.",
  keywords: [
    "fasilitas kost madiun",
    "kost wifi madiun",
    "kost ac madiun",
    "kost kamar mandi dalam madiun",
    "kost parkir luas madiun",
    "kost keamanan 24 jam madiun",
    "kost dapur bersama madiun",
    "kost lengkap madiun",
    "amenitas kost madiun",
  ],
  openGraph: {
    title: "Fasilitas Kost - Apel Manis Kost Madiun",
    description: "Fasilitas lengkap Kost Apel Manis Madiun: WiFi cepat, AC, kamar mandi dalam, parkir luas, keamanan 24 jam.",
  },
}

export default function FacilitiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <section className="w-full">{children}</section>
}
