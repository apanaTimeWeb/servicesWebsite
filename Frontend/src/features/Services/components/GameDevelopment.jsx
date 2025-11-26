import React from "react"
import { SiUnity, SiUnrealengine, SiCplusplus } from "react-icons/si"
import { IoMdCheckmarkCircle, IoMdStar } from "react-icons/io"
import { MdArrowForward } from "react-icons/md"
import { FaGamepad, FaMobileAlt } from "react-icons/fa"
import { projects as projectsData, testimonials as testimonialsData } from "@/data/projects"
import { caseStudies } from "@/data/caseStudies"
import { faqs } from "@/data/faqs"
import { CaseStudyCard, FAQAccordion } from "@/components/ServiceEnhancements"

export default function GameDevelopment() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to discuss Game Development services", "_blank")
  }

  const technologies = [
    { name: "Unity", desc: "Cross-platform 2D/3D game engine", icon: SiUnity },
    { name: "Unreal Engine", desc: "AAA-quality graphics and performance", icon: SiUnrealengine },
    { name: "C# & C++", desc: "High-performance game programming", icon: SiCplusplus },
    { name: "Multiplayer", desc: "Real-time networking and matchmaking", icon: FaGamepad },
    { name: "Mobile Optimization", desc: "iOS and Android game builds", icon: FaMobileAlt },
    { name: "LiveOps", desc: "Analytics, events, and monetization", icon: FaGamepad }
  ]

  const projects = projectsData.game
  const testimonials = testimonialsData.game
  const cases = caseStudies.game
  const serviceFaqs = faqs.game

  const stats = [
    { value: '100+', label: 'Games Developed' },
    { value: '500k+', label: 'Total Downloads' },
    { value: '80+', label: 'Happy Clients' },
    { value: '4.5+', label: 'Avg. Rating' }
  ]

  return (
    <main style={{ minHeight: '100vh', paddingTop: '64px' }}>
      <style>{`@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
      <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom right, #f9fafb, #e5e7eb)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', border: '1px solid #3b82f6', borderRadius: '9999px', marginBottom: '1rem', color: '#3b82f6', animation: 'fadeInUp 0.6s ease-out' }}>
              <FaGamepad style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Game Development
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem', animation: 'fadeInUp 0.8s ease-out' }}>End-to-End Game Development</h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem', animation: 'fadeInUp 1s ease-out' }}>2D/3D game development for mobile, web, and desktop platforms</p>
            <button onClick={handleConsultation} style={{ backgroundColor: '#3b82f6', color: '#ffffff', padding: '0.75rem 2rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', animation: 'fadeInUp 1.2s ease-out', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 16px rgba(59, 130, 246, 0.4)' }} onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}>Get Free Consultation<MdArrowForward style={{ width: '1.25rem', height: '1.25rem' }} /></button>
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
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>Game Development Technologies</h2>
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
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>Featured Games</h2>
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
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>What Game Clients Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e5e7eb', padding: '1.5rem', transition: 'all 0.3s', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', animation: `fadeInUp ${1 + index * 0.15}s ease-out` }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)'; e.currentTarget.style.transform = 'translateY(-5px)' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ display: 'flex', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (<IoMdStar key={i} style={{ fontSize: '1.125rem', color: i < Math.floor(testimonial.rating) ? '#fbbf24' : (i < testimonial.rating ? '#fbbf24' : '#d1d5db'), opacity: i < Math.floor(testimonial.rating) ? 1 : (i < testimonial.rating ? 0.5 : 0.3) }} />))}
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
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Ready to Build Your Game?</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>Let's create an engaging gaming experience together</p>
            <button onClick={handleConsultation} style={{ backgroundColor: '#ffffff', color: '#111827', padding: '0.75rem 2rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)' }} onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}>Contact Us Now<MdArrowForward style={{ width: '1.25rem', height: '1.25rem' }} /></button>
          </div>
        </div>
      </section>
    </main>
  )
}
