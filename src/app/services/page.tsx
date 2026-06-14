import type { Metadata } from 'next'
import {
  Lightbulb,
  TrendingUp,
  FileText,
  Clock,
  GraduationCap,
  Rocket,
  Code,
  Users,
  Compass,
  Mail,
  MessageCircle,
  ClipboardList,
  Repeat,
  Award,
} from 'lucide-react'
import { FadeInSection } from '@/components/about/FadeInSection'
import { StatCard } from '@/components/about/StatCard'
import { ServiceCard } from '@/components/services/ServiceCard'
import { PersonaChip } from '@/components/services/PersonaChip'
import { ProcessStep } from '@/components/services/ProcessStep'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Mentoring, career guidance, resume review, LinkedIn review, and consulting by Ankur Nema.',
  openGraph: {
    title: 'Services | Ankur Nema',
    description:
      'Practical, outcome-focused engagements for engineers and teams who want to move faster.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
}

// ─── Inline SVG for LinkedIn (brand icon not in lucide-react) ─────────────────

function LinkedInIcon({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

// ─── Content data ─────────────────────────────────────────────────────────────

const primaryServices = [
  {
    icon: Lightbulb,
    name: 'Mentoring',
    description:
      '1-on-1 mentoring covering DevOps and Platform Engineering career roadmaps, personal finance management, hands-on tool deep-dives, and navigating corporate growth. Available as one-time or ongoing engagements.',
    highlights: [
      'DevOps & Platform Engineering careers',
      'Personal finance management',
      'Hands-on tool deep-dives',
      'Navigating corporate growth',
    ],
  },
  {
    icon: TrendingUp,
    name: 'Career Guidance',
    description:
      'Strategic 1:1 sessions for engineers navigating role transitions, promotions, and long-term career growth. Choose a focused strategy session or a multi-session audit package with a written roadmap.',
    highlights: [
      'Role transition and promotion strategy',
      'Career Strategy Session (60 min)',
      'Career Audit Package (3 sessions + roadmap)',
      'For engineers with 2–10 years of experience',
    ],
  },
  {
    icon: FileText,
    name: 'Resume Review',
    description:
      'Personalised resume review with in-depth analysis, guided enhancement steps, 1:1 sessions, and a written action plan — for engineers targeting top tech roles.',
    highlights: [
      'Quick Review (48 hrs, 30-min session)',
      'Deep Review (3–4 days, 60-min session + follow-up)',
      'Full Makeover (1 week, 3 sessions)',
      'JD-Based Review add-on (for Deep/Full customers)',
    ],
  },
  {
    icon: LinkedInIcon,
    name: 'LinkedIn Review',
    description:
      'Full LinkedIn profile audit covering every section, with guided enhancements and a 60-minute 1:1 session so your profile works as hard as you do.',
    highlights: [
      'Section-by-section audit',
      'Guided enhancement suggestions',
      '60-min 1:1 session + written action plan',
      'Can be booked alongside Resume Review',
    ],
  },
]

const personas = [
  { icon: GraduationCap, label: 'Students' },
  { icon: Rocket, label: 'Young professionals' },
  { icon: Code, label: 'Mid-career engineers' },
  { icon: Users, label: 'Engineering managers' },
  { icon: Compass, label: 'Senior leaders' },
]

const processSteps = [
  {
    icon: Mail,
    title: 'Reach out',
    description: 'Drop a note with what you are working on or stuck on.',
  },
  {
    icon: MessageCircle,
    title: 'Discovery call',
    description: 'Short 20-min call to understand your goals and context.',
  },
  {
    icon: ClipboardList,
    title: 'Personalised plan',
    description: 'A clear engagement plan tailored to your situation.',
  },
  {
    icon: Repeat,
    title: 'Iterate together',
    description: 'Work through it in sessions, with feedback loops built in.',
  },
]

const stats = [
  { icon: TrendingUp, value: '18+', label: 'Years in engineering', sublabel: 'Since August 2008' },
  { icon: Users, value: '100+', label: 'Engineers mentored' },
  { icon: Award, value: 'Director', label: 'DevOps & Developer Productivity', sublabel: 'Current role' },
]

const consultingTopics = [
  'DevOps & Platform Engineering',
  'Cloud & Kubernetes',
  'CI/CD and Build Systems',
  'AI Tools & Workflows',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
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
          <p className="text-brand-amber dark:text-brand-amber-dark text-sm font-semibold tracking-widest uppercase mb-4 font-sans">
            Work with Ankur
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-white mb-6 leading-tight">
            Services
          </h1>
          <p className="text-white/80 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            Practical, outcome-focused engagements for engineers at every stage — from first
            job to director. No generic advice; every engagement is specific to your situation
            and goals.
          </p>
        </div>
      </section>

      {/* ── Persona band ───────────────────────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-8 border-b border-brand-slate/10 dark:border-brand-slate-dark/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-slate dark:text-brand-slate-dark mb-4">
            Who this is for
          </p>
          <div className="flex flex-wrap gap-3">
            {personas.map((persona) => (
              <PersonaChip key={persona.label} icon={persona.icon} label={persona.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Primary Services ───────────────────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Core offerings
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-3">
              Where I Can Help
            </h2>
            <p className="text-brand-slate dark:text-brand-slate-dark text-base font-sans mb-10 max-w-2xl leading-relaxed">
              Booking and pricing details are coming soon. Get in touch to express interest or
              ask a question.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {primaryServices.map((service, i) => (
              <FadeInSection key={service.name} delay={i * 0.08}>
                <ServiceCard
                  icon={service.icon}
                  name={service.name}
                  description={service.description}
                  highlights={service.highlights}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we'll work together ─────────────────────────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-surface-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              The process
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
              How we&apos;ll work together
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
            {processSteps.map((step, i) => (
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

      {/* ── Credibility stats ──────────────────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
              What you&apos;re getting
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {stats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.1}>
                <StatCard
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  sublabel={stat.sublabel}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consulting Hour (soft, secondary) ─────────────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-surface-dark px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="border border-brand-slate/10 dark:border-brand-slate-dark/10 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-brand-slate/5 dark:bg-brand-slate-dark/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-brand-slate/60 dark:text-brand-slate-dark/60" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-slate/60 dark:text-brand-slate-dark/60 mb-1">
                  Also available
                </p>
                <h3 className="text-lg font-semibold font-heading text-brand-navy/70 dark:text-brand-charcoal-dark/70 mb-2">
                  Consulting Hour
                </h3>
                <p className="text-brand-charcoal/70 dark:text-brand-charcoal-dark/60 text-sm font-sans leading-relaxed mb-3">
                  Expert 1:1 advisory sessions on DevOps, Cloud, CI/CD, Platform Engineering,
                  and AI workflows. You define the topic; Ankur prepares the agenda.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {consultingTopics.map((t) => (
                    <li
                      key={t}
                      className="text-xs font-sans text-brand-slate/70 dark:text-brand-slate-dark/70 bg-brand-slate/5 dark:bg-brand-slate-dark/10 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm font-sans text-brand-slate/60 dark:text-brand-slate-dark/60 whitespace-nowrap flex-shrink-0 self-start sm:self-center">
                Available on request
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-navy dark:bg-brand-surface-dark rounded-3xl px-8 py-12 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-white mb-4">
                Not sure where to start?
              </h2>
              <p className="text-white/70 text-base font-sans mb-8 max-w-lg mx-auto leading-relaxed">
                Whether you are just starting out or leading a team, reach out with a quick
                note about what you are working on. Ankur will point you to the right service
                — or tell you honestly if something else would serve you better.
              </p>
              <a
                href="mailto:ankur@ankurnema.in"
                className="inline-block bg-brand-amber dark:bg-brand-amber-dark text-brand-navy font-semibold px-8 py-3 font-sans rounded-lg transition-opacity hover:opacity-90"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
