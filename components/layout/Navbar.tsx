'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll()
  const navBg = useTransform(scrollY, [0, 80], ['rgba(10,10,15,0)', 'rgba(10,10,15,0.85)'])
  const navBlur = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(20px)'])
  const navBorder = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.06)'])
  
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-ag-lift z-[1000] origin-left"
        style={{ scaleX }}
      />
      <motion.nav 
        className="fixed top-0 w-full z-50 border-b transition-colors"
        style={{
          backgroundColor: navBg,
          backdropFilter: navBlur,
          borderBottomColor: navBorder,
        }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <Link href="/" className="text-2xl font-display font-bold text-ag-lift tracking-widest uppercase">
            Antigravity
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Features', 'Calculator', 'Dashboard'].map((label) => (
              <motion.a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="relative inline-block text-ag-mist/70 text-sm font-medium uppercase tracking-wider"
                whileHover={{ color: '#E8E8F0' }}
              >
                {label}
                <motion.span
                  className="absolute bottom-[-4px] left-0 h-px bg-ag-lift w-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-4">
             <Button variant="outline">Sign In</Button>
             <Button variant="primary">Access Portal</Button>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
