type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number }>

type PersonaChipProps = {
  icon: IconComponent
  label: string
}

export function PersonaChip({ icon: Icon, label }: PersonaChipProps) {
  return (
    <div className="flex items-center gap-2 bg-brand-surface dark:bg-brand-surface-dark border border-brand-slate/15 dark:border-brand-slate-dark/15 rounded-full px-4 py-2 shadow-[0_3px_0_0_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_3px_0_0_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.2)]">
      <Icon className="w-4 h-4 text-brand-amber dark:text-brand-amber-dark" strokeWidth={1.5} />
      <span className="text-sm font-sans font-medium text-brand-navy dark:text-brand-charcoal-dark whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}
