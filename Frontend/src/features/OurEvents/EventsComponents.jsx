import React from "react"
import Seminar from "./Seminar/Seminar"
import WorkShop from "./WorkShop/WorkShop"
import HonoraryMemento from "./HonoraryMemento/HonoraryMemento"
import seminarImg1 from "../../assets/images/Seminar/Seminar/WhatsApp Image 2026-01-21 at 1.24.01 PM.jpeg"
import seminarImg2 from "../../assets/images/Seminar/Seminar/WhatsApp Image 2026-01-21 at 1.24.03 PM.jpeg"
import seminarImg3 from "../../assets/images/Seminar/Seminar/WhatsApp Image 2026-01-21 at 1.25.05 PM.jpeg"
import seminarImg4 from "../../assets/images/Seminar/Seminar/WhatsApp Image 2026-01-21 at 8.32.34 PM.jpeg"
import workshopImg1 from "../../assets/images/Workshop/WhatsApp Image 2026-01-21 at 7.13.06 PM.jpeg"
import workshopImg2 from "../../assets/images/Workshop/WhatsApp Image 2026-01-21 at 7.13.21 PM.jpeg"
import workshopImg3 from "../../assets/images/Workshop/WhatsApp Image 2026-01-21 at 7.13.23 P.jpeg"
import workshopImg4 from "../../assets/images/Workshop/WhatsApp Image 2026-01-21 at 7.13.26 PM.jpeg"
import honoraryImg1 from "../../assets/images/Honorary_Memento/WhatsApp Image 2026-01-22 at 1.25.36 PM.jpeg"
import honoraryImg2 from "../../assets/images/Honorary_Memento/WhatsApp Image 2026-01-22 at 10.53.24 AM.jpeg"
import honoraryImg3 from "../../assets/images/Honorary_Memento/WhatsApp Image 2026-01-22 at 10.53.28 AM.jpeg"
import honoraryImg4 from "../../assets/images/Honorary_Memento/WhatsApp Image 2026-01-22 at 10.53.29 AM.jpeg"

export default function EventsComponents() {
    const [activeTab, setActiveTab] = React.useState('seminar')
    const [lightboxOpen, setLightboxOpen] = React.useState(false)
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const seminarImages = [seminarImg1, seminarImg2, seminarImg3, seminarImg4]
    const workshopImages = [workshopImg1, workshopImg2, workshopImg3, workshopImg4]
    const honoraryImages = [honoraryImg1, honoraryImg2, honoraryImg3, honoraryImg4]

    const getCurrentImages = () => {
        if (activeTab === 'seminar') return seminarImages
        if (activeTab === 'workshop') return workshopImages
        return honoraryImages
    }

    const openLightbox = (index) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
    }

    const nextImage = () => {
        const images = getCurrentImages()
        setCurrentIndex((currentIndex + 1) % images.length)
    }

    const prevImage = () => {
        const images = getCurrentImages()
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }

    return (
        <>
        <section style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="events-title" style={{ fontSize: '3rem', fontWeight: '800', color: '#475569', marginBottom: '0.5rem' }}>
                        Events
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#1e40af', margin: '0 auto 1.5rem' }} />
                    <p className="events-desc" style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '900px', margin: '0 auto' }}>
                        We host a variety of events that bring together industry experts, professionals, and customers to explore the latest advancements in precision instruments.
                    </p>
                </div>

                <div className="events-tabs" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => setActiveTab('seminar')}
                        className="event-tab"
                        style={{
                            padding: '0.75rem 2rem',
                            borderRadius: '2rem',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            backgroundColor: activeTab === 'seminar' ? '#1e3a8a' : '#e2e8f0',
                            color: activeTab === 'seminar' ? '#ffffff' : '#64748b'
                        }}
                    >
                        Seminar
                    </button>
                    <button
                        onClick={() => setActiveTab('workshop')}
                        className="event-tab"
                        style={{
                            padding: '0.75rem 2rem',
                            borderRadius: '2rem',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            backgroundColor: activeTab === 'workshop' ? '#1e3a8a' : '#e2e8f0',
                            color: activeTab === 'workshop' ? '#ffffff' : '#64748b'
                        }}
                    >
                        Workshop
                    </button>
                    <button
                        onClick={() => setActiveTab('honorary')}
                        className="event-tab"
                        style={{
                            padding: '0.75rem 2rem',
                            borderRadius: '2rem',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            backgroundColor: activeTab === 'honorary' ? '#1e3a8a' : '#e2e8f0',
                            color: activeTab === 'honorary' ? '#ffffff' : '#64748b'
                        }}
                    >
                        Honorary Memento
                    </button>
                </div>

                <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                    {activeTab === 'seminar' && seminarImages.map((img, idx) => (
                        <img key={idx} src={img} alt={`Seminar ${idx + 1}`} onClick={() => openLightbox(idx)} style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '1rem', cursor: 'pointer' }} />
                    ))}
                    {activeTab === 'workshop' && workshopImages.map((img, idx) => (
                        <img key={idx} src={img} alt={`Workshop ${idx + 1}`} onClick={() => openLightbox(idx)} style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '1rem', cursor: 'pointer' }} />
                    ))}
                    {activeTab === 'honorary' && honoraryImages.map((img, idx) => (
                        <img key={idx} src={img} alt={`Honorary ${idx + 1}`} onClick={() => openLightbox(idx)} style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '1rem', cursor: 'pointer' }} />
                    ))}
                </div>
            </div>
        </section>

        {lightboxOpen && (
            <div onClick={() => setLightboxOpen(false)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={(e) => { e.stopPropagation(); prevImage(); }} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', fontSize: '2rem', padding: '1rem', cursor: 'pointer', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
                <img src={getCurrentImages()[currentIndex]} alt="Full view" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
                <button onClick={(e) => { e.stopPropagation(); nextImage(); }} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', fontSize: '2rem', padding: '1rem', cursor: 'pointer', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
                <button onClick={() => setLightboxOpen(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', fontSize: '1.5rem', padding: '0.5rem 1rem', cursor: 'pointer', borderRadius: '0.5rem' }}>✕</button>
            </div>
        )}
        
        <style>{`
          @media (max-width: 1024px) {
            .events-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          
          @media (max-width: 768px) {
            .events-title { font-size: 2rem !important; }
            .events-desc { font-size: 1rem !important; }
            .events-grid { grid-template-columns: 1fr !important; }
            .events-grid img { height: 250px !important; }
            .event-tab { padding: 0.5rem 1.5rem !important; font-size: 0.875rem !important; }
          }
        `}</style>
        </>
    )
}
