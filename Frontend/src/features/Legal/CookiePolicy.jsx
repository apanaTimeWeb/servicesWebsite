import React from 'react'

export default function CookiePolicy() {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingTop: '6rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem', textAlign: 'center' }}>
          Cookie Policy
        </h1>
        <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '2rem' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div style={{ color: '#374151', lineHeight: '1.6', fontSize: '1rem' }}>
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              What Are Cookies
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Cookies are small text files that are stored on your device when you visit our website. They help us 
              provide you with a better experience by remembering your preferences and improving our services.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Types of Cookies We Use
            </h2>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.5rem' }}>
                Essential Cookies
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                These cookies are necessary for the website to function properly and cannot be disabled.
              </p>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.5rem' }}>
                Analytics Cookies
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                We use these to understand how visitors interact with our website and improve our services.
              </p>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.5rem' }}>
                Functional Cookies
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                These cookies remember your preferences and provide enhanced functionality.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              How We Use Cookies
            </h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>Improve website performance and user experience</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and services</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Managing Cookies
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse 
              cookies or delete existing ones. However, disabling cookies may affect website functionality.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Third-Party Cookies
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              We may use third-party services like Google Analytics that place cookies on your device. These services 
              have their own privacy policies governing their use of cookies.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Contact Us
            </h2>
            <p>
              If you have questions about our Cookie Policy, please contact us at{' '}
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