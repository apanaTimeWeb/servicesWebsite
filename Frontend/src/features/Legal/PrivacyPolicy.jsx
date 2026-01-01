import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingTop: '6rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem', textAlign: 'center' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '2rem' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div style={{ color: '#374151', lineHeight: '1.6', fontSize: '1rem' }}>
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Information We Collect
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              At ApanaTime Tech Solutions, we collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include your name, email address, phone number, and project requirements.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              How We Use Your Information
            </h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>Provide and improve our IT services</li>
              <li>Communicate with you about projects and updates</li>
              <li>Process payments and manage accounts</li>
              <li>Send technical updates and security alerts</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Data Security
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. We use industry-standard encryption and secure servers.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Information Sharing
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              We do not sell, trade, or rent your personal information to third parties. We may share information only 
              when required by law or to protect our rights and safety.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
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