'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'
import { ArrowLeft, GraduationCap, Mail, Lock, ArrowRight, Calculator, TrendingUp, School } from 'lucide-react'

export default function SignInPage() {
  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row bg-white relative">
      {/* Decorative Left Side for Desktop */}
      <div className="hidden md:flex md:w-[32%] bg-primary relative overflow-hidden border-r border-slate-900/50 flex-col justify-center p-8">
        {/* Isometric Pattern */}
        <div className="absolute inset-0 pattern-isometric-cubes opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-transparent opacity-80"></div>
        
        {/* Polished Atmospheric Lighting */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary opacity-20 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/4 -right-8 w-32 h-32 bg-secondary opacity-10 rotate-12 rounded-xl"></div>
        <div className="absolute bottom-1/4 -left-12 w-48 h-24 bg-white/5 rotate-[-15deg] rounded-lg"></div>

        <Link href="/" className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-display text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">Back to Home</span>
        </Link>
        
        <FadeUp>
          <div className="space-y-6 mt-8">
            <div>
               <Link href="/" className="text-xl font-display font-bold text-white tracking-tighter flex items-center gap-2 group w-fit">
                  Academia
               </Link>
            </div>
            <div>
              <h2 className="font-headline text-3xl text-white font-bold mb-3 tracking-tight leading-tight italic">
                 Welcome Back to <br /><span className="text-secondary">Precision.</span>
              </h2>
              <p className="text-accent/60 font-body text-sm leading-relaxed max-w-[280px]">
                 Access your unified academic command center. Track results, predict outcomes, and master your trajectory.
              </p>
            </div>
          </div>
          
          <ul className="space-y-8 mt-12">
            {[
              { icon: <Calculator className="w-5 h-5" />, text: 'GPA Calculator', sub: 'Precision tools to monitor your semester performance in real-time.' },
              { icon: <TrendingUp className="w-5 h-5" />, text: 'CGPA Predictor', sub: 'Forecast your graduation honors with advanced projection algorithms.' },
              { icon: <School className="w-5 h-5" />, text: 'Academic Guidance', sub: 'Personalized insights tailored to your specific course curriculum.' }
            ].map((item, i) => (
              <li key={i} className="flex gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary shrink-0 border border-secondary/10">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-white text-lg tracking-tight">{item.text}</h4>
                  <p className="text-accent/40 text-[10px] uppercase tracking-widest font-bold mt-0.5">{item.sub}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="pt-16">
            <p className="text-accent/30 font-display text-[9px] tracking-[0.3em] uppercase font-bold">© {new Date().getFullYear()} Academia Platform</p>
          </div>
        </FadeUp>
      </div>

      {/* Right Column: Form */}
      <div className="flex-1 flex overflow-hidden items-center justify-center p-4 md:p-6 xl:p-16 relative overflow-y-auto no-scrollbar bg-white">
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

            <h1 className="font-headline text-xl xl:text-3xl text-primary font-bold mb-0.5 xl:mb-2 tracking-tight">Sign In</h1>
            <p className="text-slate-500 mb-4 xl:mb-10 font-body text-[10px] xl:text-sm font-medium">Don't have an account? <Link href="/signup" className="text-secondary font-bold hover:underline">Create one for free</Link></p>
          </FadeUp>

          <form className="space-y-2 xl:space-y-6">
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
                    className="w-full pl-11 pr-4 py-2 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-xs shadow-sm"
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
                    className="w-full pl-11 pr-4 py-2 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-xs shadow-sm"
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
                className="w-full py-2 xl:py-4 text-[11px] xl:text-sm shadow-xl shadow-primary/10 tracking-tight"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Continue to Portal
              </Button>
            </FadeUp>
          </form>

          <FadeUp delay={0.5} className="mt-4 xl:mt-10 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-[9px] uppercase tracking-[0.2em] text-slate-500"><span className="bg-white px-4 font-display font-bold">Or sync with</span></div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-3 xl:mt-8">
              <button className="flex items-center justify-center gap-2 py-2 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-display font-bold text-[9px] tracking-widest uppercase text-primary shadow-sm hover:shadow-md whitespace-nowrap">
                 <img src="https://www.google.com/favicon.ico" className="w-3 h-3" alt="Google" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-2 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-display font-bold text-[9px] tracking-widest uppercase text-primary shadow-sm hover:shadow-md whitespace-nowrap">
                 <img src="https://www.microsoft.com/favicon.ico" className="w-3 h-3" alt="Microsoft" /> Microsoft
              </button>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  )
}
