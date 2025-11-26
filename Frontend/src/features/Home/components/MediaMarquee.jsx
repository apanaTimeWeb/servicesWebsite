"use client"

const items = [
  {
    title: "ML Models",
    caption: "Predictions at scale",
    src: "/machine-learning-model-training-ui.jpg",
  },
  {
    title: "Web Apps",
    caption: "Next.js + React",
    src: "/modern-web-dashboard.png",
  },
  {
    title: "Data Analytics",
    caption: "Real-time insights",
    src: "/data-analytics-charts-and-graphs.jpg",
  },
  {
    title: "Mobile Apps",
    caption: "iOS & Android",
    src: "/mobile-app-ui-light-theme.jpg",
  },
]

export function MediaMarquee() {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '3rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '0.5rem', 
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={item.src}
                  alt={`${item.title} - ${item.caption}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '1rem' }}>
                <div style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {item.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
