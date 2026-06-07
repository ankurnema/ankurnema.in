type StoryCardProps = {
  before: string
  after: string
  metric: string
  headline: string
  narrative: string
  variant?: 'default' | 'featured'
}

export function StoryCard({ before, after, metric, headline, narrative, variant = 'default' }: StoryCardProps) {
  const isFeatured = variant === 'featured'
  return (
    <div className={`
      bg-brand-surface dark:bg-brand-surface-dark rounded-2xl border border-brand-slate/10 dark:border-brand-slate-dark/10
      hover:border-brand-amber/40 dark:hover:border-brand-amber-dark/40 hover:-translate-y-0.5 transition-all duration-200
      ${isFeatured ? 'md:col-span-2 p-8' : 'p-6'}
    `}>
      {/* Before → After */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-sans text-brand-slate dark:text-brand-slate-dark line-through opacity-60">
          {before}
        </span>
        <span className="text-brand-slate/30 dark:text-brand-slate-dark/30 text-sm">→</span>
        <span className="text-sm font-semibold font-sans text-brand-amber dark:text-brand-amber-dark">
          {after}
        </span>
      </div>
      {/* Big metric */}
      <div
        className={`font-heading font-semibold mb-2 leading-none ${isFeatured ? 'text-5xl' : 'text-3xl'}`}
        style={{
          background: 'linear-gradient(135deg, var(--color-brand-navy) 0%, var(--color-brand-amber) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {metric}
      </div>
      <h3 className={`font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-3 ${isFeatured ? 'text-lg' : 'text-base'}`}>
        {headline}
      </h3>
      <p className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans leading-relaxed">
        {narrative}
      </p>
    </div>
  )
}
