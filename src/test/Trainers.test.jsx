import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Trainers from '../components/Trainers'

describe('Trainers Component', () => {
  it('renders the section title', () => {
    render(<Trainers />)
    expect(screen.getByText('Meet Our Trainers')).toBeInTheDocument()
  })

  it('renders all trainer cards', () => {
    render(<Trainers />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Mike Chen')).toBeInTheDocument()
    expect(screen.getByText('Emma Davis')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })

  it('displays trainer specialties', () => {
    render(<Trainers />)
    expect(screen.getByText('HIIT & Strength')).toBeInTheDocument()
    expect(screen.getByText('Yoga & Meditation')).toBeInTheDocument()
    expect(screen.getByText('Cardio & Spin')).toBeInTheDocument()
    expect(screen.getByText('Boxing & MMA')).toBeInTheDocument()
  })

  it('displays trainer experience', () => {
    render(<Trainers />)
    expect(screen.getByText('8 years experience')).toBeInTheDocument()
    expect(screen.getByText('10 years experience')).toBeInTheDocument()
    expect(screen.getByText('6 years experience')).toBeInTheDocument()
    expect(screen.getByText('12 years experience')).toBeInTheDocument()
  })
})
