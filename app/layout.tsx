import type { Metadata } from 'next'
import { Geist_Mono, Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const _montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const _openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  title: 'Modern Digital Labs — Build Modern Digital Experiences',
  description: 'Modern Digital Labs (MDL) designs and develops fast, modern, and scalable websites and web applications for businesses, startups, and creators.',
  generator: 'v0.app',
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
