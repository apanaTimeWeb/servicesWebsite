"use client"

import React from "react"
import { VideoIcon, Mail, Phone, MapPin, Calendar, Users, TrendingUp, Award, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

const careerRoles = [
    {
        id: 1,
        title: "Web Developer",
        icon: "🌐",
        description: "Build modern, responsive websites and web applications using cutting-edge technologies",
        skills: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "App Developer",
        icon: "📱",
        description: "Create native and cross-platform mobile applications for iOS and Android",
        skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"]
    },
    {
        id: 3,
        title: "Data Analytics",
        icon: "📊",
        description: "Transform raw data into actionable insights using advanced analytics techniques",
        skills: ["Python", "SQL", "Tableau", "Excel", "Statistics"]
    },
    {
        id: 4,
        title: "AI/ML Engineer",
        icon: "🤖",
        description: "Develop intelligent systems using machine learning and artificial intelligence",
        skills: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP"]
    },
    {
        id: 5,
        title: "Data Scientist",
        icon: "🔬",
        description: "Extract insights from complex datasets using statistical analysis and ML",
        skills: [" Python", "R", "Machine Learning", "Big Data", "Deep Learning"]
    },
    {
        id: 6,
        title: "Power BI Developer",
        icon: "📈",
        description: "Design and implement business intelligence solutions and interactive dashboards",
        skills: ["Power BI", "DAX", "SQL", "Azure", "Data Modeling"]
    },
    {
        id: 7,
        title: "Python Developer",
        icon: "🐍",
        description: "Build scalable backend systems, automation tools, and data pipelines",
        skills: ["Python", "Django", "Flask", "FastAPI", "PostgreSQL"]
    },
    {
        id: 8,
        title: "UI/UX Designer",
        icon: "🎨",
        description: "Design beautiful, intuitive user interfaces and exceptional user experiences",
        skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"]
    }
]

const benefits = [
    {
        icon: TrendingUp,
        title: "Career Growth",
        description: "Fast-track your career with mentorship and expert guidance"
    },
    {
        icon: Users,
        title: "Expert Guidance",
        description: "Learn from experienced professionals in the industry"
    },
    {
        icon: Award,
        title: "Learning Resources",
        description: "Access to courses, certifications, and training materials"
    },
    {
        icon: Briefcase,
        title: "Career Planning",
        description: "Personalized career roadmaps and guidance sessions"
    }
]

export default function CareerPage() {
    const googleMeetLink = "https://meet.google.com/your-meet-link" // Replace with actual Google Meet link

    const handleCareerGuidance = () => {
        const startDate = new Date()
        startDate.setDate(startDate.getDate() + 1)
        startDate.setHours(10, 0, 0, 0)
        
        const endDate = new Date(startDate)
        endDate.setHours(11, 0, 0, 0)
        
        const formatDate = (date) => {
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
        }
        
        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Career Guidance Session - ApanaTime')}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent('Career guidance session at ApanaTime. We will discuss career opportunities, required skills, and growth path.')}&location=${encodeURIComponent('Google Meet (Link will be shared)')}&add=15ac975d076024c44f69183ada4eb9fd9986435f639591a8acad888b54ce1a14@group.calendar.google.com`
        window.open(googleCalendarUrl, "_blank")
    }

    const handleScheduleMeeting = (role) => {
        const startDate = new Date()
        startDate.setDate(startDate.getDate() + 1)
        startDate.setHours(10, 0, 0, 0)
        
        const endDate = new Date(startDate)
        endDate.setHours(11, 0, 0, 0)
        
        const formatDate = (date) => {
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
        }
        
        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Career Guidance Session - ${role}`)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(`Career guidance session for ${role} position at ApanaTime. We'll discuss career opportunities, required skills, and growth path.`)}&location=${encodeURIComponent('Google Meet (Link will be shared)')}&add=15ac975d076024c44f69183ada4eb9fd9986435f639591a8acad888b54ce1a14@group.calendar.google.com`
        window.open(googleCalendarUrl, "_blank")
    }

    return (
        <>
            <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .career-card { animation: fadeInUp 0.6s ease-out forwards; }
        .benefit-card { animation: fadeIn 0.8s ease-out forwards; }
        @media (max-width: 768px) {
          .career-grid { grid-template-columns: 1fr !important; }
          .benefit-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

            <main style={{ paddingTop: '64px', minHeight: '100vh' }}>
                {/* Hero Section */}
                <section style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                            Explore Your Career Path
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto 2rem' }}>
                            Get expert guidance on various tech careers at ApanaTime.
                            Discover which path is right for you and connect with our career counselors.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button
                                onClick={handleCareerGuidance}
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#667eea',
                                    padding: '1rem 2rem',
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    borderRadius: '0.5rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <VideoIcon size={20} />
                                Schedule Career Guidance
                            </Button>
                            <Button
                                onClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}
                                style={{
                                    backgroundColor: 'transparent',
                                    color: '#ffffff',
                                    padding: '1rem 2rem',
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    borderRadius: '0.5rem',
                                    border: '2px solid #ffffff',
                                    cursor: 'pointer'
                                }}
                            >
                                Explore Career Paths
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                                Why Get Career Guidance from ApanaTime?
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                                We help you make informed decisions about your tech career
                            </p>
                        </div>

                        <div className="benefit-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem'
                        }}>
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon
                                return (
                                    <div
                                        key={index}
                                        className="benefit-card"
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
                                            backgroundColor: '#eff6ff',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 1.5rem'
                                        }}>
                                            <IconComponent size={28} color="#3b82f6" />
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                                            {benefit.title}
                                        </h3>
                                        <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.6' }}>
                                            {benefit.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Career Paths */}
                <section id="opportunities" style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                                Career Paths to Explore
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                                Discover various tech career opportunities and get expert guidance
                            </p>
                        </div>

                        <div className="career-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2rem'
                        }}>
                            {careerRoles.map((role, index) => (
                                <div
                                    key={role.id}
                                    className="career-card"
                                    style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '1rem',
                                        border: '1px solid #e5e7eb',
                                        padding: '2rem',
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
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{role.icon}</div>

                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                                        {role.title}
                                    </h3>

                                    <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                        {role.description}
                                    </p>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <p style={{ fontSize: '0.75rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                                            Key Skills:
                                        </p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {role.skills.map((skill, idx) => (
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
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        onClick={() => handleScheduleMeeting(role.title)}
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#3b82f6',
                                            color: '#ffffff',
                                            padding: '0.75rem 1.5rem',
                                            borderRadius: '0.5rem',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontWeight: '600',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        <Calendar size={16} />
                                        Schedule a Meeting
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Career Guidance CTA */}
                <section style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#ffffff',
                    padding: '4rem 0'
                }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
                        <VideoIcon size={48} style={{ margin: '0 auto 1.5rem', display: 'block' }} />
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            Need Career Guidance?
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Connect with our experts via Google Meet for personalized career counseling
                            and get clarity on your tech career path
                        </p>
                        <Button
                            onClick={handleCareerGuidance}
                            style={{
                                backgroundColor: '#ffffff',
                                color: '#667eea',
                                padding: '1rem 2.5rem',
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                borderRadius: '0.5rem',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}
                        >
                            <VideoIcon size={20} />
                            Schedule Your Session
                        </Button>
                    </div>
                </section>

                {/* Contact Information */}
                <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                                Get In Touch
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
                                Have questions? Feel free to reach out to our team
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '2rem',
                            maxWidth: '900px',
                            margin: '0 auto'
                        }}>
                            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                                <Mail size={32} color="#3b82f6" style={{ margin: '0 auto 1rem', display: 'block' }} />
                                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    Email Us
                                </h4>
                                <a href="mailto:info@apanatime.in" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.875rem' }}>
                                    info@apanatime.in
                                </a>
                            </div>

                            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                                <Phone size={32} color="#3b82f6" style={{ margin: '0 auto 1rem', display: 'block' }} />
                                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    Call Us
                                </h4>
                                <a href="tel:+917080404594" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.875rem' }}>
                                    +91 7080404594
                                </a>
                            </div>

                            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                                <MapPin size={32} color="#3b82f6" style={{ margin: '0 auto 1rem', display: 'block' }} />
                                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    Visit Us
                                </h4>
                                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                                    Gorakhpur, UP, India
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
