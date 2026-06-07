import type { LucideIcon } from 'lucide-react'

type Skill = {
  label: string
  icon?: LucideIcon
}

type SkillGroupProps = {
  title: string
  titleIcon: LucideIcon
  skills: Skill[]
}

export function SkillGroup({ title, titleIcon: TitleIcon, skills }: SkillGroupProps) {
  return (
    <div className="bg-brand-surface dark:bg-brand-surface-dark rounded-2xl p-6 border border-brand-slate/10 dark:border-brand-slate-dark/10">
      <div className="flex items-center gap-3 pb-4 mb-4 border-b border-brand-slate/10 dark:border-brand-slate-dark/10">
        <div className="w-8 h-8 rounded-lg bg-brand-canvas dark:bg-brand-canvas-dark flex items-center justify-center ring-1 ring-brand-slate/10 dark:ring-brand-slate-dark/10">
          <TitleIcon className="w-4 h-4 text-brand-amber dark:text-brand-amber-dark" strokeWidth={1.5} />
        </div>
        <h3 className="text-base font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark">
          {title}
        </h3>
      </div>
      <ul className="space-y-2.5">
        {skills.map((skill) => (
          <li key={skill.label} className="flex items-start gap-2.5">
            {skill.icon ? (
              <skill.icon className="w-4 h-4 mt-0.5 text-brand-amber/70 dark:text-brand-amber-dark/70 flex-shrink-0" strokeWidth={1.5} />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-brand-amber/60 dark:bg-brand-amber-dark/60 mt-2 flex-shrink-0" />
            )}
            <span className="text-sm text-brand-charcoal dark:text-brand-charcoal-dark/80 font-sans leading-snug">
              {skill.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
