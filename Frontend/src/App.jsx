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
                    <Route path="/services/:serviceName" element={<ServicePage />} />
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
