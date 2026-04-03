'use client'
import Link from 'next/link'
import { GraduationCap, Share2, Globe } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <FadeUp delay={0.1} className="col-span-1 md:col-span-1">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-2xl font-display font-bold text-primary tracking-tight flex items-center gap-2 group w-fit">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
                   <GraduationCap className="w-5 h-5 text-primary" strokeWidth={2.5} />
                </div>
                Academia
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed font-body">
                Empowering students with precision tools and AI-driven insights for a smarter academic journey.
              </p>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2} className="col-span-1">
            <h4 className="font-display font-bold text-primary mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="#calculator" className="hover:text-primary transition-colors">GPA Calculator</Link></li>
              <li><Link href="#predictor" className="hover:text-primary transition-colors">CGPA Predictor</Link></li>
              <li><Link href="#guidance" className="hover:text-primary transition-colors">Career Guidance</Link></li>
              <li><Link href="#results" className="hover:text-primary transition-colors">Result Checking</Link></li>
            </ul>
          </FadeUp>

          <FadeUp delay={0.3} className="col-span-1">
            <h4 className="font-display font-bold text-primary mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#press" className="hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </FadeUp>

          <FadeUp delay={0.4} className="col-span-1">
            <h4 className="font-display font-bold text-primary mb-6 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#help" className="hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </FadeUp>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-xs text-slate-600 font-medium">
            © 2024 Academia Platform. All rights reserved.
          </p>
          <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" strokeWidth={2} />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                <Globe className="w-5 h-5" strokeWidth={2} />
              </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
