import './Gallery.css'

function Gallery() {
  const images = [
    {
      id: 1,
      title: 'Cardio Zone',
      icon: '🚴',
      description: 'State-of-the-art cardio equipment'
    },
    {
      id: 2,
      title: 'Weight Training',
      icon: '🏋️',
      description: 'Professional strength training area'
    },
    {
      id: 3,
      title: 'Group Classes',
      icon: '🤸',
      description: 'Dynamic group fitness sessions'
    },
    {
      id: 4,
      title: 'Boxing Ring',
      icon: '🥊',
      description: 'Professional boxing and MMA'
    },
    {
      id: 5,
      title: 'Yoga Studio',
      icon: '🧘',
      description: 'Peaceful yoga and meditation'
    },
    {
      id: 6,
      title: 'Swimming Pool',
      icon: '🏊',
      description: 'Olympic-size swimming pool'
    }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Our Facilities</h2>
        <div className="gallery-grid">
          {images.map(image => (
            <div key={image.id} className="gallery-card">
              <div className="gallery-icon">{image.icon}</div>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
