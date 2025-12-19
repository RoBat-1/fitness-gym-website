import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

describe('Hero Component', () => {
  it('renders the hero title', () => {
    render(<Hero />)
    expect(screen.getByText('Transform Your Body')).toBeInTheDocument()
  })

  it('renders the hero subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Join the ultimate fitness experience')).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })
})
