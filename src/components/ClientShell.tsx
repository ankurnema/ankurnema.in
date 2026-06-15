'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function ClientShell({ children }: { children: React.ReactNode }) {
  const isHome = usePathname() === '/'
  return (
    <>
      {!isHome && <Header />}
      <main className="flex-1 flex flex-col">{children}</main>
      {!isHome && <Footer />}
    </>
  )
}
