"use client"

import { FC, useState } from "react"
import { useTheme } from "next-themes"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react"
import { Palette, Globe, Sun, Moon, Sparkles } from "lucide-react"

// Theme options with colors
const themes = [
  { key: "light", label: "Light", icon: Sun, color: "bg-amber-100" },
  { key: "dark", label: "Dark", icon: Moon, color: "bg-slate-800" },
  { key: "blue", label: "Blue", icon: Sparkles, color: "bg-blue-500" },
  { key: "purple", label: "Purple", icon: Sparkles, color: "bg-purple-500" },
  { key: "green", label: "Green", icon: Sparkles, color: "bg-green-500" },
]

// Language options
const languages = [
  { key: "id", label: "🇮🇩 Indonesia", name: "Bahasa Indonesia" },
  { key: "en", label: "🇬🇧 English", name: "English" },
]

interface SettingsSwitcherProps {
  onLocaleChange?: (locale: string) => void
  currentLocale?: string
}

export const SettingsSwitcher: FC<SettingsSwitcherProps> = ({ onLocaleChange, currentLocale = "id" }) => {
  const { theme, setTheme } = useTheme()
  const [locale, setLocale] = useState(currentLocale)

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale)
    onLocaleChange?.(newLocale)
    // Store in localStorage
    localStorage.setItem("locale", newLocale)
  }

  const currentTheme = themes.find((t) => t.key === theme) || themes[0]
  const currentLang = languages.find((l) => l.key === locale) || languages[0]

  return (
    <div className="flex items-center gap-2">
      {/* Language Switcher */}
      <Dropdown>
        <DropdownTrigger>
          <Button variant="flat" size="sm" className="min-w-0 px-2">
            <Globe size={18} />
            <span className="hidden sm:inline ml-1">{currentLang.label}</span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Language selection"
          selectionMode="single"
          selectedKeys={new Set([locale])}
          onSelectionChange={(keys) => {
            const selected = Array.from(keys)[0] as string
            if (selected) handleLocaleChange(selected)
          }}
        >
          {languages.map((lang) => (
            <DropdownItem key={lang.key} description={lang.name}>
              {lang.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      {/* Theme Switcher */}
      <Dropdown>
        <DropdownTrigger>
          <Button variant="flat" size="sm" className="min-w-0 px-2">
            <Palette size={18} />
            <span className="hidden sm:inline ml-1">{currentTheme.label}</span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Theme selection"
          selectionMode="single"
          selectedKeys={new Set([theme || "dark"])}
          onSelectionChange={(keys) => {
            const selected = Array.from(keys)[0] as string
            if (selected) setTheme(selected)
          }}
        >
          {themes.map((t) => {
            const IconComponent = t.icon
            return (
              <DropdownItem key={t.key} startContent={<div className={`w-4 h-4 rounded-full ${t.color}`} />}>
                <div className="flex items-center gap-2">
                  <IconComponent size={14} />
                  {t.label}
                </div>
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
