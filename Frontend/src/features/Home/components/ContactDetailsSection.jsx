"use client"

import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export function ContactDetailsSection() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Chat with us instantly",
      detail: "+91 7080404594",
      info: "Available 24/7",
      action: () => window.open("https://wa.me/917080404594?text=Hi, I would like to discuss your services", "_blank")
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Send your inquiry",
      detail: "info@apanatime.in",
      info: "Response in 24h",
      action: () => window.open("mailto:info@apanatime.in")
    },
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Schedule a call",
      detail: "+91 7080404594",
      info: "Mon-Fri 9AM-6PM",
      action: () => window.open("tel:+917080404594")
    },
    {
      icon: MapPin,
      title: "Visit Us",
      subtitle: "Our headquarters",
      detail: "Mumbai, India",
      info: "Global team",
      action: () => { }
    }
  ]

  return (
    <section id="contact" style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Multiple ways to connect with our team. Choose what works best for you.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <div
                key={index}
                onClick={method.action}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid #e5e7eb',
                  textAlign: 'center',
                  cursor: method.action ? 'pointer' : 'default',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  if (method.action) {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (method.action) {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#eff6ff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <IconComponent size={28} color="#3b82f6" />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                  {method.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                  {method.subtitle}
                </p>

                <p style={{ fontSize: '1rem', fontWeight: '600', color: '#3b82f6', marginBottom: '0.5rem' }}>
                  {method.detail}
                </p>

                <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                  {method.info}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}