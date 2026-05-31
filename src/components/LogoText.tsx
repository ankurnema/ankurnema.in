import Image from 'next/image'

type LogoTextProps = {
  className?: string
}

export function LogoText({ className }: LogoTextProps) {
  return (
    <>
      <Image
        src="/logo/logo-light.svg"
        alt="Ankur Nema"
        width={480}
        height={144}
        priority
        className={`dark:hidden ${className ?? ''}`}
      />
      <Image
        src="/logo/logo-dark.svg"
        alt="Ankur Nema"
        width={480}
        height={144}
        priority
        className={`hidden dark:block ${className ?? ''}`}
      />
    </>
  )
}
