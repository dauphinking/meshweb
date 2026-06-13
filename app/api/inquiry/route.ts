import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, company, contact, product, message } = await req.json()

    if (!name || !contact) {
      return NextResponse.json({ error: "Name and contact are required" }, { status: 400 })
    }

    const lines = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Contact: ${contact}`,
      product ? `Product of Interest: ${product}` : null,
      message ? `Message:\n${message}` : null,
    ].filter(Boolean)

    const { error } = await resend.emails.send({
      from: "ScreenMesh Inquiry <inquiry@screenmesh.org>",
      to: "contact@biditech.cn",
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `Mining Screen Mesh Inquiry – ${product || "General"} [from ${name}]`,
      text: lines.join("\n\n"),
      html: `<div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#0e7490">New Inquiry – HWZ Mining Screen Mesh</h2>
        ${lines.map((l) => `<p style="margin:8px 0">${l!.replace(/\n/g, "<br>")}</p>`).join("")}
        <hr style="margin-top:24px;border:none;border-top:1px solid #e5e7eb">
        <p style="color:#9ca3af;font-size:12px">Sent via screenmesh.org inquiry form</p>
      </div>`,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Inquiry route error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
