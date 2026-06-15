import type { Metadata } from 'next'
import Link from 'next/link'
import { LogoText } from '@/components/LogoText'

export const metadata: Metadata = {
  title: { absolute: 'Ankur Nema — Coming Soon' },
  description: 'Mentoring, career guidance, and expert consulting by Ankur Nema — launching soon.',
  openGraph: {
    title: 'Ankur Nema — Coming Soon',
    description: 'Mentoring, career guidance, and expert consulting by Ankur Nema — launching soon.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
}

export default function Home() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-6 py-12 sm:py-20 landscape:py-3 bg-brand-canvas dark:bg-brand-canvas-dark">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-10 landscape:mb-5">
          <LogoText className="h-20 w-auto landscape:h-12" />
        </div>

        <p className="text-brand-navy dark:text-brand-amber-dark text-sm font-semibold tracking-widest uppercase mb-6 landscape:mb-2">
          Coming Soon
        </p>

        <p className="text-brand-slate dark:text-brand-slate-dark text-lg mb-6 landscape:mb-2">
          Director – DevOps &amp; Developer Productivity | Consultant
        </p>

        <p className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base max-w-xl mx-auto mb-10 landscape:mb-5 landscape:text-sm">
          Mentoring, career guidance, and expert consulting — launching soon.
        </p>

        <Link
          href="/about"
          className="inline-block bg-brand-amber dark:bg-brand-amber-dark text-brand-navy font-semibold px-8 py-3 font-sans rounded-full btn-3d-primary"
        >
          About Me
        </Link>
      </div>
    </section>
  )
}
