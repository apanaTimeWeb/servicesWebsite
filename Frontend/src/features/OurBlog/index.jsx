"use client"

import React, { useState } from "react"
import { Calendar, User, Clock, ArrowRight, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
    {
        id: 1,
        title: "The Future of AI in Web Development",
        excerpt: "Explore how artificial intelligence is revolutionizing the way we build and design websites, from automated coding to intelligent user experiences.",
        content: "Full article content here...",
        author: "Anish Kumar",
        date: "2024-01-15",
        readTime: "5 min read",
        category: "AI/ML",
        tags: ["AI", "Web Development", "Technology"],
        image: "/api/placeholder/600/300"
    },
    {
        id: 2,
        title: "MERN Stack Best Practices for 2024",
        excerpt: "Learn the latest best practices for building scalable applications with MongoDB, Express.js, React, and Node.js.",
        content: "Full article content here...",
        author: "Shiv Pujan Kumar",
        date: "2024-01-10",
        readTime: "8 min read",
        category: "Web Development",
        tags: ["MERN", "React", "Node.js"],
        image: "/api/placeholder/600/300"
    },
    {
        id: 3,
        title: "Data Science Career Guide 2024",
        excerpt: "Complete roadmap to becoming a successful data scientist, including skills, tools, and career opportunities.",
        content: "Full article content here...",
        author: "Satyam Kumar Chaudhary",
        date: "2024-01-05",
        readTime: "12 min read",
        category: "Data Science",
        tags: ["Data Science", "Career", "Python"],
        image: "/api/placeholder/600/300"
    },
    {
        id: 4,
        title: "Mobile App Development Trends",
        excerpt: "Discover the latest trends in mobile app development, from cross-platform frameworks to emerging technologies.",
        content: "Full article content here...",
        author: "Sawera Nadeem",
        date: "2024-01-01",
        readTime: "6 min read",
        category: "Mobile Development",
        tags: ["Mobile", "React Native", "Flutter"],
        image: "/api/placeholder/600/300"
    }
]

const categories = ["All", "Web Development", "Data Science", "AI/ML", "Mobile Development"]

export default function OurBlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <>
            <style>{`
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                .blog-card { animation: fadeInUp 0.6s ease-out forwards; }
                @media (max-width: 768px) {
                    .blog-grid { grid-template-columns: 1fr !important; }
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
                            Our Blog
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto 2rem' }}>
                            Stay updated with the latest insights, tutorials, and industry trends from our expert team.
                        </p>
                    </div>
                </section>

                {/* Search and Filter Section */}
                <section style={{ padding: '2rem 0', backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Search Bar */}
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ position: 'relative', maxWidth: '400px', width: '100%' }}>
                                    <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 1rem 0.75rem 3rem',
                                            borderRadius: '9999px',
                                            border: '1px solid #e5e7eb',
                                            fontSize: '0.875rem',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div className="filter-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        style={{
                                            padding: '0.5rem 1.5rem',
                                            borderRadius: '9999px',
                                            border: selectedCategory === category ? 'none' : '1px solid #e5e7eb',
                                            backgroundColor: selectedCategory === category ? '#3b82f6' : '#ffffff',
                                            color: selectedCategory === category ? '#ffffff' : '#6b7280',
                                            cursor: 'pointer',
                                            fontWeight: '500',
                                            fontSize: '0.875rem',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div className="blog-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                            gap: '2rem'
                        }}>
                            {filteredPosts.map((post, index) => (
                                <article
                                    key={post.id}
                                    className="blog-card"
                                    style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '1rem',
                                        border: '1px solid #e5e7eb',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s',
                                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                        animationDelay: `${index * 0.1}s`,
                                        opacity: 0,
                                        cursor: 'pointer'
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
                                    {/* Article Image */}
                                    <div style={{ height: '200px', backgroundColor: '#f3f4f6', position: 'relative' }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: '1rem',
                                            right: '1rem',
                                            backgroundColor: '#3b82f6',
                                            color: '#ffffff',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '9999px',
                                            fontSize: '0.75rem',
                                            fontWeight: '500'
                                        }}>
                                            {post.category}
                                        </div>
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '4rem',
                                            color: '#9ca3af'
                                        }}>
                                            📝
                                        </div>
                                    </div>

                                    {/* Article Content */}
                                    <div style={{ padding: '1.5rem' }}>
                                        {/* Meta Info */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '0.75rem', color: '#6b7280' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                <User size={14} />
                                                <span>{post.author}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                <Calendar size={14} />
                                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                <Clock size={14} />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 style={{
                                            fontSize: '1.25rem',
                                            fontWeight: '600',
                                            marginBottom: '0.75rem',
                                            color: '#1f2937',
                                            lineHeight: '1.4'
                                        }}>
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p style={{
                                            color: '#6b7280',
                                            fontSize: '0.875rem',
                                            lineHeight: '1.6',
                                            marginBottom: '1rem'
                                        }}>
                                            {post.excerpt}
                                        </p>

                                        {/* Tags */}
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                            {post.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    style={{
                                                        fontSize: '0.75rem',
                                                        backgroundColor: '#eff6ff',
                                                        color: '#3b82f6',
                                                        padding: '0.25rem 0.75rem',
                                                        borderRadius: '9999px',
                                                        fontWeight: '500',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.25rem'
                                                    }}
                                                >
                                                    <Tag size={10} />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Read More Button */}
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
                                            Read More
                                            <ArrowRight size={16} />
                                        </Button>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {filteredPosts.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                                <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>No articles found</p>
                                <p style={{ fontSize: '0.875rem' }}>Try adjusting your search or filter criteria</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}