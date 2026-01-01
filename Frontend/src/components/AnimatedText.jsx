import { useState, useEffect } from 'react'

export function AnimatedText({ text, className, style, delay = 100, startDelay = 0 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) {
      const startTimer = setTimeout(() => {
        setHasStarted(true)
      }, startDelay)
      return () => clearTimeout(startTimer)
    }
  }, [hasStarted, startDelay])

  useEffect(() => {
    if (!hasStarted) return
    
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      } else {
        setTimeout(() => {
          setDisplayedText('')
          setCurrentIndex(0)
          setHasStarted(false)
        }, 2000)
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, hasStarted])

  const renderText = () => {
    if (text === "ApanaTime Tech Solutions") {
      const apanaTime = displayedText.slice(0, 9)
      const techSolutions = displayedText.slice(9)
      return (
        <>
          {apanaTime}
          <span style={{ color: '#4B5563' }}>{techSolutions}</span>
        </>
      )
    }
    return displayedText
  }

  return (
    <span className={className} style={style}>
      {renderText()}
      {hasStarted && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}