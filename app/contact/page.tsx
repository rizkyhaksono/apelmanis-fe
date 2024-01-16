"use client";

import React from "react";
import { title } from "@/components/primitives";
import {} from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input, Textarea } from "@nextui-org/react";

export default function ContactPage() {
  return (
    <div>
      <h1 className={title()}>Contact</h1>

      <div className="flex flex-row gap-10 mt-10 w-full">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image alt="WA Logo" height={40} radius="sm" src="https://cdn.pixabay.com/photo/2021/05/22/11/38/whatsapp-6273368_1280.png" width={40} />
            <div className="flex flex-col">
              <p className="text-small text-default-500">Apel Manis</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://wa.me/08973889299?text=Saya%20tertarik%20dengan%20kost%20apel%20manis">
              Personal contact.
            </Link>
          </CardFooter>
        </Card>

        <div className="flex flex-col w-full xl:w-96 lg:w-96 md:w-96 sm:w-96">
          <Input className="mt-10" type="email" label="Email" placeholder="Enter your email" />
          <Input className="mt-5" type="text" label="Username" placeholder="Enter your username" />
          <Textarea className="mt-5 mb-5" label="Description" placeholder="Enter your description" />
          <button type="submit" className={buttonStyles({ color: "default", radius: "full", variant: "ghost", fullWidth: true })}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
