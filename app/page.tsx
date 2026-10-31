"use client"

import { useRef, useState } from "react"
import NextLink from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import clsx from "clsx"
import { useFormatter, useTranslations } from "next-intl"
import PreviewFacilities from "@/components/preview-facilities"
import { WhatsAppIcon } from "@/components/icons"
import type { MapView } from "@/components/map-radius"
import { whatsappLink, siteConfig } from "@/config/site"
import { attractions, nearbyPlaces } from "@/contents/nearby"

const LazyMap = dynamic(() => import("@/components/map-radius"), { ssr: false, loading: () => <div className="photo h-[22rem] w-full bg-paper md:h-[28rem]" /> })

const container = "mx-auto max-w-[75rem] px-4 sm:px-6"
const primaryButton =
  "inline-flex h-12 items-center gap-2.5 rounded-full bg-skin px-6 font-medium text-paper transition-[scale,background-color] duration-200 hover:bg-skin/90 motion-safe:active:scale-[0.97]"
const secondaryButton =
  "inline-flex h-12 items-center rounded-full px-6 font-medium text-leaf shadow-[inset_0_0_0_1px_var(--color-line)] transition-[scale,box-shadow] duration-200 hover:shadow-[inset_0_0_0_1px_var(--color-leaf)] motion-safe:active:scale-[0.97]"

export default function Home() {
  const t = useTranslations("home")
  const tCat = useTranslations("categories")
  const format = useFormatter()
  const facts = t.raw("facts") as { title: string; note: string }[]
  const [mapView, setMapView] = useState<MapView>("walk")
  const [selected, setSelected] = useState<number | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* Hero */}
      <section className={`${container} grid items-center gap-10 pb-16 pt-8 md:pb-20 md:pt-16 lg:grid-cols-12`}>
        <div className="lg:col-span-6">
          <h1 className="load-rise font-display text-hero">{t("title")}</h1>
          <p className="load-rise mt-6 max-w-[34rem] text-lead text-moss [--i:2]">{t("lead")}</p>
          <div className="load-rise mt-10 flex flex-wrap gap-3 [--i:3]">
            <a href={whatsappLink(t("whatsapp_prefill"))} target="_blank" rel="noopener noreferrer" className={primaryButton}>
              <WhatsAppIcon size={18} />
              {t("cta_whatsapp")}
            </a>
            <NextLink href="/facilities" className={secondaryButton}>
              {t("cta_facilities")}
            </NextLink>
          </div>
        </div>
        <div className="load-unveil photo relative aspect-[3/4] max-h-[70svh] overflow-hidden lg:col-span-5 lg:col-start-8 lg:max-h-[78svh]">
          <Image src="/assets/gambar-7.jpeg" alt={t("hero_alt")} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="drift scale-110 object-cover" />
        </div>
      </section>

      {/* Facts */}
      <section className={container}>
        <ul className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {facts.map((fact) => (
            <li key={fact.title} className="border-b border-line py-5 pr-4 even:border-l even:pl-4 lg:border-b-0 lg:border-l lg:py-6 lg:pl-6 lg:pr-6 lg:first:border-l-0 lg:first:pl-0">
              <p className="font-display text-lead">{fact.title}</p>
              <p className="mt-1 text-sm text-moss">{fact.note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Gallery */}
      <section className="mt-20 md:mt-32" aria-labelledby="gallery-title">
        <div className={`${container} mb-10 flex flex-wrap items-end justify-between gap-6`}>
          <div>
            <h2 id="gallery-title" className="reveal font-display text-h1">
              {t("gallery_title")}
            </h2>
            <p className="reveal mt-4 max-w-[34rem] text-moss [--i:1]">{t("gallery_desc")}</p>
          </div>
          <NextLink href="/facilities" className="link-grow py-2">
            {t("gallery_more")}
          </NextLink>
        </div>
        <PreviewFacilities />
      </section>

      {/* Nearby */}
      <section className={`${container} mt-20 md:mt-32`} aria-labelledby="nearby-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="nearby-title" className="reveal font-display text-h1">
              {t("nearby_title")}
            </h2>
            <p className="reveal mt-4 text-moss [--i:1]">{t("nearby_desc")}</p>
          </div>

          <div className="lg:col-span-8">
            <div aria-hidden="true" className="hidden grid-cols-[2fr_1fr_5rem_9rem] gap-4 pb-3 text-sm text-moss md:grid">
              <span>{t("col_place")}</span>
              <span>{t("col_category")}</span>
              <span className="text-right">{t("col_distance")}</span>
              <span className="text-right">{t("col_time")}</span>
            </div>
            <ul>
              {nearbyPlaces.map((place) => (
                <li key={place.name} className="rule-row grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-4 md:grid-cols-[2fr_1fr_5rem_9rem]">
                  <span>{place.name}</span>
                  <span className="col-start-1 row-start-2 text-sm text-moss md:col-start-auto md:row-start-auto md:text-body">{tCat(place.category)}</span>
                  <span className="text-right tabular-nums">{place.distance}</span>
                  <span className="text-right text-sm tabular-nums text-moss md:text-body">{t(place.mode, { minutes: place.minutes })}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12">
          <div ref={mapRef} className="scroll-mt-20 lg:col-span-8">
            <div role="group" aria-label={t("map_view")} className="mb-4 inline-flex rounded-full p-1 shadow-[inset_0_0_0_1px_var(--color-line)]">
              {(["walk", "explore"] as const).map((view) => (
                <button
                  key={view}
                  type="button"
                  aria-pressed={mapView === view}
                  onClick={() => {
                    setMapView(view)
                    setSelected(null)
                  }}
                  className={clsx("h-10 rounded-full px-4 text-sm font-medium transition-colors duration-200", mapView === view ? "bg-leaf text-paper" : "text-moss hover:text-leaf")}
                >
                  {t(view === "walk" ? "map_walk" : "map_explore")}
                </button>
              ))}
            </div>
            <LazyMap view={mapView} selected={selected} onSelect={setSelected} />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-[40rem] text-sm text-moss">{t(mapView === "walk" ? "map_note" : "map_note_explore")}</p>
              <a href={siteConfig.contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
                {t("open_maps")}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="reveal font-display text-h3">{t("explore_title")}</h3>
            <p className="reveal mt-3 text-moss [--i:1]">{t("explore_desc")}</p>
            <ol className="mt-6">
              {attractions.map((place, i) => {
                const isActive = mapView === "explore" && selected === i
                return (
                  <li key={place.name} className="rule-row">
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => {
                        setMapView("explore")
                        setSelected(i)
                        mapRef.current?.scrollIntoView({ block: "nearest" })
                      }}
                      className="group grid w-full grid-cols-[1.75rem_1fr_auto] items-center gap-x-3 py-3 text-left"
                    >
                      <span
                        className={clsx(
                          "grid size-7 place-items-center rounded-full text-xs font-semibold tabular-nums transition-[background-color,color,box-shadow] duration-200",
                          isActive ? "bg-leaf text-paper" : "text-leaf shadow-[inset_0_0_0_1.5px_var(--color-line)] group-hover:shadow-[inset_0_0_0_1.5px_var(--color-leaf)]"
                        )}
                      >
                        {i + 1}
                      </span>
                      <span>
                        {place.name}
                        <span className="block text-sm text-moss">{tCat(place.category)}</span>
                      </span>
                      <span className="text-right text-sm tabular-nums text-moss">
                        {format.number(place.km, { style: "unit", unit: "kilometer" })}
                        <span className="block">{t("minutes", { minutes: place.minutes })}</span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="-mb-20 mt-20 bg-leaf text-paper md:-mb-32 md:mt-32">
        <div className={`${container} grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-24`}>
          <div className="md:col-span-7">
            <h2 className="reveal font-display text-h1">{t("cta_title")}</h2>
            <p className="reveal mt-4 max-w-[34rem] text-paper/80 [--i:1]">{t("cta_desc")}</p>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <a href={whatsappLink(t("whatsapp_prefill"))} target="_blank" rel="noopener noreferrer" className={primaryButton}>
              <WhatsAppIcon size={18} />
              {t("cta_whatsapp")}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
