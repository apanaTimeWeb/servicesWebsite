"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Brain, BarChart3 } from "lucide-react"

export function HeroSection() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to start a project with your team", "_blank")
  }

  const handleViewWork = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" style={{ paddingTop: '8rem', paddingBottom: '5rem', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Transform Your Business with
            <span style={{ color: '#3b82f6' }}> Cutting-Edge Technology</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}>
            We deliver premium mobile development, web solutions, AI/ML services, and data analytics that drive real
            business results for forward-thinking companies.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <Button
              onClick={handleConsultation}
              style={{ backgroundColor: '#3b82f6', color: '#ffffff', padding: '0.75rem 2rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Start Your Project
              <ArrowRight size={20} />
            </Button>
            <Button
              onClick={handleViewWork}
              style={{ backgroundColor: 'transparent', color: '#3b82f6', padding: '0.75rem 2rem', borderRadius: '0.375rem', border: '1px solid #3b82f6', cursor: 'pointer' }}
            >
              View Our Work
            </Button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <Code style={{ width: '3rem', height: '3rem', color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#111827' }}>
                Development Excellence
              </h3>
              <p style={{ color: '#6b7280', textAlign: 'center', fontSize: '0.875rem' }}>
                Mobile & web solutions built with cutting-edge technologies
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <Brain style={{ width: '3rem', height: '3rem', color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#111827' }}>
                AI/ML Innovation
              </h3>
              <p style={{ color: '#6b7280', textAlign: 'center', fontSize: '0.875rem' }}>
                Custom AI models and intelligent automation solutions
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <BarChart3 style={{ width: '3rem', height: '3rem', color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#111827' }}>
                Data Analytics
              </h3>
              <p style={{ color: '#6b7280', textAlign: 'center', fontSize: '0.875rem' }}>
                Transform data into actionable business insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
