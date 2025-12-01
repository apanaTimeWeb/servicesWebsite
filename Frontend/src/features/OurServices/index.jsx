"use client"

import React from "react"
import { Link } from "react-router-dom"
import { Code, Smartphone, Database, Brain, BarChart3, Palette, ArrowRight, CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
    {
        id: 1,
        name: "Web Development",
        slug: "web-development",
        icon: Code,
        gradient: "from-blue-500 to-cyan-500",
        description: "Build modern, responsive websites and web applications that drive business growth",
        detailedDescription: "Transform your digital presence with cutting-edge web solutions. We create stunning, high-performance websites and web applications using the latest technologies like React, Next.js, and Node.js.",
        features: [
            "Responsive design for all devices",
            "SEO optimization",
            "Fast loading times",
            "Modern UI/UX",
            "Secure and scalable",
            "E-commerce integration"
        ],
        technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
        benefits: [
            "Increase online visibility",
            "Improve user engagement",
            "Boost conversion rates",
            "24/7 availability"
        ]
    },
    {
        id: 2,
        name: "Mobile App Development",
        slug: "mobile-development",
        icon: Smartphone,
        gradient: "from-purple-500 to-pink-500",
        description: "Create powerful native and cross-platform mobile applications for iOS and Android",
        detailedDescription: "Reach your customers on the go with our expert mobile app development services. We build intuitive, feature-rich apps that deliver exceptional user experiences.",
        features: [
            "Cross-platform development",
            "Native performance",
            "Offline functionality",
            "Push notifications",
            "In-app purchases",
            "Cloud integration"
        ],
        technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
        benefits: [
            "Expand market reach",
            "Enhance customer engagement",
            "Drive mobile sales",
            "Build brand loyalty"
        ]
    },
    {
        id: 3,
        name: "Data Analytics",
        slug: "data-analytics",
        icon: BarChart3,
        gradient: "from-green-500 to-emerald-500",
        description: "Transform raw data into actionable insights with advanced analytics solutions",
        detailedDescription: "Make data-driven decisions with our comprehensive analytics services. We help you understand your data, identify trends, and unlock valuable business insights.",
        features: [
            "Data visualization",
            "Predictive analytics",
            "Real-time dashboards",
            "Custom reports",
            "KPI tracking",
            "Business intelligence"
        ],
        technologies: ["Python", "SQL", "Tableau", "Power BI", "Excel"],
        benefits: [
            "Better decision making",
            "Identify growth opportunities",
            "Reduce operational costs",
            "Competitive advantage"
        ]
    },
    {
        id: 4,
        name: "AI & Machine Learning",
        slug: "ai-ml",
        icon: Brain,
        gradient: "from-orange-500 to-red-500",
        description: "Leverage artificial intelligence and machine learning to automate and optimize",
        detailedDescription: "Stay ahead of the curve with AI-powered solutions. From chatbots to recommendation engines, we implement intelligent systems that transform your business operations.",
        features: [
            "Natural Language Processing",
            "Computer Vision",
            "Predictive modeling",
            "Recommendation systems",
            "Automation",
            "Deep learning models"
        ],
        technologies: ["TensorFlow", "PyTorch", "scikit-learn", "NLP", "OpenAI"],
        benefits: [
            "Automate repetitive tasks",
            "Enhance customer experience",
            "Improve accuracy",
            "Scale efficiently"
        ]
    },
    {
        id: 5,
        name: "Data Science",
        slug: "data-science",
        icon: Database,
        gradient: "from-indigo-500 to-purple-500",
        description: "Extract meaningful insights from complex datasets using statistical analysis",
        detailedDescription: "Unlock the power of your data with our data science expertise. We use advanced statistical methods and machine learning to solve complex business problems.",
        features: [
            "Statistical analysis",
            "Machine learning models",
            "Data mining",
            "Pattern recognition",
            "Forecasting",
            "A/B testing"
        ],
        technologies: ["Python", "R", "Big Data", "Spark", "Hadoop"],
        benefits: [
            "Uncover hidden patterns",
            "Predict future trends",
            "Optimize processes",
            "Drive innovation"
        ]
    },
    {
        id: 6,
        name: "UI/UX Design",
        slug: "ui-ux-design",
        icon: Palette,
        gradient: "from-pink-500 to-rose-500",
        description: "Design beautiful, intuitive interfaces that users love",
        detailedDescription: "Create memorable user experiences with our design services. We focus on user-centered design principles to deliver interfaces that are both beautiful and functional.",
        features: [
            "User research",
            "Wireframing & prototyping",
            "Visual design",
            "Usability testing",
            "Design systems",
            "Accessibility compliance"
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
        benefits: [
            "Increase user satisfaction",
            "Reduce bounce rates",
            "Improve conversions",
            "Build brand identity"
        ]
    }
]

const whyChooseUs = [
    {
        icon: Zap,
        title: "Fast Delivery",
        description: "Quick turnaround times without compromising quality"
    },
    {
        icon: Shield,
        title: "Secure & Reliable",
        description: "Enterprise-grade security and 99.9% uptime guarantee"
    },
    {
        icon: TrendingUp,
        title: "Scalable Solutions",
        description: "Built to grow with your business needs"
    },
    {
        icon: CheckCircle2,
        title: "Quality Assured",
        description: "Rigorous testing and quality control processes"
    }
]

export default function OurServicesPage() {
    return (
        <>
            <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .service-card { animation: fadeInUp 0.6s ease-out forwards; }
        .why-card { animation: fadeIn 0.8s ease-out forwards; }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

            <main style={{ paddingTop: '64px', minHeight: '100vh' }}>
                {/* Hero Section */}
                <section style={{
                    background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
                    color: '#ffffff',
                    padding: '5rem 0',
                    textAlign: 'center'
                }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: 'bold',
                            marginBottom: '1.5rem',
                            lineHeight: '1.2'
                        }}>
                            Our Services
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto' }}>
                            Comprehensive technology solutions to transform your business.
                            From web development to AI, we've got you covered.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                                Why Choose ApanaTime?
                            </h2>
                        </div>

                        <div className="why-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '2rem'
                        }}>
                            {whyChooseUs.map((item, index) => {
                                const IconComponent = item.icon
                                return (
                                    <div
                                        key={index}
                                        className="why-card"
                                        style={{
                                            backgroundColor: '#ffffff',
                                            padding: '2rem',
                                            borderRadius: '1rem',
                                            border: '1px solid #e5e7eb',
                                            textAlign: 'center',
                                            animationDelay: `${index * 0.1}s`,
                                            opacity: 0
                                        }}
                                    >
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#dbeafe',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 1rem'
                                        }}>
                                            <IconComponent size={28} color="#3b82f6" />
                                        </div>
                                        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                                Our Service Offerings
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                                End-to-end technology solutions tailored to your business needs
                            </p>
                        </div>

                        <div className="services-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                            gap: '2rem'
                        }}>
                            {services.map((service, index) => {
                                const IconComponent = service.icon
                                return (
                                    <div
                                        key={service.id}
                                        className="service-card"
                                        style={{
                                            backgroundColor: '#ffffff',
                                            borderRadius: '1rem',
                                            border: '1px solid #e5e7eb',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s',
                                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                            animationDelay: `${index * 0.1}s`,
                                            opacity: 0
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)'
                                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)'
                                            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                                        }}
                                    >
                                        {/* Header */}
                                        <div style={{
                                            background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                                            backgroundImage: `linear-gradient(135deg, ${service.gradient.includes('blue') ? '#3b82f6' : service.gradient.includes('purple') ? '#a855f7' : service.gradient.includes('green') ? '#10b981' : service.gradient.includes('orange') ? '#f97316' : service.gradient.includes('indigo') ? '#6366f1' : '#ec4899'}, ${service.gradient.includes('cyan') ? '#06b6d4' : service.gradient.includes('pink') ? '#ec4899' : service.gradient.includes('emerald') ? '#10b981' : service.gradient.includes('red') ? '#ef4444' : service.gradient.includes('purple') ? '#a855f7' : '#f43f5e'})`,
                                            padding: '2rem',
                                            textAlign: 'center',
                                            color: '#ffffff'
                                        }}>
                                            <IconComponent size={48} style={{ margin: '0 auto 1rem' }} />
                                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                                {service.name}
                                            </h3>
                                            <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Content */}
                                        <div style={{ padding: '1.5rem' }}>
                                            <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                                {service.detailedDescription}
                                            </p>

                                            {/* Features */}
                                            <div style={{ marginBottom: '1.5rem' }}>
                                                <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                                                    Key Features:
                                                </h4>
                                                <ul style={{ fontSize: '0.75rem', color: '#6b7280', paddingLeft: '1.25rem', margin: 0 }}>
                                                    {service.features.slice(0, 4).map((feature, idx) => (
                                                        <li key={idx} style={{ marginBottom: '0.25rem' }}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Technologies */}
                                            <div style={{ marginBottom: '1.5rem' }}>
                                                <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                                                    Technologies:
                                                </h4>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                    {service.technologies.map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            style={{
                                                                fontSize: '0.75rem',
                                                                backgroundColor: '#eff6ff',
                                                                color: '#3b82f6',
                                                                padding: '0.25rem 0.75rem',
                                                                borderRadius: '9999px',
                                                                fontWeight: '500'
                                                            }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <Link to={`/services/${service.slug}`}>
                                                <Button
                                                    style={{
                                                        width: '100%',
                                                        backgroundColor: '#3b82f6',
                                                        color: '#ffffff',
                                                        padding: '0.75rem',
                                                        borderRadius: '0.5rem',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        fontWeight: '600',
                                                        fontSize: '0.875rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: '0.5rem'
                                                    }}
                                                >
                                                    Learn More
                                                    <ArrowRight size={16} />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section style={{
                    background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
                    color: '#ffffff',
                    padding: '4rem 0',
                    textAlign: 'center'
                }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            Ready to Transform Your Business?
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Let's discuss how our services can help you achieve your goals
                        </p>
                        <Link to="/contact">
                            <Button
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#1e40af',
                                    padding: '1rem 2.5rem',
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    borderRadius: '0.5rem',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}
