import Link from 'next/link';

export default function MarketingNavbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center h-16">
        <div className="text-2xl font-black text-primary tracking-tight font-display">
          <Link href="/">Academia</Link>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-primary font-bold font-display text-sm hover:text-brand-blue transition-colors duration-200">
            Features
          </Link>
          <Link href="/help" className="text-slate-600 font-bold font-display text-sm hover:text-brand-blue transition-colors duration-200">
            Help Center
          </Link>
          <Link href="/privacy" className="text-slate-600 font-bold font-display text-sm hover:text-brand-blue transition-colors duration-200">
            Privacy
          </Link>
          <Link href="/terms" className="text-slate-600 font-bold font-display text-sm hover:text-brand-blue transition-colors duration-200">
            Terms
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link href="/signin" className="px-4 py-2 text-primary font-bold font-display text-sm hover:text-brand-blue transition-colors">
            Log In
          </Link>
          <Link href="/signup" className="bg-primary text-white px-5 py-2.5 rounded-xl font-display text-sm font-bold hover:bg-brand-blue transition-all active:scale-95 shadow-md shadow-brand-blue/10">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
