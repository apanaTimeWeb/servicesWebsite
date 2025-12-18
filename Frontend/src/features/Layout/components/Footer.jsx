import { useNavigate, useLocation, Link } from "react-router-dom"
import { FaTwitter, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaWhatsapp, FaYoutube } from "react-icons/fa"

export function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <footer style={{ backgroundColor: '#111827', color: '#ffffff', padding: '3rem 0 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>

        {/* Top Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#3b82f6', margin: 0 }}>ApanaTime</h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }}>
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }}>
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }}>
                <FaInstagram size={20} />
              </a>
              <a href="https://t.me/yourhandle" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }}>
                <FaTelegramPlane size={20} />
              </a>
              <a href="https://wa.me/917080404594" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }}>
                <FaWhatsapp size={20} />
              </a>
              <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }}>
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - 3 Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

          {/* Get In Touch */}
          <div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff' }}>
              Get In Touch
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.75' }}>
              <li>Gorakhpur, UP, India</li>
              <li>
                <a href="mailto:info@apanatime.in" style={{ color: '#9ca3af', textDecoration: 'none' }}>
                  info@apanatime.in
                </a>
              </li>
              <li>
                <a href="tel:+918081062775" style={{ color: '#9ca3af', textDecoration: 'none' }}>
                  +91 8081062775
                </a>
              </li>
              <li>
                <a href="https://wa.me/917080404594" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none' }}>
                  WhatsApp: +91 7080404594
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.75' }}>
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} style={{ color: '#9ca3af', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} style={{ color: '#9ca3af', textDecoration: 'none' }}>Our Services</a></li>
              <li><Link to="/career" style={{ color: '#9ca3af', textDecoration: 'none' }}>Career</Link></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff' }}>
              Popular Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.75' }}>
              <li><Link to="/career" style={{ color: '#9ca3af', textDecoration: 'none' }}>Career</Link></li>
              <li><a href="https://wa.me/917080404594" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none' }}>WhatsApp</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} style={{ color: '#9ca3af', textDecoration: 'none' }}>Testimonial</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Our Team feature is coming soon!'); }} style={{ color: '#9ca3af', textDecoration: 'none' }}>Our Teams</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #374151', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', margin: 0 }}>
            © {new Date().getFullYear()} ApanaTime Solutions. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/privacy" style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="/terms" style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none' }}>
              Terms of Service
            </a>
            <a href="/cookies" style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none' }}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
