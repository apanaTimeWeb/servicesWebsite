import React from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { MediaMarquee } from "@/components/media-marquee"
import { AboutAimSection } from "@/components/about-aim-section"
import { ExpertiseTrustSection } from "@/components/expertise-trust-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection />
            <MediaMarquee />
            <ServicesSection />
            <AboutAimSection />
            <WhyChooseUsSection />
            <ExpertiseTrustSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
