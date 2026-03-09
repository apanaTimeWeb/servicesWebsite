import React from "react"
import { Award, Calendar, MapPin, Trophy, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HonoraryMemento({ images }) {
    const [currentImage, setCurrentImage] = React.useState(0)
    const [showGallery, setShowGallery] = React.useState(false)
    const [galleryIndex, setGalleryIndex] = React.useState(0)

    const openGallery = (index) => {
        setGalleryIndex(index)
        setShowGallery(true)
    }

    const nextImage = () => setGalleryIndex((galleryIndex + 1) % images.length)
    const prevImage = () => setGalleryIndex((galleryIndex - 1 + images.length) % images.length)

    return (
        <>
        <div className="event-card" style={{
            backgroundColor: '#ffffff',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
        }}>
            <div style={{ position: 'relative', height: '250px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => openGallery(currentImage)}>
                <img
                    src={images[currentImage]}
                    alt="Honorary Memento"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                />
                <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImage(idx)}
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: currentImage === idx ? '#ffffff' : 'rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        />
                    ))}
                </div>
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

        {showGallery && (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.95)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button onClick={() => setShowGallery(false)} style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                }}>
                    <X size={24} />
                </button>
                <button onClick={prevImage} style={{
                    position: 'absolute',
                    left: '2rem',
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                }}>
                    <ChevronLeft size={30} />
                </button>
                <div style={{ maxWidth: '90%', maxHeight: '90%', textAlign: 'center' }}>
                    <img src={images[galleryIndex]} alt="Gallery" style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }} />
                    <div style={{ color: '#ffffff', marginTop: '1rem', fontSize: '1.125rem' }}>
                        {galleryIndex + 1} / {images.length}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                onClick={() => setGalleryIndex(idx)}
                                style={{
                                    width: '80px',
                                    height: '60px',
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                    border: galleryIndex === idx ? '3px solid #eab308' : '3px solid transparent',
                                    borderRadius: '0.5rem',
                                    opacity: galleryIndex === idx ? 1 : 0.6
                                }}
                            />
                        ))}
                    </div>
                </div>
                <button onClick={nextImage} style={{
                    position: 'absolute',
                    right: '2rem',
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                }}>
                    <ChevronRight size={30} />
                </button>
            </div>
        )}
        </>
    )
}
