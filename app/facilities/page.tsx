import { title } from "@/components/primitives"
import { Image, Card, CardFooter } from "@nextui-org/react"
import { facilitiesConfig } from "@/contents/facilities"
import { Check } from "lucide-react";

export default function FacilitiesPage() {
  const images = Array.from({ length: 18 }, (_, i) => `/assets/gambar-${i + 1}.jpeg`);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className={title({ color: "blue", class: "block" })}>Facilities</h1>
      <h2 className="mt-10 mb-2 text-lg font-semibold text-foreground">Fasilitas umum yang ada di Kost:</h2>
      <ul>
        {facilitiesConfig.fasilitas.map((items) => (
          <li key={items} className="flex items-start space-x-3 text-gray-500 list-inside dark:text-gray-400 my-1">
            <Check />
            <p className="text-start">{items}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 mb-2 text-lg font-semibold text-foreground">Fasilitas kamar mandi yang ada di Kost:</h2>
      <ul>
        {facilitiesConfig.fasilitasKamarMandi.map((items) => (
          <li key={items} className="flex items-start space-x-3 text-gray-500 list-inside dark:text-gray-400 my-1">
            <Check />
            <p className="text-start">{items}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 mb-2 text-lg font-semibold text-foreground">Peraturan yang ada di Kost:</h2>
      <ul className="mb-10">
        {facilitiesConfig.peraturan.map((items) => (
          <li key={items} className="flex items-start space-x-3 text-gray-500 list-inside dark:text-gray-400 my-1">
            <Check />
            <p className="text-start">{items}</p>
          </li>
        ))}
      </ul>

      <h1 className={title({ color: "blue", class: "mt-16 mb-8" })}>Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Main featured image */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-3">
          <Image
            isZoomed
            width="100%"
            className="h-[400px] object-cover"
            alt="Apel Manis Kost"
            src="/assets/gambar-10.jpeg"
          />
          <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)]">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-xl font-bold text-white">Tampak Depan</p>
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* Image grid */}
        {images.map((image, index) => (
          <Card key={index} className="border-none">
            <Image
              isZoomed
              width="100%"
              className="h-[250px] object-cover"
              alt={`Facility image ${index + 1}`}
              src={image}
            />
            <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)]">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/80">Room {index + 1}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
