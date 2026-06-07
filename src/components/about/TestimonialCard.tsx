type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  company: string
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(' ')
  const initials = parts.length >= 2
    ? parts[0][0] + parts[parts.length - 1][0]
    : parts[0].slice(0, 2)
  return (
    <div className="w-10 h-10 rounded-full bg-brand-navy dark:bg-brand-canvas-dark flex items-center justify-center flex-shrink-0 ring-2 ring-brand-amber/20 dark:ring-brand-amber-dark/20">
      <span className="text-white dark:text-brand-charcoal-dark text-sm font-semibold font-heading">
        {initials.toUpperCase()}
      </span>
    </div>
  )
}

export function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    <div className="
      bg-brand-surface dark:bg-brand-surface-dark rounded-2xl p-6 border border-brand-slate/10 dark:border-brand-slate-dark/10
      hover:border-brand-amber/30 dark:hover:border-brand-amber-dark/30 hover:-translate-y-0.5 transition-all duration-200
      flex flex-col gap-4
    ">
      {/* Opening quote mark */}
      <div className="text-brand-amber/30 dark:text-brand-amber-dark/30 font-heading text-5xl leading-none select-none" aria-hidden="true">
        &ldquo;
      </div>
      <blockquote className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-sm font-sans leading-relaxed flex-1 -mt-6">
        {quote}
      </blockquote>
      <figcaption className="flex items-center gap-3 pt-2 border-t border-brand-slate/10 dark:border-brand-slate-dark/10">
        <Initials name={name} />
        <div>
          <p className="text-sm font-semibold font-sans text-brand-navy dark:text-brand-charcoal-dark leading-tight">
            {name}
          </p>
          <p className="text-xs text-brand-slate dark:text-brand-slate-dark font-sans mt-0.5">
            {role}, {company}
          </p>
        </div>
      </figcaption>
    </div>
  )
}
