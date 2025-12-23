"use client"

import Image from "next/image"
import { useState, useCallback } from "react"
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function PreviewFacilities() {
  const images = Array.from({ length: 18 }, (_, i) => `/assets/gambar-${i + 1}.jpeg`)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index))
  }

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index)
    setIsOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
  }, [])

  const goToPrevious = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  return (
    <>
      <div className="py-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {images.map((src, index) => (
            <div key={`room-${index + 1}`} onClick={() => openLightbox(index)} className="group relative aspect-square overflow-hidden rounded-xl shadow-lg card-hover cursor-pointer">
              {/* Skeleton loader */}
              {!loadedImages.has(index) && <div className="absolute inset-0 skeleton" />}

              <Image
                src={src}
                alt={`Gambar ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                loading="lazy"
                className={`object-cover transition-transform duration-500 group-hover:scale-110 ${loadedImages.has(index) ? "opacity-100" : "opacity-0"}`}
                onLoad={() => handleImageLoad(index)}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">Room {index + 1}</p>
                <p className="text-white/70 text-xs">Klik untuk melihat</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={isOpen}
        onClose={closeLightbox}
        size="5xl"
        backdrop="blur"
        classNames={{
          backdrop: "bg-black/80",
          base: "bg-transparent shadow-none",
          body: "p-0",
          closeButton: "hidden",
        }}
      >
        <ModalContent>
          <ModalBody className="relative flex items-center justify-center p-0">
            {/* Close Button */}
            <Button isIconOnly variant="flat" className="absolute top-4 right-4 z-50 bg-black/50 text-white hover:bg-black/70" onPress={closeLightbox}>
              <X size={24} />
            </Button>

            {/* Previous Button */}
            <Button isIconOnly variant="flat" className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 text-white hover:bg-black/70" onPress={goToPrevious}>
              <ChevronLeft size={32} />
            </Button>

            {/* Next Button */}
            <Button isIconOnly variant="flat" className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 text-white hover:bg-black/70" onPress={goToNext}>
              <ChevronRight size={32} />
            </Button>

            {/* Image */}
            <div className="relative w-full max-w-4xl mx-auto">
              <Image src={images[selectedIndex]} alt={`Gallery image ${selectedIndex + 1}`} width={1200} height={800} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
