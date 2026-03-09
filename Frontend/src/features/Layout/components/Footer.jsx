import { useNavigate, useLocation, Link } from "react-router-dom"
import { FaTwitter, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaWhatsapp, FaYoutube, FaFacebook, FaGlobe } from "react-icons/fa"

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
              <a href="https://x.com/apanatime_in" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }} title="X">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com/company/apana-time" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }} title="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com/apanatime.in" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }} title="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://facebook.com/people/Apana-Time-Tech-Solutions/61578195953347" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }} title="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://t.me/https_apanatime" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }} title="Telegram">
                <FaTelegramPlane size={20} />
              </a>
              <a href="https://apanatime.in" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }} title="Website">
                <FaGlobe size={20} />
              </a>
              <a href="https://www.youtube.com/@apanatimetech" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', padding: '0.5rem', transition: 'color 0.3s' }} title="YouTube">
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
              <li style={{ marginBottom: '0.5rem' }}>Main Road Kaudi Ram Madraha Kusmaul,<br /> Gorakhpur, Uttar Pradesh</li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="mailto:info@apanatime.in" style={{ color: '#9ca3af', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontWeight: '500' }}>Email:</span> info@apanatime.in
                </a>
              </li>
              <li>
                <a href="tel:+917080404594" style={{ color: '#9ca3af', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontWeight: '500' }}>Mobile Number:</span> +91 7080404594
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
              <li><Link to="/certifications" style={{ color: '#9ca3af', textDecoration: 'none' }}>Certifications</Link></li>
              <li><a href="https://wa.me/917080404594" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none' }}>WhatsApp</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} style={{ color: '#9ca3af', textDecoration: 'none' }}>Testimonial</a></li>
              <li><Link to="/our-expert-teams" style={{ color: '#9ca3af', textDecoration: 'none' }}>Our Teams</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #374151', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', margin: 0 }}>
            © {new Date().getFullYear()} ApanaTime Solutions. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/privacy" style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none' }}>
              Terms of Service
            </Link>
            <Link to="/cookies" style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none' }}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
