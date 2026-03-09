import React from "react"
import { Award, Calendar, MapPin, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HonoraryMemento() {
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
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=500&fit=crop"
                    alt="Honorary Memento"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    background: 'linear-gradient(135deg, #eab308, #f59e0b)',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <Trophy size={18} />
                    Honorary Memento
                </div>
            </div>
            <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={16} />
                        <span>March 25, 2024</span>
                    </div>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem' }}>
                    Excellence in Innovation Award
                </h3>
                <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>
                    Recognizing outstanding contributions to technology and innovation. Join us for the award ceremony.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', marginBottom: '1.5rem' }}>
                    <MapPin size={18} color="#eab308" />
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
                    View Details
                </Button>
            </div>
        </div>
    )
}
