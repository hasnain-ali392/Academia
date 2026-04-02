'use client'
import { motion } from 'framer-motion'
import MagneticWrapper from '@/components/motion/MagneticWrapper'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'outline'
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({ children, variant = 'primary', icon, onClick, className = '' }: ButtonProps) {
  const styles = {
    primary: 'bg-ag-lift text-ag-void font-bold hover:bg-ag-lift/90',
    ghost:   'bg-transparent text-ag-mist border border-ag-mist/20 hover:border-ag-lift hover:text-ag-lift',
    outline: 'bg-transparent text-ag-lift border border-ag-lift hover:bg-ag-lift/10',
  }

  return (
    <MagneticWrapper>
      <motion.button
        onClick={onClick}
        className={`relative overflow-hidden flex items-center gap-2 px-7 py-3.5 rounded-full text-sm transition-colors duration-300 ${styles[variant]} ${className}`}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {/* Ripple overlay */}
        <motion.span
          className="absolute inset-0 bg-white/10 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          whileTap={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
        <span className="relative z-10 font-medium">{children}</span>
        {icon && (
          <motion.span
            className="inline-flex relative z-10"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            {icon}
          </motion.span>
        )}
      </motion.button>
    </MagneticWrapper>
  )
}
