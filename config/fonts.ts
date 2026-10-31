import { Hanken_Grotesk, Young_Serif } from "next/font/google"

export const fontDisplay = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-young-serif",
})

export const fontSans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
})
