'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticWrapper({ children, strength = 0.4 }: {
  children: React.ReactNode; strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    setPos({
      x: (e.clientX - left - width / 2) * strength,
      y: (e.clientY - top - height / 2) * strength,
    })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
