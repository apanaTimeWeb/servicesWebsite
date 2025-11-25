"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Star, Users, Trophy, Handshake } from "lucide-react"

const expertiseAreas = [
  { name: "Mobile Development", percentage: 95, projects: "200+" },
  { name: "Web Development", percentage: 98, projects: "300+" },
  { name: "AI/ML Solutions", percentage: 90, projects: "150+" },
  { name: "Data Analytics", percentage: 92, projects: "180+" },
  { name: "UI/UX Design", percentage: 94, projects: "250+" },
  { name: "Cloud Solutions", percentage: 88, projects: "120+" },
]

const impactStats = [
  { number: "100+", label: "Projects Done", icon: Trophy },
  { number: "80+", label: "Happy Clients", icon: Users },
  { number: "100%", label: "Client Satisfaction", icon: Star },
  { number: "20+", label: "Countries Served", icon: MapPin },
  { number: "15+", label: "Company Tie-ups", icon: Handshake },
]

export function ExpertiseTrustSection() {
  return (
    <section id="expertise" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 text-primary border-primary">
            Our Expertise & Trust
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
            Our Expertise & Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-3 text-pretty">
            Years of experience delivering exceptional results across multiple technology domains with proven global
            impact and client satisfaction.
          </p>
        </div>

        {/* Impact stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {impactStats.map((stat, i) => (
            <Card key={i} className="text-center border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 font-[family-name:var(--font-space-grotesk)]">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="bg-card border-border"
              style={{ animationDelay: `${index * 80}ms` }}
            >
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
      </div>
    </section>
  )
}
