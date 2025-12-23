"use client"

import React from "react"
import { title } from "@/components/primitives"
import { Card, CardHeader, CardBody, Divider, Input, Textarea, Button } from "@nextui-org/react"
import { Mail, Phone, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto py-8 px-4">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className={`${title({ color: "blue" })} section-title-decoration`}>Contact</h1>
        <p className="text-default-500 mt-6">Hubungi kami untuk informasi lebih lanjut tentang ketersediaan kamar dan fasilitas.</p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Email Card */}
        <a
          href="mailto:mrizkyhaksono@gmail.com"
          target="_blank"
          className="flex items-center gap-4 p-4 rounded-xl bg-default-50 dark:bg-default-100/10 border border-default-200 dark:border-default-100/20 hover:border-primary/50 transition-all group"
        >
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform">
            <Mail size={22} />
          </div>
          <div>
            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Email</p>
            <p className="text-sm text-default-500">mrizkyhaksono@gmail.com</p>
          </div>
        </a>

        {/* WhatsApp Card */}
        <a
          href="https://wa.me/6281337283023"
          target="_blank"
          className="flex items-center gap-4 p-4 rounded-xl bg-default-50 dark:bg-default-100/10 border border-default-200 dark:border-default-100/20 hover:border-success/50 transition-all group"
        >
          <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg group-hover:scale-110 transition-transform">
            <Phone size={22} />
          </div>
          <div>
            <p className="font-semibold text-foreground group-hover:text-success transition-colors">WhatsApp</p>
            <p className="text-sm text-default-500">081337283023</p>
          </div>
        </a>
      </div>

      {/* Help Text */}
      <div className="flex items-center gap-2 text-default-500 text-sm mb-6">
        <MessageCircle size={16} />
        <p>Hubungi kami kapan saja, kami siap membantu Anda!</p>
      </div>

      {/* Contact Form */}
      <Card className="bg-default-50 dark:bg-default-100/10 border border-default-200 dark:border-default-100/20 shadow-lg">
        <CardHeader className="pb-0">
          <h2 className="text-lg font-semibold text-foreground">Kirim Pesan</h2>
        </CardHeader>
        <Divider className="my-3" />
        <CardBody className="gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input type="text" label="Name" placeholder="Masukkan nama Anda" variant="bordered" size="sm" />
            <Input type="email" label="Email" placeholder="Masukkan email Anda" variant="bordered" size="sm" />
          </div>

          <Textarea label="Pesan" placeholder="Tulis pesan Anda di sini..." variant="bordered" minRows={3} size="sm" />

          <Button color="primary" className="font-semibold" size="md">
            Kirim Pesan
          </Button>
        </CardBody>
      </Card>
    </section>
  )
}
