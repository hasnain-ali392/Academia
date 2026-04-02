'use client'
import TextReveal from '@/components/motion/TextReveal'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'
import { Orbit, Activity } from 'lucide-react'
import { motion } from 'framer-motion'
import ParallaxLayer from '@/components/motion/ParallaxLayer'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ag-void pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 noise opacity-20 Mix-blend-overlay"></div>
      
      {/* Floating 3D/Glow Icons */}
      <div className="absolute top-32 left-[15%] animate-float pointer-events-none hidden lg:block">
        <div className="w-16 h-16 bg-ag-lift/10 text-ag-lift rounded-xl flex items-center justify-center animate-glow rotate-12 glass">
          <Orbit className="w-8 h-8" />
        </div>
      </div>
      
      <div className="absolute top-48 right-[15%] animate-float pointer-events-none hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="w-20 h-20 bg-ag-void border border-ag-lift/20 text-ag-lift rounded-2xl flex items-center justify-center animate-glow -rotate-12 glass">
          <Activity className="w-10 h-10" />
        </div>
      </div>

      {/* Shapes */}
      <div className="absolute top-1/2 -left-12 w-48 h-48 bg-ag-lift/10 rounded-3xl rotate-45 backdrop-blur-md -z-10 animate-orbit"></div>
      <div className="absolute bottom-20 left-1/4 w-32 h-32 border-2 border-ag-lift/20 rounded-full -z-10 animate-float"></div>
      
      <ParallaxLayer speed={0.2} className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
         >
           <TextReveal 
             text="Defy Gravity. Accelerate Performance." 
             className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white max-w-5xl mx-auto leading-tight mb-8 justify-center text-glow"
           />
         </motion.div>
         
         <FadeUp delay={0.6}>
           <p className="text-lg md:text-xl text-ag-mist/70 max-w-2xl mx-auto mb-12 font-body">
             The cutting-edge telemetry engine for calculating, analyzing, and projecting your academic trajectory in absolute zero-gravity.
           </p>
         </FadeUp>
         
         <FadeUp delay={0.8}>
           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <Button variant="primary">Launch Sequence</Button>
             <Button variant="ghost">View Schematics</Button>
           </div>
         </FadeUp>
      </ParallaxLayer>
    </section>
  )
}
