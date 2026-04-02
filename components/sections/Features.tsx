'use client'
import StaggerGroup, { staggerItem } from '@/components/motion/StaggerGroup'
import { motion } from 'framer-motion'
import FadeUp from '@/components/motion/FadeUp'

export default function Features() {
  const features = [
    {
      title: 'GPA/CGPA Tool',
      desc: 'Calculate and track your academic performance with pinpoint accuracy across multiple semesters.',
      icon: 'calculate',
      color: 'bg-primary'
    },
    {
      title: 'AI Guidance',
      desc: 'Personalized career paths and course recommendations based on your unique academic data.',
      icon: 'psychology',
      color: 'bg-secondary'
    },
    {
      title: 'Result Checking',
      desc: 'Instant access to verified examination results with detailed breakdown and performance metrics.',
      icon: 'rule',
      color: 'bg-accent/40 text-primary'
    },
    {
      title: 'Performance Stats',
      desc: 'Visualize your progress through interactive charts and historical comparison data points.',
      icon: 'query_stats',
      color: 'bg-slate-100 text-primary'
    }
  ]

  return (
    <section id="features" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Depth Patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute h-full w-full opacity-[0.03] dot-pattern top-0 left-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeUp>
            <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold mb-4 tracking-tight">The Pillars of Academia</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-slate-400 max-w-xl mx-auto font-body text-[15px] leading-relaxed">
              Modern solutions for modern students, integrated into one seamless platform.
            </p>
          </FadeUp>
        </div>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={staggerItem}
              className="glass p-6 rounded-2xl cursor-pointer group border border-slate-100 hover:border-slate-200 transition-all duration-500 shadow-sm"
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(20, 30, 48, 0.05)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={`w-12 h-12 rounded-lg ${feature.color} text-white flex items-center justify-center mb-6 shadow-md shadow-primary/5 transition-transform group-hover:scale-110 group-hover:rotate-12`}
              >
                <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
              </motion.div>
              <h3 className="font-headline font-bold text-primary text-lg mb-3 tracking-tight group-hover:text-secondary transition-colors">{feature.title}</h3>
              <p className="text-slate-500 text-[13px] mb-6 leading-relaxed min-h-[64px] font-body opacity-80">
                {feature.desc}
              </p>
              <motion.div 
                className="flex items-center gap-2 text-secondary font-display font-bold text-[11px] tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0"
              >
                Explore Tool
                <span className="material-symbols-outlined text-xs">trending_flat</span>
              </motion.div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
