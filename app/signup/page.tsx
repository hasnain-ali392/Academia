'use client'
import Link from 'next/link'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'
import { ArrowLeft, GraduationCap, Calculator, Sparkles, ShieldCheck, Lock, UserPlus } from 'lucide-react'

export default function SignUpPage() {
  return (
    <div className="min-h-screen lg:h-screen bg-white relative lg:overflow-hidden flex flex-col lg:flex-row">
      <Link href="/" className="absolute top-6 left-6 z-50 flex items-center gap-2 text-slate-600 hover:text-primary transition-colors group lg:hidden">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="font-display text-[10px] uppercase tracking-[0.2em] font-bold">Back to Home</span>
      </Link>
      
      {/* Decorative Left Side for Desktop */}
      <div className="hidden lg:flex lg:w-[32%] bg-slate-50 relative overflow-hidden border-r border-slate-100 flex-col justify-center p-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <Link href="/" className="absolute top-6 left-6 z-50 flex items-center gap-2 text-slate-600 hover:text-primary transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-display text-[10px] uppercase tracking-[0.2em] font-bold">Back to Home</span>
        </Link>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        
        <FadeUp>
          <div className="space-y-5">
            <div>
               <Link href="/" className="text-xl font-display font-bold text-primary tracking-tight flex items-center gap-2 group w-fit">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
                     <GraduationCap className="w-5 h-5 text-primary" strokeWidth={2.5} />
                  </div>
                  Academia
               </Link>
            </div>
            <div>
              <h2 className="font-headline text-2xl text-primary font-bold mb-2 tracking-tight leading-tight">The Future of <br />Academic Clarity.</h2>
              <p className="text-slate-500 font-body text-xs leading-relaxed">
                 Join the elite community of students mastering their trajectory with unified data insights.
              </p>
            </div>
          </div>
          
          <ul className="space-y-3 mt-6">
              {[
                { icon: <Calculator className="w-4 h-4" />, text: 'Universal CGPA Tracking', sub: 'Simplified grading systems.' },
                { icon: <Sparkles className="w-4 h-4" />, text: 'AI Career Forecasting', sub: 'Predictive data insights.' },
                { icon: <ShieldCheck className="w-4 h-4" />, text: 'Verified Results', sub: 'Direct portal sync.' }
              ].map((item, i) => (
               <li key={i} className="flex gap-3 group">
                   <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-secondary shadow-sm transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary shrink-0">
                      {item.icon}
                   </div>
                  <div>
                     <h4 className="font-headline font-bold text-primary text-[12px] tracking-tight">{item.text}</h4>
                     <p className="text-[10px] text-slate-500 font-body uppercase tracking-wider font-medium">{item.sub}</p>
                  </div>
               </li>
             ))}
          </ul>
        </FadeUp>
      </div>

      {/* Main Signup Form Container */}
      <div className="flex-1 flex items-center justify-center px-8 py-10 lg:px-10 lg:py-6 relative overflow-hidden bg-white">
        <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-md relative z-10">
          <FadeUp>
             <div className="lg:hidden mb-8 text-center md:text-left">
                  <Link href="/" className="text-xl font-display font-bold text-primary tracking-tight flex items-center gap-2 group">
                     <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
                        <GraduationCap className="w-5 h-5 text-primary" strokeWidth={2.5} />
                     </div>
                     Academia
                  </Link>
             </div>
             
             <h1 className="font-headline text-3xl text-primary font-bold mb-1 tracking-tight">Create Your Account</h1>
             <p className="text-slate-500 mb-5 font-body text-sm font-medium">Begin your transition to precision academic management. Already have an account? <Link href="/signin" className="text-secondary font-bold hover:underline">Sign In</Link></p>
          </FadeUp>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <FadeUp delay={0.1}>
                <div className="space-y-1">
                  <label className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-[0.1em] block">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-sm shadow-sm" />
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="space-y-1">
                  <label className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-[0.1em] block">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-sm shadow-sm" />
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.2}>
              <div className="space-y-1">
                <label className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-[0.1em] block">Academic Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-secondary">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="john.doe@university.edu" 
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-sm shadow-sm"
                  />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="space-y-1">
                <label className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-[0.1em] block">Security Passphrase</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-secondary">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input 
                    type="password" 
                    placeholder="Min. 8 characters" 
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-sm shadow-sm"
                  />
                </div>
              </div>
            </FadeUp>

             <FadeUp delay={0.4}>
              <div className="flex items-start gap-3">
                 <input type="checkbox" id="terms" className="mt-0.5 w-3.5 h-3.5 rounded border-slate-300 text-secondary focus:ring-secondary/20 shadow-sm shrink-0" />
                  <label htmlFor="terms" className="text-[11px] text-slate-500 font-body leading-relaxed">
                    I agree to the <Link href="#" className="font-bold underline text-slate-600">Terms of Service</Link> and <Link href="#" className="font-bold underline text-slate-600">Privacy Policy</Link>. Academia will securely store my academic data.
                  </label>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <Button 
                variant="secondary" 
                className="w-full py-3 text-sm shadow-xl shadow-secondary/10 transition-all hover:translate-y-[-2px]"
                icon={<UserPlus className="w-4 h-4" />}
              >
                Initialize Account Sync
              </Button>
            </FadeUp>
          </form>

          <FadeUp delay={0.6} className="mt-5 text-center text-slate-400 font-body text-[13px]">
             Already part of the network? <Link href="/signin" className="text-primary font-bold hover:underline">Sign In Instead</Link>
          </FadeUp>
        </div>
      </div>
    </div>
  )
}
