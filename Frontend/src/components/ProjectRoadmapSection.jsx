import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export function ProjectRoadmapSection() {
  const steps = [
    {
      phase: 'Discovery & Planning',
      duration: '1-2 Weeks',
      description:
        'We start with comprehensive requirement analysis, stakeholder interviews, and technical feasibility studies.',
      activities: [
        'Requirement gathering and documentation',
        'Technical architecture planning',
        'Project timeline and milestone definition',
        'Risk assessment and mitigation strategies',
      ],
    },
    {
      phase: 'Design & Prototyping',
      duration: '2-3 Weeks',
      description: 'Creating user-centric designs and interactive prototypes to visualize the final product.',
      activities: [
        'UI/UX design and wireframing',
        'Interactive prototype development',
        'Design system creation',
        'Client feedback and iterations',
      ],
    },
    {
      phase: 'Development & Testing',
      duration: '4-12 Weeks',
      description: 'Agile development with continuous integration, testing, and regular client updates.',
      activities: [
        'Sprint-based development cycles',
        'Automated testing implementation',
        'Code reviews and quality assurance',
        'Regular demo sessions with stakeholders',
      ],
    },
    {
      phase: 'Deployment & Launch',
      duration: '1-2 Weeks',
      description: 'Seamless deployment with comprehensive testing in production environment.',
      activities: [
        'Production environment setup',
        'Performance optimization',
        'Security audits and compliance checks',
        'Go-live support and monitoring',
      ],
    },
    {
      phase: 'Support & Maintenance',
      duration: 'Ongoing',
      description: 'Continuous support, updates, and enhancements to ensure optimal performance.',
      activities: [
        '24/7 technical support',
        'Regular updates and security patches',
        'Performance monitoring and optimization',
        'Feature enhancements based on user feedback',
      ],
    },
  ]

  const [active, setActive] = useState(0)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Clear Roadmap to Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our proven 5-phase methodology ensures transparency, quality, and timely delivery. You'll know exactly what
            to expect at every step of your project journey.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative hidden md:grid md:grid-cols-5 md:gap-8 h-72">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 2 35 C 12 10, 12 60, 25 35 S 38 10, 50 35 S 62 60, 75 35 S 88 10, 98 35"
                className="stroke-current text-primary/30"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-primary/20" aria-hidden="true" />
            {steps.map((step, index) => {
              const isTop = index % 2 === 0
              return (
                <div key={index} className="relative flex items-center justify-center">
                  <div
                    className={
                      isTop
                        ? 'absolute left-1/2 -translate-x-1/2 top-0 h-[calc(50%-1.25rem)] w-0.5 bg-primary/25'
                        : 'absolute left-1/2 -translate-x-1/2 bottom-0 h-[calc(50%-1.25rem)] w-0.5 bg-primary/25'
                    }
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    aria-selected={active === index}
                    aria-controls="roadmap-step-details"
                    onClick={() => setActive(index)}
                    className={[
                      'absolute z-10 w-10 h-10 rounded-full grid place-items-center font-semibold transition-all',
                      'outline-none ring-offset-background',
                      active === index
                        ? 'bg-primary text-primary-foreground ring-2 ring-primary/60'
                        : 'bg-card text-foreground border border-border hover:bg-accent/30',
                    ].join(' ')}
                    style={{ [isTop ? 'top' : 'bottom']: '1rem' }}
                  >
                    {index + 1}
                  </button>
                </div>
              )
            })}
          </div>

          <div className="md:hidden overflow-x-auto">
            <div className="relative flex items-center gap-6 py-4 px-1">
              <div className="absolute left-0 right-0 top-7 h-0.5 bg-primary/20" aria-hidden="true" />
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center min-w-16">
                  <button
                    type="button"
                    aria-selected={active === index}
                    aria-controls="roadmap-step-details"
                    onClick={() => setActive(index)}
                    className={[
                      'z-10 w-10 h-10 rounded-full grid place-items-center font-semibold transition-all',
                      'outline-none ring-offset-background',
                      active === index
                        ? 'bg-primary text-primary-foreground ring-2 ring-primary/60'
                        : 'bg-card text-foreground border border-border hover:bg-accent/30',
                    ].join(' ')}
                  >
                    {index + 1}
                  </button>
                  <span className="mt-2 text-xs text-muted-foreground text-center max-w-24">{step.phase}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="roadmap-step-details" className="mt-10">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="border-primary text-primary">
                    Phase {active + 1}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {steps[active].duration}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">
                  {steps[active].phase}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{steps[active].description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {steps[active].activities.map((a, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-32">
          <Card className="inline-block border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-2 font-heading">
                Ready to Start Your Project?
              </h4>
              <p className="text-muted-foreground">
                Let's discuss your requirements and create a customized roadmap for your success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
