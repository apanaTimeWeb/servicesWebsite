import React from "react"
import { FaShieldAlt, FaLock, FaUserSecret, FaServer, FaMobileAlt, FaCloud } from "react-icons/fa"
import { SiKalilinux, SiWireshark, SiOwasp, SiBurpsuite, SiMetasploit } from "react-icons/si"
import { IoMdCheckmarkCircle, IoMdStar } from "react-icons/io"
import { MdArrowForward } from "react-icons/md"
import { projects as projectsData, testimonials as testimonialsData } from "@/data/projects"
import { caseStudies } from "@/data/caseStudies"
import { faqs } from "@/data/faqs"
import { CaseStudyCard, FAQAccordion } from "@/components/ServiceEnhancements"

export default function CybersecuritySolutions() {
    const handleConsultation = () => {
        window.open("https://wa.me/917080404594?text=Hi, I would like to discuss Cybersecurity services", "_blank")
    }

    const technologies = [
        { name: "OWASP", desc: "Web Application Security Standards", icon: SiOwasp },
        { name: "Kali Linux", desc: "Advanced Penetration Testing Platform", icon: SiKalilinux },
        { name: "Burp Suite", desc: "Web Vulnerability Scanner", icon: SiBurpsuite },
        { name: "Metasploit", desc: "Exploitation Framework", icon: SiMetasploit },
        { name: "Wireshark", desc: "Network Protocol Analyzer", icon: SiWireshark },
        { name: "Cloud Security", desc: "AWS & Azure Security Hardening", icon: FaCloud }
    ]

    const projects = projectsData.cybersecurity
    const testimonials = testimonialsData.cybersecurity
    const cases = caseStudies.cybersecurity
    const serviceFaqs = faqs.cybersecurity

    const partners = [
        { icon: SiOwasp, name: "OWASP" },
        { icon: SiKalilinux, name: "Kali Linux" },
        { icon: FaShieldAlt, name: "Security+" },
        { icon: FaLock, name: "CISSP" },
        { icon: FaCloud, name: "Cloud Security" },
        { icon: FaServer, name: "Network Sec" }
    ]

    const stats = [
        { value: '20+', label: 'Audits Conducted' },
        { value: '150+', label: 'Vulnerabilities Fixed' },
        { value: '12+', label: 'Secure Apps' },
        { value: '100%', label: 'Compliance Rate' }
    ]

    return (
        <main style={{ minHeight: '100vh', paddingTop: '64px' }}>
            <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

            <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom right, #fef2f2, #fee2e2)' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', border: '1px solid #ef4444', borderRadius: '9999px', marginBottom: '1rem', color: '#ef4444', animation: 'fadeInUp 0.6s ease-out' }}>
                            <FaShieldAlt style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                            Cybersecurity Solutions
                        </div>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem', animation: 'fadeInUp 0.8s ease-out' }}>
                            Protect Your Digital Assets
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem', animation: 'fadeInUp 1s ease-out' }}>
                            Comprehensive security strategies including VAPT, compliance audits, and incident response to safeguard your business.
                        </p>
                        <button onClick={handleConsultation} style={{ backgroundColor: '#ef4444', color: '#ffffff', padding: '0.75rem 2rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', animation: 'fadeInUp 1.2s ease-out', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 16px rgba(239, 68, 68, 0.4)' }} onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}>
                            Get Security Audit
                            <MdArrowForward style={{ width: '1.25rem', height: '1.25rem' }} />
                        </button>
                    </div>
                </div>
            </section>

            <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '80rem', margin: '0 auto' }}>
                        {stats.map((stat, index) => (
                            <div key={index} style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#fef2f2', borderRadius: '0.5rem', border: '1px solid #fee2e2', animation: `fadeInUp ${0.8 + index * 0.1}s ease-out`, transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(239, 68, 68, 0.15)'; e.currentTarget.style.borderColor = '#ef4444' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#fee2e2' }}>
                                <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#ef4444', marginBottom: '0.5rem' }}>{stat.value}</div>
                                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 0', backgroundColor: '#fef2f2' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
                        Security Technologies & Tools
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {technologies.map((tech, index) => (
                            <div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #fee2e2', padding: '1.5rem', transition: 'all 0.3s', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', animation: `fadeInUp ${1 + index * 0.1}s ease-out` }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(239, 68, 68, 0.2)'; e.currentTarget.style.borderColor = '#ef4444' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'; e.currentTarget.style.borderColor = '#fee2e2' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                    <tech.icon style={{ color: '#ef4444', fontSize: '1.5rem' }} />
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>{tech.name}</h3>
                                </div>
                                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
                        Security Projects
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {projects.map((project, index) => (
                            <div key={index} style={{ backgroundColor: '#fef2f2', borderRadius: '0.5rem', border: '1px solid #fee2e2', padding: '1.5rem', transition: 'all 0.3s', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', animation: `fadeInUp ${1 + index * 0.15}s ease-out` }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <IoMdCheckmarkCircle style={{ color: '#10b981', fontSize: '1.25rem' }} />
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>{project.name}</h3>
                                </div>
                                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{project.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 0', backgroundColor: '#fef2f2' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
                        Client Testimonials
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #fee2e2', padding: '1.5rem', transition: 'all 0.3s', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', animation: `fadeInUp ${1 + index * 0.15}s ease-out` }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)'; e.currentTarget.style.transform = 'translateY(-5px)' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                                <div style={{ display: 'flex', marginBottom: '1rem' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <IoMdStar key={i} style={{ fontSize: '1.125rem', color: i < Math.floor(testimonial.rating) ? '#fbbf24' : (i < testimonial.rating ? '#fbbf24' : '#d1d5db'), opacity: i < Math.floor(testimonial.rating) ? 1 : (i < testimonial.rating ? 0.5 : 0.3) }} />
                                    ))}
                                </div>
                                <p style={{ color: '#6b7280', marginBottom: '1rem', fontStyle: 'italic', fontSize: '0.875rem' }}>"{testimonial.quote}"</p>
                                <div style={{ fontWeight: '600', color: '#111827' }}>{testimonial.author}</div>
                                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{testimonial.company}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
                        Success Stories
                    </h2>
                    <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '64rem', margin: '0 auto' }}>
                        {cases.map((caseStudy, index) => (
                            <CaseStudyCard key={index} caseStudy={caseStudy} />
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 0', backgroundColor: '#fef2f2' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
                        Frequently Asked Questions
                    </h2>
                    <FAQAccordion faqs={serviceFaqs} />
                </div>
            </section>

            <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', color: '#111827' }}>
                            Security Standards & Tools
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '2rem' }}>
                            {partners.map((partner, index) => (
                                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', animation: `fadeIn ${1.2 + index * 0.1}s ease-out`, transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    <partner.icon style={{ fontSize: '2.5rem', color: '#ef4444' }} />
                                    <span style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: '500' }}>{partner.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 0', backgroundColor: '#ef4444', color: '#ffffff' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                            Secure Your Business Today
                        </h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
                            Don't wait for a breach. Proactively protect your assets with our expert security services.
                        </p>
                        <button
                            onClick={handleConsultation}
                            style={{ backgroundColor: '#ffffff', color: '#111827', padding: '0.75rem 2rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', transition: 'all 0.3s' }}
                            onMouseEnter={(e) => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)' }}
                            onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}
                        >
                            Contact Security Team
                            <MdArrowForward style={{ width: '1.25rem', height: '1.25rem' }} />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
