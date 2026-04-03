'use client'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import FadeUp from '@/components/motion/FadeUp'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-20 px-8 overflow-hidden bg-white">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute inset-0 pattern-grid-lg opacity-[0.02]"></div>
        
        {/* Animated Geometrical Components */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-secondary/10 rounded-full blur-[2px]"
          animate={{ x: [-20, 20], y: [-20, 20], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-primary/5 rotate-12"
          animate={{ rotate: [12, 32, 12], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <div className="absolute top-1/3 right-[15%] w-20 h-20 bg-secondary/5 rounded-3xl blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 left-[10%] w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Layered Cross-Hatch Pattern */}
        <div className="absolute inset-0 geometric-pattern opacity-[0.04]"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        <FadeUp>
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary/5 text-primary text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase border border-primary/5 rounded-full mb-10 shadow-sm">
             <span className="material-symbols-outlined text-[14px]">precision_manufacturing</span>
             Next-Gen Academic Matrix
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-7xl text-primary leading-[1.1] mb-10 tracking-tight">
             Unified Academic <br />
             <span className="italic text-secondary underline decoration-secondary/10 underline-offset-8">Precision.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.3} className="max-w-xl mx-auto px-4">
          <p className="text-base md:text-lg text-slate-500 mb-12 font-body leading-relaxed opacity-80">
             The tactical command center for modern scholars. Mastering GPA trajectoy, workload metrics, and credit orchestration with absolute clarity.
          </p>
        </FadeUp>

        <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/signup">
            <Button variant="primary" className="shadow-2xl shadow-primary/20">
               Initialize Session
               <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">
               Explore Protocol
            </Button>
          </Link>
        </FadeUp>

        <FadeUp delay={0.6} className="mt-20 pt-16 border-t border-slate-50">
           <p className="text-[10px] font-display font-black text-slate-300 uppercase tracking-[0.4em] mb-8">Integrated Partners</p>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale group hover:opacity-80 transition-opacity">
              <span className="font-headline font-bold text-xl text-primary">Cambridge</span>
              <span className="font-headline font-bold text-xl text-primary">Oxford</span>
              <span className="font-headline font-bold text-xl text-primary">Stanford</span>
              <span className="font-headline font-bold text-xl text-primary">MIT</span>
           </div>
        </FadeUp>
      </div>

      {/* Blueprint Visual Element */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
    </section>
  )
}
