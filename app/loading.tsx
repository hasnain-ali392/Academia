'use client'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-ag-void flex flex-col items-center justify-center"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      {/* Animated logo mark */}
      <motion.div
        className="w-16 h-16 rounded-full border-2 border-ag-lift"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.4, 1],
          boxShadow: [
            '0 0 0px rgba(110,255,196,0)',
            '0 0 60px rgba(110,255,196,0.8)',
            '0 0 0px rgba(110,255,196,0)',
          ],
        }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Brand name reveal */}
      <motion.p
        className="mt-8 font-display text-2xl text-ag-mist tracking-[0.4em] uppercase"
        initial={{ opacity: 0, letterSpacing: '0.8em' }}
        animate={{ opacity: 1, letterSpacing: '0.4em' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        ANTIGRAVITY
      </motion.p>
      {/* Progress bar */}
      <motion.div className="mt-6 w-48 h-px bg-ag-mist/20 overflow-hidden">
        <motion.div
          className="h-full bg-ag-lift"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
        />
      </motion.div>
    </motion.div>
  )
}
