"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { ContactModal } from "../../Home/components/ContactModal"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleConsultation = () => {
    setIsContactModalOpen(true)
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()

    // Check if we're on the home page
    if (location.pathname !== '/') {
      // Navigate to home page first
      navigate('/')
      // Wait for navigation and DOM update, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    // Close mobile menu after navigation
    setIsMenuOpen(false)
  }

  const phoneNumber = "+917080404594"
  const whatsAppText = "Hi, I would like to know more about your services"

  return (
    <header ref={menuRef} style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', display: 'flex', alignItems: 'center', height: '64px', justifyContent: 'space-between' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img
            src="/Apana_Time_Logo.webp"
            alt="ApanaTime Logo"
            style={{ width: '32px', height: '32px' }}
          />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', margin: 0 }}>
            ApanaTime
          </h1>
        </div>

        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} style={{ color: '#374151', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} style={{ color: '#374151', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} style={{ color: '#374151', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>Services</a>
          <Link to="/our-products" style={{ color: '#374151', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>Our Products</Link>
          <a href="https://intern.apanatime.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#374151', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>Training & Internship</a>
          <button onClick={() => setIsContactModalOpen(true)} style={{ color: '#374151', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '2px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>Contact Us</button>
          <a href={`tel:${phoneNumber}`} style={{ color: '#374151', display: 'flex', alignItems: 'center' }}>
            <Phone size={20} />
          </a>
          <a href={`https://wa.me/917080404594?text=${encodeURIComponent(whatsAppText)}`} target="_blank" rel="noopener noreferrer" style={{ color: '#374151', display: 'flex', alignItems: 'center' }}>
            <MessageCircle size={20} />
          </a>
        </nav>

        <Button onClick={handleConsultation} className="desktop-btn" style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '0.5rem 1.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}>
          Contact Us
        </Button>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-btn" style={{ color: '#374151', background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', padding: '1rem' }}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} style={{ display: 'block', padding: '0.5rem', color: '#374151', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} style={{ display: 'block', padding: '0.5rem', color: '#374151', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} style={{ display: 'block', padding: '0.5rem', color: '#374151', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>Services</a>
          <Link to="/our-products" style={{ display: 'block', padding: '0.5rem', color: '#374151', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>Our Products</Link>
          <a href="https://intern.apanatime.in/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '0.5rem', color: '#374151', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>Training & Internship</a>
          <button onClick={() => setIsContactModalOpen(true)} style={{ display: 'block', padding: '0.5rem', color: '#374151', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', borderBottom: '2px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#10b981'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>Contact Us</button>
          <div style={{ display: 'flex', gap: '1rem', padding: '0.5rem', marginTop: '0.5rem' }}>
            <a href={`tel:${phoneNumber}`} style={{ color: '#374151' }}><Phone size={20} /></a>
            <a href={`https://wa.me/917080404594?text=${encodeURIComponent(whatsAppText)}`} target="_blank" rel="noopener noreferrer" style={{ color: '#374151' }}><MessageCircle size={20} /></a>
          </div>
          <Button onClick={handleConsultation} style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '0.5rem 1.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', width: '100%', marginTop: '1rem' }}>
            Contact Us
          </Button>
        </div>
      )}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </header>
  )
}
