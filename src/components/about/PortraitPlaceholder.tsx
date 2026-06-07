export function PortraitPlaceholder() {
  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto">
      {/* Outer dotted ring */}
      <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-white/20 scale-105" />
      {/* Card */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-brand-navy via-[#00408a] to-[#005bb5]">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,227,0.25)_0%,transparent_70%)]" />
        {/* Monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading font-semibold text-white select-none"
            style={{ fontSize: 'clamp(4rem, 15vw, 7rem)', letterSpacing: '-0.02em', lineHeight: 1 }}>
            AN
          </span>
        </div>
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(255,255,255,1) 24px, rgba(255,255,255,1) 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(255,255,255,1) 24px, rgba(255,255,255,1) 25px)'
          }} />
        {/* Bottom label */}
        <div className="absolute bottom-0 inset-x-0 px-6 py-4 bg-gradient-to-t from-black/40 to-transparent">
          <p className="text-white/60 text-xs font-sans tracking-widest uppercase text-center">
            Portrait coming soon
          </p>
        </div>
      </div>
    </div>
  )
}
