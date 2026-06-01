import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, CheckCircle, Zap, Shield, Award, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getDictionary } from "@/lib/get-dictionary"
import { HeroCTAButton } from "@/components/hero-cta-button"
import { FloatingWhatsAppButton } from "@/components/whatsapp-button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { blogPosts } from "@/lib/blog"

const locales = ["en", "fr", "es", "ru", "ar"]
const baseUrl = "https://www.screenmesh.org"

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const alternateLanguages = Object.fromEntries(
    locales.map((l) => [l, `${baseUrl}/${l}`])
  )

  return {
    metadataBase: new URL(baseUrl),
    title: `Mining Screen Mesh Manufacturer | HWZ Industrial Technology`,
    description: dict.about.p1.slice(0, 160),
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: alternateLanguages,
    },
    openGraph: {
      title: "Mining Screen Mesh Manufacturer | HWZ Industrial Technology",
      description: dict.hero.desc1,
      type: "website",
      locale: lang,
      siteName: "HWZ Industrial Technology – Mining Screen Mesh",
      images: [
        {
          url: "/images/wire-mesh-hero.png",
          width: 1200,
          height: 630,
          alt: "HWZ Industrial Technology – Premium Mining Screen Mesh Manufacturer",
        },
      ],
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  const industryIcons = [
    <Zap key="coal" className="h-10 w-10 text-amber-500" />,
    <Award key="nonferrous" className="h-10 w-10 text-yellow-500" />,
    <Shield key="hardrock" className="h-10 w-10 text-cyan-500" />,
    <CheckCircle key="aggregate" className="h-10 w-10 text-green-500" />,
  ]

  const premiumIcons = [
    <Shield key="quality" className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />,
    <CheckCircle key="versatile" className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />,
    <Award key="cost" className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />,
  ]

  const processIcons = [
    <Zap key="auto" className="h-8 w-8 text-cyan-500 mb-4" />,
    <CheckCircle key="prod" className="h-8 w-8 text-cyan-500 mb-4" />,
    <Shield key="safe" className="h-8 w-8 text-cyan-500 mb-4" />,
    <Award key="qual" className="h-8 w-8 text-cyan-500 mb-4" />,
  ]

  const advantageIcons = [
    <Zap key="auto" className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />,
    <Shield key="env" className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />,
    <Award key="flex" className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />,
  ]

  const screenImages = [
    "/images/anti-clogging-screen.png",
    "/images/dewatering-screen.png",
    "/images/welded-screen.png",
    "/images/woven-wire-screen.png",
    "/images/perforated-plate-screen.png",
  ]

  const machineryImages = [
    "/images/spiral-sand-washer.png",
    "/images/wheel-sand-washer.png",
    "/images/fine-sand-recovery-device.png",
    "/images/vibrating-feeder.png",
    "/images/circular-vibrating-screen.png",
    "/images/jaw-crusher.png",
    "/images/multi-cylinder-hydraulic-cone-crusher.png",
    "/images/impact-crusher.png",
    "/images/mobile-jaw-crushing-station.png",
    "/images/mobile-cone-crushing-station.png",
  ]

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/logo.jpg"
                alt="HWZ Industrial Technology – Mining Screen Mesh Manufacturer"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-6" aria-label="Main navigation">
                <a href={`/${lang}/#about`} className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  {dict.nav.about}
                </a>
                <a href={`/${lang}/#industries`} className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  {dict.nav.industries}
                </a>
                <a href={`/${lang}/#products`} className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  {dict.nav.products}
                </a>
                <a href={`/${lang}/#process`} className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  {dict.nav.process}
                </a>
                <a href={`/${lang}/#faq`} className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  {dict.nav.faq}
                </a>
                <a href={`/${lang}/#contact`} className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  {dict.nav.contact}
                </a>
                <Link href={`/${lang}/blog`} className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  {dict.nav.blog}
                </Link>
              </nav>
              <LanguageSwitcher lang={lang} />
              <div className="flex items-center space-x-2 text-right">
                <Mail className="h-5 w-5 text-cyan-500" />
                <div>
                  <div className="text-sm text-slate-600 font-semibold">Customer Service</div>
                  <div className="text-lg font-bold text-cyan-600">contact@biditech.cn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wire-mesh-hero.png"
            alt="HWZ High-Performance Mining Screen Mesh – Vibrating Screen Panels for Coal, Non-Ferrous and Hard Rock Mining"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {dict.hero.title}
            <span className="block text-cyan-400">{dict.hero.subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light text-slate-200">
            {dict.hero.desc1}
          </p>
          <p className="text-lg mb-8 font-light text-slate-300">
            {dict.hero.desc2}
          </p>
          <HeroCTAButton label={dict.hero.cta} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.about.title}</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>HWZ Industrial Technology</strong>{" "}
                {dict.about.p1.replace("HWZ Industrial Technology is", "is").replace("HWZ Industrial Technology ", "")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {dict.about.p2}
              </p>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-700 mb-2">{dict.about.stat1.value}</div>
                  <div className="text-gray-600">{dict.about.stat1.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-700 mb-2">{dict.about.stat2.value}</div>
                  <div className="text-gray-600">{dict.about.stat2.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-700 mb-2">{dict.about.stat3.value}</div>
                  <div className="text-gray-600">{dict.about.stat3.label}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/company-building.png"
                alt="HWZ Industrial Technology Manufacturing Facility – Mining Screen Mesh Production"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.industries.title}</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {dict.industries.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.industries.items.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">{industryIcons[index]}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.applications.map((app, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-cyan-500 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Screens Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.premiumScreens.title}</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-lg shadow-xl">
              <div className="space-y-8">
                {dict.premiumScreens.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {premiumIcons[index]}
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-200">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/images/premium-screens-robot.png"
                alt="HWZ Robotic Welding System – Automated Mining Screen Mesh Production for Superior Quality"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Robotic Welding Process */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.process.title}</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-slate-700">{dict.process.roboticTitle} </span>
              <span className="text-2xl font-bold text-cyan-600">{dict.process.roboticSubtitle}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/images/screen-process-hexagon.png"
                alt="Six-Step Mining Screen Mesh Production Process – From Wire Drawing to Finished Vibrating Screen Panels"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dict.process.items.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    {processIcons[index]}
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screen Series */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-600">HWZ</span> {dict.screenSeries.title.replace("HWZ ", "")}
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {dict.screenSeries.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.screenSeries.items.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-gray-100 rounded-t-lg overflow-hidden">
                    <Image
                      src={screenImages[index] || "/placeholder.svg"}
                      alt={`${product.name} – HWZ Mining Screen Mesh`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-center mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 text-center">{product.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sand Production Line Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-600">{dict.sandLine.title}</span>
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {dict.sandLine.subtitle}
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Image
                src="/images/sand-production-flow-complete.png"
                alt="Complete Sand and Aggregate Production Line Process Flow – Crushing, Screening and Fine Sand Recovery"
                width={1400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{dict.sandLine.processTitle}</h3>
              <div className="space-y-4">
                {dict.sandLine.features.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <p className="text-gray-700">
                      <strong>{item.title}:</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-6">{dict.sandLine.advantages.title}</h3>
              <div className="space-y-6">
                {dict.sandLine.advantages.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {advantageIcons[index]}
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-slate-200 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-600">HWZ</span> {dict.machinery.title.replace("HWZ ", "")}
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {dict.machinery.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.machinery.items.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-gray-100 rounded-t-lg overflow-hidden">
                    <Image
                      src={machineryImages[index] || "/placeholder.svg"}
                      alt={`${product.name} – HWZ Mining Machinery`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-center mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 text-center">{product.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.faq.title}</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.faq.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {dict.faq.items.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-cyan-200 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{dict.blogSection.title}</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.blogSection.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:border-cyan-300 hover:shadow-md transition-all duration-300">
                  <p className="text-xs text-gray-400 mb-3">
                    {new Date(post.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-600 mb-3 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href={`/${lang}/blog`}
              className="inline-flex items-center border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              {dict.blogSection.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">{dict.contact.title}</h2>
              <div className="w-16 h-1 bg-cyan-400 mb-8"></div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-200">{dict.contact.address}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <span className="text-lg text-slate-200">{dict.contact.phone}</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <span className="text-lg text-slate-200">{dict.contact.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-lg shadow-xl">
              <Image
                src="/images/company-location-map.png"
                alt="HWZ Industrial Technology Location – Shanghai, China – Mining Screen Mesh Manufacturer"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="get-in-touch" className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{dict.getInTouch.title}</h2>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.getInTouch.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
                <Image
                  src="/images/whatsapp-qr.png"
                  alt="WhatsApp QR Code – Contact HWZ Mining Screen Mesh Team"
                  width={250}
                  height={250}
                  className="w-60 h-60 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">{dict.getInTouch.scanTitle}</h3>
              <p className="text-gray-600">{dict.getInTouch.scanDesc}</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{dict.getInTouch.whatsapp.title}</h3>
                    <p className="text-gray-600">{dict.getInTouch.whatsapp.desc}</p>
                  </div>
                </div>
                <p className="text-gray-700">{dict.getInTouch.whatsapp.body}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-cyan-500 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{dict.getInTouch.emailCard.title}</h3>
                    <p className="text-gray-600">{dict.getInTouch.emailCard.desc}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{dict.getInTouch.emailCard.body}</p>
                <a
                  href="mailto:contact@biditech.cn"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contact@biditech.cn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsAppButton ariaLabel="Contact HWZ Mining Screen Mesh on WhatsApp" />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/images/logo.jpg"
                alt="HWZ Industrial Technology – Mining Screen Mesh Manufacturer"
                width={200}
                height={80}
                className="h-16 w-auto mx-auto"
              />
            </div>
            <p className="text-gray-400 mb-2">{dict.footer.tagline1}</p>
            <p className="text-gray-400 mb-2">{dict.footer.tagline2}</p>
            <p className="text-gray-500 text-sm">{dict.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
