'use client'
import FadeUp from '@/components/motion/FadeUp'
import CountUp from '@/components/motion/CountUp'
import { motion } from 'framer-motion'

export default function Showcase() {
  const benefits = [
    { title: 'Absolute Precision', desc: 'Validated academic algorithms ensure flawless integrity for your GPA.', icon: 'verified' },
    { title: 'Predictive Modeling', desc: 'Project future semester outcomes to define required study goals.', icon: 'insights' },
    { title: 'Rapid Sync', desc: 'Inject transcript data via instant portal sync or secured manual entry.', icon: 'sync' },
    { title: 'Goal Oriented', desc: 'Iterative interface designed purely for student achievement rates.', icon: 'target' }
  ]

  return (
    <section id="showcase" className="section-padding bg-slate-50 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Benefits */}
          <div>
            <FadeUp>
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-primary mb-12 leading-tight tracking-tight">
                Academic Success Begins With <span className="text-secondary underline decoration-secondary/20 underline-offset-8">Data Clarity.</span>
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                    <div>
                      <h5 className="font-headline font-bold text-primary text-base tracking-tight mb-2">{item.title}</h5>
                      <p className="text-slate-500 text-[13px] leading-relaxed font-body opacity-80">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
          
          {/* Right: Widget */}
          <FadeUp delay={0.4} className="relative">
            <motion.div 
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_30px_80px_rgba(20,30,48,0.06)] border border-slate-100 relative z-10"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-xl">analytics</span>
                   </div>
                   <h4 className="font-headline font-bold text-primary text-lg md:text-xl">Academic Pulse</h4>
                </div>
                <div className="bg-secondary/5 text-secondary text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase border border-secondary/10">
                  Semester 04
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-10 items-center justify-between">
                {/* Progress Ring */}
                <div className="relative w-40 h-40 md:w-44 md:h-44">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-50" cx="88" cy="88" fill="transparent" r="76" stroke="currentColor" strokeWidth="6"></circle>
                    <motion.circle 
                      className="text-secondary" cx="88" cy="88" fill="transparent" r="76" stroke="currentColor" strokeWidth="6" strokeLinecap="round"
                      initial={{ strokeDasharray: 478, strokeDashoffset: 478 }}
                      whileInView={{ strokeDashoffset: 120 }} // ~75%
                      transition={{ duration: 2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-headline font-black text-primary"><CountUp to={3} duration={2}/>.85</span>
                    <span className="text-[9px] text-slate-400 mt-1 font-bold tracking-[0.1em] uppercase">Target Grade</span>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="flex-1 w-full space-y-6">
                  {[
                    { label: 'Year 01', val: 3.45, pct: 70 },
                    { label: 'Year 02', val: 3.62, pct: 78 },
                    { label: 'Year 03', val: 3.85, pct: 85 }
                  ].map((bar, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>{bar.label}</span>
                        <span className="text-primary">{bar.val}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                        <motion.div 
                          className="h-full bg-primary"
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
            
            {/* Patterns & Shapes */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-secondary/5 rounded-full -z-0 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-primary/5 rounded-full -z-0 blur-3xl"></div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
