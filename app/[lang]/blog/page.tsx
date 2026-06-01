import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/blog"
import { getDictionary } from "@/lib/get-dictionary"

const locales = ["en", "fr", "es", "ru", "ar"]

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

  return {
    title: dict.blogPage.title,
    description: dict.blogPage.subtitle,
    alternates: {
      canonical: `https://www.screenmesh.org/${lang}/blog`,
      languages: Object.fromEntries(locales.map((l) => [l, `https://www.screenmesh.org/${l}/blog`])),
    },
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${lang}`} className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
            {dict.blogPage.backToHome}
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{dict.blogPage.title}</h1>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-8 h-1 bg-slate-800"></div>
            <div className="w-8 h-1 bg-cyan-500"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{dict.blogPage.subtitle}</p>
        </div>

        <div className="space-y-8">
          {sorted.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-lg p-8 hover:border-cyan-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-AU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <Link
                  href={`/${lang}/blog/${post.slug}`}
                  className="hover:text-cyan-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{post.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {post.keywords.slice(0, 3).map((kw) => (
                  <span
                    key={kw}
                    className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
              <Link
                href={`/${lang}/blog/${post.slug}`}
                className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
              >
                {dict.blogPage.readMore}
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-10 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">{dict.footer.copyright}</p>
          <p className="text-gray-500 text-xs mt-1">
            Mining Screen Mesh Manufacturer · Shanghai, China · contact@biditech.cn
          </p>
        </div>
      </footer>
    </div>
  )
}
