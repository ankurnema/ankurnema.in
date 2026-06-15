import { Fragment } from 'react'

type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number }>

export type FlowStep = {
  icon: IconComponent
  title: string
  description: string
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-brand-amber dark:text-brand-amber-dark flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export function ProcessFlow({ steps }: { steps: FlowStep[] }) {
  const horizontal = steps.length <= 4

  return (
    <div>

      {/* ── Vertical timeline: mobile always; desktop when 5+ steps ──── */}
      <ol
        className={horizontal ? 'md:hidden' : undefined}
        aria-label="Process steps"
      >
        {steps.map(({ icon: Icon, title, description }, i) => {
          const isLast = i === steps.length - 1
          return (
            <li key={title} className="flex gap-5">
              {/* Left spine: filled number circle + fading connector line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-brand-amber dark:bg-brand-amber-dark flex items-center justify-center shadow-sm">
                  <span className="text-sm font-bold font-sans text-brand-navy">
                    {i + 1}
                  </span>
                </div>
                {!isLast && (
                  <div className="w-0.5 flex-1 min-h-8 mt-1.5 bg-gradient-to-b from-brand-amber/50 to-brand-amber/10 dark:from-brand-amber-dark/50 dark:to-brand-amber-dark/10" />
                )}
              </div>
              {/* Content */}
              <div className={`pt-1 ${isLast ? 'pb-0' : 'pb-8'}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon
                    className="w-4 h-4 text-brand-amber dark:text-brand-amber-dark flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark leading-snug">
                    {title}
                  </h3>
                </div>
                <p className="text-sm font-sans text-brand-slate dark:text-brand-slate-dark leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          )
        })}
      </ol>

      {/* ── Horizontal stepper: desktop only, ≤4 steps ──────────────── */}
      {horizontal && (
        <ol
          className="hidden md:flex items-start"
          aria-label="Process steps"
        >
          {steps.map(({ icon: Icon, title, description }, i) => (
            <Fragment key={title}>
              {/* Step node */}
              <li className="flex flex-col items-center text-center flex-1 min-w-0">
                {/* Filled number circle — same height as connector so they align */}
                <div className="w-14 h-14 rounded-full bg-brand-amber dark:bg-brand-amber-dark flex items-center justify-center shadow-sm mb-4">
                  <span className="text-xl font-bold font-heading text-brand-navy">
                    {i + 1}
                  </span>
                </div>
                {/* Icon + title */}
                <div className="flex items-center justify-center gap-1.5 mb-1.5 px-2">
                  <Icon
                    className="w-3.5 h-3.5 text-brand-amber dark:text-brand-amber-dark flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-sm font-semibold font-heading text-brand-navy dark:text-brand-charcoal-dark leading-snug">
                    {title}
                  </h3>
                </div>
                <p className="text-xs font-sans text-brand-slate dark:text-brand-slate-dark leading-relaxed max-w-[160px] mx-auto">
                  {description}
                </p>
              </li>

              {/* Connector arrow between steps (not after the last) */}
              {i < steps.length - 1 && (
                // h-14 matches circle height so flex items-center aligns the
                // dashed line with the horizontal center of the step circles
                <div
                  className="flex-shrink-0 h-14 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-8 border-t-2 border-dashed border-brand-amber/40 dark:border-brand-amber-dark/30" />
                  <ArrowIcon />
                  <div className="w-8 border-t-2 border-dashed border-brand-amber/40 dark:border-brand-amber-dark/30" />
                </div>
              )}
            </Fragment>
          ))}
        </ol>
      )}

    </div>
  )
}
