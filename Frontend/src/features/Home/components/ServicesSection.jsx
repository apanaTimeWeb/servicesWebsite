import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Smartphone, Globe, Palette, MessageSquare, TrendingUp, Database, ArrowRight, Gamepad2 } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native iOS and Android apps, cross-platform solutions with React Native and Flutter",
    features: [
      "iOS & Android Native",
      "Cross-platform Development",
      "App Store Optimization",
      "Performance Optimization",
    ],
    link: "/services/mobile-development",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern web applications, e-commerce platforms, and progressive web apps",
    features: ["React/Next.js Applications", "E-commerce Solutions", "Progressive Web Apps", "API Development"],
    link: "/services/web-development",
  },
  {
    icon: Palette,
    title: "Dashboard Design",
    description: "Beautiful, intuitive dashboards and admin panels that users love to interact with",
    features: ["UI/UX Design", "Interactive Dashboards", "Data Visualization", "Responsive Design"],
    link: "/services/dashboard-design",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Intelligent conversational AI powered by the latest language models",
    features: ["Custom Chatbots", "Natural Language Processing", "Multi-platform Integration", "24/7 Customer Support"],
    link: "/services/ai-chatbots",
  },
  {
    icon: TrendingUp,
    title: "ML Prediction Models",
    description: "Custom machine learning models trained on your data for accurate predictions",
    features: ["Predictive Analytics", "Custom Model Training", "Real-time Predictions", "Model Optimization"],
    link: "/services/ml-prediction",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics solutions",
    features: ["Business Intelligence", "Real-time Analytics", "Custom Reporting", "Data Visualization"],
    link: "/services/data-analytics",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "End-to-end 2D/3D game development for mobile, web, and desktop platforms",
    features: ["Unity & Unreal", "2D/3D Art & Animation", "Mobile & Web Build", "LiveOps & Analytics"],
    link: "/services/game-development",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="animate-[fade-in-up_0.6s_ease-out_both]">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <service.icon className="h-10 w-10 text-primary mr-4" />
                    <CardTitle className="text-xl font-[family-name:var(--font-space-grotesk)]">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
