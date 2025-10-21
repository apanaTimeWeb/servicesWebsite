import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

const caseStudies = [
  {
    title: 'E-commerce Mobile App',
    description: 'Built a comprehensive mobile shopping platform with AI-powered recommendations',
    image: '/modern-mobile-ecommerce-app-interface.jpg',
    tags: ['React Native', 'AI/ML', 'Payment Integration'],
    results: ['300% increase in mobile sales', '4.8★ app store rating', '50% faster checkout'],
    client: 'RetailTech Inc.',
  },
  {
    title: 'Healthcare Analytics Dashboard',
    description: 'Developed an intelligent dashboard for patient data analysis and predictive insights',
    image: '/healthcare-analytics-dashboard.png',
    tags: ['React', 'Python', 'Machine Learning'],
    results: ['40% faster diagnosis', 'Real-time patient monitoring', 'HIPAA compliant'],
    client: 'MedCare Solutions',
  },
  {
    title: 'AI Chatbot for Customer Service',
    description: 'Implemented an intelligent chatbot handling 80% of customer inquiries automatically',
    image: '/ai-chatbot-interface-customer-service.jpg',
    tags: ['NLP', 'OpenAI', 'Integration'],
    results: ['80% query automation', '24/7 availability', '60% cost reduction'],
    client: 'ServicePro Ltd.',
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients who trusted us with their most important projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={study.image || '/placeholder.svg'}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{study.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Client: {study.client}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-primary hover:text-primary-foreground hover:bg-primary"
                  >
                    View Details
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
