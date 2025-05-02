"use client"

import React from "react"
import { title } from "@/components/primitives"
import { Card, CardHeader, CardBody, Divider, Image, Input, Textarea, Button } from "@nextui-org/react"

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
              <Image alt="nextui logo" height={40} radius="sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FXuyifTCgC_7081q7CsFIgtIi53-bXX6Tw&s" width={40} />
              <a href="https://instagram.com/rizkyhaksonoo" target="_blank">
                <p className="text-md text-start">Whatsapp</p>
                <p className="text-small text-default-500">081337283023</p>
              </a>
            </div>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Feel free to contact.</p>
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
  )
}
