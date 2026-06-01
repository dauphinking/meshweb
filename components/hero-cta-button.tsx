"use client"

import { Button } from "@/components/ui/button"

export function HeroCTAButton({ label }: { label: string }) {
  const scrollToContact = () => {
    const contactSection = document.getElementById("get-in-touch")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <Button
      size="lg"
      onClick={scrollToContact}
      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105"
    >
      {label}
    </Button>
  )
}
