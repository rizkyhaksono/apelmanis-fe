import Image from "next/image"

export default function PreviewFacilities() {
  const images = Array.from({ length: 18 }, (_, i) => `/assets/gambar-${i + 1}.jpeg`);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={src}
            alt={`Gambar ${index + 1}`}
            width={700}
            height={700}
            loading="lazy"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}