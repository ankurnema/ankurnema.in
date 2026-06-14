type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number }>

type ProcessStepProps = {
  step: number
  icon: IconComponent
  title: string
  description: string
}

export function ProcessStep({ step, icon: Icon, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="w-12 h-12 rounded-full bg-brand-amber/10 dark:bg-brand-amber-dark/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-brand-amber dark:text-brand-amber-dark" strokeWidth={1.5} />
        </div>
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-amber dark:bg-brand-amber-dark text-brand-navy text-xs font-bold flex items-center justify-center font-sans leading-none">
          {step}
        </span>
      </div>
      <h3 className="text-sm font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark mb-1">
        {title}
      </h3>
      <p className="text-xs font-sans text-brand-slate dark:text-brand-slate-dark leading-relaxed max-w-[140px]">
        {description}
      </p>
    </div>
  )
}
