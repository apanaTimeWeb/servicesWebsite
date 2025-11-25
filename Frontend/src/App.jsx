import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/sonner"
import HomePage from "@/pages/Home"
import MobileDevelopment from "@/pages/services/MobileDevelopment"
import WebDevelopment from "@/pages/services/WebDevelopment"
import DashboardDesign from "@/pages/services/DashboardDesign"
import AiChatbots from "@/pages/services/AiChatbots"
import MlPrediction from "@/pages/services/MlPrediction"
import DataAnalytics from "@/pages/services/DataAnalytics"
import GameDevelopment from "@/pages/services/GameDevelopment"

function App() {
    return (
        <Router>
            <div className="min-h-screen font-sans antialiased">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services/mobile-development" element={<MobileDevelopment />} />
                    <Route path="/services/web-development" element={<WebDevelopment />} />
                    <Route path="/services/dashboard-design" element={<DashboardDesign />} />
                    <Route path="/services/ai-chatbots" element={<AiChatbots />} />
                    <Route path="/services/ml-prediction" element={<MlPrediction />} />
                    <Route path="/services/data-analytics" element={<DataAnalytics />} />
                    <Route path="/services/game-development" element={<GameDevelopment />} />
                </Routes>
                <Toaster />
                <Analytics />
            </div>
        </Router>
    )
}

export default App
