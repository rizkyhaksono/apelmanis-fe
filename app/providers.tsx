"use client"

import * as React from "react"
import { NextUIProvider } from "@nextui-org/system"
import { useRouter } from "next/navigation"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { NextIntlClientProvider } from "next-intl"

// Import messages
import idMessages from "@/messages/id.json"
import enMessages from "@/messages/en.json"

const messages: Record<string, typeof idMessages> = {
  id: idMessages,
  en: enMessages,
}

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter()
  const [locale, setLocale] = React.useState<string>("id")

  // Load locale from localStorage on mount
  React.useEffect(() => {
    const savedLocale = localStorage.getItem("locale")
    if (savedLocale && (savedLocale === "id" || savedLocale === "en")) {
      setLocale(savedLocale)
    }
  }, [])

  const handleLocaleChange = React.useCallback((newLocale: string) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
  }, [])

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps} themes={["light", "dark", "blue", "purple", "green"]}>
        <NextIntlClientProvider locale={locale} messages={messages[locale] || messages.id} onError={() => {}}>
          <LocaleContext.Provider value={{ locale, setLocale: handleLocaleChange }}>{children}</LocaleContext.Provider>
        </NextIntlClientProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

// Context for locale
interface LocaleContextType {
  locale: string
  setLocale: (locale: string) => void
}

export const LocaleContext = React.createContext<LocaleContextType>({
  locale: "id",
  setLocale: () => {},
})

export const useLocale = () => React.useContext(LocaleContext)
