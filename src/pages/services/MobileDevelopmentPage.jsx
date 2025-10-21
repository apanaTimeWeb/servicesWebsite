import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Check, Smartphone, Zap, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function MobileDevelopmentPage() {
  const navigate = useNavigate()

  const features = [
    'Native iOS & Android Apps',
    'Cross-Platform (React Native, Flutter)',
    'App Store Optimization',
    'Push Notifications',
    'In-App Purchases',
    'Offline Functionality',
    'Real-time Features',
    'App Analytics Integration',
  ]

  const technologies = ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify']

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
            <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Mobile Development</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Native & Cross-Platform Mobile Apps
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Build high-performance mobile applications for iOS and Android that users love. From concept to App Store.
            </p>
            <Button onClick={() => window.open('https://wa.me/917080404594?text=Hi, I want to discuss Mobile Development', '_blank')} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
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
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your App?</h2>
            <p className="text-xl mb-8 opacity-90">Let's create an amazing mobile experience</p>
            <Button onClick={() => window.open('https://wa.me/917080404594?text=Hi, I want to discuss Mobile Development', '_blank')} size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-8">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
