"use client"

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { GraduationCap, Dumbbell, BookOpen, BarChart3, ShoppingCart, Users, Globe, CheckCircle2, TrendingUp, Code, Smartphone, Database, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "../Home/components/ContactModal"

const statistics = [
    {
        icon: Globe,
        value: "25+",
        label: "Countries Served",
        color: "#3b82f6"
    },
    {
        icon: Users,
        value: "100+",
        label: "Satisfied Clients",
        color: "#10b981"
    },
    {
        icon: CheckCircle2,
        value: "150+",
        label: "Completed Projects",
        color: "#f59e0b"
    },
    {
        icon: TrendingUp,
        value: "50+",
        label: "Ongoing Projects",
        color: "#8b5cf6"
    }
]

const serviceAreas = [
    { name: "App Development", icon: Smartphone },
    { name: "Web Development", icon: Code },
    { name: "Data Science & Data Analytics", icon: Database },
    { name: "Artificial Intelligence & Machine Learning", icon: Brain }
]

const products = [
    {
        id: 1,
        name: "School Management System",
        icon: GraduationCap,
        gradient: "from-blue-500 to-cyan-500",
        description: "A complete ERP solution for schools to automate attendance, manage fees, and generate performance reports.",
        features: [
            "Real-time student tracking and performance reporting",
            "Automated fee management system",
            "WhatsApp and text message notifications",
            "Multiple customizable templates for reports and documents",
            "Excel bulk upload for quick data entry",
            "Comprehensive Transport, Exam, Timetable, and Staff Management",
            "Syllabus management and updates",
            "Salary payroll and attendance integration",
            "Auto reminder and notification system",
            "Faculty dashboard with analytics and insights"
        ]
    },
    {
        id: 2,
        name: "Gym Management Application",
        icon: Dumbbell,
        gradient: "from-purple-500 to-pink-500",
        description: "Streamlined solution for gym owners and trainers to manage members, subscriptions, and workouts.",
        features: [
            "Member registration and attendance tracking",
            "Subscription & billing automation",
            "Mobile-friendly access for on-the-go management",
            "Workout plan creation and tracking",
            "Trainer assignment and scheduling",
            "Payment gateway integration",
            "Performance analytics and reports",
            "Member engagement tools"
        ]
    },
    {
        id: 3,
        name: "Library Management System",
        icon: BookOpen,
        gradient: "from-green-500 to-emerald-500",
        description: "Digital library management software for educational institutions and public libraries.",
        features: [
            "Issue/Return tracking with automated notifications",
            "E-book integration and digital catalog",
            "Late fine automation and calculation",
            "Member management and card generation",
            "Book reservation system",
            "Inventory management and stock alerts",
            "Reading analytics and popular books tracking",
            "Multi-branch library support"
        ]
    },
    {
        id: 4,
        name: "Business Intelligence Dashboards",
        icon: BarChart3,
        gradient: "from-orange-500 to-red-500",
        description: "Interactive Power BI dashboards for hotels, restaurants, and retail stores to visualize business performance.",
        features: [
            "Sales & profit visualization with real-time updates",
            "Inventory tracking and stock management",
            "KPI tracking and performance metrics",
            "Customer behavior analysis",
            "Revenue forecasting and trend analysis",
            "Multi-location business intelligence",
            "Custom report generation",
            "Interactive data exploration"
        ]
    },
    {
        id: 5,
        name: "E-commerce Application",
        icon: ShoppingCart,
        gradient: "from-indigo-500 to-purple-500",
        description: "End-to-end online store management solution for small and medium businesses.",
        features: [
            "Product listing & categorization",
            "Order tracking and management",
            "Secure payment gateway integration",
            "Customer analytics and insights",
            "Admin controls and inventory management",
            "Shopping cart and wishlist functionality",
            "Discount and coupon management",
            "Mobile-responsive design",
            "Email and SMS notifications",
            "Multi-vendor marketplace support"
        ]
    }
]

export default function OurProductsPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    const handleGetStarted = () => {
        setIsContactModalOpen(true)
    }

    return (
        <>
            <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        .product-card { animation: fadeInUp 0.6s ease-out forwards; }
        .stat-card { animation: fadeIn 0.8s ease-out forwards; }
        .service-badge { animation: slideInLeft 0.5s ease-out forwards; }
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-title { font-size: 2.5rem !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
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
                        <h1 className="hero-title" style={{
                            fontSize: '3.5rem',
                            fontWeight: 'bold',
                            marginBottom: '1.5rem',
                            lineHeight: '1.2'
                        }}>
                            Our Software Products
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '1rem', opacity: 0.95, maxWidth: '900px', margin: '0 auto 1rem' }}>
                            Live in the Market & Transforming Businesses
                        </p>
                        <p style={{ fontSize: '1rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
                            We take pride in developing fully functional, market-ready applications that serve educational, fitness, and business sectors.
                        </p>
                    </div>
                </section>

                {/* Statistics Section */}
                <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div className="stats-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '2rem'
                        }}>
                            {statistics.map((stat, index) => {
                                const IconComponent = stat.icon
                                return (
                                    <div
                                        key={index}
                                        className="stat-card"
                                        style={{
                                            backgroundColor: '#ffffff',
                                            padding: '2rem',
                                            borderRadius: '1rem',
                                            border: '1px solid #e5e7eb',
                                            textAlign: 'center',
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
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: `${stat.color}20`,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 1rem'
                                        }}>
                                            <IconComponent size={28} color={stat.color} />
                                        </div>
                                        <h3 style={{ fontSize: '2.5rem', fontWeight: '700', color: stat.color, marginBottom: '0.5rem' }}>
                                            {stat.value}
                                        </h3>
                                        <p style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>
                                            {stat.label}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Service Areas Section */}
                <section style={{ padding: '3rem 0', backgroundColor: '#ffffff' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                Our Key Service Areas
                            </h2>
                        </div>

                        <div className="services-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '1.5rem',
                            maxWidth: '1000px',
                            margin: '0 auto'
                        }}>
                            {serviceAreas.map((service, index) => {
                                const IconComponent = service.icon
                                return (
                                    <div
                                        key={index}
                                        className="service-badge"
                                        style={{
                                            backgroundColor: '#eff6ff',
                                            padding: '1.5rem 1rem',
                                            borderRadius: '0.75rem',
                                            border: '2px solid #3b82f6',
                                            textAlign: 'center',
                                            transition: 'all 0.3s',
                                            animationDelay: `${index * 0.1}s`,
                                            opacity: 0
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#3b82f6'
                                            e.currentTarget.style.transform = 'scale(1.05)'
                                            const icon = e.currentTarget.querySelector('svg')
                                            const text = e.currentTarget.querySelector('p')
                                            if (icon) icon.style.color = '#ffffff'
                                            if (text) text.style.color = '#ffffff'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = '#eff6ff'
                                            e.currentTarget.style.transform = 'scale(1)'
                                            const icon = e.currentTarget.querySelector('svg')
                                            const text = e.currentTarget.querySelector('p')
                                            if (icon) icon.style.color = '#3b82f6'
                                            if (text) text.style.color = '#1f2937'
                                        }}
                                    >
                                        <IconComponent size={32} color="#3b82f6" style={{ margin: '0 auto 0.75rem', transition: 'color 0.3s' }} />
                                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', margin: 0, transition: 'color 0.3s' }}>
                                            {service.name}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Products Grid Section */}
                <section style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                                Our Product Portfolio
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                                All products are live and currently deployed across multiple institutions and businesses
                            </p>
                        </div>

                        <div className="products-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                            gap: '2rem'
                        }}>
                            {products.map((product, index) => {
                                const IconComponent = product.icon
                                return (
                                    <div
                                        key={product.id}
                                        className="product-card"
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
                                            e.currentTarget.style.transform = 'translateY(-8px)'
                                            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)'
                                            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                                        }}
                                    >
                                        {/* Header */}
                                        <div style={{
                                            background: `linear-gradient(135deg, ${product.gradient.includes('blue') ? '#3b82f6' : product.gradient.includes('purple') ? '#a855f7' : product.gradient.includes('green') ? '#10b981' : product.gradient.includes('orange') ? '#f97316' : '#6366f1'}, ${product.gradient.includes('cyan') ? '#06b6d4' : product.gradient.includes('pink') ? '#ec4899' : product.gradient.includes('emerald') ? '#10b981' : product.gradient.includes('red') ? '#ef4444' : '#a855f7'})`,
                                            padding: '2rem',
                                            textAlign: 'center',
                                            color: '#ffffff'
                                        }}>
                                            <IconComponent size={56} style={{ margin: '0 auto 1rem' }} />
                                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                                {product.name}
                                            </h3>
                                            <p style={{ fontSize: '0.875rem', opacity: 0.95, lineHeight: '1.5' }}>
                                                {product.description}
                                            </p>
                                        </div>

                                        {/* Content */}
                                        <div style={{ padding: '1.5rem' }}>
                                            {/* Features */}
                                            <div>
                                                <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                                                    Key Features:
                                                </h4>
                                                <ul style={{ fontSize: '0.8rem', color: '#6b7280', paddingLeft: '1.25rem', margin: 0, lineHeight: '1.8' }}>
                                                    {product.features.map((feature, idx) => (
                                                        <li key={idx} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
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
                            Let's discuss how our products can help streamline your operations
                        </p>
                        <Button
                            onClick={handleGetStarted}
                            style={{
                                backgroundColor: '#ffffff',
                                color: '#1e40af',
                                padding: '1rem 2.5rem',
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                borderRadius: '0.5rem',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)'
                                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 255, 255, 0.3)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            Get Started Today
                        </Button>
                    </div>
                </section>
            </main>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    )
}
