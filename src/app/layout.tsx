import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import Link from 'next/link'
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
          <header className="w-full px-6 py-4 bg-brand-surface dark:bg-brand-surface-dark border-b border-brand-slate/20 dark:border-brand-slate-dark/20">
            <div className="flex items-center justify-between max-w-5xl mx-auto">
              <Link href="/" aria-label="Ankur Nema — home">
                <LogoText />
              </Link>
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 flex flex-col">{children}</main>
          <footer className="w-full px-6 py-6 bg-brand-surface dark:bg-brand-surface-dark border-t border-brand-slate/20 dark:border-brand-slate-dark/20 text-brand-slate dark:text-brand-slate-dark text-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
              <p>© {new Date().getFullYear()} Ankur Nema</p>
              <div className="flex gap-6">
                <a
                  href="https://linkedin.com/in/ankurnema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-navy dark:hover:text-brand-charcoal-dark transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ankurnema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-navy dark:hover:text-brand-charcoal-dark transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
