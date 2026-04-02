'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const variants = {
  initial:  { opacity: 0, y: 24, filter: 'blur(8px)' },
  animate:  { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit:     { opacity: 0, y: -16, filter: 'blur(6px)',
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

// Curtain overlay that sweeps across on navigation
const curtainVariants = {
  initial:  { scaleY: 0, originY: 0 },
  animate:  { scaleY: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
  exit:     { scaleY: 0, originY: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} variants={variants} initial="initial" animate="animate" exit="exit">
        {/* Navigation curtain */}
        <motion.div
          key={`curtain-${pathname}`}
          className="fixed inset-0 z-[999] bg-ag-lift pointer-events-none"
          variants={curtainVariants}
          initial="initial"
          animate="exit"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
