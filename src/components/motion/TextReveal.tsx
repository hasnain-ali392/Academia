'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TextReveal({ text, className = '' }: {
  text: string; className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <p ref={ref} className={`flex flex-wrap gap-x-[0.25em] overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i} className="inline-block"
          initial={{ y: '110%', opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}
