'use client'
import { motion } from 'framer-motion'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'outline' | 'secondary'
  icon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  icon, 
  onClick, 
  disabled = false,
  type = 'button',
  className = '' 
}: ButtonProps) {
  const styles = {
    primary:   'bg-primary text-white border border-primary hover:bg-[#1c2a42] shadow-lg shadow-primary/10',
    secondary: 'bg-secondary text-white border border-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/10',
    ghost:     'bg-transparent text-slate-600 hover:text-primary hover:bg-slate-50',
    outline:   'bg-transparent text-primary border-2 border-primary/10 hover:border-primary',
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`relative overflow-hidden flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-300 font-display ${styles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-[0.98]'}`}
      whileHover={!disabled ? { y: -1.5, shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' } : {}}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <motion.span
          className="inline-flex relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 2 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  )
}
