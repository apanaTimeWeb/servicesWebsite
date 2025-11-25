import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Star, Users } from "lucide-react"

const technologies = [
    { name: "React Native", description: "Cross-platform mobile apps with native performance" },
    { name: "Flutter", description: "Google's UI toolkit for beautiful, natively compiled applications" },
    { name: "Swift/iOS", description: "Native iOS development for optimal performance" },
    { name: "Kotlin/Android", description: "Modern Android development with Kotlin" },
    { name: "Firebase", description: "Backend services and real-time database" },
    { name: "App Store Optimization", description: "Maximize your app's visibility and downloads" },
]

const mobileReviews = [
    {
        name: "Michael Chen",
        company: "FitTrack Solutions",
        country: "Singapore",
        rating: 5,
        review:
            "They built our fitness tracking app that now has 50K+ downloads. The React Native solution works perfectly on both platforms.",
    },
    {
        name: "Lisa Rodriguez",
        company: "EduTech Innovations",
        country: "Mexico",
        rating: 5,
        review:
            "Outstanding mobile development! Our educational app handles complex animations and offline functionality flawlessly.",
    },
    {
        name: "Ahmed Hassan",
        company: "DeliveryPro",
        country: "UAE",
        rating: 5,
        review:
            "The team delivered our delivery app ahead of schedule. Real-time tracking and payment integration work perfectly.",
    },
]

const partners = [
    { name: "Apple App Store", logo: "🍎" },
    { name: "Google Play", logo: "📱" },
    { name: "Firebase", logo: "🔥" },
    { name: "AWS Mobile", logo: "☁️" },
    { name: "Stripe", logo: "💳" },
    { name: "OneSignal", logo: "🔔" },
]

export default function MobileDevelopmentPage() {
    const handleConsultation = () => {
        window.open("https://wa.me/917080404594?text=Hi, I would like to discuss mobile development services", "_blank")
    }

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 text-primary border-primary">
                            Mobile Development
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                            Native & Cross-Platform Apps
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            We create powerful mobile applications that deliver exceptional user experiences across iOS and Android
                            platforms
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <Badge variant="secondary">200+ Mobile Apps Built</Badge>
                            <Badge variant="secondary">15+ Apps in App Stores</Badge>
                            <Badge variant="secondary">99% App Store Approval Rate</Badge>
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
                        Technologies We Master
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Smartphone className="h-5 w-5 text-primary mr-2" />
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
                        Our Impact in Mobile Development
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl font-bold text-primary mb-1">200+</div>
                                <p className="text-sm text-muted-foreground">Apps Delivered</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                                <p className="text-sm text-muted-foreground">Live on Stores</p>
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
                                <div className="text-3xl font-bold text-primary mb-1">50k+</div>
                                <p className="text-sm text-muted-foreground">Avg. Downloads</p>
                            </CardContent>
                        </Card>
                    </div>

                    <h3 className="text-2xl font-semibold text-center mb-6 font-[family-name:var(--font-space-grotesk)]">
                        Example Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="p-6">
                                <CardTitle>Fitness Tracker</CardTitle>
                                <p className="text-sm text-muted-foreground mt-2">RN + BLE + offline sync; 100k+ downloads</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <CardTitle>EdTech App</CardTitle>
                                <p className="text-sm text-muted-foreground mt-2">Flutter + video; adaptive quizzes, push</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <CardTitle>Delivery App</CardTitle>
                                <p className="text-sm text-muted-foreground mt-2">Real-time tracking, payments, driver app</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Client Reviews Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
                        What Our Mobile App Clients Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {mobileReviews.map((review, index) => (
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
                        Our Mobile Development Partners
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
