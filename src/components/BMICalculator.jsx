import { useState } from 'react'
import './BMICalculator.css'

function BMICalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBMI] = useState(null)
  const [category, setCategory] = useState('')

  const calculateBMI = (e) => {
    e.preventDefault()
    
    if (weight && height) {
      const heightInMeters = height / 100
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1)
      setBMI(bmiValue)
      
      // Determine category
      if (bmiValue < 18.5) {
        setCategory('Underweight')
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal weight')
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight')
      } else {
        setCategory('Obese')
      }
    }
  }

  return (
    <section id="bmi" className="bmi-calculator">
      <div className="container">
        <div className="bmi-content">
          <div className="bmi-info">
            <h2 className="section-title">Calculate Your BMI</h2>
            <p>
              Your Body Mass Index (BMI) is a measurement of the ratio of your 
              weight to your height. It is a good way to gauge whether your weight 
              is in healthy proportion to your height. BMI helps determine any 
              health risks you may face if it's outside the healthy range.
            </p>
            <div className="bmi-ranges">
              <div className="bmi-range">
                <span className="range-label">Underweight:</span>
                <span>BMI &lt; 18.5</span>
              </div>
              <div className="bmi-range">
                <span className="range-label">Normal:</span>
                <span>BMI 18.5 - 24.9</span>
              </div>
              <div className="bmi-range">
                <span className="range-label">Overweight:</span>
                <span>BMI 25 - 29.9</span>
              </div>
              <div className="bmi-range">
                <span className="range-label">Obese:</span>
                <span>BMI ≥ 30</span>
              </div>
            </div>
          </div>
          <div className="bmi-calculator-form">
            <form onSubmit={calculateBMI}>
              <div className="form-group">
                <label>Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight"
                  required
                />
              </div>
              <div className="form-group">
                <label>Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Calculate BMI
              </button>
            </form>
            {bmi && (
              <div className="bmi-result">
                <h3>Your BMI: <span className="bmi-value">{bmi}</span></h3>
                <p className="bmi-category">{category}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BMICalculator
