import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Clock, Users, Building2, TrendingUp, Zap,
  Server, Eye, Layers, TerminalSquare, GitBranch, Activity,
  BrainCircuit, BarChart3, Network,
  UsersRound, Gauge, LineChart, GraduationCap,
} from 'lucide-react'

import { FadeInSection } from '@/components/about/FadeInSection'
import { CompaniesBand } from '@/components/about/CompaniesBand'
import { StatCard } from '@/components/about/StatCard'
import { TimelineAct } from '@/components/about/TimelineAct'
import { StoryCard } from '@/components/about/StoryCard'
import { ProjectCard } from '@/components/about/ProjectCard'
import { SkillGroup } from '@/components/about/SkillGroup'
import { TestimonialCard } from '@/components/about/TestimonialCard'

export const metadata: Metadata = {
  title: 'About',
  description: 'DevOps Director, consultant, and mentor with 17+ years building at scale. Meet Ankur Nema.',
  openGraph: {
    title: 'About Ankur Nema',
    description: 'DevOps Director, consultant, and mentor with 17+ years building at scale.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
}

// ─── Content data ────────────────────────────────────────────────────────────

const stats = [
  { icon: Clock,     value: '17+',     label: 'Years in Engineering',         testId: 'stat-years' },
  { icon: Users,     value: '150+',    label: 'Engineers Mentored' },
  { icon: Building2, value: '1,000+',  label: 'Developers in Current Org' },
  { icon: TrendingUp,value: '25%',     label: 'Developer Productivity Gain' },
  { icon: Zap,       value: '15 days', label: 'To Unblock a 5-Month Stall',   sublabel: 'stalled for 5 months' },
]

const timelineActs = [
  {
    era: 'Deep Roots',
    years: '2008–2012',
    companies: 'Convergys · NetCracker',
    narrative: 'Four years in telecom OSS/BSS. Not glamorous work, but foundational: learned what it means to maintain systems that cannot go down, for customers who cannot wait. The habits formed here — over-communication, fault isolation discipline, respect for production — never left.',
  },
  {
    era: 'Technical Mastery',
    years: '2012–2020',
    companies: 'Symantec · Broadcom',
    narrative: 'Seven years at Symantec, then a year at Broadcom after the acquisition. The formative period. Went from writing features to designing systems, from implementing to influencing architecture. Cybersecurity software has no tolerance for sloppiness — a wrong decision at the wrong layer costs millions in breach exposure. That context sharpened the instinct for reliability by orders of magnitude.',
  },
  {
    era: 'The Pivot to Leadership',
    years: '2020–2022',
    companies: 'Amdocs',
    narrative: 'The most important pivot of the career happened in 2021 — the first formal people management role. The early lesson came fast: the technical decisions are rarely the hard part. The hard part is people, alignment, and creating the conditions for others to do their best work. The instinct to solve problems directly had to be replaced by the discipline of enabling others to solve them better. That shift changed everything that came after.',
  },
  {
    era: 'Platform Engineering at Scale',
    years: '2022–present',
    companies: 'SAP',
    narrative: 'Joined SAP as a DevOps Architect and grew into the Director of Developer Productivity & Engineering Enablement. Responsible for the internal developer platform and tooling depended on by 1,000+ engineers. At this scale, every platform decision affects thousands of developers simultaneously — which means engineering quality, developer experience, and delivery speed are not trade-offs, they are the same problem. The work moved from building systems to removing blockers at organisational scale.',
  },
]

const storyCards = [
  {
    before: 'Stalled 5 months',
    after: '15 days to live',
    metric: '15 days',
    headline: 'The API Gateway Turnaround',
    narrative: 'An enterprise API gateway deployment had been stalled for five months — no clear owner, misaligned teams, and a pile of blocked dependencies that everyone had accepted as permanent. I diagnosed the real blockers in the first week: most were not technical. Quiet alignment conversations happened in week two. By day fifteen, the deployment was live.',
    variant: 'featured' as const,
  },
  {
    before: 'Weeks to provision',
    after: '2 hours',
    metric: '2 hrs',
    headline: 'Infrastructure Automation',
    narrative: 'The team was spending weeks provisioning new development environments. Automating the end-to-end pipeline — aligning three teams on a single config source of truth — reduced provisioning from weeks to two hours.',
    variant: 'default' as const,
  },
  {
    before: '1 month to ramp',
    after: '1 week',
    metric: '1 week',
    headline: 'Developer Onboarding',
    narrative: 'New engineers were taking a month to reach basic productivity. Documenting the critical path, automating environment setup, and rebuilding the onboarding guide cut time-to-contribution from four weeks to one.',
    variant: 'default' as const,
  },
]

const projects = [
  {
    title: 'Oracle to AWS Aurora Migration (5 TB)',
    company: 'Symantec',
    period: '2018',
    challenge: 'Migrate a 5 TB production Oracle database to AWS Aurora with modified schema and near-zero downtime. Hybrid architecture: AWS DMS for bulk transfer + custom Spring Batch application for large objects and ongoing change replication.',
    result: '45-minute downtime window for a 5 TB migration with schema changes and zero data loss.',
    tags: ['AWS DMS', 'Spring Batch', 'Aurora', 'Oracle', 'Schema Migration'],
  },
  {
    title: 'Elasticsearch on Kubernetes (ECK)',
    company: 'Amdocs',
    period: '2021–2022',
    challenge: 'Lead design and certification of a production-grade, highly available Elasticsearch deployment on Kubernetes using the ECK Operator — multi-AZ, tiered storage (Hot/Cold/Frozen).',
    result: 'Production-grade HA logging infrastructure certified and deployed at enterprise scale.',
    tags: ['ECK Operator', 'Kubernetes', 'Elasticsearch', 'Multi-AZ', 'Observability'],
  },
  {
    title: 'Rate Plan Analyzer ETL Pipeline',
    company: 'NetCracker',
    period: '2011–2012',
    challenge: 'Migrate terabytes of telecom rate plan data within a strict 2-hour production window. Designed a 4-phase parallel pipeline using Oracle DBMS_SCHEDULER + PL/SQL with a control-table pattern for batch orchestration.',
    result: 'Terabyte-scale migration completed within the 2-hour constraint. Zero data loss.',
    tags: ['Oracle', 'DBMS_SCHEDULER', 'PL/SQL', 'ETL', 'Parallel Processing'],
  },
]

const skillGroups = [
  {
    title: 'Platform & DevOps',
    titleIcon: Server,
    skills: [
      { label: 'CI/CD at Scale (Jenkins, ArgoCD, GitHub Actions)', icon: GitBranch },
      { label: 'Infrastructure as Code (Terraform, Ansible)', icon: Layers },
      { label: 'Kubernetes (multi-cluster, enterprise)', icon: Network },
      { label: 'GitOps and Release Engineering', icon: TerminalSquare },
    ],
  },
  {
    title: 'Observability & AI',
    titleIcon: Eye,
    skills: [
      { label: 'Distributed Observability (OpenTelemetry, Elastic APM)', icon: Activity },
      { label: 'SLI/SLO Design and DORA Metrics', icon: BarChart3 },
      { label: 'AI-Powered Developer Tooling (RAG, LLM integration)', icon: BrainCircuit },
      { label: 'Go CLI Development', icon: TerminalSquare },
    ],
  },
  {
    title: 'Leadership & Developer Experience',
    titleIcon: UsersRound,
    skills: [
      { label: 'Internal Developer Platform Design', icon: Layers },
      { label: 'Developer Experience (DX) Measurement', icon: Gauge },
      { label: 'Engineering Productivity at Scale (1,000+ developers)', icon: LineChart },
      { label: 'IC-to-Lead Career Development', icon: GraduationCap },
    ],
  },
]

const testimonials = [
  {
    quote: 'Ankur is a hardworking, dedicated technological leader who is well known for his great "can-do" approach. This dedication and positive approach unites the team around him, creates consensus, and leads to great achievements.',
    name: 'Yaniv Bigger',
    role: 'GM / VP Engineering',
    company: 'Amdocs',
  },
  {
    quote: 'Most professionals are usually either individual star performers, while others are those who help fellow team members along the way. Ankur, is both!',
    name: 'Syed Anwaarullah',
    role: 'IoT Engineer',
    company: 'Mentee at Convergys, 2010',
  },
  {
    quote: 'He is a hardworking, dedicated, and outstanding technical mentor with a rich experience. He is innovative, organized as well as helpful.',
    name: 'Shyamendra Singh',
    role: 'Engineering Manager',
    company: 'Amdocs (direct manager)',
  },
  {
    quote: 'His methodical approach to solving critical situations and at the same time keeping the team\'s morale high is something to learn from him.',
    name: 'Parag Shah',
    role: 'Senior Software Engineer',
    company: 'Broadcom',
  },
  {
    quote: 'He has been a very quick learner and his flexibility to adapt and perform in challenging and fast-paced environments are highly commendable.',
    name: 'Ravi Kiran Samayamantry',
    role: 'Head of Engineering',
    company: 'NetCracker (direct manager)',
  },
  {
    quote: 'Working with Ankur has been a great experience. Ankur is very professional and has vast knowledge in many of the technologies — always there to help with a smile and passion to push tasks forward.',
    name: 'Chanan Berler',
    role: 'Staff DevOps Engineer',
    company: 'Amdocs',
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="bg-brand-navy dark:bg-brand-surface-dark px-6 py-16 sm:py-24 relative overflow-hidden">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Radial glow from top-right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-amber/10 dark:bg-brand-amber-dark/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Lead copy — 3/5 width on desktop */}
            <div className="lg:col-span-3">
              <FadeInSection>
                <p className="text-brand-amber dark:text-brand-amber-dark text-sm font-semibold tracking-widest uppercase mb-4 font-sans">
                  DevOps Director · Consultant · Mentor
                </p>
                <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-white mb-6 leading-tight">
                  DevOps Leader.{' '}
                  <br className="hidden sm:block" />
                  Engineering Mentor.{' '}
                  <br className="hidden sm:block" />
                  <span className="text-brand-amber dark:text-brand-amber-dark">
                    17+ Years of Building{' '}
                    <br className="hidden sm:block" />
                    Things That Scale.
                  </span>
                </h1>
              </FadeInSection>
              <FadeInSection delay={0.1}>
                <div className="text-white/80 text-base sm:text-lg font-sans max-w-xl mb-8 space-y-4 leading-relaxed">
                  <p>
                    I am a DevOps leader with 17+ years of experience scaling engineering teams and
                    transforming delivery pipelines at enterprise scale. I work with startups and
                    mid-career engineers who need to move faster — through consulting, mentoring, and
                    technical guidance grounded in what actually works in production.
                  </p>
                  <p>
                    Outside my corporate role, I advise startups on DevOps foundations and mentor
                    engineers ready to grow — both technically and in their careers. 150+ mentees.
                    Same specificity. Same outcome-focus.
                  </p>
                </div>
                {/* CTAs re-enable once /services and /contact pages are built (prompts 007, 016) */}
              </FadeInSection>
            </div>

            {/* Portrait — 2/5 width on desktop */}
            <FadeInSection className="lg:col-span-2" delay={0.2}>
              <div className="relative w-full aspect-square max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about/portrait.jpg"
                  alt="Ankur Nema — DevOps Director and consultant"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── Section 2: Companies Band ───────────────────────────────────── */}
      <CompaniesBand />

      {/* ── Section 3: Impact Stats ─────────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-center text-xs font-sans font-semibold tracking-widest uppercase text-brand-slate/50 dark:text-brand-slate-dark/50 mb-2">
              By the numbers
            </p>
            <h2 className="text-center text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
              Impact at Scale
            </h2>
          </FadeInSection>
          <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.07}>
                <StatCard
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  sublabel={stat.sublabel}
                  testId={stat.testId}
                />
              </FadeInSection>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Section 4: The Story ────────────────────────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-surface-dark px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              The story
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-8">
              From Telecom Scripts to Platform Leadership
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.1} className="space-y-6 text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base font-sans leading-relaxed">
            <p>
              My career started in 2008 in the unsexy world of telecom billing automation.
              I was a fresh Computer Engineering graduate and the work was not glamorous —
              but the systems had to keep running, and the discipline that required never left me.
              Fifteen years and five companies later, it still shapes how I think about software:
              if it breaks at the wrong moment, someone pays a real price.
            </p>
            <p>
              The shift from engineer to leader happened at Amdocs in 2021 — my first formal
              people management role. The most useful thing I learned was that the technical
              decisions are rarely the hard part. The hard part is creating an environment where
              engineers raise problems early rather than late, and making sure the right people
              have the right information before the wrong thing happens.
            </p>
          </FadeInSection>
          {/* Pull quote */}
          <FadeInSection delay={0.2}>
            <blockquote className="my-10 pl-6 border-l-4 border-brand-amber dark:border-brand-amber-dark">
              <p className="text-xl font-heading font-semibold text-brand-navy dark:text-brand-charcoal-dark leading-snug italic">
                &ldquo;I build fast teams and grow great engineers. The two are the same problem — people who understand their tools and trust their processes move quickly and make fewer irreversible mistakes.&rdquo;
              </p>
            </blockquote>
          </FadeInSection>
          <FadeInSection delay={0.1} className="space-y-6 text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base font-sans leading-relaxed">
            <p>
              I started mentoring because I know exactly what it feels like to need guidance and
              not have it. When Symantec was acquired by Broadcom, I went through the hardest
              stretch of my career — eight years in one place had built comfort and eroded momentum,
              and the uncertainty about what came next was real. I did not know whether to stay in
              development or move into DevOps. The struggle was genuine: desperation, self-doubt,
              and no clear path forward. My friend and mentor <a href="https://www.linkedin.com/in/shyamendra-pratap-singh/" target="_blank" rel="noopener noreferrer" className="text-brand-amber dark:text-brand-amber-dark hover:underline">Shyamendra</a> — we both started our careers together at Convergys in 2008 — helped me find direction, make
              the transition, and land at Amdocs. His guidance was not generic — it was specific,
              timely, and grounded in the actual realities of the Indian engineering market.
              It changed the trajectory. That experience is why I mentor now, and it is the only
              standard I hold myself to: specific enough to act on, grounded enough to trust.
            </p>
            <p>
              I believe the distance between where an engineering team is and where they need to
              be is almost always shorter than it looks — and almost always a people and process
              problem before it is a technology problem. I have spent seventeen years proving that
              in different organizations, different domains, and different scales. The proof is in the numbers.
            </p>
          </FadeInSection>
          {/* Credentials cards */}
          <FadeInSection delay={0.15}>
            <div className="mt-10 pt-8 border-t border-brand-slate/10 dark:border-brand-slate-dark/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: GraduationCap, label: 'B.E. Computer Engineering', sub: 'Pandit Ravishankar Shukla University, 2008' },
                { icon: Activity,      label: 'Red Hat Certified Engineer', sub: 'RHCE' },
                { icon: BrainCircuit,  label: 'Generative AI Certification', sub: '2023' },
                { icon: Users,         label: 'People Manager Award', sub: 'Amdocs, 2022' },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-brand-surface dark:bg-brand-surface-dark rounded-xl border border-brand-slate/10 dark:border-brand-slate-dark/10 px-4 py-3 hover:border-brand-amber/30 dark:hover:border-brand-amber-dark/30 shadow-[0_2px_6px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-amber/10 dark:bg-brand-amber-dark/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-brand-amber dark:text-brand-amber-dark" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-sans text-brand-navy dark:text-brand-charcoal-dark leading-snug">
                      {label}
                    </p>
                    <p className="text-xs font-sans text-brand-slate dark:text-brand-slate-dark mt-0.5">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Section 5: Career Journey ───────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Career journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-4">
              The Journey
            </h2>
            <p className="text-brand-slate dark:text-brand-slate-dark text-base font-sans mb-12 max-w-xl leading-relaxed">
              From writing telecom automation scripts in 2008 to leading the platform engineering
              team that 1,000+ developers depend on — seventeen years of building things that had
              to work, and helping the people who build them grow.
            </p>
          </FadeInSection>
          {/* Timeline rail wrapper */}
          <div className="relative">
            {/* Vertical rail (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-slate/15 dark:bg-brand-slate-dark/15 -translate-x-1/2" />
            <div className="space-y-10">
              {timelineActs.map((act, i) => (
                <FadeInSection key={act.era} delay={i * 0.1}>
                  <TimelineAct
                    era={act.era}
                    years={act.years}
                    companies={act.companies}
                    narrative={act.narrative}
                    side={i % 2 === 0 ? 'left' : 'right'}
                    index={i}
                  />
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Selected Work ────────────────────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-surface-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Impact stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-4">
              Selected Work
            </h2>
            <p className="text-brand-slate dark:text-brand-slate-dark text-base font-sans mb-10 max-w-xl leading-relaxed">
              Real transformations with before/after numbers. Not directional — specific.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {storyCards.map((card, i) => (
              <FadeInSection key={card.metric} delay={i * 0.08} className={card.variant === 'featured' ? 'md:col-span-2 h-full' : 'h-full'}>
                <StoryCard {...card} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Featured Projects ───────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Engineering work
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-4">
              Featured Projects
            </h2>
            <p className="text-brand-slate dark:text-brand-slate-dark text-base font-sans mb-10 max-w-xl leading-relaxed">
              Deep technical work across database engineering, platform engineering, and distributed systems.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <FadeInSection key={project.title} delay={i * 0.08} className="h-full">
                <ProjectCard {...project} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: Skills & Expertise ──────────────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-surface-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Technical expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
              Skills &amp; Expertise
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {skillGroups.map((group, i) => (
              <FadeInSection key={group.title} delay={i * 0.08} className="h-full">
                <SkillGroup
                  title={group.title}
                  titleIcon={group.titleIcon}
                  skills={group.skills}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Testimonials ─────────────────────────────────────── */}
      <section className="bg-brand-canvas dark:bg-brand-canvas-dark px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Social proof
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-10">
              What People Say
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeInSection key={t.name} delay={i * 0.06} className="h-full">
                <figure className="h-full">
                  <TestimonialCard {...t} />
                </figure>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 10: Talks & CTA ─────────────────────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-surface-dark px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-amber dark:text-brand-amber-dark mb-3">
              Public sessions
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-2">
              Talks &amp; Sessions
            </h2>
            <p className="text-brand-slate dark:text-brand-slate-dark text-base font-sans mb-10">
              I share what I know publicly. Here are recordings from recent sessions.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch mb-20">
            {[
              {
                title: 'Monitoring & Observability',
                description: 'Public training session delivered for Amdocs — a practical introduction to monitoring and observability practices.',
                href: 'https://www.youtube.com/watch?v=_9KhWrfFyR4',
              },
              {
                title: 'Building CLIs with Go',
                description: 'A hands-on session on CLI development using Golang — from basics to a working tool.',
                href: 'https://www.youtube.com/watch?v=A1N0iwjZ7JE',
              },
            ].map((talk, i) => (
              <FadeInSection key={talk.title} delay={i * 0.08} className="h-full">
                <div className="h-full flex flex-col bg-brand-canvas dark:bg-brand-canvas-dark rounded-2xl p-6 border border-brand-slate/10 dark:border-brand-slate-dark/10 hover:border-brand-amber/40 dark:hover:border-brand-amber-dark/40 shadow-[0_2px_8px_rgba(0,0,0,0.07)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,158,227,0.08)] dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.35),0_4px_8px_rgba(56,189,248,0.08)] transition-all duration-200">
                  <h3 className="text-lg font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-2">
                    {talk.title}
                  </h3>
                  <p className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-sm font-sans mb-4 leading-relaxed flex-1">
                    {talk.description}
                  </p>
                  <a
                    href={talk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-amber dark:text-brand-amber-dark font-semibold text-sm font-sans transition-opacity hover:opacity-80 mt-auto"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* CTA */}
          <FadeInSection>
            <div className="bg-brand-navy dark:bg-brand-canvas-dark rounded-3xl px-8 py-12 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-white dark:text-brand-charcoal-dark mb-4">
                  Ready to move faster?
                </h2>
                <p className="text-white/70 dark:text-brand-slate-dark text-base font-sans mb-8 max-w-md mx-auto">
                  Whether you need a consultant to unblock your platform or a mentor to grow your career — let&apos;s talk.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="mailto:ankur@ankurnema.in"
                    className="inline-block bg-brand-amber dark:bg-brand-amber-dark text-brand-navy font-semibold px-8 py-3 font-sans rounded-full btn-3d-primary"
                  >
                    Get in touch →
                  </a>
                  {/* "See services" re-enable after prompt 007 (services page) is built */}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

    </div>
  )
}
