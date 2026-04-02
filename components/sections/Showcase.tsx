'use client'
import FadeUp from '@/components/motion/FadeUp'
import CountUp from '@/components/motion/CountUp'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Showcase() {
  const benefits = [
    { title: 'Absolute Precision', desc: 'Validated astrophysics-grade algorithms ensure flawless integrity.' },
    { title: 'Predictive Modeling', desc: 'Project forward trajectories to define required mission tolerances.' },
    { title: 'Rapid Deployment', desc: 'Inject data streams via instant API sync or manual override.' },
    { title: 'Crew Oriented', desc: 'Iterative interface designed purely for cadet success rates.' }
  ]

  return (
    <section id="showcase" className="py-32 bg-ag-void overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-ag-lift/5 rounded-lg rotate-45 backdrop-blur-md animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-36 h-36 border-2 border-ag-mist/5 rounded-full animate-orbit"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Benefits */}
          <div>
            <FadeUp>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-10 leading-tight uppercase tracking-wider">
                Mission Success Begins With <span className="text-ag-lift text-glow">Data Clarity</span>
              </h2>
            </FadeUp>
            <ul className="space-y-8">
              {benefits.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.15}>
                  <li className="flex items-start gap-5">
                    <div className="w-8 h-8 rounded-full bg-ag-lift/10 border border-ag-lift/30 flex items-center justify-center text-ag-lift mt-1 flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-white text-lg tracking-wide mb-1">{item.title}</h5>
                      <p className="text-ag-mist/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>
          
          {/* Right: Widget */}
          <FadeUp delay={0.4} className="relative">
            <motion.div 
              className="bg-ag-neutral/80 p-10 rounded-[2rem] shadow-[0_0_50px_rgba(30,30,42,0.8)] border border-ag-mist/10 relative z-10 glass backdrop-blur-2xl"
              whileHover={{ y: -10, boxShadow: '0 0 80px rgba(110,255,196,0.1)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex justify-between items-center mb-12 border-b border-ag-mist/10 pb-6">
                <h4 className="font-display font-bold text-white text-xl tracking-wider">Orbit Tracker</h4>
                <span className="bg-ag-lift/10 text-ag-lift border border-ag-lift/20 text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(110,255,196,0.2)]">
                  +0.12 ∆V
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
                {/* Progress Ring */}
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_8px_rgba(110,255,196,0.4)]">
                    <circle className="text-ag-mist/5" cx="96" cy="96" fill="transparent" r="84" stroke="currentColor" strokeWidth="6"></circle>
                    <motion.circle 
                      className="text-ag-lift" cx="96" cy="96" fill="transparent" r="84" stroke="currentColor" strokeWidth="6" strokeLinecap="round"
                      initial={{ strokeDasharray: 528, strokeDashoffset: 528 }}
                      whileInView={{ strokeDashoffset: 105 }} // ~80%
                      transition={{ duration: 2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-display font-bold text-white text-glow"><CountUp to={4} duration={2}/>.12</span>
                    <span className="text-[10px] text-ag-lift mt-1 font-bold tracking-[0.2em] uppercase">Nominal</span>
                  </div>
                </div>
                
                {/* Bar Chart */}
                <div className="flex-1 w-full space-y-6">
                  {[
                    { label: 'Phase 1', val: 3.85, pct: 77 },
                    { label: 'Phase 2', val: 4.05, pct: 81 },
                    { label: 'Phase 3', val: 4.12, pct: 82 }
                  ].map((bar, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between text-xs font-bold text-ag-mist/50 uppercase tracking-widest">
                        <span>{bar.label}</span>
                        <span>{bar.val}</span>
                      </div>
                      <div className="w-full h-1.5 bg-ag-void rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-ag-lift"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.pct}%` }}
                          transition={{ duration: 1.5, delay: i * 0.2 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Decorative shapes behind widget */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-ag-lift/10 rounded-full -z-0 blur-[40px]"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full -z-0 blur-[50px]"></div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
