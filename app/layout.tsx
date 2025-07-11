import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mining Screen Mesh Expert',
  description: 'Expert in Mining Screen Mesh Solutions',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
