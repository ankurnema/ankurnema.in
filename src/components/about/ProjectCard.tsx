type ProjectCardProps = {
  title: string
  company: string
  period: string
  challenge: string
  result: string
  tags: string[]
}

export function ProjectCard({ title, company, period, challenge, result, tags }: ProjectCardProps) {
  return (
    <div className="
      bg-brand-surface dark:bg-brand-surface-dark rounded-2xl p-6 border border-brand-slate/10 dark:border-brand-slate-dark/10
      hover:border-brand-amber/40 dark:hover:border-brand-amber-dark/40 hover:-translate-y-0.5 transition-all duration-200
      flex flex-col
    ">
      <div className="mb-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark leading-snug">
            {title}
          </h3>
        </div>
        <p className="text-xs font-sans text-brand-amber dark:text-brand-amber-dark font-medium">
          {company} · {period}
        </p>
      </div>
      <p className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans leading-relaxed mb-3 flex-1">
        {challenge}
      </p>
      <div className="bg-brand-canvas dark:bg-brand-canvas-dark rounded-xl p-3 mb-4 border-l-2 border-brand-amber dark:border-brand-amber-dark">
        <p className="text-xs font-semibold font-sans text-brand-amber dark:text-brand-amber-dark uppercase tracking-wide mb-1">
          Result
        </p>
        <p className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans leading-snug">
          {result}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-sans px-2.5 py-1 rounded-full bg-brand-canvas dark:bg-brand-canvas-dark text-brand-slate dark:text-brand-slate-dark border border-brand-slate/15 dark:border-brand-slate-dark/15">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
