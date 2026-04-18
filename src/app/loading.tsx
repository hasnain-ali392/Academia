'use client'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      {/* Animated logo mark */}
      <motion.div
        className="flex items-center gap-3 group"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform rotate-12 bg-primary/5 border border-primary/10">
           <GraduationCap className="w-6 h-6 text-primary" strokeWidth={2.5} />
        </div>
        <span className="font-display text-3xl text-primary font-bold tracking-tight">Academia</span>
      </motion.div>
      
      {/* Progress bar */}
      <div className="mt-8 w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-secondary"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
