import React from "react"
import { ArrowRight, MessageSquare, Star } from "lucide-react"

export default function AIChatbots() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to discuss AI Chatbot services", "_blank")
  }

  const technologies = [
    { name: "GPT-4 & Claude", desc: "Latest AI models for intelligent conversations" },
    { name: "LangChain", desc: "Advanced AI orchestration framework" },
    { name: "Custom Training", desc: "Train on your specific business data" },
    { name: "Multi-platform", desc: "Web, WhatsApp, Telegram, Slack integration" },
    { name: "Voice Support", desc: "Speech-to-text and text-to-speech capabilities" },
    { name: "Analytics", desc: "Track conversations and improve performance" }
  ]

  const projects = [
    { name: "Customer Support Bot", desc: "24/7 support; 80% query resolution" },
    { name: "Sales Assistant", desc: "Lead qualification + product recommendations" },
    { name: "HR Chatbot", desc: "Employee onboarding + FAQ automation" }
  ]

  const testimonials = [
    {
      quote: "The AI chatbot handles 80% of our customer queries automatically. It's been a game-changer for our support team!",
      author: "Tom Anderson",
      company: "SupportHub, USA"
    },
    {
      quote: "Impressive natural language understanding. Our customers love the instant, accurate responses.",
      author: "Emma Wilson",
      company: "RetailPro, UK"
    },
    {
      quote: "The chatbot integrates perfectly with our systems and has significantly reduced response times.",
      author: "Carlos Rodriguez",
      company: "TechSolutions, Spain"
    }
  ]

  return (
    <main style={{ minHeight: '100vh', paddingTop: '64px' }}>
      <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom right, #f9fafb, #e5e7eb)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', border: '1px solid #3b82f6', borderRadius: '9999px', marginBottom: '1rem', color: '#3b82f6' }}>
              <MessageSquare style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              AI Chatbots
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
              Intelligent Conversational AI
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
              Powered by the latest language models to provide 24/7 customer support
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
              { value: '150+', label: 'Chatbots Deployed' },
              { value: '80%', label: 'Query Resolution' },
              { value: '100+', label: 'Happy Clients' },
              { value: '24/7', label: 'Availability' }
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
            AI Technologies We Use
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
            Example Chatbots
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
            What Clients Say
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
              Ready for Your AI Chatbot?
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
              Let's build an intelligent assistant for your business
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
