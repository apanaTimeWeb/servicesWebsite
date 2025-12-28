"use client"

import { useNavigate } from "react-router-dom"

export function ExploreCompanySection() {
  const navigate = useNavigate()

  const exploreItems = [
    {
      title: "Career With Us",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces",
      description: "Join our innovative team and grow your career in tech",
      link: "/career"
    },
    {
      title: "Our Expert Team",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=entropy",
      description: "Serving diverse sectors with cutting-edge solutions",
      link: "/our-industries"
    },
    {
      title: "Our Event",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&h=300&fit=crop&crop=entropy",
      description: "Join our seminars, webinars, and workshops",
      link: "/our-events"
    }
  ]

  return (
    <section id="explore-company" style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Explore Apana Time Company
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Discover opportunities, industries we serve, and comprehensive services we offer
          </p>
        </div>

        <div className="explore-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}>
          {exploreItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item.link) {
                  if (item.link.startsWith('/#')) {
                    window.location.href = item.link
                  } else {
                    navigate(item.link)
                  }
                }
              }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: item.link ? 'pointer' : 'default'
              }}
              onMouseEnter={(e) => {
                if (item.link) {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)'
                }
              }}
              onMouseLeave={(e) => {
                if (item.link) {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                  padding: '2rem 1.5rem 1.5rem',
                  color: '#ffffff'
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}