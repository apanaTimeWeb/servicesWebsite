"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to get a consultation", "_blank")
  }

  const phoneNumber = "+917080404594"
  const whatsAppText = "Hi, I would like to know more about your services"

  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', display: 'flex', alignItems: 'center', height: '64px', justifyContent: 'space-between' }}>
        
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', margin: 0 }}>
          TechForge
        </h1>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          <a href="#home" style={{ color: '#374151', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ color: '#374151', textDecoration: 'none' }}>About</a>
          <a href="#services" style={{ color: '#374151', textDecoration: 'none' }}>Services</a>
          <a href="https://intern.apanatime.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#374151', textDecoration: 'none' }}>Training & Internship</a>
          <a href="#contact" style={{ color: '#374151', textDecoration: 'none' }}>Contact</a>
          <a href={`tel:${phoneNumber}`} style={{ color: '#374151', display: 'flex', alignItems: 'center' }}>
            <Phone size={20} />
          </a>
          <a href={`https://wa.me/917080404594?text=${encodeURIComponent(whatsAppText)}`} target="_blank" rel="noopener noreferrer" style={{ color: '#374151', display: 'flex', alignItems: 'center' }}>
            <MessageCircle size={20} />
          </a>
        </nav>

        <Button onClick={handleConsultation} style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '0.5rem 1.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }} className="hidden md:block">
          Get Consultation
        </Button>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: '#374151', background: 'none', border: 'none', cursor: 'pointer' }} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', padding: '1rem' }}>
          <a href="#home" style={{ display: 'block', padding: '0.5rem', color: '#374151', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ display: 'block', padding: '0.5rem', color: '#374151', textDecoration: 'none' }}>About</a>
          <a href="#services" style={{ display: 'block', padding: '0.5rem', color: '#374151', textDecoration: 'none' }}>Services</a>
          <a href="https://intern.apanatime.in/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '0.5rem', color: '#374151', textDecoration: 'none' }}>Training & Internship</a>
          <a href="#contact" style={{ display: 'block', padding: '0.5rem', color: '#374151', textDecoration: 'none' }}>Contact</a>
          <div style={{ display: 'flex', gap: '1rem', padding: '0.5rem', marginTop: '0.5rem' }}>
            <a href={`tel:${phoneNumber}`} style={{ color: '#374151' }}><Phone size={20} /></a>
            <a href={`https://wa.me/917080404594?text=${encodeURIComponent(whatsAppText)}`} target="_blank" rel="noopener noreferrer" style={{ color: '#374151' }}><MessageCircle size={20} /></a>
          </div>
          <Button onClick={handleConsultation} style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '0.5rem 1.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', width: '100%', marginTop: '1rem' }}>
            Get Consultation
          </Button>
        </div>
      )}
    </header>
  )
}
