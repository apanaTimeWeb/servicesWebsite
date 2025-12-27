"use client"

import { CheckCircle } from "lucide-react"

export function WhyConnectSection() {
  const benefits = [
    "Free consultation & analysis",
    "24-hour response guarantee",
    "Flexible engagement models",
    "Transparent, fixed pricing",
    "Dedicated project team",
    "Post-launch support"
  ]

  return (
    <section id="why-connect" style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div className="why-connect-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left side - Why Connect content */}
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Why Connect With Us
            </h2>

            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              We're committed to delivering exceptional results and building long-term partnerships with our clients.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {benefits.map((benefit, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={20} color="#3b82f6" />
                  <span style={{ fontSize: '1rem', color: '#374151' }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - CTA Card */}
          <div style={{
            backgroundColor: '#f8fafc',
            padding: '2.5rem',
            borderRadius: '1rem',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Ready to Get Started?
            </h3>

            <p style={{
              fontSize: '1rem',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.5'
            }}>
              Let's discuss your project requirements and how we can help you achieve your goals.
            </p>

            <button
              onClick={() => window.open("https://wa.me/917080404594?text=Hi, I'm ready to start my project. Let's discuss!", "_blank")}
              style={{
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                padding: '0.875rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                width: '100%',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
            >
              Start Your Project Today
            </button>

            <div style={{
              marginTop: '1.5rem',
              padding: '1rem',
              backgroundColor: '#ffffff',
              borderRadius: '0.5rem',
              border: '1px solid #e5e7eb'
            }}>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                <strong style={{ color: '#1f2937' }}>Quick Response:</strong> We typically respond within 2 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}