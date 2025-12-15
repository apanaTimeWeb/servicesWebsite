"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ContactModal } from "./ContactModal"

export function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleViewWork = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section id="home" style={{ paddingTop: '6rem', paddingBottom: '2rem', backgroundColor: '#e5e7eb', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', height: '100%' }}>
          <div
            className="hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              alignItems: 'center',
              minHeight: 'calc(100vh - 8rem)'
            }}
          >
            <div>
              <p className="hero-subtitle" style={{
                fontSize: '2rem',
                color: '#4b5563',
                marginBottom: '1rem',
                fontWeight: '500'
              }}>
                Transform Your Digital Future
              </p>

              <h1 className="hero-title" style={{
                fontSize: '5.5rem',
                fontWeight: 'bold',
                color: '#4c1d95',
                marginBottom: '1rem',
                lineHeight: '0.9'
              }}>
                ApanaTime<br />
                <span style={{ color: '#4b5563' }}>Tech Solutions</span>
              </h1>

              <p className="hero-description" style={{
                fontSize: '1.75rem',
                color: '#6b7280',
                marginBottom: '2rem',
                lineHeight: '1.4'
              }}>
                Boosting businesses, startups, and students to grow.
              </p>

              <Button
                onClick={() => setIsContactModalOpen(true)}
                className="hero-button"
                style={{
                  backgroundColor: '#4c1d95',
                  color: '#ffffff',
                  padding: '1.25rem 3rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.375rem',
                  fontWeight: '600'
                }}
              >
                Let's Connect
              </Button>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}>
              <div style={{
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                width: '100%',
                maxWidth: '550px',
                aspectRatio: '1 / 1',
                position: 'relative'
              }}>
                <img
                  src="/apanatime.jpg"
                  alt="ApanaTime Tech Solutions"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          
          .hero-title {
            font-size: 4rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.5rem !important;
          }
          
          .hero-description {
            font-size: 1.25rem !important;
          }
          
          .hero-button {
            font-size: 1.125rem !important;
            padding: 1rem 2.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.25rem !important;
          }
          
          .hero-description {
            font-size: 1.125rem !important;
          }
          
          .hero-button {
            font-size: 1rem !important;
            padding: 0.875rem 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.125rem !important;
          }
          
          .hero-description {
            font-size: 1rem !important;
          }
        }
      `}</style>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}
