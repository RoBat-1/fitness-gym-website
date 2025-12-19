import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About FitGym</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome to FitGym, where fitness meets excellence. For over 10 years, 
              we've been helping thousands of members achieve their fitness goals 
              through personalized training, state-of-the-art equipment, and a 
              supportive community.
            </p>
            <p>
              Our mission is to provide a welcoming environment where everyone, 
              from beginners to athletes, can pursue their health and fitness 
              journey with confidence.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>5000+</h3>
              <p>Happy Members</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Expert Trainers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
