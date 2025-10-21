import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const expertiseAreas = [
  {
    title: 'Digital Transformation',
    description: 'Modernize your business processes with cutting-edge digital solutions that drive efficiency and growth.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    title: 'Enterprise Software',
    description: 'Custom enterprise solutions designed to scale with your business needs and integrate seamlessly with existing systems.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka']
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that leverage data to provide actionable insights and automate business processes.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face']
  },
  {
    title: 'Cloud Architecture',
    description: 'Scalable and secure cloud solutions that optimize performance while reducing operational costs.',
    technologies: ['AWS', 'GCP', 'Azure', 'Terraform', 'Serverless']
  }
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-6">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Technical Excellence
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Deep expertise across multiple domains to deliver comprehensive technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-between">
                  <span>{area.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
