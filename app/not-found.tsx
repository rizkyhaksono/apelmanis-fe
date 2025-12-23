import { Button } from "@nextui-org/button"
import { title } from "@/components/primitives"
import NotFoundComponent from "@/components/404"
import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-orb hero-orb-1 opacity-30" />
        <div className="hero-orb hero-orb-2 opacity-20" />
      </div>

      <div className="relative z-10 items-center flex flex-col justify-center text-center animate-fade-in">
        <h1 className={`${title({ color: "blue" })} mb-4`}>404</h1>
        <p className="text-xl text-default-500 mb-2">Page Not Found</p>
        <p className="text-default-400 mb-8 max-w-md">Halaman yang Anda cari tidak ditemukan. Mungkin halaman telah dipindahkan atau dihapus.</p>

        <NotFoundComponent />

        <Link href={"/"}>
          <Button className="mt-8 btn-glow font-semibold" color="primary" size="lg" startContent={<Home size={18} />}>
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </section>
  )
}
