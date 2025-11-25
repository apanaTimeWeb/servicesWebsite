import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      company: "TechStart Inc.",
      location: "San Francisco, USA",
      rating: 5,
      text: "Their AI/ML expertise transformed our data analytics capabilities. The custom prediction models they built increased our forecast accuracy by 40%. Exceptional team with deep technical knowledge.",
      project: "AI-Powered Analytics Platform",
    },
    {
      name: "Marcus Weber",
      position: "Product Director",
      company: "FinanceFlow GmbH",
      location: "Berlin, Germany",
      rating: 5,
      text: "Outstanding mobile app development! They delivered a complex fintech application with seamless UX and robust security. The project was completed 2 weeks ahead of schedule.",
      project: "Mobile Banking Application",
    },
    {
      name: "Priya Sharma",
      position: "Founder & CEO",
      company: "EcoTech Solutions",
      location: "Mumbai, India",
      rating: 5,
      text: "The dashboard they created for our IoT platform is simply amazing. Real-time data visualization, intuitive design, and powerful analytics - everything we needed and more.",
      project: "IoT Management Dashboard",
    },
    {
      name: "James Mitchell",
      position: "VP of Technology",
      company: "RetailMax Corp",
      location: "Toronto, Canada",
      rating: 5,
      text: "Their chatbot solution revolutionized our customer service. 80% reduction in response time and 95% customer satisfaction rate. The AI understands context perfectly.",
      project: "AI Customer Service Chatbot",
    },
    {
      name: "Elena Rodriguez",
      position: "Digital Innovation Lead",
      company: "MedCare Systems",
      location: "Madrid, Spain",
      rating: 5,
      text: "Incredible work on our healthcare data analytics platform. The insights we now get from patient data have improved our treatment outcomes significantly. Highly recommended!",
      project: "Healthcare Analytics Platform",
    },
    {
      name: "David Kim",
      position: "Chief Data Officer",
      company: "LogiFlow Australia",
      location: "Sydney, Australia",
      rating: 5,
      text: "They built a comprehensive supply chain optimization system using machine learning. Our operational efficiency improved by 35%. Professional, reliable, and innovative team.",
      project: "Supply Chain ML System",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Client Reviews
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our clients from around the world have to say about working
            with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.location}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="text-xs mt-2">
                    {testimonial.project}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 p-6 bg-muted/50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                4.9/5
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Project Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
