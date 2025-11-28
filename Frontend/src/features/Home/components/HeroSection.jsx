"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ContactModal } from "./ContactModal"

export function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const handleViewWork = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section id="home" style={{ paddingTop: '6rem', paddingBottom: '2rem', backgroundColor: '#e5e7eb', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', height: '100%' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '2rem', 
            alignItems: 'center',
            minHeight: 'calc(100vh - 8rem)'
          }}>
            <div>
              <p style={{ 
                fontSize: '2rem', 
                color: '#4b5563', 
                marginBottom: '1rem',
                fontWeight: '500'
              }}>
                Transform Your Digital Future
              </p>
              
              <h1 style={{ 
                fontSize: '5.5rem', 
                fontWeight: 'bold', 
                color: '#4c1d95', 
                marginBottom: '1rem', 
                lineHeight: '0.9'
              }}>
                ApanaTime<br/>
                <span style={{ color: '#4b5563' }}>Tech Solutions</span>
              </h1>
              
              <p style={{ 
                fontSize: '1.75rem', 
                color: '#6b7280', 
                marginBottom: '2rem',
                lineHeight: '1.4'
              }}>
                Boosting businesses, startups, and students to grow.
              </p>

              <Button
                onClick={() => setIsContactModalOpen(true)}
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
              <div className="hero-visual" style={{
                backgroundColor: '#4c1d95',
                borderRadius: '3rem',
                padding: '3rem',
                position: 'relative',
                width: '550px',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {[0, 1, 2].map((index) => {
                  const colors = ['#06b6d4', '#22d3ee', '#67e8f9']
                  const rotations = ['-12deg', '8deg', '18deg']
                  const positions = [
                    { left: '25%', top: '35%' },
                    { left: '50%', top: '50%', marginLeft: '-90px', marginTop: '-110px' },
                    { right: '15%', top: '25%' }
                  ]
                  
                  return (
                    <div
                      key={index}
                      style={{
                        position: 'absolute',
                        transform: `rotate(${rotations[index]}) scale(${currentCard === index ? 1.1 : 1})`,
                        ...positions[index],
                        opacity: currentCard === index ? 1 : 0.4,
                        transition: 'all 0.6s ease-in-out',
                        zIndex: currentCard === index ? 3 : 1
                      }}
                    >
                      <div style={{
                        width: '180px',
                        height: '220px',
                        backgroundColor: '#ffffff',
                        borderRadius: '1rem',
                        padding: '1rem',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                      }}>
                        <div style={{
                          width: '100%',
                          height: '65%',
                          backgroundColor: colors[index],
                          borderRadius: '0.75rem'
                        }}></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}
