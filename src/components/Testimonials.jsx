import { useState } from 'react'
import './Testimonials.css'

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      text: 'FitGym has really been a great community in helping me keep fit. I never knew I could do this, but with their consistent training and great coaches, I\'ve maintained fitness. Let\'s all get back into the business of keeping fit, it is a great way of staying healthy!',
      image: '👩‍🦰',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'The trainers at FitGym are incredibly knowledgeable and supportive. They helped me lose 30 pounds and gain confidence. The community here is amazing and everyone supports each other. Highly recommend!',
      image: '👨‍🦱',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      text: 'Best gym experience ever! The facilities are top-notch, classes are diverse and challenging, and the atmosphere is so motivating. I\'ve been a member for 2 years and couldn\'t be happier with my progress.',
      image: '👩‍🦳',
      rating: 5
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Members Say</h2>
        <div className="testimonial-slider">
          <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous">
            ‹
          </button>
          <div className="testimonial-card">
            <div className="testimonial-image">
              {testimonials[currentSlide].image}
            </div>
            <div className="testimonial-content">
              <div className="stars">
                {'⭐'.repeat(testimonials[currentSlide].rating)}
              </div>
              <p className="testimonial-text">
                {testimonials[currentSlide].text}
              </p>
              <h4 className="testimonial-name">
                {testimonials[currentSlide].name}
              </h4>
            </div>
          </div>
          <button className="slider-btn next" onClick={nextSlide} aria-label="Next">
            ›
          </button>
        </div>
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
