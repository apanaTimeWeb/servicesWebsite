import React from "react"
import { HeroSection } from "./components/HeroSection"
import { MediaMarquee } from "./components/MediaMarquee"
import { ServicesSection } from "./components/ServicesSection"
import { AboutAimSection } from "./components/AboutAimSection"
import { WhyChooseUsSection } from "./components/WhyChooseUsSection"
import { ExpertiseTrustSection } from "./components/ExpertiseTrustSection"

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <MediaMarquee />
            <ServicesSection />
            <AboutAimSection />
            <WhyChooseUsSection />
            <ExpertiseTrustSection />
        </main>
    )
}
