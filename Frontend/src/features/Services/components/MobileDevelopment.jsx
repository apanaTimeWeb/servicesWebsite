import React from "react"
import { ArrowRight, Smartphone, Star } from "lucide-react"

export default function MobileDevelopment() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to discuss Mobile Development services", "_blank")
  }

  const technologies = [
    { name: "React Native", desc: "Cross-platform mobile apps with native performance" },
    { name: "Flutter", desc: "Google's UI toolkit for beautiful, natively compiled applications" },
    { name: "Swift/iOS", desc: "Native iOS development for optimal performance" },
    { name: "Kotlin/Android", desc: "Modern Android development with Kotlin" },
    { name: "Firebase", desc: "Backend services and real-time database" },
    { name: "App Store Optimization", desc: "Maximize your app's visibility and downloads" }
  ]

  const projects = [
    { name: "Fitness Tracker", desc: "RN + BLE + offline sync; 100k+ downloads" },
    { name: "EdTech App", desc: "Flutter + video; adaptive quizzes, push" },
    { name: "Delivery App", desc: "Real-time tracking, payments, driver app" }
  ]

  const testimonials = [
    {
      quote: "They built our fitness tracking app that now has 50K+ downloads. The React Native solution works perfectly on both platforms.",
      author: "Michael Chen",
      company: "FitTrack Solutions, Singapore"
    },
    {
      quote: "Outstanding mobile development! Our educational app handles complex animations and offline functionality flawlessly.",
      author: "Lisa Rodriguez",
      company: "EduTech Innovations, Mexico"
    },
    {
      quote: "The team delivered our delivery app ahead of schedule. Real-time tracking and payment integration work perfectly.",
      author: "Ahmed Hassan",
      company: "DeliveryPro, UAE"
    }
  ]

  const partners = ["🍎 Apple App Store", "📱 Google Play", "🔥 Firebase", "☁️ AWS Mobile", "💳 Stripe", "🔔 OneSignal"]

  return (
    <main style={{ minHeight: '100vh', paddingTop: '64px' }}>
      <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom right, #f9fafb, #e5e7eb)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', border: '1px solid #3b82f6', borderRadius: '9999px', marginBottom: '1rem', color: '#3b82f6' }}>
              <Smartphone style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Mobile Development
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
              Native & Cross-Platform Apps
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
              We create powerful mobile applications that deliver exceptional user experiences across iOS and Android platforms
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
            <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>200+</div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Apps Delivered</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>15+</div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Live on Stores</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>35+</div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Clients Served</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>50k+</div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Avg. Downloads</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ maxWidth: '96rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
              Technologies We Master
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {technologies.map((tech, index) => (
                <div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e5e7eb', padding: '1.5rem', transition: 'all 0.3s', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.75rem' }}>{tech.name}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ maxWidth: '96rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
              Example Projects
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {projects.map((project, index) => (
                <div key={index} style={{ backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb', padding: '1.5rem', transition: 'all 0.3s', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.75rem' }}>{project.name}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ maxWidth: '96rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
              What Our Mobile App Clients Say
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e5e7eb', padding: '1.5rem', transition: 'all 0.3s', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
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
        </div>
      </section>

      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', color: '#111827' }}>
              Our Mobile Development Partners
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
              {partners.map((partner, index) => (
                <div key={index} style={{ fontSize: '1.875rem' }}>{partner}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#3b82f6', color: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Ready to Build Your Mobile App?
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
              Let's discuss your project and create an amazing mobile experience together
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
