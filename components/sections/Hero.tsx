'use client'
import { motion } from 'framer-motion'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Patterns */}
      <div className="absolute inset-0 pattern-grid-lg opacity-[0.03]"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent"></div>
      
      {/* 3D Assets Layer */}
      <div className="absolute inset-0 pointer-events-none animate-float hidden lg:block">
        <motion.img 
          src="/assets/books.png" 
          alt="3D Books"
          className="absolute top-[15%] left-[8%] w-56 h-auto opacity-80 rotate-[-15deg] drop-shadow-2xl"
          initial={{ y: 20, rotate: -20 }}
          animate={{ y: -20, rotate: -10 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.img 
          src="/assets/cap.png" 
          alt="3D Graduation Cap"
          className="absolute bottom-[20%] left-[12%] w-48 h-auto opacity-70 rotate-[10deg] drop-shadow-xl"
          initial={{ y: -15, rotate: 15 }}
          animate={{ y: 15, rotate: 5 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 1 }}
        />
        <motion.img 
          src="/assets/laptop.png" 
          alt="3D Student Laptop"
          className="absolute top-[18%] right-[10%] w-60 h-auto opacity-80 rotate-[12deg] drop-shadow-2xl"
          initial={{ y: -25, rotate: 8 }}
          animate={{ y: 25, rotate: 16 }}
          transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      {/* 2D Geometric Elements */}
      <div className="absolute top-[10%] left-[20%] w-12 h-12 border-2 border-secondary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[25%] right-[22%] w-16 h-16 border border-primary/5 rounded-3xl rotate-45 animate-bounce" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-accent/20 rounded-full animate-ping"></div>

      <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-8 border border-primary/10 shadow-sm transition-all hover:bg-primary hover:text-white">
            <span className="material-symbols-outlined text-sm">verified</span>
            Unified Academic Intelligence
          </div>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-8 leading-[1.1] tracking-tight">
            The Next Generation of <br />
            <span className="text-secondary italic underline decoration-secondary/15 underline-offset-[12px]">Academic Tracking.</span>
          </h1>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-body leading-relaxed">
             Empowering over 50,000 students worldwide with precision-crafted tools for GPA management, career forecasting, and data-driven success.
          </p>
        </FadeUp>

        <FadeUp delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup">
            <Button variant="primary" className="px-8 py-3.5 text-sm shadow-xl shadow-primary/20">
               Initialize Experience
               <span className="material-symbols-outlined text-lg">trending_up</span>
            </Button>
          </Link>
          <Link href="/signin">
            <Button variant="outline" className="px-8 py-3.5 text-sm border-slate-200 text-slate-600 hover:bg-slate-50">
               Access Member Portal
            </Button>
          </Link>
        </FadeUp>

        {/* Subtext Dots */}
        <div className="mt-16 flex justify-center gap-1.5">
           <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-primary/10"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-primary/10"></div>
        </div>
      </div>
    </section>
  )
}
