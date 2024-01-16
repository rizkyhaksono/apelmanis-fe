import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { PhoneIcon } from "@/components/icons";
import MarqueeComponent from "@/components/marquee";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Apel Manis&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Kost&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>Pilihan Kost Putra Yang Terbaik</h2>
      </div>

      <div className="flex gap-3">
        <Link href={"/facilities"} className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}>
          Facilities
        </Link>
        <Link className={buttonStyles({ variant: "bordered", radius: "full" })} href={"/contact"}>
          <PhoneIcon size={20} />
          Contact
        </Link>
      </div>

      <div className="mt-8">
        <Link href={"/about"}>
          <Snippet hideSymbol hideCopyButton variant="flat">
            <span>
              Get to know <Code color="primary">our history</Code>
            </span>
          </Snippet>
        </Link>
      </div>

      <div className="mt-5">
        <MarqueeComponent />
      </div>
    </section>
  );
}
