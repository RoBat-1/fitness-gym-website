import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header'

describe('Header Component', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('FitGym')).toBeInTheDocument()
  })

  it('renders all navigation buttons', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Classes')).toBeInTheDocument()
    expect(screen.getByText('Trainers')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('opens mobile menu when toggle button is clicked', () => {
    render(<Header />)
    const menuToggle = screen.getByLabelText('Toggle menu')
    const nav = document.querySelector('.nav')
    
    expect(nav).not.toHaveClass('nav-open')
    fireEvent.click(menuToggle)
    expect(nav).toHaveClass('nav-open')
  })
})
