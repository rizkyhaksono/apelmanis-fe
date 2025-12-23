"use client"

import { useEffect } from "react"
import { Button } from "@nextui-org/button"
import { title } from "@/components/primitives"
import { AlertTriangle, RefreshCw } from "lucide-react"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="hero-orb"
          style={{
            width: "300px",
            height: "300px",
            background: "rgba(239, 68, 68, 0.2)",
            top: "-50px",
            right: "-50px",
            position: "absolute",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 glass-card p-8 md:p-12 text-center max-w-md mx-auto animate-fade-in">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-danger/10 text-danger mb-6">
          <AlertTriangle size={40} />
        </div>

        <h2 className={`${title({ size: "sm" })} text-danger mb-4`}>Oops! Terjadi Kesalahan</h2>

        <p className="text-default-500 mb-8">Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi.</p>

        <Button onClick={() => reset()} color="primary" size="lg" className="btn-glow font-semibold" startContent={<RefreshCw size={18} />}>
          Coba Lagi
        </Button>
      </div>
    </section>
  )
}
