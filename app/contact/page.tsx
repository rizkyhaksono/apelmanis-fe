"use client";

import React, { useEffect, useState } from "react";
import { title } from "@/components/primitives";
import { Input, Textarea } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";

export default function ContactPage() {
  return (
    <div>
      <h1 className={title()}>Contact</h1>

      <div className="flex flex-col xl:w-96 lg:w-96 md:w-96 sm:w-96">
        <Input className="mt-10" type="email" label="Email" placeholder="Enter your email" />
        <Input className="mt-5" type="text" label="Username" placeholder="Enter your username" />
        <Textarea className="mt-5 mb-5" label="Description" placeholder="Enter your description" />
        <button type="submit" className={buttonStyles({ color: "default", radius: "full", variant: "ghost", fullWidth: true })}>
          Submit
        </button>
      </div>
    </div>
  );
}
