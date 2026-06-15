'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogoText } from '@/components/LogoText'
import { ThemeToggle } from '@/components/ThemeToggle'
import { navLinks, serviceLinks, servicesOverviewHref, cta } from '@/lib/nav'

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownButtonRef = useRef<HTMLButtonElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Scroll detection for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [dropdownOpen])

  const openDropdown = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setDropdownOpen(true)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => setDropdownOpen(false), 200)
  }, [])

  // Keyboard handler for dropdown
  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setDropdownOpen(false)
      dropdownButtonRef.current?.focus()
    }
  }, [])

  // Keyboard handler for mobile menu
  const handleMobileKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setMobileOpen(false)
  }, [])

  const isServicesActive = pathname.startsWith('/services')

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div
          className={[
            'flex items-center justify-between backdrop-blur-md transition-all duration-300',
            scrolled
              ? 'mx-4 md:mx-6 lg:mx-10 mt-4 px-4 md:px-6 lg:px-8 py-3 md:py-4 bg-brand-surface/90 dark:bg-brand-surface-dark/90 rounded-2xl border border-brand-slate/20 dark:border-brand-slate-dark/20 shadow-lg'
              : 'px-6 md:px-8 lg:px-12 xl:px-16 py-4 md:py-5 bg-brand-surface/80 dark:bg-brand-surface-dark/80 border border-transparent',
          ].join(' ')}
        >

          {/* Logo */}
          <Link href="/" aria-label="Ankur Nema — home" className="flex-shrink-0">
            <LogoText className="h-8 w-auto sm:h-10 md:h-12" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'px-4 py-2 rounded-md text-[15px] font-sans font-medium transition-colors',
                    isActive
                      ? 'text-brand-amber dark:text-brand-amber-dark'
                      : 'text-brand-slate dark:text-brand-slate-dark hover:text-brand-navy dark:hover:text-brand-charcoal-dark',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Services dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onKeyDown={handleDropdownKeyDown}
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
            >
              <button
                ref={dropdownButtonRef}
                type="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((v) => !v)}
                className={[
                  'flex items-center gap-1 px-4 py-2 rounded-md text-[15px] font-sans font-medium transition-colors',
                  isServicesActive
                    ? 'text-brand-amber dark:text-brand-amber-dark'
                    : 'text-brand-slate dark:text-brand-slate-dark hover:text-brand-navy dark:hover:text-brand-charcoal-dark',
                ].join(' ')}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdownOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-1 w-52 bg-brand-surface dark:bg-brand-surface-dark rounded-2xl border border-brand-slate/10 dark:border-brand-slate-dark/10 shadow-lg py-2 z-50"
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                      className={[
                        'block px-4 py-2 text-sm font-sans transition-colors',
                        pathname === link.href
                          ? 'text-brand-amber dark:text-brand-amber-dark'
                          : 'text-brand-charcoal dark:text-brand-charcoal-dark hover:text-brand-amber dark:hover:text-brand-amber-dark hover:bg-brand-canvas dark:hover:bg-brand-canvas-dark',
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="my-2 border-t border-brand-slate/10 dark:border-brand-slate-dark/10" />
                  <Link
                    href={servicesOverviewHref}
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm font-sans font-medium text-brand-navy dark:text-brand-navy-dark hover:text-brand-amber dark:hover:text-brand-amber-dark hover:bg-brand-canvas dark:hover:bg-brand-canvas-dark transition-colors"
                  >
                    View all services →
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop right — CTA + theme toggle */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={cta.href}
              className="bg-brand-amber dark:bg-brand-amber-dark text-brand-navy font-semibold font-sans text-sm px-5 py-2.5 rounded-full btn-3d-primary"
            >
              {cta.label}
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile right — theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-md text-brand-slate dark:text-brand-slate-dark hover:text-brand-navy dark:hover:text-brand-charcoal-dark transition-colors"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onKeyDown={handleMobileKeyDown}
          className="fixed inset-0 z-[60] flex flex-col bg-brand-surface dark:bg-brand-surface-dark"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-slate/10 dark:border-brand-slate-dark/10">
            <Link href="/" aria-label="Ankur Nema — home" onClick={() => setMobileOpen(false)}>
              <LogoText className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-md text-brand-slate dark:text-brand-slate-dark hover:text-brand-navy dark:hover:text-brand-charcoal-dark transition-colors"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    'px-3 py-3 rounded-xl text-base font-sans font-medium transition-colors',
                    isActive
                      ? 'text-brand-amber dark:text-brand-amber-dark bg-brand-amber/5 dark:bg-brand-amber-dark/5'
                      : 'text-brand-charcoal dark:text-brand-charcoal-dark hover:bg-brand-canvas dark:hover:bg-brand-canvas-dark',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Services section */}
            <div className="mt-4">
              <p className="px-3 pb-2 text-xs font-sans font-semibold tracking-widest uppercase text-brand-slate dark:text-brand-slate-dark">
                Services
              </p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    'block px-3 py-3 rounded-xl text-base font-sans transition-colors',
                    pathname === link.href
                      ? 'text-brand-amber dark:text-brand-amber-dark bg-brand-amber/5 dark:bg-brand-amber-dark/5'
                      : 'text-brand-charcoal dark:text-brand-charcoal-dark hover:bg-brand-canvas dark:hover:bg-brand-canvas-dark',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={servicesOverviewHref}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 rounded-xl text-sm font-sans font-medium text-brand-navy dark:text-brand-navy-dark hover:bg-brand-canvas dark:hover:bg-brand-canvas-dark transition-colors"
              >
                View all services →
              </Link>
            </div>
          </nav>

          {/* CTA */}
          <div className="px-6 py-6 border-t border-brand-slate/10 dark:border-brand-slate-dark/10">
            <a
              href={cta.href}
              className="block w-full text-center bg-brand-amber dark:bg-brand-amber-dark text-brand-navy font-semibold font-sans text-base px-6 py-3 rounded-xl btn-3d-primary"
            >
              {cta.label}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
