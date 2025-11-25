import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Star, Users } from "lucide-react"

const technologies = [
    { name: "React/Next.js", description: "Modern frontend frameworks for interactive dashboards" },
    { name: "D3.js", description: "Powerful data visualization library for custom charts" },
    { name: "Chart.js", description: "Simple yet flexible charting for designers & developers" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
    { name: "Figma/Adobe XD", description: "Professional design tools for UI/UX creation" },
    { name: "Material-UI", description: "React components implementing Google's Material Design" },
]

const designReviews = [
    {
        name: "Robert Kim",
        company: "DataViz Corp",
        country: "USA",
        rating: 5,
        review:
            "The dashboard they designed transformed how our team analyzes data. Beautiful, intuitive, and incredibly functional.",
    },
    {
        name: "Sophie Laurent",
        company: "Analytics Pro",
        country: "France",
        rating: 5,
        review: "Outstanding dashboard design! Our users love the clean interface and the data visualization is top-notch.",
    },
    {
        name: "Carlos Mendez",
        company: "Business Intelligence Ltd",
        country: "Spain",
        rating: 5,
        review:
            "They created a dashboard that perfectly balances aesthetics with functionality. Our productivity increased by 60%.",
    },
]

const partners = [
    { name: "Figma", logo: "🎨" },
    { name: "Adobe Creative", logo: "🔷" },
    { name: "Sketch", logo: "💎" },
    { name: "InVision", logo: "👁️" },
    { name: "Framer", logo: "🖼️" },
    { name: "Principle", logo: "⚡" },
]

const exampleProjects = [
    { title: "Sales Analytics", description: "Recharts + RSC; drilldowns, exports" },
    { title: "Healthcare Ops", description: "HIPAA-aware views, access control" },
    { title: "IoT Monitoring", description: "Live telemetry charts, alerts" },
]

export default function DashboardDesignPage() {
    const handleConsultation = () => {
        window.open("https://wa.me/917080404594?text=Hi, I would like to discuss dashboard design services", "_blank")
    }

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 text-primary border-primary">
                            Dashboard Design
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                            Beautiful Data Dashboards
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            We design stunning, user-friendly dashboards that transform complex data into actionable insights
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <Badge variant="secondary">100+ Dashboards Designed</Badge>
                            <Badge variant="secondary">95% User Satisfaction</Badge>
                            <Badge variant="secondary">Award-Winning Designs</Badge>
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
                        Design Tools & Technologies
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Palette className="h-5 w-5 text-primary mr-2" />
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
                        Our Impact in Dashboard Design
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                                <p className="text-sm text-muted-foreground">Dashboards Shipped</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl font-bold text-primary mb-1">95%</div>
                                <p className="text-sm text-muted-foreground">User Satisfaction</p>
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
                                <div className="text-3xl font-bold text-primary mb-1">60%</div>
                                <p className="text-sm text-muted-foreground">Productivity Gain</p>
                            </CardContent>
                        </Card>
                    </div>

                    <h3 className="text-2xl font-semibold text-center mb-6 font-[family-name:var(--font-space-grotesk)]">
                        Example Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {exampleProjects.map((project, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <CardTitle>{project.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
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
                        What Our Dashboard Design Clients Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {designReviews.map((review, index) => (
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
                        Our Design Tool Partners
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
