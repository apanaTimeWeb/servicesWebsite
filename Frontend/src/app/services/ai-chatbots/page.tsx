"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Star, Users } from "lucide-react"

const technologies = [
  { name: "OpenAI GPT", description: "Advanced language models for natural conversations" },
  { name: "Google Dialogflow", description: "Conversational AI platform with NLP capabilities" },
  { name: "Microsoft Bot Framework", description: "Enterprise-grade bot development platform" },
  { name: "Rasa", description: "Open-source conversational AI framework" },
  { name: "LangChain", description: "Framework for developing LLM-powered applications" },
  { name: "Custom NLP Models", description: "Tailored language processing for specific domains" },
]

const chatbotReviews = [
  {
    name: "David Park",
    company: "CustomerCare Solutions",
    country: "South Korea",
    rating: 5,
    review:
      "Our AI chatbot handles 80% of customer queries automatically. Customer satisfaction increased by 40% since implementation.",
  },
  {
    name: "Maria Santos",
    company: "HealthTech Innovations",
    country: "Brazil",
    rating: 5,
    review:
      "The medical consultation chatbot they built understands complex health queries and provides accurate preliminary assessments.",
  },
  {
    name: "James Wilson",
    company: "FinanceBot Ltd",
    country: "Canada",
    rating: 5,
    review:
      "Exceptional AI chatbot for financial advice. It handles complex investment queries and integrates seamlessly with our systems.",
  },
]

const partners = [
  { name: "OpenAI", logo: "🤖" },
  { name: "Google Cloud AI", logo: "🧠" },
  { name: "Microsoft Azure", logo: "☁️" },
  { name: "Hugging Face", logo: "🤗" },
  { name: "Anthropic", logo: "🔬" },
  { name: "Cohere", logo: "💬" },
]

export default function AIChatbotsPage() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to discuss AI chatbot development services", "_blank")
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              AI Chatbots
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
              Intelligent Conversational AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We build sophisticated AI chatbots that understand context, learn from interactions, and provide
              human-like customer support
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary">50+ AI Chatbots Deployed</Badge>
              <Badge variant="secondary">95% Query Resolution Rate</Badge>
              <Badge variant="secondary">24/7 Automated Support</Badge>
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
            AI Technologies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 text-primary mr-2" />
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

      {/* Client Reviews Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
            What Our AI Chatbot Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chatbotReviews.map((review, index) => (
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

      {/* Our Impact Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-[family-name:var(--font-space-grotesk)]">
            Our Impact with AI Chatbots
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <p className="text-sm text-muted-foreground">Bots Deployed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">95%</div>
                <p className="text-sm text-muted-foreground">Resolution Rate</p>
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
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <p className="text-sm text-muted-foreground">Automated Support</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-center mb-6 font-[family-name:var(--font-space-grotesk)]">
            Example Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <CardTitle>E-commerce Support Bot</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Order tracking, returns, product Q&A</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CardTitle>Healthcare Intake Bot</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Symptoms triage, appointment booking</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CardTitle>Banking FAQ Bot</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">KYC, loan, card queries; secure handoff</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
            Our AI Technology Partners
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
