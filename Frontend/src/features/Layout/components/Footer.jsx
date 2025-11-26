import { Button } from "@/components/ui/button"
import { FaTwitter, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaWhatsapp, FaYoutube } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top: Brand + Socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <h3 className="text-2xl font-bold text-primary font-[family-name:var(--font-space-grotesk)]">TechForge</h3>
          <div className="flex flex-wrap items-center gap-2">
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
              aria-label="Chat with us on WhatsApp"
            >
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                <FaWhatsapp className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe on YouTube"
            >
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                <FaYoutube className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Middle: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Get In Touch */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="leading-relaxed">Gorakhpur, UP, India</li>
              <li>
                <a href="mailto:apanatimeat@gmail.com" className="hover:text-primary transition-colors">
                  apanatimeat@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918081062775" className="hover:text-primary transition-colors">
                  +91 8081062775
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917080404594"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp: +91 7080404594
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              Popular Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/#career" className="text-muted-foreground hover:text-primary transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917080404594"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TechForge Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
