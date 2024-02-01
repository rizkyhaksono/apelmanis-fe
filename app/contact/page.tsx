"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input, Textarea, Button } from "@nextui-org/react";

export default function ContactPage() {
  return (
    <>
      <h1 className={title({ color: "blue" })}>Contact</h1>

      <Card fullWidth className="mt-10">
        <CardHeader className="gap-3">
          <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="flex items-center gap-3">
              <Image alt="nextui logo" height={40} radius="sm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/100px-Gmail_icon_%282020%29.svg.png" width={40} />
              <a href="mailto:mrizkyhaksono@gmail.com" target="_blank">
                <p className="text-md text-start">Email</p>
                <p className="text-small text-default-500">mrizkyhaksono@gmail.com</p>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Image alt="nextui logo" height={40} radius="sm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" width={40} />
              <a href="https://instagram.com/rizkyhaksonoo" target="_blank">
                <p className="text-md text-start">Instagram</p>
                <p className="text-small text-default-500">@rizkyhaksonoo</p>
              </a>
            </div>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Feel free to connect.</p>
        </CardBody>
      </Card>

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-3">
        <Input fullWidth type="text" label="Name" size="lg" placeholder="Enter you name" />
        <Input fullWidth type="email" label="Email" placeholder="Enter your email" size="lg" />
      </div>

      <Textarea fullWidth label="Description" placeholder="Enter your description" className="mt-3" />

      <Button color="default" fullWidth className="mt-3">
        Submit
      </Button>
    </>
  );
}
