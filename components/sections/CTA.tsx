'use client'
import Button from '@/components/ui/Button'
import FadeUp from '@/components/motion/FadeUp'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <FadeUp>
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none geometric-pattern"></div>
            
            {/* Subtle Glows & Shapes */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="font-display text-accent text-[11px] font-bold tracking-[0.4em] uppercase mb-8 block opacity-80">Ready to Begin?</span>
              <h2 className="font-headline font-bold text-3xl md:text-5xl text-white mb-10 leading-tight tracking-tight">
                Empower your academic journey with <span className="italic text-accent underline decoration-accent/20 underline-offset-[10px]">absolute precision.</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/signup">
                  <Button variant="secondary" className="px-8 py-3.5 text-sm border-secondary hover:bg-white hover:text-primary transition-all duration-500 shadow-lg shadow-secondary/10">
                     Create Free Account
                     <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Button>
                </Link>
                <Link href="/signin">
                  <Button variant="ghost" className="px-8 py-3.5 text-sm text-white/80 border-white/10 hover:border-white hover:bg-white/5">
                     Access Member Portal
                  </Button>
                </Link>
              </div>
              <p className="mt-10 text-accent/40 text-[10px] font-display tracking-[0.2em] uppercase font-bold">
                Trusted by 50,000+ Students Worldwide
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
