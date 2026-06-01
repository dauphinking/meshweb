import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.screenmesh.org'),
  title: {
    default: 'Mining Screen Mesh Manufacturer | HWZ Industrial Technology',
    template: '%s | HWZ Mining Screen Mesh',
  },
  description:
    'HWZ Industrial Technology manufactures premium mining screen mesh, vibrating screen panels and screening media for coal mining, non-ferrous metal mining, hard rock mining and aggregate processing. Robotic-welded, custom-made screens exported to Australia, Southeast Asia and Africa.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HWZ Industrial Technology',
  alternateName: ['HWZ Mining Screen Mesh', 'Biditech'],
  url: 'https://www.screenmesh.org',
  logo: 'https://www.screenmesh.org/images/logo.jpg',
  description:
    'Leading manufacturer of mining screen mesh, vibrating screen panels and screening media for coal mining, non-ferrous metal mining, hard rock mining and aggregate processing.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Minhang',
    addressRegion: 'Shanghai',
    addressCountry: 'CN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+86-21-54385286',
    contactType: 'sales',
    email: 'contact@biditech.cn',
    areaServed: ['AU', 'SG', 'MY', 'ID', 'PH', 'ZA', 'NG', 'GH', 'CN'],
    availableLanguage: ['English', 'Chinese', 'French', 'Spanish', 'Russian', 'Arabic'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
