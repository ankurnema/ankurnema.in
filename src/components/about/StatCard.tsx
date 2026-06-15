import type { LucideIcon } from 'lucide-react'

type StatCardProps = {
  icon: LucideIcon
  value: string
  label: string
  sublabel?: string
  testId?: string
}

export function StatCard({ icon: Icon, value, label, sublabel, testId }: StatCardProps) {
  return (
    <div className="h-full flex flex-col items-center text-center p-6 bg-brand-surface dark:bg-brand-surface-dark rounded-2xl border border-brand-slate/10 dark:border-brand-slate-dark/10 hover:border-brand-amber/40 dark:hover:border-brand-amber-dark/40 shadow-[0_2px_8px_rgba(0,0,0,0.07)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,158,227,0.08)] dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.35),0_4px_8px_rgba(56,189,248,0.08)] transition-all duration-200">
      <div className="w-10 h-10 rounded-xl bg-brand-canvas dark:bg-brand-canvas-dark flex items-center justify-center mb-4 ring-1 ring-brand-slate/10 dark:ring-brand-slate-dark/10">
        <Icon className="w-5 h-5 text-brand-amber dark:text-brand-amber-dark" strokeWidth={1.5} />
      </div>
      <dt
        className="text-3xl sm:text-4xl font-semibold font-heading mb-1"
        data-testid={testId}
        style={{
          background: 'linear-gradient(135deg, var(--color-brand-navy) 0%, var(--color-brand-amber) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {value}
      </dt>
      <dd className="text-sm text-brand-slate dark:text-brand-slate-dark font-sans leading-snug">
        {label}
        {sublabel && (
          <span className="block text-xs mt-0.5 text-brand-slate/60 dark:text-brand-slate-dark/60">
            {sublabel}
          </span>
        )}
      </dd>
    </div>
  )
}
