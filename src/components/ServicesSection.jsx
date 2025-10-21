import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { Smartphone, Globe, Palette, MessageSquare, TrendingUp, Database, ArrowRight, Gamepad2 } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native iOS and Android apps with cross-platform solutions tailored to your business needs',
    features: [
      'iOS & Android Native',
      'Cross-platform Development',
      'App Store Optimization',
      'Performance Optimization',
    ],
    link: '/services/mobile-development',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern web applications, enterprise platforms, and progressive web apps with cutting-edge technology',
    features: ['React/Next.js Applications', 'Enterprise Solutions', 'Progressive Web Apps', 'API Development'],
    link: '/services/web-development',
  },
  {
    icon: Palette,
    title: 'Dashboard Design',
    description: 'Beautiful, intuitive dashboards and admin panels designed for optimal user experience',
    features: ['UI/UX Design', 'Interactive Dashboards', 'Data Visualization', 'Responsive Design'],
    link: '/services/dashboard-design',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'Intelligent conversational AI solutions powered by the latest language models',
    features: ['Custom Chatbots', 'Natural Language Processing', 'Multi-platform Integration', '24/7 Automation'],
    link: '/services/ai-chatbots',
  },
  {
    icon: TrendingUp,
    title: 'ML Solutions',
    description: 'Custom machine learning models trained on your data for accurate predictions and insights',
    features: ['Predictive Analytics', 'Custom Model Training', 'Real-time Predictions', 'Model Optimization'],
    link: '/services/ml-prediction',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business insights with advanced analytics solutions',
    features: ['Business Intelligence', 'Real-time Analytics', 'Custom Reporting', 'Data Visualization'],
    link: '/services/data-analytics',
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'End-to-end 2D/3D game development for mobile, web, and desktop platforms',
    features: ['Unity & Unreal', '2D/3D Art & Animation', 'Mobile & Web Build', 'LiveOps & Analytics'],
    link: '/services/game-development',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-6">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Comprehensive Digital Services
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            End-to-end technology solutions tailored to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to={service.link}>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-blue-50 dark:group-hover:bg-slate-800 group-hover:text-blue-600 dark:group-hover:text-blue-400 p-0 h-auto font-medium"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}