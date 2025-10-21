import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function AIChatbotsPage() {
  const navigate = useNavigate()

  const features = [
    'GPT-4 Powered Chatbots',
    'Natural Language Processing',
    'Multi-language Support',
    '24/7 Customer Support',
    'CRM Integration',
    'Custom Training on Your Data',
    'Voice & Text Support',
    'Analytics Dashboard',
  ]

  const technologies = ['OpenAI GPT-4', 'LangChain', 'Python', 'Node.js', 'Vector Databases', 'AWS']

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={() => navigate('/')} variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">AI Chatbots</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Intelligent AI Chatbots
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Deploy smart AI chatbots that understand context, learn from interactions, and provide human-like support 24/7.
            </p>
            <Button onClick={() => window.open('https://wa.me/917080404594?text=Hi, I want to discuss AI Chatbots', '_blank')} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, i) => (
              <div key={i} className="px-6 py-3 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Deploy AI?</h2>
            <p className="text-xl mb-8 opacity-90">Transform customer support with intelligent chatbots</p>
            <Button onClick={() => window.open('https://wa.me/917080404594?text=Hi, I want to discuss AI Chatbots', '_blank')} size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-8">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
