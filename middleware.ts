import { NextRequest, NextResponse } from "next/server"

const locales = ["en", "fr", "es", "ru", "ar"]
const defaultLocale = "en"

const frenchCountries = new Set(["FR", "BE", "CH", "LU", "MA", "TN", "DZ", "SN", "CI", "CM", "CD", "MG", "CG"])
const spanishCountries = new Set(["ES", "MX", "AR", "CO", "PE", "VE", "CL", "EC", "BO", "PY", "UY", "CR", "PA", "DO", "GT", "HN", "SV", "NI", "CU"])
const russianCountries = new Set(["RU", "KZ", "BY", "UZ", "UA", "KG", "TJ", "TM", "AZ", "AM", "GE", "MD"])
const arabicCountries = new Set(["SA", "AE", "EG", "JO", "LB", "SY", "IQ", "KW", "QA", "BH", "OM", "YE", "LY", "SD", "MR", "DJ", "SO", "PS"])

function getLocaleFromCountry(country: string): string {
  if (frenchCountries.has(country)) return "fr"
  if (spanishCountries.has(country)) return "es"
  if (russianCountries.has(country)) return "ru"
  if (arabicCountries.has(country)) return "ar"
  return "en"
}

function getLocaleFromAcceptLanguage(acceptLanguage: string): string {
  const parts = acceptLanguage.split(",")
  for (const part of parts) {
    const lang = part.split(";")[0].trim().toLowerCase()
    if (lang.startsWith("fr")) return "fr"
    if (lang.startsWith("es")) return "es"
    if (lang.startsWith("ru")) return "ru"
    if (lang.startsWith("ar")) return "ar"
    if (lang.startsWith("en")) return "en"
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files, api routes, _next, images, robots, sitemap
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/hwimages") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Check if path already has a locale prefix
  const pathnameLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )
  if (pathnameLocale) {
    return NextResponse.next()
  }

  // Determine locale: cookie > IP country > Accept-Language header
  let locale = defaultLocale

  const cookieLocale = request.cookies.get("preferred-locale")?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    locale = cookieLocale
  } else {
    const country = request.headers.get("x-vercel-ip-country") ?? ""
    if (country) {
      locale = getLocaleFromCountry(country.toUpperCase())
    } else {
      const acceptLanguage = request.headers.get("accept-language") ?? ""
      if (acceptLanguage) {
        locale = getLocaleFromAcceptLanguage(acceptLanguage)
      }
    }
  }

  // Redirect to locale-prefixed path
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/|hwimages/).*)",
  ],
}
