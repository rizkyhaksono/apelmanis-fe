"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { faqConfig } from "@/contents/faq";
import { title } from "@/components/primitives";

export default function FAQPage() {
  return (
    <>
      <h1 className={title({ color: "blue" })}>FAQ</h1>

      <Accordion fullWidth variant="splitted" defaultExpandedKeys={["0"]} className="text-start w-full mt-10">
        {faqConfig.map((item, index) => (
          <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={item.question}>
            <p className="text-foreground">{item.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
