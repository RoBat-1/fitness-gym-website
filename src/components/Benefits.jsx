import './Benefits.css'

function Benefits() {
  const benefits = [
    {
      id: 1,
      icon: '🎯',
      title: 'Free Testing',
      description: 'We offer free testing for BMI and also for body building fitness assessment'
    },
    {
      id: 2,
      icon: '📚',
      title: 'Free Lessons',
      description: 'We give free tips and lessons on how to stay fit and maintain a healthy lifestyle'
    },
    {
      id: 3,
      icon: '💰',
      title: '20% Discount',
      description: 'Monthly discounts for new customers and members who participate in weekly challenges'
    },
    {
      id: 4,
      icon: '⚡',
      title: 'Free Energy Pack',
      description: 'Complimentary energy supplements for active members and challenge participants'
    }
  ]

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map(benefit => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
