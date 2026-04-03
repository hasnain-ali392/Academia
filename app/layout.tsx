import type { Metadata } from 'next'
import { Inter, Lexend, Fraunces, Public_Sans, Sora } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'
import PageTransition from '@/components/layout/PageTransition'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-public-sans' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export const metadata: Metadata = {
  title: 'Academia | Precision Academic Tools',
  description: 'Empowering students with precision-engineered tools for a seamless academic journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.variable} ${lexend.variable} ${fraunces.variable} ${publicSans.variable} ${sora.variable} font-body bg-white text-primary antialiased`}>
        <SmoothScrollProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
