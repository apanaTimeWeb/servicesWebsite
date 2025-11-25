"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Brain, BarChart3 } from "lucide-react"

export function HeroSection() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to start a project with your team", "_blank")
  }

  const handleViewWork = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-background to-muted relative overflow-hidden">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" className="text-border" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)] text-balance animate-[fade-in-up_0.6s_ease-out_both]">
            Transform Your Business with
            <span className="text-primary"> Cutting-Edge Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty animate-[fade-in-up_0.7s_ease-out_both]">
            We deliver premium mobile development, web solutions, AI/ML services, and data analytics that drive real
            business results for forward-thinking companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-[fade-in-up_0.8s_ease-out_both]">
            <Button
              onClick={handleConsultation}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={handleViewWork}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border animate-[fade-in-up_0.6s_ease-out_both]">
              <Code className="h-12 w-12 text-primary mb-4 animate-[float_6s_ease-in-out_infinite]" />
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Development Excellence
              </h3>
              <p className="text-muted-foreground text-center">
                Mobile & web solutions built with cutting-edge technologies
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border animate-[fade-in-up_0.7s_ease-out_both]">
              <Brain className="h-12 w-12 text-primary mb-4 animate-[float_6s_ease-in-out_infinite]" />
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                AI/ML Innovation
              </h3>
              <p className="text-muted-foreground text-center">Custom AI models and intelligent automation solutions</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border animate-[fade-in-up_0.8s_ease-out_both]">
              <BarChart3 className="h-12 w-12 text-primary mb-4 animate-[float_6s_ease-in-out_infinite]" />
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Data Analytics
              </h3>
              <p className="text-muted-foreground text-center">Transform data into actionable business insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
