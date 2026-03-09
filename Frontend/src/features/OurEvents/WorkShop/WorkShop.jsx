import React from "react"
import { Calendar, Clock, MapPin, Presentation } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorkShop() {
    return (
        <div className="event-card" style={{
            backgroundColor: '#ffffff',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
        }}>
            <div style={{ position: 'relative', height: '250px' }}>
                <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop"
                    alt="Workshop"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    background: 'linear-gradient(135deg, #f97316, #ef4444)',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <Presentation size={18} />
                    Workshop
                </div>
            </div>
            <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={16} />
                        <span>April 5-7, 2024</span>
                    </div>
                    <span>•</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Clock size={16} />
                        <span>9:00 AM - 5:00 PM</span>
                    </div>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem' }}>
                    Full Stack Development Bootcamp
                </h3>
                <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>
                    Hands-on workshop covering the latest full-stack technologies including React, Node.js, and MongoDB.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', marginBottom: '1.5rem' }}>
                    <MapPin size={18} color="#f97316" />
                    <span>Online (Zoom)</span>
                </div>
                <Button style={{
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    width: '100%'
                }}>
                    Register Now
                </Button>
            </div>
        </div>
    )
}
