import { title } from "@/components/primitives";
import { Image, Card, CardFooter } from "@nextui-org/react";

export default function FacilitiesPage() {
  return (
    <div>
      <h1 className={title()}>Facilities</h1>

      <div className="flex flex-row mt-10">
        <Card isFooterBlurred radius="lg" className="col-span-12 sm:col-span-4 h-[400px] border-none">
          <Image isZoomed width={440} alt="NextUI Fruit Image with Zoom" src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg" />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-10 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-base text-center text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, suscipit.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
