'use client'
import FadeUp from '@/components/motion/FadeUp'
import StaggerGroup, { staggerItem } from '@/components/motion/StaggerGroup'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="w-full border-t border-ag-mist/10 bg-ag-void relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-ag-lift/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <motion.div variants={staggerItem} className="col-span-2 md:col-span-1">
            <div className="text-xl font-display font-bold text-ag-lift tracking-widest uppercase mb-4">Antigravity</div>
            <p className="text-ag-mist/60 text-sm leading-relaxed">
              Defy limits. Gravity-free performance engineered for seamless calculation and infinite scalability in the academic cosmos.
            </p>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <h5 className="text-white font-bold text-sm mb-4">Core Systems</h5>
            <ul className="space-y-2">
              {['Launch Sequence', 'Orbit Tracker', 'Telemetrics'].map(link => (
                <li key={link}>
                  <a className="text-ag-mist/50 hover:text-ag-lift transition-colors text-sm" href="#">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <h5 className="text-white font-bold text-sm mb-4">Operations</h5>
            <ul className="space-y-2">
              {['Command Center', 'Crew Members', 'Directives'].map(link => (
                <li key={link}>
                  <a className="text-ag-mist/50 hover:text-ag-lift transition-colors text-sm" href="#">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <h5 className="text-white font-bold text-sm mb-4">Transmissions</h5>
            <ul className="space-y-2">
              {['Deep Space', 'Subspace Comm', 'Distress Signal'].map(link => (
                <li key={link}>
                  <a className="text-ag-mist/50 hover:text-ag-lift transition-colors text-sm" href="#">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </StaggerGroup>
        
        <FadeUp delay={0.4} className="pt-8 border-t border-ag-mist/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ag-mist/40 text-sm">© 2026 Antigravity Systems. Zero constraints.</p>
          <div className="flex gap-6">
            <a className="text-ag-mist/40 hover:text-ag-lift transition-colors text-xs" href="#">Protocols</a>
            <a className="text-ag-mist/40 hover:text-ag-lift transition-colors text-xs" href="#">Privacy</a>
            <a className="text-ag-mist/40 hover:text-ag-lift transition-colors text-xs" href="#">Cookies</a>
          </div>
        </FadeUp>
      </div>
    </footer>
  )
}
