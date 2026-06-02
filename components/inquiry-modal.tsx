"use client"

import { useState } from "react"
import { X, MessageCircle } from "lucide-react"
import type { Dictionary } from "@/lib/dictionaries"

interface InquiryModalProps {
  dict: Dictionary["inquiry"]
  lang: string
}

export function InquiryModal({ dict, lang }: InquiryModalProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [contact, setContact] = useState("")
  const [product, setProduct] = useState("")
  const [message, setMessage] = useState("")

  const isRtl = lang === "ar"

  function buildBody() {
    return [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Contact: ${contact}`,
      product ? `Product: ${product}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n")
  }

  function handleEmail() {
    const subject = encodeURIComponent("Mining Screen Mesh Inquiry – " + (product || "General"))
    const body = encodeURIComponent(buildBody())
    window.open(`mailto:contact@biditech.cn?subject=${subject}&body=${body}`, "_blank")
  }

  function handleWhatsApp() {
    const text = encodeURIComponent(
      `Hello HWZ Mining Screen Mesh,\n\n` + buildBody()
    )
    window.open(`https://wa.me/8615821921930?text=${text}`, "_blank")
  }

  return (
    <>
      {/* Floating button – bottom-left */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-cyan-700 transition-colors"
        aria-label={dict.buttonLabel}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">{dict.buttonLabel}</span>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{dict.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{dict.subtitle}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 ml-2"
                aria-label={dict.close}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <div className="space-y-3">
              <input
                type="text"
                placeholder={dict.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="text"
                placeholder={dict.companyPlaceholder}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="text"
                placeholder={dict.contactPlaceholder}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <div>
                <label className="block text-xs text-gray-500 mb-1">{dict.productLabel}</label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                >
                  <option value="">—</option>
                  {dict.products.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                rows={3}
                placeholder={dict.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              />
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleEmail}
                disabled={!name || !contact}
                className="flex-1 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {dict.submitEmail}
              </button>
              <button
                onClick={handleWhatsApp}
                disabled={!name || !contact}
                className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {dict.submitWhatsApp}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
