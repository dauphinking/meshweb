const locales = ["en", "fr", "es", "ru", "ar"]
const rtlLocales = ["ar"]

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const isRtl = rtlLocales.includes(lang)
  return (
    <div dir={isRtl ? "rtl" : "ltr"} lang={lang}>
      {children}
    </div>
  )
}
