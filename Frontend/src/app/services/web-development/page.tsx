"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Star, Users } from "lucide-react"

const technologies = [
  { name: "React/Next.js", description: "Modern frontend frameworks for scalable applications" },
  { name: "Node.js/Express", description: "Robust backend development with JavaScript" },
  { name: "Python/Django", description: "Powerful web applications with clean architecture" },
  { name: "MongoDB/PostgreSQL", description: "Flexible and reliable database solutions" },
  { name: "AWS/Vercel", description: "Cloud deployment and hosting solutions" },
  { name: "TypeScript", description: "Type-safe development for better code quality" },
]

const webDevReviews = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc",
    country: "USA",
    rating: 5,
    review:
      "Outstanding web development team! They delivered our e-commerce platform ahead of schedule with exceptional quality.",
  },
  {
    name: "Raj Patel",
    company: "Digital Solutions Ltd",
    country: "India",
    rating: 5,
    review: "The React application they built for us handles 10,000+ concurrent users flawlessly. Highly recommended!",
  },
  {
    name: "Emma Wilson",
    company: "Creative Agency",
    country: "UK",
    rating: 5,
    review:
      "Professional team with deep technical expertise. Our website performance improved by 300% after their optimization.",
  },
]

const partners = [
  { name: "Google Cloud", logo: "🌐" },
  { name: "AWS", logo: "☁️" },
  { name: "Vercel", logo: "▲" },
  { name: "MongoDB", logo: "🍃" },
  { name: "Stripe", logo: "💳" },
  { name: "Shopify", logo: "🛍️" },
]

export default function WebDevelopmentPage() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to discuss web development services", "_blank")
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Web Development
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
              Modern Web Applications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We build scalable, high-performance web applications using cutting-edge technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary">150+ Web Projects Completed</Badge>
              <Badge variant="secondary">25+ Ongoing Projects</Badge>
              <Badge variant="secondary">98% Client Satisfaction</Badge>
            </div>
            <Button onClick={handleConsultation} size="lg" className="bg-primary hover:bg-primary/90">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-5 w-5 text-primary mr-2" />
                    {tech.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-[family-name:var(--font-space-grotesk)]">
            Our Impact in Web Development
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">150+</div>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">25+</div>
                <p className="text-sm text-muted-foreground">Ongoing Projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">35+</div>
                <p className="text-sm text-muted-foreground">Clients Served</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <p className="text-sm text-muted-foreground">Countries</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-center mb-6 font-[family-name:var(--font-space-grotesk)]">
            Example Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <CardTitle>E-commerce Platform</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Next.js + Stripe; 20K MAU; 3x conversion uplift</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CardTitle>B2B SaaS Dashboard</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Role-based access, audit logs, multi-tenant</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CardTitle>Real-time Analytics</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">WebSockets, server actions, sub-1s insights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
            What Our Web Development Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webDevReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.review}"</p>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-primary mr-2" />
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {review.company}, {review.country}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
            Our Technology Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-2">{partner.logo}</div>
                <p className="font-semibold text-sm">{partner.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
