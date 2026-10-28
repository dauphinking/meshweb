const LOCALES: Record<string, string> = {
  en: "en-AU",
  fr: "fr-FR",
  es: "es-ES",
  ru: "ru-RU",
  ar: "ar-u-nu-latn",
}

export function formatPostDate(date: string, lang: string): string {
  return new Date(date).toLocaleDateString(LOCALES[lang] ?? "en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
