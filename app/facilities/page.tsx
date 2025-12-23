"use client"

import { title } from "@/components/primitives"
import { Image, Card, CardFooter, Modal, ModalContent, ModalBody, Button } from "@nextui-org/react"
import { facilitiesConfig } from "@/contents/facilities"
import { Check, Bed, Bath, ClipboardList, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useCallback } from "react"

export default function FacilitiesPage() {
  const images = Array.from({ length: 18 }, (_, i) => `/assets/gambar-${i + 1}.jpeg`)
  const allImages = ["/assets/gambar-10.jpeg", ...images] // Include featured image

  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index)
    setIsOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
  }, [])

  const goToPrevious = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
  }, [allImages.length])

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
  }, [allImages.length])

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "Escape") closeLightbox()
    },
    [goToPrevious, goToNext, closeLightbox]
  )

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Page Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className={`${title({ color: "blue" })} section-title-decoration`}>Facilities</h1>
        <p className="text-default-500 mt-6 max-w-2xl mx-auto">Nikmati berbagai fasilitas lengkap yang kami sediakan untuk kenyamanan Anda.</p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* General Facilities */}
        <Card className="bg-default-50 dark:bg-default-100/10 border border-default-200 dark:border-default-100/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
              <Bed size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Fasilitas Umum</h2>
              <p className="text-sm text-default-500">Tersedia di setiap kamar</p>
            </div>
          </div>
          <ul className="space-y-3">
            {facilitiesConfig.fasilitas.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-success/20 mt-0.5">
                  <Check size={14} className="text-success" />
                </div>
                <span className="text-default-700 dark:text-default-400">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Bathroom Facilities */}
        <Card className="bg-default-50 dark:bg-default-100/10 border border-default-200 dark:border-default-100/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
              <Bath size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Kamar Mandi</h2>
              <p className="text-sm text-default-500">Fasilitas kamar mandi dalam</p>
            </div>
          </div>
          <ul className="space-y-3">
            {facilitiesConfig.fasilitasKamarMandi.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-success/20 mt-0.5">
                  <Check size={14} className="text-success" />
                </div>
                <span className="text-default-700 dark:text-default-400">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Rules */}
        <Card className="bg-default-50 dark:bg-default-100/10 border border-default-200 dark:border-default-100/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
              <ClipboardList size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Peraturan</h2>
              <p className="text-sm text-default-500">Harap dipatuhi</p>
            </div>
          </div>
          <ul className="space-y-3">
            {facilitiesConfig.peraturan.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-warning/20 mt-0.5">
                  <Check size={14} className="text-warning" />
                </div>
                <span className="text-default-700 dark:text-default-400">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Gallery Header */}
      <div className="text-center mb-8 animate-fade-in">
        <h2 className={`${title({ color: "blue", size: "sm" })} section-title-decoration`}>Gallery</h2>
        <p className="text-default-500 mt-6 max-w-xl mx-auto">Klik foto untuk melihat lebih detail.</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Main featured image */}
        <Card isPressable onPress={() => openLightbox(0)} className="col-span-2 sm:col-span-3 lg:col-span-4 overflow-hidden rounded-2xl shadow-xl cursor-pointer">
          <Image isZoomed width="100%" className="h-[300px] sm:h-[400px] object-cover" alt="Apel Manis Kost" src="/assets/gambar-10.jpeg" />
          <CardFooter className="absolute bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-20 pb-6">
            <div className="flex flex-col px-4">
              <p className="text-2xl sm:text-3xl font-bold text-white">Tampak Depan</p>
              <p className="text-white/70">Klik untuk melihat detail</p>
            </div>
          </CardFooter>
        </Card>

        {/* Image grid */}
        {images.map((image, index) => (
          <Card key={index} isPressable onPress={() => openLightbox(index + 1)} className="overflow-hidden rounded-xl group cursor-pointer">
            <Image isZoomed width="100%" className="h-[180px] sm:h-[200px] object-cover" alt={`Facility image ${index + 1}`} src={image} />
            <CardFooter className="absolute bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent pt-10 pb-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium text-white px-2">Room {index + 1}</p>
            </CardFooter>
          </Card>
        ))}
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
        onKeyDown={handleKeyDown}
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
              <Image src={allImages[selectedIndex]} alt={`Gallery image ${selectedIndex + 1}`} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" removeWrapper />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                {selectedIndex + 1} / {allImages.length}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
