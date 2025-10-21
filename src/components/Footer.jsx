import { Button } from '@/components/ui/button'
import { FaTwitter, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaWhatsapp, FaYoutube } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              TechForge
            </h3>
            <p className="text-muted-foreground mb-4">
              Accelerating businesses through advanced digital solutions and customer-centric excellence.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                  <FaTwitter className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
              >
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                  <FaLinkedinIn className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                  <FaInstagram className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join us on Telegram"
              >
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                  <FaTelegramPlane className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://wa.me/917080404594"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                  <FaWhatsapp className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="/services/mobile-development" className="text-muted-foreground hover:text-primary transition-colors">Mobile Development</a></li>
              <li><a href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="/services/dashboard-design" className="text-muted-foreground hover:text-primary transition-colors">Dashboard Design</a></li>
              <li><a href="/services/ai-chatbots" className="text-muted-foreground hover:text-primary transition-colors">AI Chatbots</a></li>
              <li><a href="/services/ml-prediction" className="text-muted-foreground hover:text-primary transition-colors">ML Solutions</a></li>
              <li><a href="/services/data-analytics" className="text-muted-foreground hover:text-primary transition-colors">Data Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>contact@techforge.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="max-w-xs">
                123 Business Avenue, Suite 100<br />
                San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TechForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}