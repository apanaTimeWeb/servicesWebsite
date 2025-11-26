import React from "react"
import { useParams } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Star } from "lucide-react"

const serviceData = {
    "mobile-development": {
        title: "Mobile Development",
        description: "Native iOS and Android apps, cross-platform solutions with React Native and Flutter",
        features: ["iOS & Android Native", "Cross-platform Development", "App Store Optimization", "Performance Optimization"],
        stats: { projects: "200+", clients: "150+", rating: "4.9/5" }
    },
    "web-development": {
        title: "Web Development",
        description: "Modern web applications, e-commerce platforms, and progressive web apps",
        features: ["React/Next.js Applications", "E-commerce Solutions", "Progressive Web Apps", "API Development"],
        stats: { projects: "300+", clients: "200+", rating: "5.0/5" }
    },
    "dashboard-design": {
        title: "Dashboard Design",
        description: "Beautiful, intuitive dashboards and admin panels that users love",
        features: ["UI/UX Design", "Interactive Dashboards", "Data Visualization", "Responsive Design"],
        stats: { projects: "250+", clients: "180+", rating: "4.9/5" }
    },
    "ai-chatbots": {
        title: "AI Chatbots",
        description: "Intelligent conversational AI powered by the latest language models",
        features: ["Custom Chatbots", "Natural Language Processing", "Multi-platform Integration", "24/7 Support"],
        stats: { projects: "150+", clients: "100+", rating: "4.8/5" }
    },
    "ml-prediction": {
        title: "ML Prediction Models",
        description: "Custom machine learning models trained on your data for accurate predictions",
        features: ["Predictive Analytics", "Custom Model Training", "Real-time Predictions", "Model Optimization"],
        stats: { projects: "180+", clients: "120+", rating: "4.9/5" }
    },
    "data-analytics": {
        title: "Data Analytics",
        description: "Transform raw data into actionable insights with advanced analytics",
        features: ["Business Intelligence", "Real-time Analytics", "Custom Reporting", "Data Visualization"],
        stats: { projects: "220+", clients: "160+", rating: "5.0/5" }
    },
    "game-development": {
        title: "Game Development",
        description: "End-to-end 2D/3D game development for mobile, web, and desktop",
        features: ["Unity & Unreal", "2D/3D Art & Animation", "Mobile & Web Build", "LiveOps & Analytics"],
        stats: { projects: "100+", clients: "80+", rating: "4.8/5" }
    }
}

export default function ServicePage() {
    const { serviceName } = useParams()
    const service = serviceData[serviceName] || {
        title: serviceName?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        description: "Professional services tailored to your needs",
        features: ["Custom Solutions", "Expert Team", "Quality Delivery", "24/7 Support"],
        stats: { projects: "100+", clients: "80+", rating: "4.9/5" }
    }
    
    const handleConsultation = () => {
        window.open(`https://wa.me/917080404594?text=Hi, I would like to discuss ${service.title} services`, "_blank")
    }

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge variant="outline" className="mb-4 text-primary border-primary">
                            Service
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                            {service.title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            {service.description}
                        </p>
                        <Button onClick={handleConsultation} size="lg" className="bg-primary hover:bg-primary/90">
                            Get Free Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="text-3xl font-bold text-primary mb-2">{service.stats.projects}</div>
                                <p className="text-muted-foreground">Projects Completed</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="text-3xl font-bold text-primary mb-2">{service.stats.clients}</div>
                                <p className="text-muted-foreground">Happy Clients</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                                    <div className="text-3xl font-bold text-primary">{service.stats.rating}</div>
                                </div>
                                <p className="text-muted-foreground">Client Rating</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
                            What We Offer
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {service.features.map((feature, index) => (
                                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="flex items-center text-lg">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                                            {feature}
                                        </CardTitle>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let's discuss your project and create something amazing together
                        </p>
                        <Button 
                            onClick={handleConsultation} 
                            size="lg" 
                            variant="secondary"
                            className="bg-background text-foreground hover:bg-background/90"
                        >
                            Contact Us Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
