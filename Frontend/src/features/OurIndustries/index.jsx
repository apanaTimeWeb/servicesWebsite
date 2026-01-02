"use client"

import React, { useState } from "react"
import { Star, Briefcase, Award, Users, GraduationCap, TrendingUp, MapPin, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import anishProfile from "../../assets/images/anish_profile.jpg"
import satyamProfile from "../../assets/images/satyam_profile.jpg"
import ujjwalProfile from "../../assets/images/ujjwal_profile.jpg"
import saweraProfile from "../../assets/images/sawera_profile.jpg"
import arihantProfile from "../../assets/images/arihant_profile.jpg"
import priyaProfile from "../../assets/images/priya_profile.jpg"
import shivaniProfile from "../../assets/images/shivani_profile.jpg"
import nikhilProfile from "../../assets/images/nikhil_profile.jpg"
import balGovindProfile from "../../assets/images/balgovind_profile.jpg"
import beautyProfile from "../../assets/images/beauty_profile.jpg"
import shabazProfile from "../../assets/images/Shahbaz.png"
import shivPujanProfile from "../../assets/images/ShivPujan.png"

const teamMembers = [
    {
        id: 1,
        name: "Anish Kumar",
        role: "Senior Data Scientist & Founder",
        image: anishProfile,
        experience: "3+ years",
        expertise: ["Data Analyst", "Data Science", "AI/ML", "Power BI", "Python", "SQL"],
        companies: ["Inuron", "360digitmg", "Radwag", "Apana Time"],
        location: "Uttar Pradesh, India",
        rating: 4.9,
        totalReviews: 1247,
        projectsCompleted: 75,
        studentsTrained: 4200,
        achievements: [
            "Diploma in Generative AI (State Univ. of New York)",
            "Founder of Apana Time",
            "Led 75+ enterprise projects"
        ],
        reviews: [
            {
                student: "Enterprise Solutions Inc",
                rating: 5,
                comment: "Excellent mentor! Helped our team implement advanced data science solutions.",
                date: "2 months ago"
            },
            {
                student: "TechVision Corp",
                rating: 5,
                comment: "Best web development consultant we've worked with. Very practical approach.",
                date: "3 months ago"
            },
            {
                student: "DataFlow Systems",
                rating: 4,
                comment: "Great consulting style and always available for project support.",
                date: "4 months ago"
            }
        ],
        linkedin: "https://linkedin.com/in/anish-kumar-tech",
        email: "Anishkumarstech@gmail.com"
    },
    {
        id: 2,
        name: "Satyam Kumar Chaudhary",
        role: "Data Scientist",
        image: satyamProfile,
        experience: "2+ years",
        expertise: ["Python", "SQL", "PowerBI", "Data Analyst", "ML"],
        companies: ["Apana Time"],
        location: "Bihar, India",
        rating: 4.8,
        totalReviews: 42,
        projectsCompleted: 20,
        studentsTrained: 500,
        achievements: [
            "Completed 20+ projects",
            "Data Science Expert",
            "Mentored 500+ students"
        ],
        reviews: [
            {
                student: "Analytics Pro Ltd",
                rating: 5,
                comment: "Amazing data analysis skills. Delivered comprehensive insights for our business.",
                date: "1 month ago"
            },
            {
                student: "Business Intelligence Corp",
                rating: 5,
                comment: "Very professional and explains complex data concepts clearly to our team.",
                date: "2 months ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/satyam-kumar-0262882a5",
        email: "satyamkumarsprediff@gmail.com"
    },
    {
        id: 3,
        name: "Arihant Jain",
        role: "Data Analyst",
        image: arihantProfile,
        experience: "2 years",
        expertise: ["Data Analyst", "Power BI", "Python", "SQL"],
        companies: ["Apana Time"],
        location: "Uttar Pradesh, India",
        rating: 4.5,
        totalReviews: 47,
        projectsCompleted: 20,
        studentsTrained: 150,
        achievements: [
            "Data Analysis Expert",
            "Power BI Specialist",
            "Mentored 150+ students"
        ],
        reviews: [
            {
                student: "DataTech Solutions",
                rating: 5,
                comment: "Great insights on data analysis for our enterprise projects.",
                date: "2 weeks ago"
            },
            {
                student: "PowerBI Consulting Group",
                rating: 4,
                comment: "Very helpful with SQL optimization and database management.",
                date: "1 month ago"
            }
        ],
        linkedin: "http://www.linkedin.com/in/arihantjain5010",
        email: "jainarihant0102@gmail.com"
    },
    {
        id: 4,
        name: "Sawera Nadeem",
        role: "Mobile App Developer",
        image: saweraProfile,
        experience: "3+ years",
        expertise: ["React Native", "Flutter", "iOS", "Android"],
        companies: ["Apana Time"],
        location: "Hyderabad, India",
        rating: 4.7,
        totalReviews: 83,
        projectsCompleted: 30,
        studentsTrained: 200,
        achievements: [
            "Cross-platform Expert",
            "Published 30+ apps",
            "Mentored 200+ students"
        ],
        reviews: [
            {
                student: "MobileFirst Technologies",
                rating: 5,
                comment: "Great mobile development expertise for our cross-platform projects!",
                date: "3 weeks ago"
            },
            {
                student: "AppDev Solutions",
                rating: 5,
                comment: "Explained Flutter architecture very well for our development team.",
                date: "2 months ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/sawera-nadeem-b6b8702b3",
        email: "saweranadeem567@gmail.com"
    },
    {
        id: 5,
        name: "Priya Pramod Dakhore",
        role: "Data Analyst",
        image: priyaProfile,
        experience: "3+ years",
        expertise: ["Python", "SQL", "Flask", "Power BI"],
        companies: ["Apana Time"],
        location: "Maharashtra, India",
        rating: 4.7,
        totalReviews: 103,
        projectsCompleted: 25,
        studentsTrained: 300,
        achievements: [
            "Data Analysis Specialist",
            "Python Expert",
            "Mentored 300+ students"
        ],
        reviews: [
            {
                student: "DataAnalytics Pro",
                rating: 5,
                comment: "Excellent SQL and Power BI implementation for our reporting systems.",
                date: "3 weeks ago"
            },
            {
                student: "Python Solutions Inc",
                rating: 5,
                comment: "Great consulting approach for Python-based data processing.",
                date: "1 month ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/priyadakhore",
        email: "priyadakhore08@gmail.com"
    },
    {
        id: 6,
        name: "Ujjwal Kumar Singh",
        role: "Management Consultant",
        image: ujjwalProfile,
        experience: "2 years",
        expertise: ["Management", "Operations", "Team Leadership", "Strategy"],
        companies: ["Apana Time"],
        location: "Bihar, India",
        rating: 4.6,
        totalReviews: 49,
        projectsCompleted: 10,
        studentsTrained: 250,
        achievements: [
            "Project Management Professional",
            "Led operational strategy",
            "Team growth specialist"
        ],
        reviews: [
            {
                student: "Strategic Management Corp",
                rating: 5,
                comment: "Excellent leadership and project management expertise for our operations.",
                date: "2 weeks ago"
            },
            {
                student: "Business Growth Partners",
                rating: 5,
                comment: "Great consultant for strategic planning and team development.",
                date: "1 month ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/ujjwal-kumar-singh-4532581a6",
        email: "ujjwal150212@gmail.com"
    },
    {
        id: 7,
        name: "Shivani Nagar",
        role: "Full Stack Developer",
        image: shivaniProfile,
        experience: "3+ years",
        expertise: ["React", "Node.js", "TypeScript", "AWS"],
        companies: ["Apana Time"],
        location: "Gurgaon, India",
        rating: 4.8,
        totalReviews: 79,
        projectsCompleted: 30,
        studentsTrained: 200,
        achievements: [
            "Full Stack Expert",
            "Cloud Architecture",
            "Mentored 200+ students"
        ],
        reviews: [
            {
                student: "CloudTech Enterprises",
                rating: 5,
                comment: "Expert in MERN stack development for our enterprise applications.",
                date: "2 weeks ago"
            },
            {
                student: "AWS Solutions Group",
                rating: 5,
                comment: "Great understanding of AWS services for our cloud infrastructure.",
                date: "1 month ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/shivaninagar28",
        github: "https://github.com"
    },
    {
        id: 8,
        name: "Nikhil Kumar",
        role: "Business Analyst",
        image: nikhilProfile,
        experience: "3 years",
        expertise: ["Python", "Excel", "Power BI", "PowerPoint", "SQL"],
        companies: ["Apana Time", "Physics Wallah"],
        location: "Uttar Pradesh, India",
        rating: 4.8,
        totalReviews: 62,
        projectsCompleted: 30,
        studentsTrained: 500,
        achievements: [
            "Business Analysis Expert",
            "Data Visualization Specialist",
            "Process Optimization"
        ],
        reviews: [
            {
                student: "Business Intelligence Ltd",
                rating: 5,
                comment: "Excellent insights into data analysis for our quarterly business reviews.",
                date: "1 week ago"
            },
            {
                student: "PowerBI Experts Inc",
                rating: 5,
                comment: "Great Power BI dashboard development for our analytics team.",
                date: "3 weeks ago"
            }
        ],
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
    {
        id: 9,
        name: "Bal Govind Maurya (Samar)",
        role: "Mobile App Developer",
        image: balGovindProfile,
        experience: "3+ years",
        expertise: ["React Native", "Flutter", "iOS", "Android"],
        companies: ["Apana Time"],
        location: "Uttar Pradesh, India",
        rating: 4.7,
        totalReviews: 146,
        projectsCompleted: 40,
        studentsTrained: 500,
        achievements: [
            "Cross-platform Expert",
            "Published 30+ apps",
            "Mentored 200+ students"
        ],
        reviews: [
            {
                student: "MobileTech Solutions",
                rating: 5,
                comment: "Great experience with React Native development for our mobile platform.",
                date: "2 weeks ago"
            },
            {
                student: "AppStore Consulting",
                rating: 4,
                comment: "Very helpful with Play Store deployment and app optimization.",
                date: "1 month ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/bal-govind-maurya-samar-9b8231218/",
        email: "govindbal866@gmail.com"
    },
    {
        id: 10,
        name: "Beauty Kumari",
        role: "Data Analyst",
        image: beautyProfile,
        experience: "2 years",
        expertise: ["Data Analyst", "Power BI", "Python", "SQL"],
        companies: ["Apana Time"],
        location: "Delhi, India",
        rating: 4.5,
        totalReviews: 77,
        projectsCompleted: 30,
        studentsTrained: 150,
        achievements: [
            "Data Analysis Expert",
            "Power BI Specialist",
            "Mentored 150+ students"
        ],
        reviews: [
            {
                student: "DataViz Corporation",
                rating: 5,
                comment: "Excellent Power BI visualization skills for our business intelligence needs.",
                date: "3 weeks ago"
            },
            {
                student: "SQL Experts Group",
                rating: 4,
                comment: "Very helpful with SQL optimization and database performance tuning.",
                date: "1 month ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/beauty-kumari-814615325",
        email: "sharmabeauty427@gmail.com"
    },
    {
        id: 11,
        name: "MD Shahbaz",
        role: "Software Developer",
        image: shabazProfile,
        experience: "3+ years",
        expertise: ["Data Analysis", "Python", "SQL", "Power BI", "Excel"],
        companies: ["Apana Time"],
        location: "Delhi, India",
        rating: 4.6,
        totalReviews: 32,
        projectsCompleted: 25,
        studentsTrained: 300,
        achievements: [
            "Data Analysis Expert",
            "Business Intelligence Specialist",
            "Mentored 300+ students"
        ],
        reviews: [
            {
                student: "TechCorp Solutions",
                rating: 5,
                comment: "Outstanding data analysis and insights. Delivered exceptional results for our quarterly reports.",
                date: "2 weeks ago"
            },
            {
                student: "Digital Innovations Ltd",
                rating: 5,
                comment: "Professional approach and excellent Power BI dashboard implementations.",
                date: "1 month ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/mdshahbaz1510?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "mdshahbaz@gmail.com"
    },
    {
        id: 12,
        name: "Shiv Pujan Kumar",
        role: "Full Stack Software Developer",
        image: shivPujanProfile,
        experience: "3+ years",
        expertise: ["React", "Node.js", "JavaScript", "MongoDB", "Express", "Full Stack"],
        companies: ["Apana Time"],
        location: "Bangalore, India",
        rating: 4.7,
        totalReviews: 117,
        projectsCompleted: 35,
        studentsTrained: 400,
        achievements: [
            "Full Stack Development Expert",
            "MERN Stack Specialist",
            "Mentored 400+ students"
        ],
        reviews: [
            {
                student: "WebDev Solutions Inc",
                rating: 5,
                comment: "Outstanding full stack development skills. Delivered robust web applications for our clients.",
                date: "1 week ago"
            },
            {
                student: "TechStack Enterprises",
                rating: 5,
                comment: "Professional MERN stack implementation and excellent code quality.",
                date: "3 weeks ago"
            }
        ],
        linkedin: "https://www.linkedin.com/in/shiv-p-kumar-008003198/",
        email: "sahil.8228053857@gmail.com"
    }
]

const expertiseAreas = ["All", "Web Development", "Mobile Development", "Data Science", "AI/ML", "Power BI", "Python"]

export default function OurIndustriesPage() {
    const [selectedExpertise, setSelectedExpertise] = useState("All")
    const [expandedMember, setExpandedMember] = useState(null)

    const getCategoryKeywords = (category) => {
        switch (category) {
            case "Web Development":
                return ["Web", "Full Stack", "React", "Node.js", "Frontend", "Backend", "MERN", "TypeScript"]
            case "Mobile Development":
                return ["Mobile", "Android", "iOS", "Flutter", "React Native"]
            case "Data Science":
                return ["Data Science", "Data Scientist", "Machine Learning", "Deep Learning", "NLP"]
            case "AI/ML":
                return ["AI", "ML", "Machine Learning", "Deep Learning", "NLP", "Artificial Intelligence"]
            case "Power BI":
                return ["Power BI", "Business Analyst", "Data visualization"]
            case "Python":
                return ["Python", "Django", "Flask"]
            default:
                return [category]
        }
    }

    const filteredMembers = selectedExpertise === "All"
        ? teamMembers
        : teamMembers.filter(member => {
            const keywords = getCategoryKeywords(selectedExpertise)
            const searchString = `${member.role} ${member.expertise.join(' ')}`.toLowerCase()
            return keywords.some(keyword => searchString.includes(keyword.toLowerCase()))
        })

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
                            Industry veterans with years of experience from top companies.
                            Learn from the best and accelerate your tech career.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section style={{ padding: '3rem 0', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3b82f6' }}>27+</div>
                                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Expert Instructors</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#8b5cf6' }}>4750+</div>
                                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Students Trained</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#10b981' }}>140+</div>
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
                                        {member.image ? (
                                            <div style={{
                                                width: '120px',
                                                height: '120px',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                margin: '0 auto 1rem',
                                                border: '4px solid rgba(255, 255, 255, 0.3)'
                                            }}>
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    style={{ 
                                                        width: '100%', 
                                                        height: '100%', 
                                                        objectFit: 'cover',
                                                        objectPosition: member.id === 11 ? 'center top' : 'center center'
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{member.avatar}</div>
                                        )}
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
                                            {expandedMember === member.id ? 'Hide Reviews' : 'View Client Reviews'}
                                        </Button>

                                        {/* Reviews Section */}
                                        {expandedMember === member.id && (
                                            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
                                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <Users size={16} />
                                                    Client Reviews
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
                                            {member.email ? (
                                                <a href={`mailto:${member.email}`} style={{ color: '#ea4335' }}>
                                                    <Mail size={20} />
                                                </a>
                                            ) : (
                                                <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
                                                    <Github size={20} />
                                                </a>
                                            )}
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
