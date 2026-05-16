import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Perfucoco | Perfumes de Lujo en Bogotá',
  description: 'De acá sales perfumad@. Descubre nuestra exclusiva colección de perfumes de las mejores marcas del mundo. Envíos a toda Colombia.',
  keywords: ['perfumes', 'fragancias', 'lujo', 'Bogotá', 'Colombia', 'perfumería'],
  openGraph: {
    title: 'Perfucoco | Perfumes de Lujo',
    description: 'De acá sales perfumad@. Exclusiva colección de perfumes de lujo.',
    type: 'website',
    images: ['/images/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfucoco | Perfumes de Lujo en Bogotá',
    description: 'De acá sales perfumad@. Exclusiva colección de perfumes de lujo.',
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
