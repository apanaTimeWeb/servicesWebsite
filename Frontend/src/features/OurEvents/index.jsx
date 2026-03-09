"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "../Home/components/ContactModal"
import EventsComponents from "./EventsComponents"

export default function OurEventsPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    const handleContactUs = () => {
        setIsContactModalOpen(true)
    }
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
                <section id="events-hero" style={{
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
                <EventsComponents />

                {/* Host Event CTA */}
                <section id="host-event-cta" style={{
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
                        <Button onClick={handleContactUs} style={{
                            backgroundColor: '#3b82f6',
                            color: '#ffffff',
                            padding: '1rem 3rem',
                            fontSize: '1.125rem',
                            borderRadius: '0.5rem',
                            fontWeight: '600'
                        }}>
                            Contact Us
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
