"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

const expertiseAreas = [
  { name: "Mobile Development", percentage: 95, projects: "200+" },
  { name: "Web Development", percentage: 98, projects: "300+" },
  { name: "AI/ML Solutions", percentage: 90, projects: "150+" },
  { name: "Data Analytics", percentage: 92, projects: "180+" },
  { name: "UI/UX Design", percentage: 94, projects: "250+" },
  { name: "Cloud Solutions", percentage: 88, projects: "120+" },
]

const stats = [
  { number: "20+", label: "Projects Completed" },
  { number: "10+", label: "Projects Ongoing" },
  { number: "35+", label: "Happy Clients" },
  { number: "4+", label: "Years Experience" },
]

export function ExpertiseSection() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to get a consultation about your services", "_blank")
  }

  return (
    <section id="expertise" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Years of experience delivering exceptional results across multiple technology domains
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-[family-name:var(--font-space-grotesk)]">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">{area.name}</CardTitle>
                  <span className="text-sm text-muted-foreground">{area.projects} projects</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Proficiency</span>
                  <span className="text-sm font-semibold text-primary">{area.percentage}%</span>
                </div>
                <Progress value={area.percentage} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleConsultation}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
