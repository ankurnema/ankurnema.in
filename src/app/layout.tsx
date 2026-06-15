import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Providers } from '@/components/Providers'
import { ClientShell } from '@/components/ClientShell'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ankurnema.in'),
  title: { default: 'Ankur Nema', template: '%s | Ankur Nema' },
  description: 'Mentoring · Career Guidance · Resume Review',
  openGraph: {
    title: 'Ankur Nema',
    description: 'Mentoring · Career Guidance · Resume Review',
    url: 'https://ankurnema.in',
    siteName: 'Ankur Nema',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankur Nema',
    description: 'Mentoring · Career Guidance · Resume Review',
    images: ['/og-default.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="bg-brand-canvas dark:bg-brand-canvas-dark text-brand-charcoal dark:text-brand-charcoal-dark font-sans min-h-dvh flex flex-col">
        <Providers>
          <ClientShell>{children}</ClientShell>
        </Providers>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
