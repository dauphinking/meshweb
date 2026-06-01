import { en, fr, es, ru, ar, type Dictionary } from "@/lib/dictionaries/index"

const dictionaries: Record<string, Dictionary> = { en, fr, es, ru, ar }

export async function getDictionary(locale: string): Promise<Dictionary> {
  return dictionaries[locale] ?? dictionaries["en"]
}
