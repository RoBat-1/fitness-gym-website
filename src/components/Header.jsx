import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>FitGym</h1>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('services')}>Services</button>
          <button onClick={() => scrollToSection('classes')}>Classes</button>
          <button onClick={() => scrollToSection('trainers')}>Trainers</button>
          <button onClick={() => scrollToSection('pricing')}>Pricing</button>
          <button onClick={() => scrollToSection('bmi')}>BMI Calculator</button>
          <button onClick={() => scrollToSection('blog')}>Blog</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
