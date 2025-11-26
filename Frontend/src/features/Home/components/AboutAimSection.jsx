import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Target, CheckCircle2 } from "lucide-react"

export function AboutAimSection() {
  const points = [
    "End-to-end delivery: Discovery → Design → Development → Launch → Support",
    "Security-first approach, code reviews, automation, and QA baked in",
    "Transparent communication and sprint-based progress updates",
  ]
  const aims = [
    "Deliver measurable business impact, not just code",
    "Leverage AI/ML to automate workflows and unlock insights",
    "Build scalable products that grow with your users",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-3 text-primary border-primary">
            About the Company
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
            We Build Reliable, Scalable, and Intelligent Solutions
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            From mobile and web apps to AI/ML and data analytics, we partner with startups and enterprises to ship
            production-grade software on time and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-border bg-card">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">Who We Are</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A senior-led engineering team delivering high-quality software across industries such as fintech,
                health, e-commerce, and SaaS. We combine modern stacks with pragmatic execution.
              </p>
              <ul className="mt-5 space-y-2">
                {points.map((p, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">Our Aim</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Hamara lakshya hai aapke business ko technology se tez banaya jaye — better customer experience,
                automated operations, aur data-driven decision making ke saath.
              </p>
              <ul className="mt-5 space-y-2">
                {aims.map((a, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
