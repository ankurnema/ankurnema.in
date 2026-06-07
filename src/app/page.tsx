import type { Metadata } from 'next'
import Link from 'next/link'

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
        <p className="text-brand-navy dark:text-brand-amber-dark text-sm font-semibold tracking-widest uppercase mb-6 landscape:mb-2">
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

        <div className="flex items-center gap-4 justify-center">
          <a
            href="https://linkedin.com/in/ankurnema"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="w-10 h-10 rounded-full flex items-center justify-center text-brand-navy dark:text-brand-charcoal-dark hover:text-brand-amber dark:hover:text-brand-amber-dark hover:bg-brand-navy/8 dark:hover:bg-white/10 transition-colors"
          >
            <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/ankurnema"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="w-10 h-10 rounded-full flex items-center justify-center text-brand-navy dark:text-brand-charcoal-dark hover:text-brand-amber dark:hover:text-brand-amber-dark hover:bg-brand-navy/8 dark:hover:bg-white/10 transition-colors"
          >
            <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <span className="text-brand-slate/30 dark:text-brand-slate-dark/30 select-none">|</span>
          <Link
            href="/about"
            className="text-brand-navy dark:text-brand-charcoal-dark hover:text-brand-amber dark:hover:text-brand-amber-dark transition-colors font-semibold text-sm"
          >
            About me →
          </Link>
        </div>
      </div>
    </section>
  )
}
