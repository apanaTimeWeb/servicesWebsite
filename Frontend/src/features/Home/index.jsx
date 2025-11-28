import React from "react"
import { HeroSection } from "./components/HeroSection"
import { MediaMarquee } from "./components/MediaMarquee"
import { ServicesSlider } from "./components/ServicesSlider"
import { ExploreCompanySection } from "./components/ExploreCompanySection"
import { AboutAimSection } from "./components/AboutAimSection"
import { WhyChooseUsSection } from "./components/WhyChooseUsSection"
import { WhyConnectSection } from "./components/WhyConnectSection"
import { ContactDetailsSection } from "./components/ContactDetailsSection"
import { ExpertiseTrustSection } from "./components/ExpertiseTrustSection"

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <MediaMarquee />
            <ServicesSlider />
            <AboutAimSection />
            <ExploreCompanySection />
            <WhyChooseUsSection />
            <WhyConnectSection />
            <ContactDetailsSection />
            <ExpertiseTrustSection />
        </main>
    )
}
