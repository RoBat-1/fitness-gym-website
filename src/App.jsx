import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import About from './components/About'
import Services from './components/Services'
import Classes from './components/Classes'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import BMICalculator from './components/BMICalculator'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Classes />
      <Trainers />
      <Pricing />
      <BMICalculator />
      <Gallery />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
