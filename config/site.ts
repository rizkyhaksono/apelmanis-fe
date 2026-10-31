export type SiteConfig = typeof siteConfig

const whatsapp = "6281337283023"

export const siteConfig = {
  name: "Apel Manis Kost",
  description:
    "Kost putri Apel Manis Madiun, 600 m dari UNIPMA. Kamar bersih dengan kamar mandi dalam, WiFi Biznet, dan parkir luas di Manisrejo, Kota Madiun.",
  url: "https://apelmanis-kost.vercel.app",
  author: {
    name: "Apel Manis Kost",
    email: "mrizkyhaksono@gmail.com",
  },
  contact: {
    whatsapp,
    whatsappUrl: `https://wa.me/${whatsapp}`,
    phoneDisplay: "0813 3728 3023",
    email: "mrizkyhaksono@gmail.com",
    address: "Jl. Apel Manis 1 No. 11, Manisrejo, Kec. Taman, Kota Madiun, Jawa Timur 63138",
    mapsUrl: "https://maps.app.goo.gl/MDqghJG1XECP1e2d6",
  },
  keywords: [
    // Primary
    "kost madiun",
    "kos madiun",
    "kos kosan madiun",
    "sewa kost madiun",
    "kost murah madiun",
    "apel manis kost",
    // Location
    "kost kota madiun",
    "kost strategis madiun",
    "kost dekat kampus madiun",
    "kost dekat unipma",
    "kost jawa timur",
    // Features
    "kost bersih madiun",
    "kost nyaman madiun",
    "kost aman madiun",
    "kost wifi madiun",
    "kost parkir luas madiun",
    "kost kamar mandi dalam madiun",
    // Types
    "kost putri madiun",
    "kost cewek madiun",
    "kost bulanan madiun",
  ],
  navItems: [
    { key: "home", href: "/" },
    { key: "facilities", href: "/facilities" },
    { key: "faq", href: "/faq" },
    { key: "contact", href: "/contact" },
  ],
  links: {
    github: "https://github.com/rizkyhaksono",
  },
}

/** WhatsApp chat link, optionally with a prefilled message. */
export const whatsappLink = (text?: string) => (text ? `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(text)}` : siteConfig.contact.whatsappUrl)
