import './Services.css'

function Services() {
  const services = [
    {
      id: 1,
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers tailored to your goals',
      icon: '🏋️'
    },
    {
      id: 2,
      title: 'Group Classes',
      description: 'Dynamic group workouts in a motivating environment',
      icon: '👥'
    },
    {
      id: 3,
      title: 'Nutrition Coaching',
      description: 'Expert guidance on meal planning and healthy eating habits',
      icon: '🥗'
    },
    {
      id: 4,
      title: 'Cardio Zone',
      description: 'State-of-the-art cardio equipment for all fitness levels',
      icon: '🏃'
    },
    {
      id: 5,
      title: 'Strength Training',
      description: 'Complete free weights and machine area for building muscle',
      icon: '💪'
    },
    {
      id: 6,
      title: 'Yoga & Pilates',
      description: 'Improve flexibility and mindfulness with expert instructors',
      icon: '🧘'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
