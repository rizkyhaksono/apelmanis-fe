"use client"

import * as React from "react"
import { NextIntlClientProvider } from "next-intl"

import idMessages from "@/messages/id.json"
import enMessages from "@/messages/en.json"

const messages: Record<string, typeof idMessages> = {
  id: idMessages,
  en: enMessages,
}

export interface ProvidersProps {
  children: React.ReactNode
}

// Locale lives in localStorage; useSyncExternalStore keeps SSR on "id" and hydrates to the saved value.
const listeners = new Set<() => void>()

const readLocale = () => {
  try {
    return localStorage.getItem("locale") === "en" ? "en" : "id"
  } catch {
    return "id"
  }
}

const subscribe = (callback: () => void) => {
  listeners.add(callback)
  window.addEventListener("storage", callback)
  return () => {
    listeners.delete(callback)
    window.removeEventListener("storage", callback)
  }
}

export function Providers({ children }: ProvidersProps) {
  const locale = React.useSyncExternalStore(subscribe, readLocale, () => "id")

  React.useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const handleLocaleChange = React.useCallback((newLocale: string) => {
    try {
      localStorage.setItem("locale", newLocale)
    } catch {}
    listeners.forEach((callback) => callback())
  }, [])

  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale] || messages.id} timeZone="Asia/Jakarta" onError={() => {}}>
      <LocaleContext.Provider value={{ locale, setLocale: handleLocaleChange }}>{children}</LocaleContext.Provider>
    </NextIntlClientProvider>
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
