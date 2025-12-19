import './Pricing.css'

function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: '$29',
      period: '/month',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Free fitness assessment',
        'Mobile app access'
      ]
    },
    {
      id: 2,
      name: 'Pro',
      price: '$59',
      period: '/month',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        '2 personal training sessions',
        'Nutrition consultation',
        'Guest passes (2/month)'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Elite',
      price: '$99',
      period: '/month',
      features: [
        'Everything in Pro',
        'Unlimited personal training',
        'Priority class booking',
        'Free merchandise',
        'Guest passes (5/month)',
        '24/7 gym access'
      ]
    }
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">Membership Plans</h2>
        <div className="pricing-grid">
          {plans.map(plan => (
            <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="features">
                {plan.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
