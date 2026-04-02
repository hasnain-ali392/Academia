'use client'
import Button from '@/components/ui/Button'
import FadeUp from '@/components/motion/FadeUp'

export default function CTA() {
  return (
    <section className="py-20 bg-ag-void relative overflow-hidden">
      <div className="absolute inset-0 noise opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="bg-ag-neutral rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-ag-lift/10">
            <div className="absolute inset-0 z-0">
              {/* Animated Lines/Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#1E1E2A_70%)] z-10 pointer-events-none"></div>
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(110,255,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(110,255,196,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>
            
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-ag-lift/10 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-10 max-w-3xl mx-auto uppercase tracking-wide leading-tight">
                Engage Target Orbit Today.
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button variant="primary" className="px-10 py-4 text-base">
                   Initialize Thrusters
                </Button>
                <Button variant="outline" className="px-10 py-4 text-base border-ag-mist/20 text-ag-mist hover:border-ag-lift">
                   Review Protocols
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
