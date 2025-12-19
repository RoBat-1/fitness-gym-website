import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Contact from '../components/Contact'

describe('Contact Component', () => {
  it('renders the section title', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Contact />)
    expect(screen.getByText(/123 Fitness Street/i)).toBeInTheDocument()
    expect(screen.getByText(/\(555\) 123-4567/i)).toBeInTheDocument()
    expect(screen.getByText(/info@fitgym.com/i)).toBeInTheDocument()
  })

  it('renders contact form with all fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('updates form field values when typing', () => {
    render(<Contact />)
    const nameInput = screen.getByPlaceholderText('Your Name')
    const emailInput = screen.getByPlaceholderText('Your Email')
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    
    expect(nameInput.value).toBe('John Doe')
    expect(emailInput.value).toBe('john@example.com')
  })

  it('shows alert and clears form on submit', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    render(<Contact />)
    
    const nameInput = screen.getByPlaceholderText('Your Name')
    const emailInput = screen.getByPlaceholderText('Your Email')
    const messageInput = screen.getByPlaceholderText('Your Message')
    const submitButton = screen.getByText('Send Message')
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'Hello!' } })
    fireEvent.click(submitButton)
    
    expect(alertSpy).toHaveBeenCalledWith('Thank you for your message! We will contact you soon.')
    expect(nameInput.value).toBe('')
    expect(emailInput.value).toBe('')
    expect(messageInput.value).toBe('')
    
    alertSpy.mockRestore()
  })
})
