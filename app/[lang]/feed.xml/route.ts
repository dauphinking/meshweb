import { blogPosts, localizePost } from "@/lib/blog"
import { getDictionary } from "@/lib/get-dictionary"

export const dynamic = "force-static"

const locales = ["en", "fr", "es", "ru", "ar"]
const baseUrl = "https://www.screenmesh.org"

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function GET(_req: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!locales.includes(lang)) return new Response("Not found", { status: 404 })

  const dict = await getDictionary(lang)
  const posts = blogPosts
    .map((p) => localizePost(p, lang))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const items = posts
    .map((post) => {
      const url = `${baseUrl}/${lang}/blog/${post.slug}`
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${esc(post.description)}</description>
    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`HWZ Industrial Technology – ${dict.blogPage.title}`)}</title>
    <link>${baseUrl}/${lang}/blog</link>
    <description>${esc(dict.blogPage.subtitle)}</description>
    <language>${lang}</language>
    <atom:link href="${baseUrl}/${lang}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}
