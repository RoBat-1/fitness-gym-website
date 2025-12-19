import './Trainers.css'

function Trainers() {
  const trainers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      specialty: 'HIIT & Strength',
      experience: '8 years',
      image: '👩‍🦰'
    },
    {
      id: 2,
      name: 'Mike Chen',
      specialty: 'Yoga & Meditation',
      experience: '10 years',
      image: '👨‍🦱'
    },
    {
      id: 3,
      name: 'Emma Davis',
      specialty: 'Cardio & Spin',
      experience: '6 years',
      image: '👩‍🦳'
    },
    {
      id: 4,
      name: 'James Wilson',
      specialty: 'Boxing & MMA',
      experience: '12 years',
      image: '👨‍🦲'
    }
  ]

  return (
    <section id="trainers" className="trainers">
      <div className="container">
        <h2 className="section-title">Meet Our Trainers</h2>
        <div className="trainers-grid">
          {trainers.map(trainer => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-image">{trainer.image}</div>
              <h3>{trainer.name}</h3>
              <p className="specialty">{trainer.specialty}</p>
              <p className="experience">{trainer.experience} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
