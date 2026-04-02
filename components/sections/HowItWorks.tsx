'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FadeUp from '@/components/motion/FadeUp'

export default function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return
    const el = containerRef.current
    
    gsap.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      }
    )
    
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  const steps = [
    { num: '01', title: 'Input Variables', desc: 'Securely inject your transcript data points into the compute matrix.' },
    { num: '02', title: 'Engage Engine', desc: 'Our quantitative models process your data with zero error tolerance.' },
    { num: '03', title: 'Extract Telemetry', desc: 'Receive crystal clear trajectory maps and performance deliverables.' },
  ]

  return (
    <section ref={containerRef} id="howitworks" className="py-32 bg-ag-neutral relative border-y border-ag-mist/5 overflow-hidden">
      <div className="absolute inset-0 noise opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp className="text-center mb-24">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 tracking-wide uppercase">Operational Sequence</h2>
          <div className="w-24 h-1 bg-ag-lift mx-auto rounded-full shadow-[0_0_15px_rgba(110,255,196,0.6)]"></div>
        </FadeUp>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-ag-void z-0 overflow-hidden">
            <div ref={lineRef} className="h-full bg-ag-lift shadow-[0_0_10px_rgba(110,255,196,0.8)]" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {steps.map((step, idx) => (
              <FadeUp key={idx} delay={idx * 0.2} className="text-center">
                <div className="w-20 h-20 rounded-full bg-ag-void border-2 border-ag-lift/40 flex items-center justify-center text-2xl font-display font-bold text-ag-lift shadow-[0_0_30px_rgba(110,255,196,0.15)] mx-auto mb-8 relative">
                   <div className="absolute inset-0 rounded-full border border-ag-lift animate-ping opacity-20"></div>
                   {step.num}
                </div>
                <h4 className="font-display font-bold text-white text-xl mb-3 tracking-wider">{step.title}</h4>
                <p className="text-ag-mist/60 text-sm leading-relaxed">{step.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
