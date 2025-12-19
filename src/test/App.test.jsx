import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the main app component', () => {
    render(<App />)
    const fitGymElements = screen.getAllByText('FitGym')
    expect(fitGymElements.length).toBeGreaterThan(0)
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('Transform Your Body')).toBeInTheDocument()
    expect(screen.getByText('About FitGym')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Class Schedule')).toBeInTheDocument()
    expect(screen.getByText('Meet Our Trainers')).toBeInTheDocument()
    expect(screen.getByText('Membership Plans')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
