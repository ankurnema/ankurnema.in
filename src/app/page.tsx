import type { Metadata } from 'next'

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
        <p className="text-brand-amber dark:text-brand-amber-dark text-sm font-semibold tracking-widest uppercase mb-6 landscape:mb-2">
          Coming Soon
        </p>

        <h1 className="text-5xl landscape:text-3xl font-semibold text-brand-navy dark:text-brand-charcoal-dark mb-4 landscape:mb-1 font-heading">
          Ankur Nema
        </h1>

        <p className="text-brand-slate dark:text-brand-slate-dark text-lg mb-6 landscape:mb-2">
          Director – DevOps &amp; Developer Productivity | Consultant
        </p>

        <p className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base max-w-xl mx-auto mb-10 landscape:mb-3 landscape:text-sm">
          Mentoring, career guidance, and expert consulting — launching soon.
        </p>

        <div className="flex gap-6 justify-center">
          <a
            href="https://linkedin.com/in/ankurnema"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy dark:text-brand-charcoal-dark hover:text-brand-amber dark:hover:text-brand-amber-dark transition-colors font-semibold"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ankurnema"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy dark:text-brand-charcoal-dark hover:text-brand-amber dark:hover:text-brand-amber-dark transition-colors font-semibold"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
