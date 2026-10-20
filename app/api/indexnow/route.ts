import { NextResponse } from "next/server"
import { blogPosts } from "@/lib/blog"

const INDEX_NOW_KEY = "501ef864bb1443beb34e4f1f6eb565d1"
const BASE_URL = "https://www.screenmesh.org"
const LOCALES = ["en", "fr", "es", "ru", "ar"]

const URLS = [
  "/",
  ...LOCALES.flatMap((lang) => [
    `/${lang}`,
    `/${lang}/blog`,
    ...blogPosts.map((post) => `/${lang}/blog/${post.slug}`),
  ]),
].map((path) => `${BASE_URL}${path}`)

export async function POST() {
  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: "www.screenmesh.org",
        key: INDEX_NOW_KEY,
        keyLocation: `${BASE_URL}/${INDEX_NOW_KEY}.txt`,
        urlList: URLS,
      }),
    })

    if (res.ok || res.status === 202) {
      return NextResponse.json({ ok: true, submitted: URLS.length, status: res.status })
    }
    const text = await res.text()
    return NextResponse.json({ error: text, status: res.status }, { status: 500 })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ urls: URLS, key: INDEX_NOW_KEY })
}
