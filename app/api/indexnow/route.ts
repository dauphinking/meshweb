import { NextResponse } from "next/server"

const INDEX_NOW_KEY = "1f04aaf6e9f14880a4325507db38395d"
const BASE_URL = "https://www.screenmesh.org"

const URLS = [
  "/",
  "/en",
  "/fr",
  "/es",
  "/ru",
  "/ar",
  "/en/blog",
  "/fr/blog",
  "/es/blog",
  "/ru/blog",
  "/ar/blog",
  "/en/blog/common-causes-of-screen-mesh-clogging",
  "/en/blog/polyurethane-screen-panel-properties",
  "/en/blog/vibrating-screen-performance-and-screen-mesh",
  "/en/blog/how-to-prevent-screen-hole-clogging",
  "/en/blog/solving-polyurethane-screen-edge-leakage",
  "/fr/blog/common-causes-of-screen-mesh-clogging",
  "/fr/blog/polyurethane-screen-panel-properties",
  "/es/blog/common-causes-of-screen-mesh-clogging",
  "/es/blog/polyurethane-screen-panel-properties",
  "/ru/blog/common-causes-of-screen-mesh-clogging",
  "/ar/blog/common-causes-of-screen-mesh-clogging",
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
