export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
] as const

export const servicesOverviewHref = '/services'

export const serviceLinks = [
  { label: 'Mentoring', href: '/services/mentoring' },
  { label: 'Career Guidance', href: '/services/career' },
  { label: 'Resume Review', href: '/services/resume-review' },
  { label: 'LinkedIn Review', href: '/services/linkedin-review' },
  { label: 'Consulting', href: '/services/consulting' },
] as const

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/ankurnema',
  github: 'https://github.com/ankurnema',
} as const

export const siteEmail = 'ankur@ankurnema.in'

export const cta = {
  label: 'Book a call',
  href: 'mailto:ankur@ankurnema.in',
} as const

export const repoUrl = 'https://github.com/ankurnema/ankurnema.in'
