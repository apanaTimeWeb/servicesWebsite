import React from 'react'

export default function TermsOfService() {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingTop: '6rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem', textAlign: 'center' }}>
          Terms of Service
        </h1>
        <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '2rem' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div style={{ color: '#374151', lineHeight: '1.6', fontSize: '1rem' }}>
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Acceptance of Terms
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              By accessing and using ApanaTime Tech Solutions services, you accept and agree to be bound by the terms 
              and provision of this agreement. These terms apply to all visitors, users, and others who access our services.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Services Description
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              ApanaTime provides comprehensive IT solutions including web development, mobile app development, 
              AI/ML services, cybersecurity solutions, and digital transformation consulting for businesses and startups.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              User Responsibilities
            </h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>Provide accurate and complete information</li>
              <li>Maintain confidentiality of account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Payment Terms
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Payment terms are specified in individual service agreements. All fees are non-refundable unless 
              otherwise stated. We reserve the right to suspend services for non-payment.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Intellectual Property
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              All content, features, and functionality are owned by ApanaTime Tech Solutions and are protected by 
              international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Limitation of Liability
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              ApanaTime shall not be liable for any indirect, incidental, special, or consequential damages 
              resulting from the use or inability to use our services.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Contact Information
            </h2>
            <p>
              For questions about these Terms of Service, contact us at{' '}
              <a href="mailto:info@apanatime.in" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                info@apanatime.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}