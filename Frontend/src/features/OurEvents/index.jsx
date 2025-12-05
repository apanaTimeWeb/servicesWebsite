"use client"

import React from "react"
import { Link } from "react-router-dom"
import { Calendar, Users, Video, MapPin, Clock, ArrowRight, Mic2, Presentation, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
    {
        id: 1,
        type: "Seminar",
        title: "Future of AI in Business",
        date: "March 15, 2024",
        time: "10:00 AM - 2:00 PM",
        location: "Tech Hub Auditorium, Bangalore",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=500&fit=crop",
        description: "Join industry leaders to discuss the transformative power of Artificial Intelligence in modern business landscapes.",
        icon: Mic2,
        gradient: "from-blue-500 to-indigo-500"
    },
    {
        id: 2,
        type: "Webinar",
        title: "Mastering Cloud Architecture",
        date: "March 20, 2024",
        time: "3:00 PM - 5:00 PM",
        location: "Online (Zoom)",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
        description: "A deep dive into building scalable and resilient cloud infrastructures with AWS and Azure experts.",
        icon: Laptop,
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: 3,
        type: "Workshop",
        title: "Full Stack Development Bootcamp",
        date: "April 5-7, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "ApanaTime Campus, Hyderabad",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop",
        description: "Hands-on workshop covering the latest full-stack technologies including React, Node.js, and MongoDB.",
        icon: Presentation,
        gradient: "from-orange-500 to-red-500"
    }
]

export default function OurEventsPage() {
    return (
        <>
            <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .event-card { animation: fadeInUp 0.6s ease-out forwards; }
        .hero-animate { animation: fadeIn 1s ease-out forwards; }
      `}</style>

            <main style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
                {/* Hero Section */}
                <section style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
                    color: '#ffffff',
                    padding: '6rem 0',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&h=900&fit=crop")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.1
                    }} />
                    <div className="hero-animate" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 1 }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}>
                            Connect • Learn • Grow
                        </span>
                        <h1 style={{
                            fontSize: '4rem',
                            fontWeight: '800',
                            marginBottom: '1.5rem',
                            lineHeight: '1.1',
                            background: 'linear-gradient(to right, #ffffff, #94a3b8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Our Events
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                            Join our seminars, webinars, and workshops to stay ahead in the tech world.
                            Connect with experts and like-minded professionals.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Button style={{
                                backgroundColor: '#3b82f6',
                                color: '#ffffff',
                                padding: '1rem 2rem',
                                fontSize: '1rem',
                                borderRadius: '0.5rem',
                                border: 'none'
                            }}>
                                View Upcoming Events
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Events List Section */}
                <section style={{ padding: '5rem 0' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {events.map((event, index) => {
                                const Icon = event.icon
                                return (
                                    <div
                                        key={event.id}
                                        className="event-card"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            backgroundColor: '#ffffff',
                                            borderRadius: '1.5rem',
                                            overflow: 'hidden',
                                            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
                                            animationDelay: `${index * 0.2}s`,
                                            opacity: 0,
                                            border: '1px solid #e2e8f0'
                                        }}
                                    >
                                        {/* Image Section */}
                                        <div style={{ flex: '0 0 40%', position: 'relative', minHeight: '300px' }}>
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                top: '1.5rem',
                                                left: '1.5rem',
                                                backgroundColor: '#ffffff',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '0.5rem',
                                                fontWeight: '700',
                                                color: '#0f172a',
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                            }}>
                                                {event.type}
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div style={{ flex: '1', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#64748b' }}>
                                                <Calendar size={18} />
                                                <span style={{ fontWeight: '500' }}>{event.date}</span>
                                                <span style={{ margin: '0 0.5rem' }}>•</span>
                                                <Clock size={18} />
                                                <span style={{ fontWeight: '500' }}>{event.time}</span>
                                            </div>

                                            <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem', lineHeight: '1.2' }}>
                                                {event.title}
                                            </h3>

                                            <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '2rem', lineHeight: '1.6' }}>
                                                {event.description}
                                            </p>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569' }}>
                                                    <MapPin size={20} color="#3b82f6" />
                                                    <span style={{ fontWeight: '500' }}>{event.location}</span>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569' }}>
                                                    <Users size={20} color="#3b82f6" />
                                                    <span style={{ fontWeight: '500' }}>Open for Registration</span>
                                                </div>
                                            </div>

                                            <div>
                                                <Button style={{
                                                    backgroundColor: '#0f172a',
                                                    color: '#ffffff',
                                                    padding: '0.75rem 2rem',
                                                    borderRadius: '0.5rem',
                                                    fontWeight: '600',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    transition: 'all 0.2s'
                                                }}>
                                                    Register Now
                                                    <ArrowRight size={18} />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Host Event CTA */}
                <section style={{
                    backgroundColor: '#ffffff',
                    padding: '5rem 0',
                    borderTop: '1px solid #e2e8f0'
                }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>
                            Want to Host an Event with Us?
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '2.5rem' }}>
                            Partner with ApanaTime to organize impactful seminars and workshops at your institution.
                        </p>
                        <Link to="/contact">
                            <Button style={{
                                backgroundColor: '#3b82f6',
                                color: '#ffffff',
                                padding: '1rem 3rem',
                                fontSize: '1.125rem',
                                borderRadius: '0.5rem',
                                fontWeight: '600'
                            }}>
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}
