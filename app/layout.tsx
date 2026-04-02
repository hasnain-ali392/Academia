import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'
import PageTransition from '@/components/layout/PageTransition'
import Cursor from '@/components/ui/Cursor'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Antigravity | Stitch Design',
  description: 'A pixel-perfect, production-ready Next.js application with world-class animations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-body bg-ag-void text-ag-mist antialiased`} style={{ cursor: 'none' }}>
        <Cursor />
        <SmoothScrollProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
