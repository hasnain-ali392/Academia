import Link from 'next/link';

export default function MarketingFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 z-10 w-full relative">
      <div className="w-full py-12 px-6 md:px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-bold font-display text-primary text-xl">Academia</Link>
          <p className="text-slate-500 text-sm font-body">© 2024 Academia EdTech. All rights reserved.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="/features" className="text-slate-500 text-sm font-bold font-display hover:text-brand-blue transition-all duration-200">
            Features
          </Link>
          <Link href="/privacy" className="text-slate-500 text-sm font-bold font-display hover:text-brand-blue transition-all duration-200">
            Privacy
          </Link>
          <Link href="/terms" className="text-slate-500 text-sm font-bold font-display hover:text-brand-blue transition-all duration-200">
            Terms
          </Link>
          <Link href="/help" className="text-slate-500 text-sm font-bold font-display hover:text-brand-blue transition-all duration-200">
            Help Center
          </Link>
        </div>
      </div>
    </footer>
  );
}
