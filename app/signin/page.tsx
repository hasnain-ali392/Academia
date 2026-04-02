'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'

export default function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      
      {/* Left Column: Visual/Marketing */}
      <div className="hidden md:flex flex-col justify-between p-12 bg-primary relative overflow-hidden text-center md:text-left">
        <div className="absolute inset-0 opacity-[0.05] bg-grid-pattern"></div>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-accent/10">
              <span className="material-symbols-outlined text-primary font-bold">school</span>
            </div>
            <span className="font-headline font-bold text-xl text-white tracking-tight">Academia</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-sm mx-auto md:mx-0">
          <FadeUp>
            <h2 className="font-headline text-4xl text-white font-bold mb-6 tracking-tight leading-tight italic">
              Welcome Back <br />to Precision.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-accent/60 text-base font-body leading-relaxed mb-10 opacity-80">
              Access your unified academic command center and continue your journey toward excellence.
            </p>
          </FadeUp>
          
          <div className="flex gap-3 justify-center md:justify-start">
             <div className="w-10 h-1 bg-accent rounded-full"></div>
             <div className="w-3 h-1 bg-white/10 rounded-full"></div>
             <div className="w-3 h-1 bg-white/10 rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 text-white/30 text-[10px] font-display tracking-[0.2em] uppercase font-bold">
          © 2024 Academia Platforms Inc.
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        
        <div className="w-full max-w-sm relative z-10">
          <FadeUp>
            <div className="md:hidden mb-12">
               <Link href="/" className="inline-flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg">
                     <span className="material-symbols-outlined text-[14px] font-bold">school</span>
                  </div>
                  <span className="font-headline font-bold text-lg text-primary tracking-tight">Academia</span>
               </Link>
            </div>

            <h1 className="font-headline text-3xl text-primary font-bold mb-2 tracking-tight">Sign In</h1>
            <p className="text-slate-400 mb-10 font-body text-sm">Don't have an account? <Link href="/signup" className="text-secondary font-bold hover:underline">Create one for free</Link></p>
          </FadeUp>

          <form className="space-y-6">
            <FadeUp delay={0.1}>
              <div className="space-y-1.5">
                <label className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-[0.1em] block">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-secondary">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
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
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-secondary">
                    <span className="material-symbols-outlined text-[18px]">lock</span>
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
                 <label htmlFor="remember" className="text-[12px] text-slate-400 font-body">Remember me for 30 days</label>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <Button variant="primary" className="w-full py-4 text-sm shadow-xl shadow-primary/10 tracking-tight">
                Continue to Portal
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Button>
            </FadeUp>
          </form>

          <FadeUp delay={0.5} className="mt-10 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-[9px] uppercase tracking-[0.2em] text-slate-400"><span className="bg-white px-4 font-display font-bold">Or sync with</span></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button className="flex items-center justify-center gap-3 py-2.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-display font-bold text-[10px] tracking-widest uppercase text-primary shadow-sm hover:shadow-md">
                 <img src="https://www.google.com/favicon.ico" className="w-3 h-3" alt="Google" /> Google
              </button>
              <button className="flex items-center justify-center gap-3 py-2.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-display font-bold text-[10px] tracking-widest uppercase text-primary shadow-sm hover:shadow-md">
                 <img src="https://www.microsoft.com/favicon.ico" className="w-3 h-3" alt="Microsoft" /> Microsoft
              </button>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  )
}
