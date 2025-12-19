import './Classes.css'

function Classes() {
  const classes = [
    {
      id: 1,
      name: 'HIIT Training',
      time: 'Mon, Wed, Fri - 6:00 AM',
      trainer: 'Sarah Johnson',
      intensity: 'High'
    },
    {
      id: 2,
      name: 'Yoga Flow',
      time: 'Tue, Thu - 7:00 AM',
      trainer: 'Mike Chen',
      intensity: 'Low'
    },
    {
      id: 3,
      name: 'Spin Class',
      time: 'Mon, Wed, Fri - 5:30 PM',
      trainer: 'Emma Davis',
      intensity: 'High'
    },
    {
      id: 4,
      name: 'Pilates',
      time: 'Tue, Thu, Sat - 9:00 AM',
      trainer: 'Lisa Anderson',
      intensity: 'Medium'
    },
    {
      id: 5,
      name: 'Boxing',
      time: 'Mon, Wed - 6:00 PM',
      trainer: 'James Wilson',
      intensity: 'High'
    },
    {
      id: 6,
      name: 'Zumba',
      time: 'Sat, Sun - 10:00 AM',
      trainer: 'Maria Garcia',
      intensity: 'Medium'
    }
  ]

  return (
    <section id="classes" className="classes">
      <div className="container">
        <h2 className="section-title">Class Schedule</h2>
        <div className="classes-grid">
          {classes.map(classItem => (
            <div key={classItem.id} className="class-card">
              <div className="class-header">
                <h3>{classItem.name}</h3>
                <span className={`intensity intensity-${classItem.intensity.toLowerCase()}`}>
                  {classItem.intensity}
                </span>
              </div>
              <div className="class-info">
                <p><strong>⏰ Time:</strong> {classItem.time}</p>
                <p><strong>👤 Trainer:</strong> {classItem.trainer}</p>
              </div>
              <button className="btn btn-primary">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes
