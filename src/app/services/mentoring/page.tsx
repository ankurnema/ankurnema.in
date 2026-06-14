import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  TrendingUp,
  Wallet,
  Terminal,
  Briefcase,
  Clock,
  CalendarDays,
  Target,
} from 'lucide-react'
import { FadeInSection } from '@/components/about/FadeInSection'

export const metadata: Metadata = {
  title: 'Mentoring',
  description:
    '1-on-1 mentoring by Ankur Nema — DevOps careers, personal finance, and navigating corporate growth.',
}

// ─── Content data ─────────────────────────────────────────────────────────────

const topics = [
  {
    icon: TrendingUp,
    title: 'DevOps & Platform Engineering Career Roadmap',
    description:
      "Navigating your growth from engineer to senior, staff, or into leadership. Build a clear plan for where you're headed and how to get there.",
  },
  {
    icon: Wallet,
    title: 'Personal Finance Management',
    description:
      'Budgeting, investing basics, and making your income work harder — especially relevant for early-to-mid career engineers in India.',
  },
  {
    icon: Terminal,
    title: 'Hands-on Tool Deep-Dive',
    description:
      'Learn a specific DevOps tool end-to-end with guided practice: Kubernetes, Terraform, Helm, ArgoCD, GitHub Actions, and more.',
  },
  {
    icon: Briefcase,
    title: 'Navigating Corporate Growth',
    description:
      'Building your personal brand inside an organisation, handling office dynamics, increasing your visibility, and positioning for the next step.',
  },
]

const tiers = [
  {
    icon: Clock,
    name: 'One-time Session',
    description:
      '60-minute session on any topic. Ideal for a focused deep-dive or a specific question you need answered.',
  },
  {
    icon: CalendarDays,
    name: 'Monthly Mentoring',
    description:
      '2 sessions per month plus async WhatsApp support between sessions. For ongoing accountability and guidance.',
  },
  {
    icon: Target,
    name: 'Quarterly Mentoring',
    description:
      '6 sessions with structured progress tracking across the quarter. For engineers committed to a defined goal over three months.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MentoringPage() {
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
            1:1 Guidance
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-white mb-6 leading-tight">
            Mentoring
          </h1>
          <p className="text-white/80 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            1-on-1 mentoring tailored to where you are in your career. Available as a one-time
            session or an ongoing engagement — so you get the depth and continuity that matches
            your goals.
          </p>
        </div>
      </section>

      {/* ── What we can work on ────────────────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Topics
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
              What we can work on
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {topics.map(({ icon: Icon, title, description }, i) => (
              <FadeInSection key={title} delay={i * 0.08}>
                <div className="bg-brand-surface dark:bg-brand-surface-dark border border-brand-slate/10 dark:border-brand-slate-dark/10 rounded-xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-navy/8 dark:bg-brand-navy-dark/10 flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="w-4 h-4 text-brand-amber dark:text-brand-amber-dark"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-base font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark leading-snug">
                      {title}
                    </h3>
                  </div>
                  <p className="text-brand-slate dark:text-brand-slate-dark text-sm font-sans leading-relaxed">
                    {description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement options ─────────────────────────────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-surface-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Options
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
              Engagement options
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map(({ icon: Icon, name, description }, i) => (
              <FadeInSection key={name} delay={i * 0.1}>
                <div className="bg-brand-canvas dark:bg-brand-canvas-dark border border-brand-slate/10 dark:border-brand-slate-dark/10 rounded-xl p-6 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-brand-navy/8 dark:bg-brand-navy-dark/10 flex items-center justify-center mb-4 flex-shrink-0">
                    <Icon
                      className="w-5 h-5 text-brand-amber dark:text-brand-amber-dark"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-3">
                    {name}
                  </h3>
                  <p className="text-brand-slate dark:text-brand-slate-dark text-sm font-sans leading-relaxed flex-1">
                    {description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
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
