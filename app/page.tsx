"use client"

import { Link } from "@nextui-org/link"
import { button as buttonStyles } from "@nextui-org/theme"
import { subtitle, title } from "@/components/primitives"
import { PhoneIcon } from "@/components/icons"
import Typed from "typed.js"
import { useEffect, useRef } from "react"
import MarqueeComponent from "@/components/marquee"
import PreviewFacilities from "@/components/preview-facilities"
import dynamic from "next/dynamic"
import { Card } from "@nextui-org/react"
import { MapPin, Clock, GraduationCap, ShoppingBag, UtensilsCrossed, Store, Landmark } from "lucide-react"
import { useTranslations } from "next-intl"

const LazyMap = dynamic(() => import("@/components/map-radius"), { ssr: false, loading: () => <div className="h-[500px] w-full skeleton rounded-xl" /> })

// Nearby locations for display
const nearbyLocations = [
  {
    nameKey: "unipma",
    distance: "600m",
    duration: "2 menit",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
  },
  {
    nameKey: "sma3",
    distance: "800m",
    duration: "3 menit",
    icon: GraduationCap,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    nameKey: "matahari",
    distance: "1.5km",
    duration: "5 menit",
    icon: ShoppingBag,
    color: "from-pink-500 to-pink-600",
  },
  {
    nameKey: "restaurant",
    distance: "300m",
    duration: "1 menit",
    icon: UtensilsCrossed,
    color: "from-orange-500 to-orange-600",
  },
  {
    nameKey: "minimarket",
    distance: "200m",
    duration: "1 menit",
    icon: Store,
    color: "from-green-500 to-green-600",
  },
  {
    nameKey: "mosque",
    distance: "2km",
    duration: "7 menit",
    icon: Landmark,
    color: "from-teal-500 to-teal-600",
  },
]

export default function Home() {
  const el = useRef(null)
  const t = useTranslations("home")
  const tPlaces = useTranslations("nearby_places")

  useEffect(() => {
    if (el.current) {
      const taglines = t.raw("taglines") as string[]
      const typed = new Typed(el.current, {
        loop: true,
        strings: taglines,
        typeSpeed: 90,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [t])

  return (
    <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 inline-block max-w-xl text-center justify-center animate-fade-in">
        <h1 className={title({ class: "text-4xl sm:text-5xl md:text-6xl" })}>{t("title")}&nbsp;</h1>
        <h1 className={title({ color: "blue", class: "text-4xl sm:text-5xl md:text-6xl" })}>{t("subtitle")}&nbsp;</h1>
        <div className="flex items-center justify-center text-center mt-6 min-h-[2rem]">
          <h2 className="text-lg lg:text-2xl text-default-600 font-medium" ref={el} />
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 flex gap-4 mt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <Link href={"/facilities"} className={`${buttonStyles({ color: "primary", radius: "full", variant: "shadow", size: "lg" })} btn-glow`}>
          {t("facilities_btn")}
        </Link>
        <Link className={`${buttonStyles({ variant: "bordered", radius: "full", size: "lg" })} hover:border-primary hover:text-primary transition-colors`} href={"/contact"}>
          <PhoneIcon size={20} />
          {t("contact_btn")}
        </Link>
      </div>

      {/* Marquee Section */}
      <div className="relative z-10 w-full mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <MarqueeComponent />
      </div>

      {/* Preview Facilities Section */}
      <div className="relative z-10 w-full my-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="text-center mb-8">
          <h2 className={title({ color: "blue", size: "sm", class: "section-title-decoration" })}>{t("our_rooms")}</h2>
          <p className="text-default-500 mt-6 max-w-2xl mx-auto">{t("rooms_desc")}</p>
        </div>
        <PreviewFacilities />
      </div>

      {/* Section Divider */}
      <div className="section-divider w-full" />

      {/* Nearby Locations Section */}
      <div className="relative z-10 w-full animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="text-center mb-8">
          <h2 className={`${title({ color: "blue" })} section-title-decoration`}>{t("nearby")}</h2>
          <p className="text-default-500 mt-6 max-w-2xl mx-auto">{t("nearby_desc")}</p>
        </div>

        {/* Distance Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {nearbyLocations.map((location) => {
            const IconComponent = location.icon
            return (
              <Card key={location.nameKey} className="glass-card p-4 text-center group hover:scale-105 transition-transform duration-300">
                <div className={`mx-auto p-3 rounded-full bg-gradient-to-br ${location.color} text-white mb-3 w-fit group-hover:scale-110 transition-transform`}>
                  <IconComponent size={24} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">{tPlaces(location.nameKey)}</h3>
                <div className="flex items-center justify-center gap-1 text-primary font-bold">
                  <MapPin size={14} />
                  <span>{location.distance}</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-default-500 text-xs mt-1">
                  <Clock size={12} />
                  <span>{location.duration}</span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider w-full" />

      {/* Location Section */}
      <div className="relative z-10 w-full text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
        <h2 className={`${title({ color: "blue" })} section-title-decoration`}>{t("locations")}</h2>

        {/* Google Maps */}
        <div className="mt-12 glass-card p-4 md:p-6">
          <h3 className={subtitle({ color: "blue", className: "font-semibold mb-4 w-full text-center" })}>📍 {t("google_maps")}</h3>
          <iframe
            title="Apel Manis Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.379296664746!2d111.53595727574817!3d-7.642297375596943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bfb6d777b62f%3A0xe568a382b1b226f4!2sKos%20Putra%20Apel%20Manis!5e0!3m2!1sen!2sid!4v1705385260979!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: 16 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-xl"
          />
        </div>

        {/* Distance Map */}
        <div className="mt-12 glass-card p-4 md:p-6">
          <h3 className={subtitle({ color: "blue", className: "font-semibold mb-4 w-full text-center" })}>🗺️ {t("distance_map")}</h3>
          <LazyMap />
        </div>
      </div>
    </section>
  )
}
