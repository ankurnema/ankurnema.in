import type { Metadata } from 'next'
import {
  Layers,
  Cloud,
  GitBranch,
  Gauge,
  Bot,
  Sparkles,
  Lightbulb,
  ClipboardList,
  CheckCircle2,
  Clock,
  ArrowLeft,
} from 'lucide-react'
import Link from 'next/link'
import { FadeInSection } from '@/components/about/FadeInSection'
import { ProcessStep } from '@/components/services/ProcessStep'

export const metadata: Metadata = {
  title: 'Consulting Hour',
  description:
    'Expert 1:1 consulting sessions by Ankur Nema on DevOps, Cloud, AI productivity, and more.',
}

// ─── Content data ─────────────────────────────────────────────────────────────

const topics = [
  { icon: Layers, label: 'DevOps & Platform Engineering' },
  { icon: Cloud, label: 'Cloud & Kubernetes' },
  { icon: GitBranch, label: 'CI/CD and Build Systems' },
  { icon: Gauge, label: 'Developer Productivity' },
  { icon: Bot, label: 'AI Tools and Workflows' },
  { icon: Sparkles, label: 'AI for Daily Work' },
]

const steps = [
  {
    icon: Lightbulb,
    title: 'Pick a topic',
    description: 'You pick a topic and share your background and desired outcome.',
  },
  {
    icon: ClipboardList,
    title: 'Agenda prep',
    description: 'Ankur prepares the session agenda and shares it with you.',
  },
  {
    icon: CheckCircle2,
    title: 'Confirm agenda',
    description: "You confirm the agenda — the session only proceeds once you're aligned.",
  },
  {
    icon: Clock,
    title: '60-min session',
    description: '60-minute focused session.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConsultingPage() {
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
            1:1 Advisory
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-white mb-6 leading-tight">
            Consulting Hour
          </h1>
          <p className="text-white/80 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            Expert 1:1 advisory sessions where you set the agenda. Bring your challenge, your
            team&apos;s pain point, or the topic you&apos;ve been meaning to deep-dive — Ankur
            prepares a structured session so the hour is focused and actionable.
          </p>
        </div>
      </section>

      {/* ── Topics covered ─────────────────────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Topics
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
              Topics covered
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map(({ icon: Icon, label }, i) => (
              <FadeInSection key={label} delay={i * 0.06}>
                <div className="flex items-center gap-3 bg-brand-surface dark:bg-brand-surface-dark border border-brand-slate/10 dark:border-brand-slate-dark/10 rounded-xl px-4 py-3.5">
                  <Icon
                    className="w-4 h-4 text-brand-amber dark:text-brand-amber-dark flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-brand-charcoal dark:text-brand-charcoal-dark text-sm font-sans font-medium">
                    {label}
                  </span>
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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
            {steps.map((step, i) => (
              <FadeInSection key={step.title} delay={i * 0.1}>
                <ProcessStep
                  step={i + 1}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
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
                  Booking details coming soon
                </h2>
                <p className="text-white/70 text-base font-sans mb-8 max-w-lg mx-auto leading-relaxed">
                  Drop a note with the topic you want to cover and a bit of context. Ankur will
                  follow up with availability and session details.
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
