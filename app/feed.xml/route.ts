import { NextResponse } from "next/server"

export const dynamic = "force-static"

export function GET() {
  return NextResponse.redirect("https://www.screenmesh.org/en/feed.xml", 301)
}
