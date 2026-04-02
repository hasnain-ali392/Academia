'use client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        
        {/* About Hero Section */}
        <section className="relative py-24 px-8 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
          <div className="absolute top-20 left-10 w-24 h-24 bg-secondary/5 blur-xl rotate-45 rounded-3xl animate-float"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-primary/5 blur-2xl -rotate-12 rounded-[2rem] animate-float" style={{ animationDelay: '1s' }}></div>
          
          {/* 3D Asset Injection */}
          <div className="absolute top-1/4 right-[10%] hidden lg:block opacity-60">
             <motion.img 
               src="/assets/cap.png" 
               alt="3D Cap"
               className="w-40 h-auto drop-shadow-2xl"
               initial={{ y: 20, rotate: 10 }}
               animate={{ y: -20, rotate: -10 }}
               transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
             />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <FadeUp>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-6 leading-tight tracking-tight">
                About Our <br /><span className="text-secondary italic underline decoration-secondary/15 underline-offset-8">Academic Platform.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 font-body leading-relaxed opacity-90">
                Empowering students and educators with precision-engineered tools for a seamless academic journey.
              </p>
            </FadeUp>
            <FadeUp delay={0.4} className="flex justify-center gap-2">
              <span className="w-10 h-1 bg-primary rounded-full"></span>
              <span className="w-3 h-1 bg-secondary rounded-full"></span>
              <span className="w-3 h-1 bg-accent/30 rounded-full"></span>
            </FadeUp>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding px-8 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeUp className="relative group">
               <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] transform group-hover:rotate-2 transition-all duration-500"></div>
               <div className="relative rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                 <img 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0TfvVbgx2g3jUKVczB0ArE-j1gjW-MGomXMhmh1NO8NETlrniK7fXRVSznl0aYsmp6idvbi-Mb7eHOUbHRvnnZzB00yPlH47QSfJsYHSjA69mrwQJwSxmA0OUTOmPFuN0EOdi8XFsN7YKAAKMwNoNXrW2VMwjWTAboj9ZyPkR2DpunK9euqP7TV_sgJqbU_E7-Zx59RR90Zb0G8smb-zRm5i1AbTl69IQcJEpLhwMAAsaMnT1iJO-QO1vKT9ghBojokvXYh2I8uY0" 
                   alt="Academic Excellence" 
                   className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
               </div>
            </FadeUp>
            
            <div className="space-y-8">
              <FadeUp>
                 <div className="inline-flex items-center gap-3 px-3 py-1 bg-secondary/10 text-secondary text-[11px] font-bold tracking-[0.2em] uppercase border border-secondary/10 rounded-full">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    Our Mission
                 </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                 <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold leading-tight tracking-tight">Academic Success, <br />Simplified with Precision.</h2>
              </FadeUp>
              <FadeUp delay={0.3}>
                 <p className="text-base text-slate-500 leading-relaxed font-body opacity-90">
                   Academia was founded on the belief that data should empower, not overwhelm. Our mission is to simplify the complex academic landscape by providing students with precision tools — from GPA tracking to AI-driven career guidance.
                 </p>
              </FadeUp>
              <div className="grid grid-cols-2 gap-6 pt-4">
                 <FadeUp delay={0.4} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-secondary/5 border border-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                       <span className="material-symbols-outlined text-xl">analytics</span>
                    </div>
                    <div>
                       <h4 className="font-headline font-bold text-primary text-sm">Data Integrity</h4>
                       <p className="text-[11px] text-slate-400 font-body">Accurate calculations.</p>
                    </div>
                 </FadeUp>
                 <FadeUp delay={0.5} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                       <span className="material-symbols-outlined text-xl">auto_awesome</span>
                    </div>
                    <div>
                       <h4 className="font-headline font-bold text-primary text-sm">Smart Insights</h4>
                       <p className="text-[11px] text-slate-400 font-body">AI-powered forecasting.</p>
                    </div>
                 </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-primary relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <div className="max-w-3xl mx-auto px-8 relative z-10">
            <FadeUp>
               <span className="font-display text-accent text-[11px] font-bold tracking-[0.4em] uppercase mb-10 block opacity-60">Our Vision</span>
            </FadeUp>
            <FadeUp delay={0.2}>
               <blockquote className="font-headline text-3xl md:text-4xl text-white italic leading-tight tracking-tight mb-10">
                 "To become the global standard for academic data management, where every student possesses the clarity to navigate their future with absolute confidence."
               </blockquote>
            </FadeUp>
            <FadeUp delay={0.3} className="text-accent space-y-1">
               <p className="font-headline font-bold text-lg">— The Academia Team</p>
               <p className="text-[10px] tracking-[0.2em] uppercase opacity-40">Building the future of education together.</p>
            </FadeUp>
            <FadeUp delay={0.4} className="mt-12">
               <Button variant="secondary" className="px-10 py-4 text-sm border-secondary hover:bg-white hover:text-primary transition-all duration-500 shadow-xl shadow-secondary/5">
                  Join the Movement
                  <span className="material-symbols-outlined text-xl">trending_flat</span>
               </Button>
            </FadeUp>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
