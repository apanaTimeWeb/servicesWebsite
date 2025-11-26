import React, { useState } from "react"
import { IoMdStar, IoMdCheckmarkCircle } from "react-icons/io"
import { MdExpandMore, MdExpandLess } from "react-icons/md"

// Star Rating Component - Use this for testimonials
export const StarRating = ({ rating }) => {
  return (
    <div style={{ display: 'flex', gap: '0.25rem' }}>
      {[...Array(5)].map((_, i) => (
        <IoMdStar 
          key={i} 
          style={{ 
            fontSize: '1.125rem', 
            color: i < Math.floor(rating) ? '#fbbf24' : (i < rating ? '#fbbf24' : '#d1d5db'), 
            opacity: i < Math.floor(rating) ? 1 : (i < rating ? 0.5 : 0.3) 
          }} 
        />
      ))}
      <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
        {rating.toFixed(1)}
      </span>
    </div>
  )
}

// Case Study Card Component
export const CaseStudyCard = ({ caseStudy }) => {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      borderRadius: '0.75rem', 
      border: '1px solid #e5e7eb', 
      padding: '1.5rem',
      transition: 'all 0.3s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => { 
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(59, 130, 246, 0.15)'
      e.currentTarget.style.borderColor = '#3b82f6'
    }}
    onMouseLeave={(e) => { 
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.borderColor = '#e5e7eb'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', flex: 1 }}>
          {caseStudy.title}
        </h3>
        <button 
          onClick={() => setExpanded(!expanded)}
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            color: '#3b82f6',
            fontSize: '1.5rem'
          }}
        >
          {expanded ? <MdExpandLess /> : <MdExpandMore />}
        </button>
      </div>
      
      <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
        <strong>Client:</strong> {caseStudy.client}
      </p>
      
      {expanded && (
        <div style={{ marginTop: '1rem', animation: 'fadeIn 0.3s ease-out' }}>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
              Challenge
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{caseStudy.challenge}</p>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
              Solution
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{caseStudy.solution}</p>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
              Results
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
              {caseStudy.results.map((result, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IoMdCheckmarkCircle style={{ color: '#10b981', fontSize: '1rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{result}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
              Technologies
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {caseStudy.tech.map((tech, idx) => (
                <span 
                  key={idx} 
                  style={{ 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: '#eff6ff', 
                    color: '#3b82f6',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// FAQ Accordion Component
export const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null)
  
  return (
    <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
      {faqs.map((faq, index) => (
        <div 
          key={index}
          style={{ 
            borderBottom: '1px solid #e5e7eb',
            padding: '1.5rem 0'
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              padding: 0
            }}
          >
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              color: '#111827',
              flex: 1,
              paddingRight: '1rem'
            }}>
              {faq.q}
            </h3>
            <span style={{ color: '#3b82f6', fontSize: '1.5rem' }}>
              {openIndex === index ? <MdExpandLess /> : <MdExpandMore />}
            </span>
          </button>
          
          {openIndex === index && (
            <p style={{ 
              marginTop: '1rem', 
              fontSize: '0.875rem', 
              color: '#6b7280',
              lineHeight: '1.6',
              animation: 'fadeIn 0.3s ease-out'
            }}>
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

// Process Timeline Component
export const ProcessTimeline = ({ steps }) => {
  return (
    <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: '1.5rem',
          top: '2rem',
          bottom: '2rem',
          width: '2px',
          backgroundColor: '#e5e7eb',
          display: window.innerWidth < 768 ? 'block' : 'none'
        }} />
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          {steps.map((step, index) => (
            <div 
              key={index}
              style={{ 
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'start',
                animation: `fadeInUp ${0.8 + index * 0.1}s ease-out`
              }}
            >
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
              }}>
                {step.step}
              </div>
              
              <div style={{ flex: 1, paddingTop: '0.25rem' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  color: '#111827',
                  marginBottom: '0.5rem'
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Certification Badge Component
export const CertificationBadge = ({ cert }) => {
  return (
    <div style={{
      padding: '1rem',
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      textAlign: 'center',
      transition: 'all 0.3s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)'
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(59, 130, 246, 0.15)'
      e.currentTarget.style.borderColor = '#3b82f6'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.borderColor = '#e5e7eb'
    }}>
      <div style={{ 
        fontSize: '2rem', 
        marginBottom: '0.5rem',
        color: '#3b82f6'
      }}>
        🏆
      </div>
      <h4 style={{ 
        fontSize: '0.875rem', 
        fontWeight: '600', 
        color: '#111827',
        marginBottom: '0.25rem'
      }}>
        {cert.name}
      </h4>
      <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>
        {cert.issuer} • {cert.year}
      </p>
    </div>
  )
}

// Industry Badge Component
export const IndustryBadge = ({ industry }) => {
  return (
    <div style={{
      padding: '1.5rem',
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      textAlign: 'center',
      transition: 'all 0.3s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#eff6ff'
      e.currentTarget.style.borderColor = '#3b82f6'
      e.currentTarget.style.transform = 'scale(1.05)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#f9fafb'
      e.currentTarget.style.borderColor = '#e5e7eb'
      e.currentTarget.style.transform = 'scale(1)'
    }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        {industry.icon}
      </div>
      <h4 style={{ 
        fontSize: '1rem', 
        fontWeight: '600', 
        color: '#111827',
        marginBottom: '0.25rem'
      }}>
        {industry.name}
      </h4>
      <p style={{ fontSize: '0.875rem', color: '#3b82f6', fontWeight: '500' }}>
        {industry.projects}+ Projects
      </p>
    </div>
  )
}
