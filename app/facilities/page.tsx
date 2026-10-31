"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { facilitiesConfig } from "@/contents/facilities"
import { galleryPhotos } from "@/contents/gallery"
import { Lightbox } from "@/components/lightbox"

export default function FacilitiesPage() {
  const t = useTranslations("facilities")
  const tGallery = useTranslations("gallery")
  const [index, setIndex] = useState<number | null>(null)
  const photos = galleryPhotos.map((p) => ({ src: p.src, alt: tGallery(`captions.${p.n}`) }))

  const lists = [
    { title: t("general"), items: facilitiesConfig.fasilitas },
    { title: t("bathroom"), items: facilitiesConfig.fasilitasKamarMandi },
    { title: t("rules"), items: facilitiesConfig.peraturan },
  ]

  return (
    <div className="mx-auto max-w-[75rem] px-4 pt-10 sm:px-6 md:pt-16">
      <header className="max-w-[40rem]">
        <h1 className="load-rise font-display text-h1">{t("title")}</h1>
        <p className="load-rise mt-4 text-lead text-moss [--i:1]">{t("description")}</p>
      </header>

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-10">
        {lists.map((list) => (
          <section key={list.title}>
            <h2 className="reveal font-display text-h3">{list.title}</h2>
            <ul className="mt-4">
              {list.items.map((item) => (
                <li key={item} className="rule-row py-3">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-20 md:mt-32" aria-labelledby="gallery-title">
        <h2 id="gallery-title" className="reveal font-display text-h1">
          {t("gallery")}
        </h2>
        <p className="reveal mt-4 text-moss [--i:1]">{t("gallery_desc")}</p>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <li key={photo.src} className="reveal-photo">
              <button type="button" onClick={() => setIndex(i)} aria-label={tGallery("open", { caption: photo.alt })} className="group block w-full overflow-hidden rounded-[4px]">
                <Image
                  src={photo.src}
                  alt=""
                  width={1200}
                  height={1600}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="photo aspect-[3/4] w-full bg-paper object-cover transition-[scale] duration-700 ease-(--ease-out-quint) group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <Lightbox photos={photos} index={index} onIndexChange={setIndex} />
    </div>
  )
}
