import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle2,
  Link2,
  Search,
  MessageCircle,
  ClipboardList,
  Mail,
} from 'lucide-react'
import { FadeInSection } from '@/components/about/FadeInSection'
import { ProcessFlow } from '@/components/services/ProcessFlow'

export const metadata: Metadata = {
  title: 'LinkedIn Review',
  description:
    'LinkedIn profile review by Ankur Nema — full audit, guided enhancements, and a 1:1 session to make your profile stand out.',
}

// ─── Content data ─────────────────────────────────────────────────────────────

const included = [
  'Section-by-section audit: headline, about, experience, skills, recommendations, featured, and activity.',
  'Guided enhancement suggestions for each section.',
  'One 60-minute 1:1 session covering findings and changes.',
  'Written action plan delivered after the session.',
  'Email follow-up once your updated profile is live.',
]

const steps = [
  {
    icon: Link2,
    title: 'Share your profile and context',
    description:
      'You share your LinkedIn profile URL and a short note on your role, goals, and target audience (recruiters, peers, clients, etc.).',
  },
  {
    icon: Search,
    title: 'In-depth profile audit',
    description: 'Ankur audits every section of your profile.',
  },
  {
    icon: MessageCircle,
    title: '60-minute 1:1 session',
    description:
      'A session walks through the findings and enhancements together.',
  },
  {
    icon: ClipboardList,
    title: 'Written action plan',
    description: 'You receive a written action plan to implement the changes.',
  },
  {
    icon: Mail,
    title: 'Email follow-up',
    description: 'Email follow-up once your updated profile is live.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LinkedInReviewPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy dark:bg-brand-surface-dark px-6 py-16 sm:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-amber/10 dark:bg-brand-amber-dark/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-sans mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All services
          </Link>
          <p className="text-brand-amber dark:text-brand-amber-dark text-sm font-semibold tracking-widest uppercase mb-4 font-sans">
            Profile Review
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-white mb-6 leading-tight">
            LinkedIn Review
          </h1>
          <p className="text-white/80 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            A full audit of your LinkedIn profile — every section, not just the headline. You&apos;ll
            leave with a clear action plan and a 1:1 session to make sure your profile accurately
            represents your experience and attracts the right opportunities.
          </p>
        </div>
      </section>

      {/* ── What's included ────────────────────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Scope
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
              What&apos;s included
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {included.map((text, i) => (
              <FadeInSection key={text} delay={i * 0.08}>
                <div className="bg-brand-surface dark:bg-brand-surface-dark border border-brand-slate/10 dark:border-brand-slate-dark/10 rounded-xl p-6 h-full flex gap-4 shadow-[0_2px_6px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
                  <CheckCircle2
                    className="w-5 h-5 text-brand-amber dark:text-brand-amber-dark flex-shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <p className="text-brand-slate dark:text-brand-slate-dark text-sm font-sans leading-relaxed">
                    {text}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-surface-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
              How it works
            </h2>
          </FadeInSection>

          <FadeInSection>
            <ProcessFlow steps={steps} />
          </FadeInSection>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="bg-brand-navy dark:bg-brand-surface-dark rounded-3xl px-8 py-12 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative">
                <p className="text-brand-amber dark:text-brand-amber-dark text-sm font-semibold tracking-widest uppercase mb-4 font-sans">
                  Express interest
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-white mb-4">
                  Pricing and booking details coming soon
                </h2>
                <p className="text-white/70 text-base font-sans mb-3 max-w-lg mx-auto leading-relaxed">
                  This is a standalone service — you can book it independently or alongside a Resume Review.
                </p>
                <p className="text-white/70 text-base font-sans mb-8 max-w-lg mx-auto leading-relaxed">
                  Get in touch to express interest.
                </p>
                <a
                  href="mailto:ankur@ankurnema.in"
                  className="inline-block bg-brand-amber dark:bg-brand-amber-dark text-brand-navy font-semibold px-8 py-3 font-sans rounded-lg transition-opacity hover:opacity-90"
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

    </div>
  )
}
