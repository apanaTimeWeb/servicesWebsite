import React from "react"
import { ArrowRight, Globe, Star } from "lucide-react"

export default function WebDevelopment() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to discuss Web Development services", "_blank")
  }

  const technologies = [
    { name: "React & Next.js", desc: "Modern, fast, and SEO-friendly web applications" },
    { name: "Node.js & Express", desc: "Scalable backend APIs and microservices" },
    { name: "TypeScript", desc: "Type-safe code for better maintainability" },
    { name: "Tailwind CSS", desc: "Beautiful, responsive designs" },
    { name: "PostgreSQL & MongoDB", desc: "Robust database solutions" },
    { name: "AWS & Vercel", desc: "Cloud deployment and hosting" }
  ]

  const projects = [
    { name: "E-commerce Platform", desc: "Next.js + Stripe; 10k+ daily users" },
    { name: "SaaS Dashboard", desc: "React + Node.js; real-time analytics" },
    { name: "Corporate Website", desc: "Next.js + CMS; SEO optimized" }
  ]

  const testimonials = [
    {
      quote: "Our e-commerce platform built by them handles thousands of transactions daily. The performance is outstanding!",
      author: "Sarah Johnson",
      company: "ShopHub, USA"
    },
    {
      quote: "They transformed our vision into a beautiful, functional web application. Highly recommended!",
      author: "David Kim",
      company: "TechStart, South Korea"
    },
    {
      quote: "Professional team that delivered our corporate website on time with excellent SEO results.",
      author: "Maria Garcia",
      company: "GlobalCorp, Spain"
    }
  ]

  return (
    <main style={{ minHeight: '100vh', paddingTop: '64px' }}>
      <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom right, #f9fafb, #e5e7eb)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', border: '1px solid #3b82f6', borderRadius: '9999px', marginBottom: '1rem', color: '#3b82f6' }}>
              <Globe style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Web Development
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
              Modern Web Applications
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
              We build fast, scalable, and beautiful web applications that drive business growth
            </p>
            <button onClick={handleConsultation} style={{ backgroundColor: '#3b82f6', color: '#ffffff', padding: '0.75rem 2rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Get Free Consultation
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '80rem', margin: '0 auto' }}>
            {[
              { value: '300+', label: 'Websites Built' },
              { value: '50+', label: 'E-commerce Sites' },
              { value: '200+', label: 'Happy Clients' },
              { value: '99%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>{stat.value}</div>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
            Technologies We Use
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {technologies.map((tech, index) => (
              <div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e5e7eb', padding: '1.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.75rem' }}>{tech.name}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
            Featured Projects
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {projects.map((project, index) => (
              <div key={index} style={{ backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb', padding: '1.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.75rem' }}>{project.name}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
            Client Testimonials
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e5e7eb', padding: '1.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} style={{ width: '1rem', height: '1rem', fill: '#fbbf24', color: '#fbbf24' }} />
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

      <section style={{ padding: '5rem 0', backgroundColor: '#3b82f6', color: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Ready to Build Your Website?
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
              Let's create a stunning web presence for your business
            </p>
            <button 
              onClick={handleConsultation} 
              style={{ backgroundColor: '#ffffff', color: '#111827', padding: '0.75rem 2rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}
            >
              Contact Us Now
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
