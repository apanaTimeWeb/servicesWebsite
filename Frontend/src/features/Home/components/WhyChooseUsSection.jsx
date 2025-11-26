import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Shield, Zap, Globe } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Users,
      title: "Elite Team",
      description:
        "Our developers have 4+ years of experience and are ex-employees from Google, Microsoft, Amazon, and other top tech companies.",
      highlight: "Ex-FAANG Talent",
    },
    {
      icon: Award,
      title: "Cost-Effective Solutions",
      description:
        "Get premium quality services at competitive rates. We deliver enterprise-grade solutions without the enterprise price tag.",
      highlight: "50% Cost Savings",
    },
    {
      icon: Clock,
      title: "Customized Projects",
      description:
        "Every project is tailored to your specific requirements. No cookie-cutter solutions - we build exactly what you need.",
      highlight: "100% Custom",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing protocols and code reviews ensure bug-free, scalable, and maintainable solutions.",
      highlight: "Zero-Bug Policy",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description:
        "We stay ahead of technology trends, using the latest frameworks and tools to build future-ready applications.",
      highlight: "Latest Tech Stack",
    },
    {
      icon: Globe,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and maintenance services to ensure your applications run smoothly.",
      highlight: "24/7 Available",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Your Success is Our Priority
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We combine technical expertise with business acumen to deliver solutions that not only work flawlessly but
            also drive measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {reason.highlight}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
