import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../components/About'

describe('About Component', () => {
  it('renders the section title', () => {
    render(<About />)
    expect(screen.getByText('About FitGym')).toBeInTheDocument()
  })

  it('renders company description', () => {
    render(<About />)
    expect(screen.getByText(/Welcome to FitGym/i)).toBeInTheDocument()
  })

  it('renders all statistics', () => {
    render(<About />)
    expect(screen.getByText('10+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('5000+')).toBeInTheDocument()
    expect(screen.getByText('Happy Members')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Expert Trainers')).toBeInTheDocument()
  })
})
