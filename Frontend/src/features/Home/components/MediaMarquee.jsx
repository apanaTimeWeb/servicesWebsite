"use client"

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const items = [
  {
    title: "Web & Mobile Apps",
    caption: "Modern Digital Solutions",
    src: "/Mobile_Apps.png",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "📱",
    slug: "mobile-development"
  },
  {
    title: "Cybersecurity",
    caption: "Protect Your Data",
    src: "/Cybersecurity_Solutions.png",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: "🔒",
    slug: "cybersecurity"
  },
  {
    title: "ML & Data Analytics",
    caption: "Intelligent Insights",
    src: "/Data_Analyats.png",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    icon: "📊",
    slug: "data-analytics"
  },
  {
    title: "AI Chatbots",
    caption: "Smart Conversations",
    src: "/AI_Chatbots.png",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    icon: "🤖",
    slug: "ai-chatbots"
  },
]

export function MediaMarquee() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let position = 0
    const speed = 1 // pixels per frame
    let animationId

    const animate = () => {
      position += speed

      // Reset when first set of cards is fully scrolled
      const cardWidth = 340 // 300px + 40px gap
      const resetPoint = cardWidth * items.length

      if (position >= resetPoint) {
        position = 0
      }

      track.style.transform = `translateX(-${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    track.addEventListener('mouseenter', handleMouseEnter)
    track.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      track.removeEventListener('mouseenter', handleMouseEnter)
      track.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Triple the items for seamless infinite scroll
  const infiniteItems = [...items, ...items, ...items]

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        padding: '4rem 0',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(245, 87, 108, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      {/* Section Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em'
        }}>
          Our Expertise
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: '#64748b',
          fontWeight: '500'
        }}>
          Cutting-edge solutions for modern businesses
        </p>
      </div>

      {/* Cards Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden'
      }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '2.5rem',
            paddingLeft: '2rem',
            willChange: 'transform'
          }}
        >
          {infiniteItems.map((item, i) => (
            <Link
              key={i}
              to={`/services/${item.slug}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
              }}
            >
              <div
                style={{
                  minWidth: '300px',
                  maxWidth: '300px',
                  background: '#ffffff',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)'
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Image Section */}
                <div style={{
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden',
                  background: item.gradient
                }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      mixBlendMode: 'overlay',
                      opacity: 0.9
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.15) rotate(2deg)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)`,
                    pointerEvents: 'none'
                  }} />

                  {/* Icon Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '1rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transform: 'rotate(-5deg)'
                  }}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div style={{
                  padding: '1.5rem',
                  background: 'linear-gradient(to bottom, #ffffff 0%, #fafbfc 100%)'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '0.5rem',
                    lineHeight: '1.3',
                    letterSpacing: '-0.01em'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {item.caption}
                  </p>

                  {/* Decorative bottom bar */}
                  <div style={{
                    height: '3px',
                    width: '60px',
                    background: item.gradient,
                    borderRadius: '2px',
                    transition: 'width 0.3s ease'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.width = '100%'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.width = '60px'
                    }}
                  />
                </div>

                {/* Shine effect on hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transition: 'left 0.6s ease',
                  pointerEvents: 'none'
                }}
                  className="shine-effect"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shine {
          to {
            left: 150%;
          }
        }
        
        div:hover .shine-effect {
          animation: shine 0.8s ease;
        }
      `}</style>
    </section>
  )
}
