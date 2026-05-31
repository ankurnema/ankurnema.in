import { render } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import RootLayout from '../app/layout'

// next/font/google is a build-time module — unavailable in jsdom (see ADR-008)
vi.mock('next/font/google', () => ({
  Inter: () => ({ className: '', variable: '--font-inter' }),
  DM_Sans: () => ({ className: '', variable: '--font-dm-sans' }),
}))

describe('RootLayout', () => {
  it('renders footer with copyright text', () => {
    const { container } = render(<RootLayout><div>child</div></RootLayout>)
    expect(container.innerHTML).toMatch(/© \d{4} Ankur Nema/)
  })
})
