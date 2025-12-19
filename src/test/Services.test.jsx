import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Services from '../components/Services'

describe('Services Component', () => {
  it('renders the section title', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders all service cards', () => {
    render(<Services />)
    expect(screen.getByText('Personal Training')).toBeInTheDocument()
    expect(screen.getByText('Group Classes')).toBeInTheDocument()
    expect(screen.getByText('Nutrition Coaching')).toBeInTheDocument()
    expect(screen.getByText('Cardio Zone')).toBeInTheDocument()
    expect(screen.getByText('Strength Training')).toBeInTheDocument()
    expect(screen.getByText('Yoga & Pilates')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/One-on-one sessions/i)).toBeInTheDocument()
    expect(screen.getByText(/Dynamic group workouts/i)).toBeInTheDocument()
  })
})
