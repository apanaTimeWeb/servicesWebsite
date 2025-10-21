import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Lightbulb, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  Heart 
} from 'lucide-react'

const features = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We leverage cutting-edge technologies to deliver solutions that keep you ahead of the competition.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Ex-FAANG engineers with 5+ years experience, dedicated to delivering exceptional results.'
  },
  {
    icon: Clock,
    title: 'Rapid Delivery',
    description: 'Launch in 4-8 weeks with our proven agile methodology and streamlined processes.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee for all our solutions.'
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'Optimized solutions that deliver exceptional performance and user experience.'
  },
  {
    icon: Heart,
    title: 'Customer Centric',
    description: 'Dedicated support and transparent communication throughout the project lifecycle.'
  }
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-6">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Why TechForge</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Accelerating Business Success
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We transform businesses through advanced digital solutions and customer-centric excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}