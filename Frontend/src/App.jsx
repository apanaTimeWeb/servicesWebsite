import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/features/Layout/components/Header"
import { Footer } from "@/features/Layout/components/Footer"
import { Toaster } from "@/components/ui/sonner"
import HomePage from "@/features/Home"
import ContactPage from "@/features/Contact"
import ServicePage from "@/features/Services"

function App() {
    return (
        <Router>
            <div className="min-h-screen font-sans antialiased">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services/:serviceName" element={<ServicePage />} />
                </Routes>
                <Footer />
                <Toaster />
                <Analytics />
            </div>
        </Router>
    )
}

export default App
