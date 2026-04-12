import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Showcase from '@/components/sections/Showcase'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-white sm:overflow-x-hidden">
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
        <CTA />
      </main>
    </div>
  )
}
