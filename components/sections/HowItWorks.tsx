'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import FadeUp from '@/components/motion/FadeUp'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current || !progressLineRef.current) return
    const el = containerRef.current
    
    gsap.fromTo(progressLineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        }
      }
    )
    
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  const steps = [
    { num: '01', title: 'Data Injection', desc: 'Securely provide your academic transcript and semester data points into our compute matrix.', icon: 'description' },
    { num: '02', title: 'Precision Analysis', desc: 'Our quantitative models process your data with zero error tolerance for absolute accuracy.', icon: 'auto_awesome' },
    { num: '03', title: 'Extract Insights', desc: 'Receive crystal-clear trajectory maps and predictive performance deliverables for your career.', icon: 'rocket_launch' },
  ]

  return (
    <section ref={containerRef} id="howitworks" className="section-padding bg-white relative border-y border-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeUp>
            <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4 tracking-tight">The Operational Trajectory</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="w-16 h-1 bg-secondary/20 mx-auto rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-secondary"
                 initial={{ width: 0 }}
                 whileInView={{ width: '100%' }}
                 transition={{ duration: 1.5, delay: 0.5 }}
               />
            </div>
          </FadeUp>
        </div>
        
        <div className="relative">
          {/* Connection Line Baseline */}
          <div className="hidden md:block absolute top-[32px] left-[10%] right-[10%] h-[1.5px] bg-slate-100 z-0">
            {/* Animated Progress Line */}
            <div ref={progressLineRef} className="h-full bg-primary" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <FadeUp key={idx} delay={idx * 0.2} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm mx-auto mb-6 relative transition-all group-hover:border-secondary/20 group-hover:shadow-lg group-hover:shadow-secondary/5 group-hover:translate-y-[-4px]">
                   <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-white font-body text-[10px] flex items-center justify-center font-bold shadow-md">
                     {step.num}
                   </div>
                   <span className="material-symbols-outlined text-2xl text-secondary">{step.icon}</span>
                </div>
                <h4 className="font-headline font-bold text-primary text-xl mb-3 tracking-tight group-hover:text-secondary transition-colors">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-body px-4 opacity-80 group-hover:opacity-100 transition-opacity">{step.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
