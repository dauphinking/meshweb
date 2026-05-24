import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.biditech.cn'),
  title: {
    default: 'Mining Screen Mesh Manufacturer | HWZ Industrial Technology',
    template: '%s | HWZ Mining Screen Mesh',
  },
  description:
    'HWZ Industrial Technology manufactures premium mining screen mesh, vibrating screen panels and screening media for coal mining, non-ferrous metal mining (copper, gold, iron ore), hard rock mining and aggregate processing. Robotic-welded, custom-made screens exported to Australia, Southeast Asia and Africa.',
  keywords: [
    'mining screen mesh',
    'vibrating screen panels',
    'vibrating screen mesh',
    'coal mining screen',
    'hard rock mining screen',
    'non-ferrous metal mining screen',
    'mineral processing screen',
    'screening media',
    'welded wire screen',
    'woven wire mesh screen',
    'polyurethane screen panels',
    'dewatering screen',
    'anti-clogging screen',
    'jaw crusher',
    'cone crusher',
    'sand production line',
    'copper mine screen',
    'gold mine vibrating screen',
    'iron ore screening media',
    'aggregate screen mesh',
    'mining screen panels manufacturer',
    'mining screen mesh China',
    'mining screen mesh Australia',
    'vibrating screen replacement panels',
    'HWZ mining screen',
  ],
  authors: [{ name: 'HWZ Industrial Technology' }],
  creator: 'HWZ Industrial Technology',
  publisher: 'HWZ Industrial Technology',
  openGraph: {
    title: 'Mining Screen Mesh Manufacturer | HWZ Industrial Technology',
    description:
      'Premium vibrating screen panels and screening media for coal, non-ferrous metal and hard rock mining. Custom manufactured with robotic welding technology. Serving Australia, Southeast Asia and Africa.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'HWZ Industrial Technology – Mining Screen Mesh',
    images: [
      {
        url: '/images/wire-mesh-hero.png',
        width: 1200,
        height: 630,
        alt: 'HWZ Industrial Technology – Premium Mining Screen Mesh Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mining Screen Mesh Manufacturer | HWZ Industrial Technology',
    description:
      'Premium vibrating screen panels and screening media for coal mining, non-ferrous metal mining and hard rock mining.',
    images: ['/images/wire-mesh-hero.png'],
  },
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
  alternates: {
    canonical: 'https://www.biditech.cn',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HWZ Industrial Technology',
  alternateName: ['HWZ Mining Screen Mesh', 'Biditech'],
  url: 'https://www.biditech.cn',
  logo: 'https://www.biditech.cn/images/logo.jpg',
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
    availableLanguage: ['English', 'Chinese'],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Mining Screen Mesh & Vibrating Screen Panels',
  description:
    'Premium mining screen mesh including welded wire screens, woven wire screens, polyurethane screen panels, dewatering screens and anti-clogging screens for coal mining, non-ferrous metal mining and hard rock mining applications.',
  brand: {
    '@type': 'Brand',
    name: 'HWZ',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'HWZ Industrial Technology',
  },
  category: 'Mining Equipment > Screening Media',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'HWZ Industrial Technology',
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
