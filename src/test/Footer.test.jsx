import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Footer Component', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('FitGym')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText(/123 Fitness Street/i)).toBeInTheDocument()
  })

  it('renders social media section', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2025 FitGym/i)).toBeInTheDocument()
  })
})
