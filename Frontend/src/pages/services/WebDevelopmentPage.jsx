import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Check, Code, Zap, Shield, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function WebDevelopmentPage() {
  const navigate = useNavigate()

  const features = [
    'React, Next.js, Vue.js Development',
    'Progressive Web Apps (PWA)',
    'E-commerce Solutions',
    'Custom CMS Development',
    'API Integration & Development',
    'Performance Optimization',
    'SEO & Analytics Setup',
    'Responsive Design',
  ]

  const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker']

  const process = [
    { title: 'Discovery', desc: 'Understanding your requirements and goals' },
    { title: 'Design', desc: 'Creating wireframes and UI/UX design' },
    { title: 'Development', desc: 'Building with modern tech stack' },
    { title: 'Testing', desc: 'Quality assurance and bug fixes' },
    { title: 'Launch', desc: 'Deployment and go-live support' },
    { title: 'Support', desc: 'Ongoing maintenance and updates' },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={() => navigate('/')} variant="ghost" className="mb-8 hover:bg-slate-100 dark:hover:bg-slate-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Web Development</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Build Powerful Web Applications
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Create fast, scalable, and secure web applications that deliver exceptional user experiences and drive business growth.
            </p>
            <Button onClick={() => window.open('https://wa.me/917080404594?text=Hi, I want to discuss Web Development', '_blank')} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-slate-600 dark:text-slate-400">Optimized for speed and performance</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
              <p className="text-slate-600 dark:text-slate-400">Built with security best practices</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scalable</h3>
              <p className="text-slate-600 dark:text-slate-400">Grows with your business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, i) => (
              <div key={i} className="px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  {i + 1}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">Let's build something amazing together</p>
            <Button onClick={() => window.open('https://wa.me/917080404594?text=Hi, I want to discuss Web Development', '_blank')} size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-8">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
