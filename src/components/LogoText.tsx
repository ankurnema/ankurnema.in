// CSS text logo — replace with SVG <Image> via Prompt 003b when logo files are delivered

type LogoTextProps = {
  variant?: 'light' | 'dark'
}

export function LogoText({ variant = 'light' }: LogoTextProps) {
  return (
    <span
      className={`font-semibold tracking-tight ${
        variant === 'dark' ? 'text-brand-navy-dark' : 'text-brand-navy'
      }`}
    >
      Ankur Nema
    </span>
  )
}
