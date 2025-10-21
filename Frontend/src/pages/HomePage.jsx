import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection'
import { ImpactSection } from '@/components/ImpactSection'
import { ProjectRoadmapSection } from '@/components/ProjectRoadmapSection'
import { ExpertiseSection } from '@/components/ExpertiseSection'
import { CaseStudiesSection } from '@/components/CaseStudiesSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <div id="about" className="sr-only" />
      <WhyChooseUsSection />
      <ImpactSection />
      <ProjectRoadmapSection />
      <ExpertiseSection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
