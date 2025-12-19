import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Be Fit, Be Healthy!</h1>
        <p className="hero-subtitle">
          Being fit is a necessity for strong health and it doesn't suck, 
          get back into it today. We've got you covered for your fitness journey.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Join Us</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero
