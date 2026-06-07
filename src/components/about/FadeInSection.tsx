'use client'

import { motion, useReducedMotion } from 'framer-motion'

type FadeInSectionProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeInSection({ children, className = '', delay = 0 }: FadeInSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
