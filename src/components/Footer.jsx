import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FitGym</h3>
            <p>Be Fit, Be Healthy!</p>
            <p>Transform your body, transform your life.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#bmi">BMI Calculator</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Opening Hours</h4>
            <ul>
              <li>Monday - 05:00am to 10:00pm</li>
              <li>Tuesday - 05:00am to 10:00pm</li>
              <li>Wednesday - 05:00am to 10:00pm</li>
              <li>Thursday - 05:00am to 10:00pm</li>
              <li>Friday - 05:00am to 10:00pm</li>
              <li>Saturday - 07:00am to 09:00pm</li>
              <li>Sunday - 07:00am to 09:00pm</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📍 123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@fitgym.com</li>
            </ul>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 FitGym. All rights reserved. | Be Fit, Be Healthy!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
