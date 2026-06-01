"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
]

export function LanguageSwitcher({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const switchLang = (newLang: string) => {
    document.cookie = `preferred-locale=${newLang};path=/;max-age=${365 * 24 * 60 * 60}`
    const segments = pathname.split("/")
    segments[1] = newLang
    router.push(segments.join("/"))
    setOpen(false)
  }

  const current = languages.find((l) => l.code === lang) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-slate-700 hover:text-cyan-600 font-medium transition-colors px-2 py-1 rounded border border-slate-200 hover:border-cyan-300"
        aria-label="Select language"
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline text-sm">{current.name}</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-50 min-w-36">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLang(l.code)}
              className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-50 transition-colors text-left ${
                l.code === lang ? "text-cyan-600 font-semibold bg-cyan-50" : "text-slate-700"
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
