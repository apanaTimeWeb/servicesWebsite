"use client"

import React, { useState } from "react"
import { Star, Briefcase, Award, Users, GraduationCap, TrendingUp, MapPin, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Senior Web Developer",
        avatar: "👨‍💻",
        experience: "8+ years",
        expertise: ["React", "Node.js", "TypeScript", "AWS"],
        companies: ["Google", "Amazon", "Startup XYZ"],
        location: "Bangalore, India",
        rating: 4.9,
        totalReviews: 127,
        projectsCompleted: 150,
        studentsTrained: 500,
        achievements: [
            "AWS Certified Solutions Architect",
            "Google Cloud Professional",
            "Led 20+ enterprise projects"
        ],
        reviews: [
            {
                student: "Priya Sharma",
                rating: 5,
                comment: "Excellent mentor! Helped me land my first job at a top tech company.",
                date: "2 months ago"
            },
            {
                student: "Amit Patel",
                rating: 5,
                comment: "Best web development instructor I've ever had. Very practical approach.",
                date: "3 months ago"
            },
            {
                student: "Sneha Reddy",
                rating: 4,
                comment: "Great teaching style and always available for doubt clearing.",
                date: "4 months ago"
            }
        ],
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
    {
        id: 2,
        name: "Priya Verma",
        role: "Mobile App Developer",
        avatar: "👩‍💻",
        experience: "6+ years",
        expertise: ["React Native", "Flutter", "iOS", "Android"],
        companies: ["Microsoft", "Samsung", "Tech Innovations"],
        location: "Hyderabad, India",
        rating: 4.8,
        totalReviews: 98,
        projectsCompleted: 120,
        studentsTrained: 380,
        achievements: [
            "Google Mobile Web Specialist",
            "Published 50+ apps on Play Store",
            "Flutter Expert Certification"
        ],
        reviews: [
            {
                student: "Rahul Gupta",
                rating: 5,
                comment: "Amazing mobile development skills. Learned so much about Flutter!",
                date: "1 month ago"
            },
            {
                student: "Anita Singh",
                rating: 5,
                comment: "Very patient and explains complex concepts simply.",
                date: "2 months ago"
            }
        ],
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
    {
        id: 3,
        name: "Vikram Singh",
        role: "Data Scientist",
        avatar: "🧑‍🔬",
        experience: "7+ years",
        expertise: ["Python", "Machine Learning", "TensorFlow", "Big Data"],
        companies: ["IBM", "Accenture", "Data Corp"],
        location: "Pune, India",
        rating: 4.9,
        totalReviews: 145,
        projectsCompleted: 95,
        studentsTrained: 420,
        achievements: [
            "PhD in Machine Learning",
            "Published 15+ research papers",
            "Kaggle Grandmaster"
        ],
        reviews: [
            {
                student: "Karan Mehta",
                rating: 5,
                comment: "Best data science mentor! Got placed at FAANG company.",
                date: "2 weeks ago"
            },
            {
                student: "Divya Joshi",
                rating: 5,
                comment: "Incredible depth of knowledge in ML and AI.",
                date: "1 month ago"
            },
            {
                student: "Rohan Das",
                rating: 4,
                comment: "Very thorough and practical approach to data science.",
                date: "3 months ago"
            }
        ],
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
    {
        id: 4,
        name: "Ananya Iyer",
        role: "UI/UX Designer",
        avatar: "🎨",
        experience: "5+ years",
        expertise: ["Figma", "Adobe XD", "User Research", "Prototyping"],
        companies: ["Adobe", "Flipkart", "Design Studio"],
        location: "Mumbai, India",
        rating: 4.7,
        totalReviews: 82,
        projectsCompleted: 200,
        studentsTrained: 290,
        achievements: [
            "Adobe Certified Expert",
            "Won 5+ design awards",
            "Designed 100+ digital products"
        ],
        reviews: [
            {
                student: "Sanjay Kumar",
                rating: 5,
                comment: "Transformed my design thinking completely!",
                date: "3 weeks ago"
            },
            {
                student: "Meera Nair",
                rating: 5,
                comment: "Best UI/UX mentor I could ask for.",
                date: "2 months ago"
            }
        ],
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
    {
        id: 5,
        name: "Arjun Malhotra",
        role: "Python Developer",
        avatar: "🐍",
        experience: "6+ years",
        expertise: ["Python", "Django", "Flask", "FastAPI"],
        companies: ["PayPal", "Uber", "Fintech Solutions"],
        location: "Delhi, India",
        rating: 4.8,
        totalReviews: 103,
        projectsCompleted: 130,
        studentsTrained: 350,
        achievements: [
            "Python Software Foundation Member",
            "Open source contributor",
            "Built 50+ production APIs"
        ],
        reviews: [
            {
                student: "Pooja Rao",
                rating: 5,
                comment: "Excellent Python skills and teaching methodology.",
                date: "1 month ago"
            },
            {
                student: "Aditya Sharma",
                rating: 4,
                comment: "Very knowledgeable about backend development.",
                date: "2 months ago"
            }
        ],
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
    {
        id: 6,
        name: "Kavita Desai",
        role: "AI/ML Engineer",
        avatar: "🤖",
        experience: "7+ years",
        expertise: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
        companies: ["NVIDIA", "Intel", "AI Research Lab"],
        location: "Bangalore, India",
        rating: 4.9,
        totalReviews: 156,
        projectsCompleted: 85,
        studentsTrained: 410,
        achievements: [
            "Masters in AI from IIT",
            "15+ patents in AI/ML",
            "Speaker at AI conferences"
        ],
        reviews: [
            {
                student: "Harsh Gupta",
                rating: 5,
                comment: "Mind-blowing AI expertise. Learned advanced ML techniques!",
                date: "2 weeks ago"
            },
            {
                student: "Neha Kapoor",
                rating: 5,
                comment: "Best AI mentor ever! Very supportive and knowledgeable.",
                date: "1 month ago"
            }
        ],
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    }
]

const expertiseAreas = ["All", "Web Development", "Mobile Development", "Data Science", "AI/ML", "UI/UX Design", "Python"]

export default function OurIndustriesPage() {
    const [selectedExpertise, setSelectedExpertise] = useState("All")
    const [expandedMember, setExpandedMember] = useState(null)

    const filteredMembers = selectedExpertise === "All"
        ? teamMembers
        : teamMembers.filter(member =>
            member.role.toLowerCase().includes(selectedExpertise.toLowerCase()) ||
            member.expertise.some(exp => exp.toLowerCase().includes(selectedExpertise.toLowerCase()))
        )

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                size={16}
                fill={index < Math.floor(rating) ? "#fbbf24" : "none"}
                stroke={index < rating ? "#fbbf24" : "#d1d5db"}
            />
        ))
    }

    return (
        <>
            <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .team-card { animation: fadeInUp 0.6s ease-out forwards; }
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr !important; }
          .filter-buttons { flex-wrap: wrap !important; }
        }
      `}</style>

            <main style={{ paddingTop: '64px', minHeight: '100vh' }}>
                {/* Hero Section */}
                <section style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
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
                            Meet Our Expert Team
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto 2rem' }}>
                            industry veterans with years of experience from top companies.
                            Learn from the best and accelerate your tech career.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section style={{ padding: '3rem 0', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3b82f6' }}>6+</div>
                                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Expert Instructors</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#8b5cf6' }}>2350+</div>
                                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Students Trained</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#10b981' }}>780+</div>
                                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Projects Completed</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b' }}>4.8★</div>
                                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Average Rating</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filter Section */}
                <section style={{ padding: '2rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div className="filter-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {expertiseAreas.map((area) => (
                                <button
                                    key={area}
                                    onClick={() => setSelectedExpertise(area)}
                                    style={{
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '9999px',
                                        border: selectedExpertise === area ? 'none' : '1px solid #e5e7eb',
                                        backgroundColor: selectedExpertise === area ? '#3b82f6' : '#ffffff',
                                        color: selectedExpertise === area ? '#ffffff' : '#6b7280',
                                        cursor: 'pointer',
                                        fontWeight: '500',
                                        fontSize: '0.875rem',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    {area}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Members Grid */}
                <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div className="team-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                            gap: '2rem'
                        }}>
                            {filteredMembers.map((member, index) => (
                                <div
                                    key={member.id}
                                    className="team-card"
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
                                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                        padding: '2rem',
                                        textAlign: 'center',
                                        color: '#ffffff'
                                    }}>
                                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{member.avatar}</div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                            {member.name}
                                        </h3>
                                        <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>{member.role}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', marginTop: '0.75rem' }}>
                                            {renderStars(member.rating)}
                                            <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem' }}>
                                                {member.rating} ({member.totalReviews} reviews)
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div style={{ padding: '1.5rem' }}>
                                        {/* Experience & Location */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Briefcase size={16} />
                                                <span>{member.experience}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <MapPin size={16} />
                                                <span>{member.location}</span>
                                            </div>
                                        </div>

                                        {/* Stats Grid */}
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                            gap: '1rem',
                                            marginBottom: '1.5rem',
                                            padding: '1rem',
                                            backgroundColor: '#f9fafb',
                                            borderRadius: '0.5rem'
                                        }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6' }}>{member.projectsCompleted}</div>
                                                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Projects</div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>{member.studentsTrained}</div>
                                                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Students</div>
                                            </div>
                                        </div>

                                        {/* Companies */}
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Briefcase size={14} />
                                                Companies:
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                {member.companies.map((company, idx) => (
                                                    <span
                                                        key={idx}
                                                        style={{
                                                            fontSize: '0.75rem',
                                                            backgroundColor: '#dbeafe',
                                                            color: '#1e40af',
                                                            padding: '0.25rem 0.75rem',
                                                            borderRadius: '9999px',
                                                            fontWeight: '500'
                                                        }}
                                                    >
                                                        {company}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Expertise */}
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <TrendingUp size={14} />
                                                Expertise:
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                {member.expertise.map((skill, idx) => (
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

                                        {/* Achievements */}
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Award size={14} />
                                                Achievements:
                                            </div>
                                            <ul style={{ fontSize: '0.75rem', color: '#6b7280', paddingLeft: '1.25rem', margin: 0 }}>
                                                {member.achievements.map((achievement, idx) => (
                                                    <li key={idx} style={{ marginBottom: '0.25rem' }}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Reviews Toggle */}
                                        <Button
                                            onClick={() => setExpandedMember(expandedMember === member.id ? null : member.id)}
                                            style={{
                                                width: '100%',
                                                backgroundColor: '#3b82f6',
                                                color: '#ffffff',
                                                padding: '0.75rem',
                                                borderRadius: '0.5rem',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontWeight: '600',
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            {expandedMember === member.id ? 'Hide Reviews' : 'View Student Reviews'}
                                        </Button>

                                        {/* Reviews Section */}
                                        {expandedMember === member.id && (
                                            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
                                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <GraduationCap size={16} />
                                                    Student Reviews
                                                </div>
                                                {member.reviews.map((review, idx) => (
                                                    <div key={idx} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: idx < member.reviews.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#1f2937' }}>{review.student}</div>
                                                            <div style={{ fontSize: '0.625rem', color: '#9ca3af' }}>{review.date}</div>
                                                        </div>
                                                        <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.5rem' }}>
                                                            {renderStars(review.rating)}
                                                        </div>
                                                        <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: 0 }}>{review.comment}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Social Links */}
                                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5' }}>
                                                <Linkedin size={20} />
                                            </a>
                                            <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
