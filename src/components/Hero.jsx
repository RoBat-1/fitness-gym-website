import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Body</h1>
        <p className="hero-subtitle">Join the ultimate fitness experience</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero
