import Link from 'next/link'
import { Check } from 'lucide-react'

type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number }>

type ServiceCardProps = {
  icon: IconComponent
  name: string
  description: string
  highlights: string[]
  href?: string
}

export function ServiceCard({ icon: Icon, name, description, highlights, href }: ServiceCardProps) {
  const inner = (
    <>
      <div className="w-10 h-10 rounded-xl bg-brand-amber/10 dark:bg-brand-amber-dark/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-brand-amber dark:text-brand-amber-dark" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-2 group-hover:text-brand-amber dark:group-hover:text-brand-amber-dark transition-colors">
        {name}
      </h3>
      <p className="text-brand-charcoal dark:text-brand-charcoal-dark/80 text-base font-sans leading-relaxed mb-4">
        {description}
      </p>
      <ul className="space-y-2 mt-auto">
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm font-sans text-brand-slate dark:text-brand-slate-dark">
            <Check className="w-4 h-4 text-brand-amber dark:text-brand-amber-dark flex-shrink-0 mt-0.5" strokeWidth={2} />
            {item}
          </li>
        ))}
      </ul>
    </>
  )

  const cardClass = 'group bg-brand-surface dark:bg-brand-surface-dark rounded-2xl p-6 border border-brand-slate/10 dark:border-brand-slate-dark/10 hover:border-brand-amber/30 dark:hover:border-brand-amber-dark/30 hover:-translate-y-0.5 hover:shadow-sm transition-all flex flex-col'

  if (href) {
    return <Link href={href} className={cardClass}>{inner}</Link>
  }

  return <div className={cardClass}>{inner}</div>
}
