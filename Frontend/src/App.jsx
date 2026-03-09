import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/features/Layout/components/Header"
import { Footer } from "@/features/Layout/components/Footer"
import { Toaster } from "@/components/ui/sonner"
import ScrollProgress from "@/components/ScrollProgress"
import ScrollToTop from "@/components/ScrollToTop"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import BackToTop from "@/components/BackToTop"
import HomePage from "@/features/Home"
import ContactPage from "@/features/Contact"
import ServicePage from "@/features/Services"
import CareerPage from "@/features/Career"
import OurIndustriesPage from "@/features/OurIndustries"
import OurServicesPage from "@/features/OurServices"
import OurProductsPage from "@/features/OurProducts"
import OurEventsPage from "@/features/OurEvents"
import OurBlogPage from "@/features/OurBlog"
import PrivacyPolicy from "@/features/Legal/PrivacyPolicy"
import TermsOfService from "@/features/Legal/TermsOfService"
import CookiePolicy from "@/features/Legal/CookiePolicy"
import Certifications from "@/features/Legal/Certifications"

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen font-sans antialiased" style={{ scrollBehavior: 'smooth' }}>
                <ScrollProgress />
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/career" element={<CareerPage />} />
                    <Route path="/our-industries" element={<OurIndustriesPage />} />
                    <Route path="/our-expert-teams" element={<OurIndustriesPage />} />
                    <Route path="/our-services" element={<OurServicesPage />} />
                    <Route path="/our-products" element={<OurProductsPage />} />
                    <Route path="/our-events" element={<OurEventsPage />} />
                    <Route path="/our-blog" element={<OurBlogPage />} />
                    <Route path="/services/:serviceName" element={<ServicePage />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/cookies" element={<CookiePolicy />} />
                    <Route path="/certifications" element={<Certifications />} />
                </Routes>
                <Footer />
                <FloatingWhatsApp />
                <BackToTop />
                <Toaster />
                <Analytics />
            </div>
        </Router>
    )
}

export default App
