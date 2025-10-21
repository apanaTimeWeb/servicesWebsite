import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleConsultation = () => {
    window.open('https://wa.me/917080404594?text=Hi, I would like to get a consultation', '_blank')
  }

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              TechForge
            </h1>
          </div>

          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Solutions
              </a>
              <a href="#expertise" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Expertise
              </a>
              <a href="#case-studies" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Case Studies
              </a>
              <a href="#contact" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button onClick={handleConsultation} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              Book Consultation
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary">
                Solutions
              </a>
              <a href="#expertise" className="block px-3 py-2 text-foreground hover:text-primary">
                Expertise
              </a>
              <a href="#case-studies" className="block px-3 py-2 text-foreground hover:text-primary">
                Case Studies
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </a>
              <Button
                onClick={handleConsultation}
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}