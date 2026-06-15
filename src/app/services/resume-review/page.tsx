import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  FileText,
  Search,
  MessageCircle,
  ClipboardList,
  RefreshCw,
  Mail,
  Clock,
  FileSearch,
  Wand2,
  Briefcase,
} from 'lucide-react'
import { FadeInSection } from '@/components/about/FadeInSection'
import { ProcessFlow } from '@/components/services/ProcessFlow'

export const metadata: Metadata = {
  title: 'Resume Review',
  description:
    'Personalised resume review by Ankur Nema — guided enhancement steps and 1:1 sessions for engineers targeting top tech roles.',
}

// ─── Content data ─────────────────────────────────────────────────────────────

const steps = [
  {
    icon: FileText,
    title: 'Submit your resume and career timeline',
    description:
      'Share your current resume along with a full timeline of your experience, roles, and goals.',
  },
  {
    icon: Search,
    title: 'In-depth review',
    description:
      'Ankur reviews everything in detail — structure, content, framing, and alignment with your target roles.',
  },
  {
    icon: MessageCircle,
    title: '1:1 session with findings',
    description:
      'A dedicated session covering the findings, suggested changes, and enhancement guidelines tailored to your situation.',
  },
  {
    icon: ClipboardList,
    title: 'Written report with action items',
    description:
      'You receive a written report with prioritised action items — clear and specific, not generic advice.',
  },
  {
    icon: RefreshCw,
    title: 'Submit your updated resume',
    description:
      "Once you've made the changes, send the updated version for a confirmation pass.",
  },
  {
    icon: Mail,
    title: 'Email follow-up',
    description:
      'A follow-up email to confirm the changes land correctly and address any remaining questions.',
  },
]

const tiers = [
  {
    icon: Clock,
    name: 'Quick Review',
    turnaround: '48-hour turnaround',
    description:
      'Written feedback, guided enhancement steps, and one 30-minute 1:1 session. Ideal when you need focused, actionable input fast.',
    addon: false,
  },
  {
    icon: FileSearch,
    name: 'Deep Review',
    turnaround: '3–4 day turnaround',
    description:
      'In-depth analysis, guided enhancement steps, one 60-minute 1:1 session, and one free follow-up session. For a thorough overhaul.',
    addon: false,
  },
  {
    icon: Wand2,
    name: 'Full Makeover',
    turnaround: '1-week turnaround',
    description:
      'In-depth analysis, a 30-minute initial session, and two follow-up sessions (30–60 minutes each). For a complete rebuild from the ground up.',
    addon: false,
  },
  {
    icon: Briefcase,
    name: 'JD-Based Review',
    turnaround: '24-hour turnaround',
    description:
      'Tailored suggestions for a specific job description, delivered by email. Available only for Deep Review or Full Makeover customers.',
    addon: true,
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumeReviewPage() {
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
            Document Review
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-white mb-6 leading-tight">
            Resume Review
          </h1>
          <p className="text-white/80 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            A personalised, end-to-end resume review built around your specific career goals —
            not a generic checklist. Every engagement includes a 1:1 session and a written action
            plan so you leave with a resume you&apos;re confident submitting.
          </p>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
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

      {/* ── Review tiers ───────────────────────────────────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-surface-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Options
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
              Review tiers
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tiers.map(({ icon: Icon, name, turnaround, description, addon }, i) => (
              <FadeInSection key={name} delay={i * 0.1}>
                <div className={`bg-brand-canvas dark:bg-brand-canvas-dark border rounded-xl p-6 h-full flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.07)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)] transition-all duration-200 ${addon ? 'border-brand-amber/30 dark:border-brand-amber-dark/30' : 'border-brand-slate/10 dark:border-brand-slate-dark/10'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-navy/8 dark:bg-brand-navy-dark/10 flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="w-5 h-5 text-brand-amber dark:text-brand-amber-dark"
                        strokeWidth={1.5}
                      />
                    </div>
                    {addon && (
                      <span className="text-xs font-semibold font-sans text-brand-amber dark:text-brand-amber-dark bg-brand-amber/10 dark:bg-brand-amber-dark/10 px-2.5 py-1 rounded-full">
                        Add-on
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-1">
                    {name}
                  </h3>
                  <p className="text-xs font-sans font-medium text-brand-amber dark:text-brand-amber-dark mb-3">
                    {turnaround}
                  </p>
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
