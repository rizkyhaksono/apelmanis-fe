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
        <h2 className={subtitle({ class: "mt-4" })}>Pilihan Kost Putra Terbaik</h2>
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

      <div className="mt-10 text-center">
        <MarqueeComponent />

        <div className="mt-20">
          <h1 className={title({ color: "violet" })} style={{ marginTop: 20, paddingTop: 20 }}>
            Location
          </h1>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.379296664746!2d111.53595727574817!3d-7.642297375596943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bfb6d777b62f%3A0xe568a382b1b226f4!2sKos%20Putra%20Apel%20Manis!5e0!3m2!1sen!2sid!4v1705385260979!5m2!1sen!2sid"
          width="100%"
          height="800"
          style={{ border: 0, borderRadius: 20, paddingTop: 20 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
