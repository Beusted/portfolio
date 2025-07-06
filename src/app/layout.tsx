import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Brian Ngo - Computer Science Student',
    template: '%s | Brian Ngo - Computer Science Student'
  },
  description: 'Computer Science student at Cal State Fullerton specializing in full-stack development, AI/ML, and scalable applications. Expected graduation May 2026.',
  keywords: [
    'software engineer',
    'full stack developer',
    'react developer',
    'node.js developer',
    'typescript',
    'javascript',
    'web development',
    'frontend developer',
    'backend developer',
    'portfolio'
  ],
  authors: [{ name: 'Brian Ngo', url: 'https://brianngo.dev' }],
  creator: 'Brian Ngo',
  publisher: 'Brian Ngo',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brianngo.dev',
    siteName: 'Brian Ngo - Computer Science Student',
    title: 'Brian Ngo - Computer Science Student Portfolio',
    description: 'Computer Science student at Cal State Fullerton specializing in full-stack development and AI/ML. View my projects, experience, and get in touch for opportunities.',
    images: [
      {
        url: 'https://brianngo.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brian Ngo - Computer Science Student Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian Ngo - Computer Science Student',
    description: 'Computer Science student specializing in full-stack development and AI/ML.',
    creator: '@ngobrian',
    images: ['https://brianngo.dev/og-image.jpg'],
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://brianngo.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="icon" href="/images/icon/dinosaur.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased min-h-screen`}>
        <div className="stars" aria-hidden="true" />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}