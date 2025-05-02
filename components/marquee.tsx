import Marquee from "react-fast-marquee";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";

export default function MarqueeComponent() {
  return (
    <Marquee autoFill>
      <div>
        {siteConfig.greeting.map((item, key) => (
          <span key={key} className={buttonStyles({ variant: "solid", radius: "full", color: "default", size: "lg" })} style={{ marginLeft: 5, marginRight: 5 }}>
            {item}
          </span>
        ))}
      </div>
    </Marquee>
  );
}
