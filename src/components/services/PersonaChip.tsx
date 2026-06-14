type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number }>

type PersonaChipProps = {
  icon: IconComponent
  label: string
}

export function PersonaChip({ icon: Icon, label }: PersonaChipProps) {
  return (
    <div className="flex items-center gap-2 bg-brand-surface dark:bg-brand-surface-dark border border-brand-slate/10 dark:border-brand-slate-dark/10 rounded-full px-4 py-2">
      <Icon className="w-4 h-4 text-brand-amber dark:text-brand-amber-dark" strokeWidth={1.5} />
      <span className="text-sm font-sans font-medium text-brand-navy dark:text-brand-charcoal-dark whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}
