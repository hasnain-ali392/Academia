'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll()
  const navBg = useTransform(scrollY, [0, 60], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.9)'])
  const navBlur = useTransform(scrollY, [0, 60], ['blur(0px)', 'blur(8px)'])
  const navBorder = useTransform(scrollY, [0, 60], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.05)'])
  
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[1000] origin-left"
        style={{ scaleX }}
      />
      <motion.nav 
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: navBg,
          backdropFilter: navBlur,
          borderBottom: `1px solid ${navBorder}`,
        }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
          <Link href="/" className="text-xl font-display font-bold text-primary tracking-tight flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-primary/10">
               <span className="material-symbols-outlined text-sm font-bold">school</span>
            </div>
            Academia
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'About', href: '/about' },
              { label: 'Calculator', href: '#calculator' },
              { label: 'Guidance', href: '#guidance' },
              { label: 'Portal', href: '#dashboard' }
            ].map((item) => (
              <motion.div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-slate-500 hover:text-primary text-[13px] font-bold transition-colors font-display tracking-tight"
                >
                  {item.label}
                </Link>
                <motion.span
                  className="absolute bottom-[-2px] left-0 h-[1.5px] bg-secondary w-0 group-hover:w-full transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
             <Link href="/signin">
               <Button variant="ghost" className="text-slate-600 text-[13px] px-4 py-2 hover:bg-slate-50">
                 Sign In
               </Button>
             </Link>
             <Link href="/signup">
               <Button variant="primary" className="text-[13px] px-5 py-2.5 shadow-md shadow-primary/5">
                 Get Started
               </Button>
             </Link>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
