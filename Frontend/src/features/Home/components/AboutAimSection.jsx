import { Building2, Target, CheckCircle2 } from "lucide-react"

export function AboutAimSection() {
  const points = [
    "End-to-end delivery: Discovery → Design → Development → Launch → Support",
    "Security-first approach, code reviews, automation, and QA baked in",
    "Transparent communication and sprint-based progress updates",
  ]
  const aims = [
    "Deliver measurable business impact, not just code",
    "Leverage AI/ML to automate workflows and unlock insights",
    "Build scalable products that grow with your users",
  ]

  return (
    <section id="about" style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', padding: '0.25rem 1rem', backgroundColor: '#eff6ff', color: '#3b82f6', border: '1px solid #3b82f6', borderRadius: '9999px', fontSize: '0.875rem', marginBottom: '1rem' }}>
            About the Company
          </span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            We Build Reliable, Scalable, and Intelligent Solutions
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '48rem', margin: '0 auto' }}>
            From mobile and web apps to AI/ML and data analytics, we partner with startups and enterprises to ship
            production-grade software on time and within budget.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Who We Are */}
          <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Building2 style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827' }}>Who We Are</h3>
            </div>
            <p style={{ color: '#6b7280', lineHeight: '1.75', marginBottom: '1.25rem' }}>
              A senior-led engineering team delivering high-quality software across industries such as fintech,
              health, e-commerce, and SaaS. We combine modern stacks with pragmatic execution.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {points.map((p, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#3b82f6', marginRight: '0.5rem', marginTop: '0.125rem', flexShrink: 0 }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Aim */}
          <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Target style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827' }}>Our Aim</h3>
            </div>
            <p style={{ color: '#6b7280', lineHeight: '1.75', marginBottom: '1.25rem' }}>
              Our goal is to accelerate your business with technology — better customer experience,
              automated operations, and data-driven decision making.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {aims.map((a, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#3b82f6', marginRight: '0.5rem', marginTop: '0.125rem', flexShrink: 0 }} />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
