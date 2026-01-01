"use client"

import React from "react"
import { MapPin, Star, Users, Trophy, Handshake } from "lucide-react"

const impactStats = [
  { number: "35+", label: "Projects Done", icon: Trophy },
  { number: "30+", label: "Happy Clients", icon: Users },
  { number: "100%", label: "Client Satisfaction", icon: Star },
  { number: "5+", label: "Countries Served", icon: MapPin },
  { number: "8+", label: "Company Tie-ups", icon: Handshake },
]

export function ExpertiseTrustSection() {
  return (
    <section id="testimonials" style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 1rem', backgroundColor: '#eff6ff', color: '#3b82f6', border: '1px solid #3b82f6', borderRadius: '9999px', fontSize: '0.875rem', marginBottom: '1rem' }}>
            Our Expertise & Trust
          </span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            Our Expertise & Trusted by Businesses Worldwide
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '48rem', margin: '0 auto' }}>
            Years of experience delivering exceptional results across multiple technology domains with proven global
            impact and client satisfaction.
          </p>
        </div>

        {/* Impact stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
          {impactStats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem' }}>
              <div style={{ display: 'inline-flex', padding: '0.75rem', backgroundColor: '#eff6ff', borderRadius: '9999px', marginBottom: '0.75rem' }}>
                <stat.icon style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
              </div>
              <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.25rem' }}>
                {stat.number}
              </div>
              <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
