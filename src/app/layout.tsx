import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import Link from 'next/link'
import { GoogleAnalytics } from '@next/third-parties/google'
import { LogoText } from '@/components/LogoText'
import { Providers } from '@/components/Providers'
import { ThemeToggle } from '@/components/ThemeToggle'
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
          <header className="w-full px-6 md:px-8 lg:px-12 xl:px-16 py-4 md:py-5 bg-brand-surface dark:bg-brand-surface-dark border-b border-brand-slate/20 dark:border-brand-slate-dark/20">
            <div className="flex items-center justify-between">
              <Link href="/" aria-label="Ankur Nema — home">
                <LogoText className="h-8 w-auto sm:h-10 md:h-12" />
              </Link>
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 flex flex-col">{children}</main>
          <footer className="w-full px-6 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8 bg-brand-surface dark:bg-brand-surface-dark border-t border-brand-slate/20 dark:border-brand-slate-dark/20 text-brand-slate dark:text-brand-slate-dark text-sm md:text-lg">
            <p>© {new Date().getFullYear()} Ankur Nema</p>
          </footer>
        </Providers>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
