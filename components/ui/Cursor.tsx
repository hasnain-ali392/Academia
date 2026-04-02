'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
    }
    const onEnter = () => setIsHovering(true)
    const onLeave = () => setIsHovering(false)
    window.addEventListener('mousemove', moveCursor)
    
    const elements = document.querySelectorAll('a, button, input, textarea, select')
    elements.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-ag-lift z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: springX, y: springY }}
        animate={{ scale: isHovering ? 3 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  )
}
