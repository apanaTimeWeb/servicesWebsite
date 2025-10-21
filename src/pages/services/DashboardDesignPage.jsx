import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function DashboardDesignPage() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={() => navigate('/')} variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            Dashboard Design
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Beautiful, intuitive dashboards and admin panels that users love to interact with
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
