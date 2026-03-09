import React from "react"
import Seminar from "./Seminar/Seminar"
import WorkShop from "./WorkShop/WorkShop"
import HonoraryMemento from "./HonoraryMemento/HonoraryMemento"

export default function EventsComponents() {
    return (
        <section style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>
                        Upcoming Events
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: '#64748b' }}>
                        Join our seminars, workshops, and award ceremonies
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    <Seminar />
                    <WorkShop />
                    <HonoraryMemento />
                </div>
            </div>
        </section>
    )
}
