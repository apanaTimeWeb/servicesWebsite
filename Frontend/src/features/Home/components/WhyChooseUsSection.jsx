import { Users, Award, Clock, Shield, Zap, Globe } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Users,
      title: "Elite Team",
      description: "Our developers have 4+ years of experience and are ex-employees from Google, Microsoft, Amazon, and other top tech companies.",
      highlight: "Ex-FAANG Talent",
    },
    {
      icon: Award,
      title: "Cost-Effective Solutions",
      description: "Get premium quality services at competitive rates. We deliver enterprise-grade solutions without the enterprise price tag.",
      highlight: "50% Cost Savings",
    },
    {
      icon: Clock,
      title: "Customized Projects",
      description: "Every project is tailored to your specific requirements. No cookie-cutter solutions - we build exactly what you need.",
      highlight: "100% Custom",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing protocols and code reviews ensure bug-free, scalable, and maintainable solutions.",
      highlight: "Zero-Bug Policy",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description: "We stay ahead of technology trends, using the latest frameworks and tools to build future-ready applications.",
      highlight: "Latest Tech Stack",
    },
    {
      icon: Globe,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services to ensure your applications run smoothly.",
      highlight: "24/7 Available",
    },
  ]

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 1rem', backgroundColor: '#eff6ff', color: '#3b82f6', border: '1px solid #3b82f6', borderRadius: '9999px', fontSize: '0.875rem', marginBottom: '1rem' }}>
            Why Choose Us
          </span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            Your Success is Our Priority
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '48rem', margin: '0 auto' }}>
            We combine technical expertise with business acumen to deliver solutions that not only work flawlessly but
            also drive measurable business growth.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                padding: '2rem',
                transition: 'all 0.3s',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
                  <reason.icon style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
                </div>
                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#f3f4f6', color: '#374151', borderRadius: '0.375rem', fontSize: '0.75rem', fontWeight: '500' }}>
                  {reason.highlight}
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '0.75rem' }}>
                {reason.title}
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.75', fontSize: '0.875rem' }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
