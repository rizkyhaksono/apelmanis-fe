"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useTranslations } from "next-intl"

export interface LightboxPhoto {
  src: string
  alt: string
}

interface LightboxProps {
  photos: LightboxPhoto[]
  index: number | null
  onIndexChange: (index: number | null) => void
}

const control = "size-12 place-items-center rounded-full bg-paper/10 text-paper transition-[background-color,scale] duration-200 hover:bg-paper/20 motion-safe:active:scale-[0.94]"

export function Lightbox({ photos, index, onIndexChange }: LightboxProps) {
  const t = useTranslations("gallery")
  const ref = useRef<HTMLDialogElement>(null)
  const touchX = useRef<number | null>(null)
  const total = photos.length

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (index !== null && !dialog.open) dialog.showModal()
    if (index === null && dialog.open) dialog.close()
  }, [index])

  const step = (delta: number) => index !== null && onIndexChange((index + delta + total) % total)

  // Keep the last photo while the dialog fades out.
  const [shown, setShown] = useState(0)
  if (index !== null && index !== shown) setShown(index)
  const photo = photos[shown]

  return (
    <dialog
      ref={ref}
      aria-label={photo?.alt}
      onClose={() => onIndexChange(null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") step(-1)
        if (e.key === "ArrowRight") step(1)
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-leaf/95 p-0 text-paper opacity-0 transition-[opacity,display,overlay] transition-discrete duration-300 backdrop:bg-transparent open:opacity-100 starting:open:opacity-0"
    >
      {photo && (
        <div className="grid h-full grid-rows-[auto_1fr_auto] gap-4 p-4 sm:p-6">
          <div className="flex justify-end">
            <button type="button" autoFocus className={`${control} grid`} aria-label={t("close")} onClick={() => onIndexChange(null)}>
              <X size={22} />
            </button>
          </div>

          {/* Side arrows from sm up; on phones the photo gets the full width and arrows move to the bottom bar. */}
          <div
            className="relative grid min-h-0 items-center gap-6 sm:grid-cols-[auto_1fr_auto]"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return
              const dx = e.changedTouches[0].clientX - touchX.current
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
              touchX.current = null
            }}
          >
            <button type="button" className={`${control} hidden sm:grid`} aria-label={t("prev")} onClick={() => step(-1)}>
              <ChevronLeft size={24} />
            </button>
            <div className="relative h-full min-h-0">
              <Image key={photo.src} src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 70vh, 100vw" className="object-contain motion-safe:animate-[fade-in_450ms_var(--ease-out-quint)]" />
            </div>
            <button type="button" className={`${control} hidden sm:grid`} aria-label={t("next")} onClick={() => step(1)}>
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 text-sm">
            <p className="text-paper/90">{photo.alt}</p>
            <div className="flex shrink-0 items-center gap-2">
              <button type="button" className={`${control} grid sm:hidden`} aria-label={t("prev")} onClick={() => step(-1)}>
                <ChevronLeft size={22} />
              </button>
              <p className="tabular-nums text-paper/70" aria-live="polite">
                {t("counter", { current: shown + 1, total })}
              </p>
              <button type="button" className={`${control} grid sm:hidden`} aria-label={t("next")} onClick={() => step(1)}>
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
