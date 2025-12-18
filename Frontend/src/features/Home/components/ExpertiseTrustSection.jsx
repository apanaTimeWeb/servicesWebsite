"use client"

import React from "react"
import { MapPin, Star, Users, Trophy, Handshake } from "lucide-react"

const expertiseAreas = [
  { name: "Mobile Development", percentage: 95, projects: "200+" },
  { name: "Web Development", percentage: 98, projects: "300+" },
  { name: "AI/ML Solutions", percentage: 90, projects: "150+" },
  { name: "Data Analytics", percentage: 92, projects: "180+" },
  { name: "UI/UX Design", percentage: 94, projects: "250+" },
  { name: "Cloud Solutions", percentage: 88, projects: "120+" },
]

const impactStats = [
  { number: "100+", label: "Projects Done", icon: Trophy },
  { number: "80+", label: "Happy Clients", icon: Users },
  { number: "100%", label: "Client Satisfaction", icon: Star },
  { number: "20+", label: "Countries Served", icon: MapPin },
  { number: "15+", label: "Company Tie-ups", icon: Handshake },
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
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

        {/* Expertise cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>{area.name}</h3>
                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{area.projects} projects</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Proficiency</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#3b82f6' }}>{area.percentage}%</span>
              </div>
              <div style={{ width: '100%', height: '0.5rem', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: `${area.percentage}%`, height: '100%', backgroundColor: '#3b82f6', borderRadius: '9999px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
