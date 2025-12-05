import React from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Smartphone, Globe, Palette, MessageSquare, TrendingUp, Database, ArrowRight, Gamepad2, Shield } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native iOS and Android apps, cross-platform solutions with React Native and Flutter",
    features: [
      "iOS & Android Native",
      "Cross-platform Development",
      "App Store Optimization",
      "Performance Optimization",
    ],
    link: "/services/mobile-development",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern web applications, e-commerce platforms, and progressive web apps",
    features: ["React/Next.js Applications", "E-commerce Solutions", "Progressive Web Apps", "API Development"],
    link: "/services/web-development",
  },
  {
    icon: Palette,
    title: "Dashboard Design",
    description: "Beautiful, intuitive dashboards and admin panels that users love to interact with",
    features: ["UI/UX Design", "Interactive Dashboards", "Data Visualization", "Responsive Design"],
    link: "/services/dashboard-design",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Intelligent conversational AI powered by the latest language models",
    features: ["Custom Chatbots", "Natural Language Processing", "Multi-platform Integration", "24/7 Customer Support"],
    link: "/services/ai-chatbots",
  },
  {
    icon: TrendingUp,
    title: "ML Prediction Models",
    description: "Custom machine learning models trained on your data for accurate predictions",
    features: ["Predictive Analytics", "Custom Model Training", "Real-time Predictions", "Model Optimization"],
    link: "/services/ml-prediction",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics solutions",
    features: ["Business Intelligence", "Real-time Analytics", "Custom Reporting", "Data Visualization"],
    link: "/services/data-analytics",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "End-to-end 2D/3D game development for mobile, web, and desktop platforms",
    features: ["Unity & Unreal", "2D/3D Art & Animation", "Mobile & Web Build", "LiveOps & Analytics"],
    link: "/services/game-development",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with comprehensive security strategies and assessments",
    features: ["Web App Security", "Mobile App Protection", "Vulnerability Assessment", "Penetration Testing"],
    link: "/services/cybersecurity",
  },
]

export function ServicesSection() {
  return (
    <section id="services" style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            Our Services
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto' }}>
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb',
                padding: '1.5rem',
                transition: 'all 0.3s',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <service.icon style={{ width: '2.5rem', height: '2.5rem', color: '#3b82f6', marginRight: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827' }}>
                  {service.title}
                </h3>
              </div>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                {service.description}
              </p>
              <ul style={{ marginBottom: '1.5rem', listStyle: 'none', padding: 0 }}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: '#3b82f6', borderRadius: '50%', marginRight: '0.75rem' }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={service.link}>
                <Button
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    color: '#3b82f6',
                    border: '1px solid #3b82f6',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Learn More
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
