import type { Metadata } from 'next'
import { Geist_Mono, Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
    'Modern Digital Labs (MDL) designs and develops fast, modern, and scalable websites and web applications for businesses, startups, and creators in Zimbabwe and beyond. We also handle domain registration and hosting setup.',
  applicationName: 'Modern Digital Labs',
  generator: 'v0.app',
  keywords: [
    'Modern Digital Labs',
    'MDL',
    'web development Zimbabwe',
    'website design Zimbabwe',
    'app development Zimbabwe',
    'web application development',
    'software development Zimbabwe',
    'domain registration Zimbabwe',
    'web hosting Zimbabwe',
    'Next.js development',
    'React development',
    'business website',
    'startup website',
    'ecommerce website Zimbabwe',
    'Harare web developer',
    'custom software',
    'mobile app development',
    'digital agency Zimbabwe',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" style={{ colorScheme: 'light' }}>
      <body className={`font-sans antialiased ${_montserrat.variable} ${_openSans.variable} ${_geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
