import type { Metadata } from 'next'
import { Geist_Mono, Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import MotionProvider from '@/components/motion-provider'

const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const _montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const _openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  metadataBase: new URL('https://moderndigitallabs.co.zw'),
  title: {
    default: 'Modern Digital Labs — Web & App Development in Zimbabwe',
    template: '%s | Modern Digital Labs',
  },
  description:
    'Modern Digital Labs builds fast, modern websites and web apps for businesses in Harare and across Zimbabwe, plus domain registration and hosting setup.',
  applicationName: 'Modern Digital Labs',
  // Google ignores the keywords meta tag; kept short for other engines only.
  keywords: [
    'Modern Digital Labs',
    'web development Zimbabwe',
    'website design Harare',
    'web hosting Zimbabwe',
    'domain registration Zimbabwe',
  ],
  authors: [{ name: 'Modern Digital Labs', url: 'https://moderndigitallabs.co.zw' }],
  creator: 'Modern Digital Labs',
  publisher: 'Modern Digital Labs',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    url: 'https://moderndigitallabs.co.zw',
    siteName: 'Modern Digital Labs',
    title: 'Modern Digital Labs — Web & App Development in Zimbabwe',
    description:
      'Fast, modern, and scalable websites and web applications for businesses, startups, and creators. Domain registration and hosting setup included.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Modern Digital Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Digital Labs — Web & App Development in Zimbabwe',
    description:
      'Fast, modern, and scalable websites and web applications for businesses, startups, and creators in Zimbabwe.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

const SITE_URL = 'https://moderndigitallabs.co.zw'

// Organization + WebSite structured data, read by Google, Bing and AI answer engines.
// Add profile URLs (LinkedIn, Facebook, Clutch, Google Business Profile) to `sameAs` as they are created.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'Modern Digital Labs',
      alternateName: 'MDL',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.jpg`,
      image: `${SITE_URL}/og-image.png`,
      description:
        'Modern Digital Labs designs and develops websites and web applications for businesses in Zimbabwe, and provides domain registration, web hosting, and maintenance.',
      telephone: '+263711314881',
      areaServed: [
        { '@type': 'City', name: 'Harare' },
        { '@type': 'Country', name: 'Zimbabwe' },
      ],
      knowsAbout: [
        'Website development',
        'Web application development',
        'Web hosting',
        'Domain registration',
        'Website maintenance',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: [
          'Website Development',
          'Web Applications',
          'Web Hosting',
          'Domain Registration',
          'Maintenance & Support',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
      sameAs: [] as string[],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Modern Digital Labs',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-ZW',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" style={{ colorScheme: 'light' }}>
      <body className={`font-sans antialiased ${_montserrat.variable} ${_openSans.variable} ${_geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
