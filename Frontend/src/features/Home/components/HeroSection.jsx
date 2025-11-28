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
      <section id="home" style={{ paddingTop: '8rem', paddingBottom: '5rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto' }}>
            <Button
              onClick={() => setIsContactModalOpen(true)}
              style={{ 
                backgroundColor: '#e0f2fe', 
                color: '#0369a1', 
                padding: '0.5rem 1.5rem', 
                borderRadius: '2rem', 
                border: 'none', 
                cursor: 'pointer',
                fontSize: '0.875rem',
                marginBottom: '2rem'
              }}
            >
              Let's Connect
            </Button>
            
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              color: '#1f2937', 
              marginBottom: '1.5rem', 
              lineHeight: '1.1',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              Ready to Accelerate Your{' '}
              <span style={{ color: '#6366f1' }}>Digital Transformation?</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#6b7280', 
              marginBottom: '2rem', 
              maxWidth: '42rem', 
              margin: '0 auto 2rem',
              lineHeight: '1.6'
            }}>
              Get in touch with our team for a free consultation. We're here to help you build amazing digital solutions.
            </p>

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
