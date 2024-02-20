import { title } from "@/components/primitives";
import { Image, Card, CardFooter } from "@nextui-org/react";
import { facilitiesConfig } from "@/contents/facilities";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function FacilitiesPage() {
  return (
    <>
      <h1 className={title({ color: "blue", class: "block" })}>Facilities</h1>

      <h2 className="mt-10 mb-2 text-lg font-semibold text-foreground">Fasilitas umum yang ada di Kost:</h2>
      <ul>
        {facilitiesConfig.fasilitas.map((items) => (
          <li key={items} className="flex items-start space-x-3 text-gray-500 list-inside dark:text-gray-400 my-1">
            <FaRegCircleCheck className="flex-shrink-0 h-4 w-4 mt-1" />
            <p className="text-start">{items}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 mb-2 text-lg font-semibold text-foreground">Fasilitas kamar mandi yang ada di Kost:</h2>
      <ul>
        {facilitiesConfig.fasilitasKamarMandi.map((items) => (
          <li key={items} className="flex items-start space-x-3 text-gray-500 list-inside dark:text-gray-400 my-1">
            <FaRegCircleCheck className="flex-shrink-0 h-4 w-4 mt-1" />
            <p className="text-start">{items}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 mb-2 text-lg font-semibold text-foreground">Spesifikasi yang ada di Kost:</h2>
      <ul className="mb-10">
        {facilitiesConfig.spesifikasi.map((items) => (
          <li key={items} className="flex items-start space-x-3 text-gray-500 list-inside dark:text-gray-400 my-1">
            <FaRegCircleCheck className="flex-shrink-0 h-4 w-4 mt-1" />
            <p className="text-start">{items}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 mb-2 text-lg font-semibold text-foreground">Peraturan yang ada di Kost:</h2>
      <ul className="mb-10">
        {facilitiesConfig.peraturan.map((items) => (
          <li key={items} className="flex items-start space-x-3 text-gray-500 list-inside dark:text-gray-400 my-1">
            <FaRegCircleCheck className="flex-shrink-0 h-4 w-4 mt-1" />
            <p className="text-start">{items}</p>
          </li>
        ))}
      </ul>

      <h1 className={title({ color: "blue" })}>Images</h1>
      <div className="flex flex-row mt-5">
        <Card isFooterBlurred radius="lg" className="col-span-12 sm:col-span-4 border-none">
          <Image isZoomed width={440} alt="Apel Manis" src="https://lh3.ggpht.com/p/AF1QipPgRO8VGulBNCj_dN0we4n1PCz2yUaDXFem4ZH1=s1024" />
          <CardFooter className="flex justify-center before:bg-white/10 border-white/20 border-10 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-xl font-semibold text-foreground">Tampak Depan</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
