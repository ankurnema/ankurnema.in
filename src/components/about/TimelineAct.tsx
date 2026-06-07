type TimelineActProps = {
  era: string
  years: string
  companies: string
  narrative: string
  side: 'left' | 'right'
  index: number
}

export function TimelineAct({ era, years, companies, narrative, side, index }: TimelineActProps) {
  const isLeft = side === 'left'
  return (
    <div className={`relative flex items-start gap-0 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content card */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="bg-brand-surface dark:bg-brand-surface-dark rounded-2xl p-6 border border-brand-slate/10 dark:border-brand-slate-dark/10 hover:border-brand-amber/30 dark:hover:border-brand-amber-dark/30 transition-colors">
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-amber/10 dark:bg-brand-amber-dark/10 text-brand-amber dark:text-brand-amber-dark text-xs font-semibold font-sans tracking-wide">
              Act {index + 1}
            </span>
            <span className="text-xs text-brand-slate dark:text-brand-slate-dark font-sans">
              {years}
            </span>
          </div>
          <h3 className="text-xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-1">
            {era}
          </h3>
          <p className="text-sm font-sans text-brand-amber dark:text-brand-amber-dark font-medium mb-3">
            {companies}
          </p>
          <p className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base font-sans leading-relaxed">
            {narrative}
          </p>
        </div>
      </div>

      {/* Timeline rail + dot — hidden on mobile */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-12">
        <div className="w-3 h-3 rounded-full bg-brand-amber dark:bg-brand-amber-dark ring-4 ring-brand-canvas dark:ring-brand-canvas-dark mt-6" />
      </div>

      {/* Empty spacer for the other side */}
      <div className="hidden md:block flex-1" />
    </div>
  )
}
