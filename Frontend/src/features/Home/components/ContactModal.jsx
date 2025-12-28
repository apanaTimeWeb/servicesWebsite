"use client"

import { X } from "lucide-react"

export function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div id="contact-modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div id="contact-modal-content" style={{
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        maxWidth: '700px',
        width: '100%',
        maxHeight: '95vh',
        overflow: 'auto',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <X size={20} color="#1f2937" />
        </button>

        <div style={{ padding: '1rem' }}>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLScptpdcrlLg7-0VM7vgzSE5KLkSQpS0Rjpzto6LGGoV6leD0w/viewform?embedded=true" 
            width="100%" 
            height="1000" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            style={{ border: 'none', borderRadius: '0.5rem' }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  )
}