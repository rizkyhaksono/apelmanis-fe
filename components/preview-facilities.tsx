"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Lightbox } from "@/components/lightbox"
import { galleryPhotos, homeGalleryCount } from "@/contents/gallery"

const photos = galleryPhotos.slice(0, homeGalleryCount)

// Pinned horizontal strip on wide screens with scroll-driven animation support; a swipe strip elsewhere.
export default function PreviewFacilities() {
  const t = useTranslations("gallery")
  const tHome = useTranslations("home")
  const [index, setIndex] = useState<number | null>(null)
  const video = useRef<HTMLVideoElement>(null)
  const gallery = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) video.current?.pause()
  }, [])
  // In pinned mode photos only move with page scroll, so scroll the page to bring a focused photo into view.
  const revealFocused = (e: React.FocusEvent<HTMLUListElement>) => {
    const track = e.currentTarget
    const item = (e.target as HTMLElement).closest("li")
    const sticky = track.parentElement
    if (!gallery.current || !item || !sticky || getComputedStyle(track).animationName !== "slide") return
    const travel = track.offsetWidth - sticky.clientWidth
    const progress = Math.min(1, Math.max(0, (item.offsetLeft - (sticky.clientWidth - item.offsetWidth) / 2) / travel))
    const top = gallery.current.getBoundingClientRect().top + window.scrollY + progress * (gallery.current.offsetHeight - window.innerHeight)
    // After the browser's own focus scroll, which would otherwise win.
    requestAnimationFrame(() => window.scrollTo({ top }))
  }

  const items = photos.map((p) => ({ src: p.src, alt: t(`captions.${p.n}`) }))

  return (
    <div ref={gallery} className="pin-gallery" style={{ "--count": items.length + 1 } as React.CSSProperties}>
      <div className="pin-gallery__sticky">
        <ul className="pin-gallery__track py-2" onFocus={revealFocused}>
          <li className="w-[min(70vw,22rem)] shrink-0 md:w-auto">
            <figure>
              <video
                ref={video}
                className="photo aspect-[3/4] w-full bg-paper object-cover md:h-[68svh] md:w-auto"
                src="/assets/tour.mp4"
                poster="/assets/tour-poster.jpg"
                muted
                loop
                playsInline
                autoPlay
                preload="none"
                aria-label={tHome("tour")}
              />
              <figcaption className="mt-3 text-sm text-moss">{tHome("tour")}</figcaption>
            </figure>
          </li>
          {items.map((photo, i) => (
            <li key={photo.src} className="w-[min(70vw,22rem)] shrink-0 md:w-auto">
              <figure>
                <button type="button" onClick={() => setIndex(i)} aria-label={t("open", { caption: photo.alt })} className="group block overflow-hidden rounded-[4px]">
                  <Image
                    src={photo.src}
                    alt=""
                    width={1200}
                    height={1600}
                    sizes="(min-width: 768px) 51svh, 70vw"
                    className="photo aspect-[3/4] w-full bg-paper object-cover transition-[scale] duration-700 ease-(--ease-out-quint) group-hover:scale-[1.03] md:h-[68svh] md:w-auto"
                  />
                </button>
                <figcaption className="mt-3 text-sm text-moss">{photo.alt}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <Lightbox photos={items} index={index} onIndexChange={setIndex} />
    </div>
  )
}
