import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.screenmesh.org'),
  title: {
    default: 'Mining Screening Media & Vibrating Screen Panels Supplier | HWZ Industrial Technology',
    template: '%s | HWZ Mining Screening Media',
  },
  description:
    'HWZ Industrial Technology supplies mining screening media, vibrating screen panels, polyurethane screen panels, dewatering screens and quarry screen mesh for coal mining, copper, gold and hard rock mining. Custom-manufactured wear parts exported to Australia, Southeast Asia, Africa, Peru and Chile.',
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
    'Leading supplier of mining screening media, vibrating screen panels, polyurethane screen panels, dewatering screen panels and quarry screen mesh for coal mining, non-ferrous metal mining, hard rock mining and aggregate processing.',
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
    areaServed: ['AU', 'PE', 'CL', 'SG', 'MY', 'ID', 'PH', 'ZA', 'NG', 'GH', 'CN'],
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
