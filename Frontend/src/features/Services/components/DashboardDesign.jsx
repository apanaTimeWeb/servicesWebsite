import React from "react"
import { SiFigma, SiAdobexd, SiReact, SiTailwindcss, SiMaterialdesignicons, SiChartdotjs } from "react-icons/si"
import { IoMdCheckmarkCircle, IoMdStar } from "react-icons/io"
import { MdArrowForward, MdDashboard } from "react-icons/md"
import { projects as projectsData, testimonials as testimonialsData } from "@/data/projects"
import { caseStudies } from "@/data/caseStudies"
import { faqs } from "@/data/faqs"
import { CaseStudyCard, FAQAccordion } from "@/components/ServiceEnhancements"

export default function DashboardDesign() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to discuss Dashboard Design services", "_blank")
  }

  const technologies = [
    { name: "Figma & Adobe XD", desc: "Professional design tools for stunning interfaces", icon: SiFigma },
    { name: "React & Tailwind", desc: "Modern component-based development", icon: SiReact },
    { name: "Chart.js & D3.js", desc: "Advanced data visualization libraries", icon: SiChartdotjs },
    { name: "Material-UI", desc: "Enterprise-grade component library", icon: SiMaterialdesignicons },
    { name: "Responsive Design", desc: "Perfect on all devices and screen sizes", icon: MdDashboard },
    { name: "Dark Mode", desc: "Eye-friendly themes for better UX", icon: MdDashboard }
  ]

  const projects = projectsData.dashboard
  const testimonials = testimonialsData.dashboard
  const cases = caseStudies.dashboard
  const serviceFaqs = faqs.dashboard

  const stats = [
    { value: '250+', label: 'Dashboards Created' },
    { value: '180+', label: 'Happy Clients' },
    { value: '95%', label: 'User Satisfaction' },
    { value: '4.9/5', label: 'Client Rating' }
  ]

  return (
    <main style={{ minHeight: '100vh', paddingTop: '64px' }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom right, #f9fafb, #e5e7eb)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', border: '1px solid #3b82f6', borderRadius: '9999px', marginBottom: '1rem', color: '#3b82f6', animation: 'fadeInUp 0.6s ease-out' }}>
              <MdDashboard style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Dashboard Design
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem', animation: 'fadeInUp 0.8s ease-out' }}>
              Beautiful & Intuitive Dashboards
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem', animation: 'fadeInUp 1s ease-out' }}>
              We design dashboards and admin panels that users love to interact with
            </p>
            <button onClick={handleConsultation} style={{ backgroundColor: '#3b82f6', color: '#ffffff', padding: '0.75rem 2rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', animation: 'fadeInUp 1.2s ease-out', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 16px rgba(59, 130, 246, 0.4)' }} onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}>
              Get Free Consultation
              <MdArrowForward style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '80rem', margin: '0 auto' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb', animation: `fadeInUp ${0.8 + index * 0.1}s ease-out`, transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(59, 130, 246, 0.15)'; e.currentTarget.style.borderColor = '#3b82f6' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#e5e7eb' }}>
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
            Our Design Stack
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {technologies.map((tech, index) => (
              <div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e5e7eb', padding: '1.5rem', transition: 'all 0.3s', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', animation: `fadeInUp ${1 + index * 0.1}s ease-out` }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(59, 130, 246, 0.2)'; e.currentTarget.style.borderColor = '#3b82f6' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'; e.currentTarget.style.borderColor = '#e5e7eb' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <tech.icon style={{ color: '#3b82f6', fontSize: '1.5rem' }} />
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
            Featured Dashboards
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {projects.map((project, index) => (
              <div key={index} style={{ backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb', padding: '1.5rem', transition: 'all 0.3s', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', animation: `fadeInUp ${1 + index * 0.15}s ease-out` }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
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

      <section style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
            What Clients Say
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e5e7eb', padding: '1.5rem', transition: 'all 0.3s', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', animation: `fadeInUp ${1 + index * 0.15}s ease-out` }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)'; e.currentTarget.style.transform = 'translateY(-5px)' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}>
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

      <section style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={serviceFaqs} />
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#3b82f6', color: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Ready for a Beautiful Dashboard?
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
              Let's design an interface your users will love
            </p>
            <button 
              onClick={handleConsultation} 
              style={{ backgroundColor: '#ffffff', color: '#111827', padding: '0.75rem 2rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)' }}
              onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}
            >
              Contact Us Now
              <MdArrowForward style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
