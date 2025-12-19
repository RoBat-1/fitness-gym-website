import './Blog.css'

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Gymnastics, the New Way',
      excerpt: 'Discover modern gymnastics techniques that are transforming fitness routines...',
      date: 'Dec 15, 2025',
      icon: '🤸‍♀️',
      category: 'Training'
    },
    {
      id: 2,
      title: 'Cycling Competition Tips',
      excerpt: 'Prepare for your next cycling event with these expert training strategies...',
      date: 'Dec 12, 2025',
      icon: '🚴',
      category: 'Events'
    },
    {
      id: 3,
      title: 'Body Building Essentials',
      excerpt: 'Learn the fundamentals of effective bodybuilding and muscle gain...',
      date: 'Dec 10, 2025',
      icon: '💪',
      category: 'Nutrition'
    }
  ]

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <p className="blog-subtitle">Stay updated with fitness tips and news</p>
        <div className="blog-grid">
          {posts.map(post => (
            <div key={post.id} className="blog-card">
              <div className="blog-icon">{post.icon}</div>
              <span className="blog-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-date">{post.date}</span>
                <button className="blog-read-more">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
