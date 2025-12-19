import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Pricing from '../components/Pricing'

describe('Pricing Component', () => {
  it('renders the section title', () => {
    render(<Pricing />)
    expect(screen.getByText('Membership Plans')).toBeInTheDocument()
  })

  it('renders all pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
    expect(screen.getByText('Elite')).toBeInTheDocument()
  })

  it('displays prices correctly', () => {
    render(<Pricing />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
  })

  it('marks Pro plan as popular', () => {
    render(<Pricing />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('renders Choose Plan buttons', () => {
    render(<Pricing />)
    const chooseButtons = screen.getAllByText('Choose Plan')
    expect(chooseButtons).toHaveLength(3)
  })

  it('displays plan features', () => {
    render(<Pricing />)
    expect(screen.getByText(/Access to gym equipment/i)).toBeInTheDocument()
    expect(screen.getByText(/Unlimited group classes/i)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 gym access/i)).toBeInTheDocument()
  })
})
