import React from "react"
import { useParams } from "react-router-dom"
import MobileDevelopment from "./components/MobileDevelopment"
import WebDevelopment from "./components/WebDevelopment"
import DashboardDesign from "./components/DashboardDesign"
import AIChatbots from "./components/AIChatbots"
import MLPrediction from "./components/MLPrediction"
import DataAnalytics from "./components/DataAnalytics"
import GameDevelopment from "./components/GameDevelopment"

export default function ServicePage() {
    const { serviceName } = useParams()

    const serviceComponents = {
        "mobile-development": MobileDevelopment,
        "web-development": WebDevelopment,
        "dashboard-design": DashboardDesign,
        "ai-chatbots": AIChatbots,
        "ml-prediction": MLPrediction,
        "data-analytics": DataAnalytics,
        "game-development": GameDevelopment
    }

    const ServiceComponent = serviceComponents[serviceName]

    if (!ServiceComponent) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <p className="text-muted-foreground">The service you're looking for doesn't exist.</p>
                </div>
            </div>
        )
    }

    return <ServiceComponent />
}
