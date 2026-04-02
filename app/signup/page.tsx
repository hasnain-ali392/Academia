'use client'
import Link from 'next/link'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col md:flex-row">
      
      {/* Decorative Left Side for Desktop */}
      <div className="hidden lg:flex lg:w-1/3 bg-slate-50 relative overflow-hidden border-r border-slate-100 flex-col justify-center p-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        
        <FadeUp>
          <div className="mb-10">
             <Link href="/" className="inline-flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/10 transition-transform hover:rotate-12">
                   <span className="material-symbols-outlined text-xl font-bold">school</span>
                </div>
             </Link>
          </div>
          <h2 className="font-headline text-3xl text-primary font-bold mb-6 tracking-tight leading-tight">The Future of <br />Academic Clarity.</h2>
          <p className="text-slate-400 font-body text-sm leading-relaxed mb-10 opacity-80">
             Join the elite community of students mastering their trajectory with unified data insights.
          </p>
          
          <ul className="space-y-6">
             {[
               { icon: 'calculate', text: 'Universal CGPA Tracking', sub: 'Simplified grading systems.' },
               { icon: 'auto_awesome', text: 'AI Career Forecasting', sub: 'Predictive data insights.' },
               { icon: 'verified', text: 'Verified Results', sub: 'Direct portal sync.' }
             ].map((item, i) => (
               <li key={i} className="flex gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-secondary shadow-sm transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                     <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  </div>
                  <div>
                     <h4 className="font-headline font-bold text-primary text-[13px] tracking-tight">{item.text}</h4>
                     <p className="text-[10px] text-slate-400 font-body uppercase tracking-wider">{item.sub}</p>
                  </div>
               </li>
             ))}
          </ul>
        </FadeUp>
      </div>

      {/* Main Signup Form Container */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-12 lg:p-16 relative overflow-hidden bg-white">
        <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-lg relative z-10">
          <FadeUp>
             <div className="lg:hidden mb-12 text-center md:text-left">
                <Link href="/" className="inline-flex items-center gap-3">
                   <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-sm font-bold">school</span>
                   </div>
                   <span className="font-headline font-bold text-lg text-primary tracking-tight">Academia</span>
                </Link>
             </div>
             
             <h1 className="font-headline text-3xl md:text-4xl text-primary font-bold mb-2 tracking-tight">Create Your Account</h1>
             <p className="text-slate-400 mb-10 font-body text-sm">Begin your transition to precision academic management. <br />Already have an account? <Link href="/signin" className="text-secondary font-bold hover:underline">Sign In</Link></p>
          </FadeUp>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <FadeUp delay={0.1}>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-[0.1em] block">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-sm shadow-sm" />
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-[0.1em] block">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-sm shadow-sm" />
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.2}>
              <div className="space-y-1.5">
                <label className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-[0.1em] block">Academic Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-secondary">
                    <span className="material-symbols-outlined text-[18px]">school</span>
                  </div>
                  <input 
                    type="email" 
                    placeholder="john.doe@university.edu" 
                    className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-sm shadow-sm"
                  />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="space-y-1.5">
                <label className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-[0.1em] block">Security Passphrase</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-secondary">
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                  </div>
                  <input 
                    type="password" 
                    placeholder="Min. 8 characters" 
                    className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-100 rounded-xl outline-none focus:border-secondary focus:bg-white transition-all font-body text-primary text-sm shadow-sm"
                  />
                </div>
              </div>
            </FadeUp>

             <FadeUp delay={0.4}>
              <div className="flex items-start gap-3">
                 <input type="checkbox" id="terms" className="mt-1 w-3.5 h-3.5 rounded border-slate-300 text-secondary focus:ring-secondary/20 shadow-sm" />
                 <label htmlFor="terms" className="text-[11px] text-slate-400 font-body leading-relaxed opacity-80">
                   I agree to the <Link href="#" className="font-bold underline text-slate-500">Terms of Service</Link> and <Link href="#" className="font-bold underline text-slate-500">Privacy Policy</Link>. I understand that Academia will securely store my academic record data point metrics for my future portal syncing.
                 </label>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <Button variant="secondary" className="w-full py-4 text-sm shadow-xl shadow-secondary/10 transition-all hover:translate-y-[-2px]">
                Initialize Account Sync
                <span className="material-symbols-outlined text-lg">verified_user</span>
              </Button>
            </FadeUp>
          </form>

          <FadeUp delay={0.6} className="mt-8 text-center text-slate-400 font-body text-[13px]">
             Already part of the network? <Link href="/signin" className="text-primary font-bold hover:underline">Sign In Instead</Link>
          </FadeUp>
        </div>
      </div>
    </div>
  )
}
