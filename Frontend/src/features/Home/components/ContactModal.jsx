"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X, MessageCircle } from "lucide-react"

export function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    projectDetails: ""
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hi, I'm ${formData.fullName}${formData.company ? ` from ${formData.company}` : ''}. I'm interested in ${formData.service || 'your services'}. 

Project Details: ${formData.projectDetails || 'Please contact me to discuss further.'}

You can reach me at ${formData.email}.`
    
    const whatsappUrl = `https://wa.me/917080404594?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    onClose()
  }

  const handleQuickContact = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to discuss your services", "_blank")
  }

  if (!isOpen) return null

  return (
    <div style={{
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
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        maxWidth: '900px',
        width: '100%',
        maxHeight: '90vh',
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', minHeight: '500px' }}>
          {/* Left side - Form */}
          <div style={{ padding: '2rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '0.5rem'
            }}>
              Tell Us About Your Project
            </h2>
            <p style={{
              color: '#6b7280',
              marginBottom: '2rem',
              fontSize: '0.875rem'
            }}>
              Share your requirements and we'll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <Label htmlFor="fullName" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    style={{ marginTop: '0.25rem' }}
                  />
                </div>
                <div>
                  <Label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    style={{ marginTop: '0.25rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <Label htmlFor="company" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    style={{ marginTop: '0.25rem' }}
                  />
                </div>
                <div>
                  <Label htmlFor="service" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
                    Service Interested In
                  </Label>
                  <Input
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="e.g., Mobile App Development"
                    style={{ marginTop: '0.25rem' }}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="projectDetails" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
                  Project Details *
                </Label>
                <Textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                  rows={4}
                  required
                  style={{ marginTop: '0.25rem' }}
                />
              </div>

              <Button
                type="submit"
                style={{
                  backgroundColor: '#6366f1',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                Send Message
                <MessageCircle size={16} />
              </Button>
            </form>
          </div>

          {/* Right side - Quick Contact */}
          <div style={{
            backgroundColor: '#6366f1',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderTopRightRadius: '1rem',
            borderBottomRightRadius: '1rem'
          }}>
            <h3 style={{
              color: '#ffffff',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Quick Contact
            </h3>
            <p style={{
              color: '#e0e7ff',
              fontSize: '0.875rem',
              marginBottom: '1.5rem',
              lineHeight: '1.5'
            }}>
              Not sure where to start? Let's have a quick chat about your project needs.
            </p>
            <Button
              onClick={handleQuickContact}
              style={{
                backgroundColor: '#a5b4fc',
                color: '#1e1b4b',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </Button>

            <div style={{ marginTop: '2rem' }}>
              <h4 style={{
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Why Connect With Us
              </h4>
              <ul style={{
                color: '#e0e7ff',
                fontSize: '0.875rem',
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Free consultation</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ 24/7 support</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Expert guidance</li>
                <li>✓ Quick response time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}