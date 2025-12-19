import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Classes from '../components/Classes'

describe('Classes Component', () => {
  it('renders the section title', () => {
    render(<Classes />)
    expect(screen.getByText('Class Schedule')).toBeInTheDocument()
  })

  it('renders all class cards', () => {
    render(<Classes />)
    expect(screen.getByText('HIIT Training')).toBeInTheDocument()
    expect(screen.getByText('Yoga Flow')).toBeInTheDocument()
    expect(screen.getByText('Spin Class')).toBeInTheDocument()
    expect(screen.getByText('Pilates')).toBeInTheDocument()
    expect(screen.getByText('Boxing')).toBeInTheDocument()
    expect(screen.getByText('Zumba')).toBeInTheDocument()
  })

  it('displays intensity levels', () => {
    render(<Classes />)
    const highIntensity = screen.getAllByText('High')
    const mediumIntensity = screen.getAllByText('Medium')
    const lowIntensity = screen.getAllByText('Low')
    
    expect(highIntensity.length).toBeGreaterThan(0)
    expect(mediumIntensity.length).toBeGreaterThan(0)
    expect(lowIntensity.length).toBeGreaterThan(0)
  })

  it('renders Book Now buttons', () => {
    render(<Classes />)
    const bookButtons = screen.getAllByText('Book Now')
    expect(bookButtons).toHaveLength(6)
  })
})
