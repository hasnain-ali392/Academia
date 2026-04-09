'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'
import { ArrowLeft, GraduationCap, Mail, Lock, ArrowRight, Calculator, TrendingUp, School } from 'lucide-react'

export default function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white relative">
      <Link href="/" className="absolute top-8 left-8 z-50 flex items-center gap-2 text-white/70 hover:text-white transition-colors group hidden md:flex">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="font-display text-[10px] uppercase tracking-[0.2em] font-bold">Back to Home</span>
      </Link>
      
      {/* Left Column: Visual/Marketing */}
      <div className="hidden md:flex flex-col justify-between p-12 bg-primary relative overflow-hidden text-center md:text-left">
        {/* Isometric Pattern */}
        <div className="absolute inset-0 pattern-isometric-cubes opacity-40"></div>
        
        {/* Atmospheric Lighting */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-secondary opacity-30 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary border-2 border-secondary/20 rounded-[3rem] rotate-12 blur-sm"></div>
        
        <div className="relative z-10 space-y-20">
          <div className="pt-10">
            <span className="text-2xl font-display font-bold text-white tracking-tighter flex items-center gap-2 group w-fit">
              Academia
            </span>
          </div>

          <div className="max-w-sm mx-auto md:mx-0">
            <FadeUp>
              <h2 className="font-headline text-5xl text-white font-bold mb-6 tracking-tight leading-tight italic">
                 Welcome Back <br />to <span className="text-secondary">Precision.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-accent/70 text-base font-body leading-relaxed mb-12">
                 Access your unified academic command center. Track results, predict outcomes, and master your trajectory.
              </p>
            </FadeUp>
            
            {/* Feature List */}
            <div className="space-y-8">
              {[
                { icon: <Calculator className="w-5 h-5" />, title: 'GPA Calculator', desc: 'Precision tools to monitor your semester performance in real-time.' },
                { icon: <TrendingUp className="w-5 h-5" />, title: 'CGPA Predictor', desc: 'Forecast your graduation honors with advanced projection algorithms.' },
                { icon: <School className="w-5 h-5" />, title: 'Academic Guidance', desc: 'Personalized insights tailored to your specific course curriculum.' },
              ].map((feature, i) => (
                <FadeUp key={i} delay={0.3 + i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-secondary/20 rounded-xl border border-secondary/10 text-secondary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-headline font-semibold text-lg">{feature.title}</h3>
                      <p className="text-accent/50 text-sm leading-relaxed max-w-[280px]">{feature.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 text-accent/30 text-[10px] font-display tracking-[0.3em] uppercase font-bold">
           © 2024 Academia Platform
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <Link href="/" className="absolute top-8 left-8 z-50 flex items-center gap-2 text-slate-600 hover:text-primary transition-colors group md:hidden">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-display text-[10px] uppercase tracking-[0.2em] font-bold">Back to Home</span>
        </Link>
        <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        
        <div className="w-full max-w-sm relative z-10">
          <FadeUp>
            <div className="md:hidden mb-12">
               <span className="text-xl font-display font-bold text-primary tracking-tight flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
                     <GraduationCap className="w-5 h-5 text-primary" strokeWidth={2.5} />
                  </div>
                  Academia
               </span>
            </div>

            <h1 className="font-headline text-3xl text-primary font-bold mb-2 tracking-tight">Sign In</h1>
            <p className="text-slate-500 mb-10 font-body text-sm font-medium">Don't have an account? <Link href="/signup" className="text-secondary font-bold hover:underline">Create one for free</Link></p>
          </FadeUp>

          <form className="space-y-6">
            <FadeUp delay={0.1}>
              <div className="space-y-1.5">
                <label className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-[0.1em] block">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-secondary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="name@university.edu"
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-sm shadow-sm"
                  />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <label className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-[0.1em] block">Password</label>
                  <Link href="#" className="text-[10px] text-secondary font-bold hover:underline uppercase tracking-tight">Forgot?</Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-secondary">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-sm shadow-sm"
                  />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex items-center gap-3">
                 <input type="checkbox" id="remember" className="w-3.5 h-3.5 rounded border-slate-300 text-secondary focus:ring-secondary/20" />
                 <label htmlFor="remember" className="text-[12px] text-slate-500 font-body font-medium">Remember me for 30 days</label>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <Button 
                variant="primary" 
                className="w-full py-4 text-sm shadow-xl shadow-primary/10 tracking-tight"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Continue to Portal
              </Button>
            </FadeUp>
          </form>

          <FadeUp delay={0.5} className="mt-10 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-[9px] uppercase tracking-[0.2em] text-slate-500"><span className="bg-white px-4 font-display font-bold">Or sync with</span></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button className="flex items-center justify-center gap-3 py-2.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-display font-bold text-[10px] tracking-widest uppercase text-primary shadow-sm hover:shadow-md whitespace-nowrap">
                 <img src="https://www.google.com/favicon.ico" className="w-3 h-3" alt="Google" /> Google
              </button>
              <button className="flex items-center justify-center gap-3 py-2.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-display font-bold text-[10px] tracking-widest uppercase text-primary shadow-sm hover:shadow-md whitespace-nowrap">
                 <img src="https://www.microsoft.com/favicon.ico" className="w-3 h-3" alt="Microsoft" /> Microsoft
              </button>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  )
}
