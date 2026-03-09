import React from "react"
import { Award, CheckCircle, Shield } from "lucide-react"

export default function Certifications() {
    return (
        <main style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            <section style={{ padding: '5rem 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>
                            Certifications & Government Recognition
                        </h1>
                        <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '900px', margin: '0 auto' }}>
                            At Apana Time Tech Solutions, we are committed to maintaining the highest standards of quality, security, and professional service delivery. Our company operates with full legal compliance and is recognized by national and international standards to ensure trust, transparency, and reliability for our clients and partners.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Shield size={32} color="#3b82f6" />
                                <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>GST Registration</h2>
                            </div>
                            <p style={{ color: '#475569', lineHeight: '1.75' }}>
                                Our company is officially registered under the Goods and Services Tax (GST) with <strong>GSTIN: 09MGOPK5458C1ZT</strong>, ensuring transparent and legally compliant business operations across India. This registration reflects our commitment to responsible financial practices and professional service delivery.
                            </p>
                        </div>

                        <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Award size={32} color="#3b82f6" />
                                <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>ISO Certifications</h2>
                            </div>
                            <p style={{ color: '#475569', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                                Our organization has been certified by Anglia Compliance Group and complies with internationally recognized ISO standards:
                            </p>
                            <ul style={{ color: '#475569', lineHeight: '1.75', paddingLeft: '1.5rem' }}>
                                <li><strong>ISO 9001:2015</strong> – Ensures high standards in quality management and service delivery.</li>
                                <li><strong>ISO 27001:2022</strong> – Demonstrates strong information security and data protection practices.</li>
                                <li><strong>ISO 21001:2018</strong> – Confirms our commitment to structured and high-quality educational and training services.</li>
                            </ul>
                            <p style={{ color: '#475569', lineHeight: '1.75', marginTop: '1rem' }}>
                                These certifications validate our operational excellence in computer programming, IT services, data processing, hosting, and IT consultancy.
                            </p>
                        </div>

                        <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <CheckCircle size={32} color="#3b82f6" />
                                <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>Government Recognition</h2>
                            </div>
                            <p style={{ color: '#475569', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                                Our company is also officially recognized under key Government of India initiatives:
                            </p>
                            <ul style={{ color: '#475569', lineHeight: '1.75', paddingLeft: '1.5rem' }}>
                                <li><strong>Startup India</strong> – Supporting innovation, entrepreneurship, and technology development.</li>
                                <li><strong>MSME</strong> – Registered as a Micro Enterprise, strengthening our commitment to growth, innovation, and industry standards.</li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#1e3a8a', padding: '2.5rem', borderRadius: '1rem', color: '#ffffff' }}>
                            <h2 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '1.5rem' }}>Our Commitment</h2>
                            <p style={{ lineHeight: '1.75', marginBottom: '1rem' }}>Through our certifications and government recognitions, we ensure:</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle size={20} />
                                    <span>High-quality service delivery</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle size={20} />
                                    <span>Secure and reliable technology solutions</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle size={20} />
                                    <span>Professional training and educational standards</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle size={20} />
                                    <span>Transparent and legally compliant operations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
