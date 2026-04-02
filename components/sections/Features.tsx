'use client'
import StaggerGroup, { staggerItem } from '@/components/motion/StaggerGroup'
import { motion } from 'framer-motion'
import { Calculator, BarChart3, Lightbulb, CheckCircle2 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'Telemetry Computation',
      desc: 'Calculate your mission grade point average instantly through our zero-latency metrics processing platform.',
      icon: <Calculator className="w-6 h-6" />,
      link: 'Initiate Sync'
    },
    {
      title: 'Orbit Tracking (CGPA)',
      desc: 'Map your compounding vector across multiple orbital periods to define your exact trajectory.',
      icon: <BarChart3 className="w-6 h-6" />,
      link: 'View Trajectory'
    },
    {
      title: 'Guidance Systems',
      desc: 'Algorithmic course corrections dynamically modeled to align you with target orbit classifications.',
      icon: <Lightbulb className="w-6 h-6" />,
      link: 'Align Vectors'
    },
    {
      title: 'Data Validation',
      desc: 'Seamlessly verify structural integrity of all operational metrics in a unified command center.',
      icon: <CheckCircle2 className="w-6 h-6" />,
      link: 'Run Diagnostics'
    }
  ]

  return (
    <section id="features" className="py-24 bg-ag-void relative overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-ag-lift/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={staggerItem}
              className="glass rounded-2xl p-8 cursor-pointer group border border-ag-mist/10"
              whileHover={{
                y: -8,
                boxShadow: '0 24px 80px rgba(110,255,196,0.15)',
                borderColor: 'rgba(110,255,196,0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-ag-lift/10 flex items-center justify-center mb-6 text-ag-lift"
                whileHover={{ rotate: 90 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-display font-bold text-white text-xl mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-ag-mist/60 text-sm mb-6 leading-relaxed min-h-[80px]">
                {feature.desc}
              </p>
              <motion.a 
                href="#"
                className="relative inline-flex items-center text-ag-lift font-bold text-sm tracking-widest uppercase"
              >
                {feature.link}
                <motion.span 
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
