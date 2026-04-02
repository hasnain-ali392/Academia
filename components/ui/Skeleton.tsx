import { cn } from '@/lib/utils'

type SkeletonProps = {
  className?: string
  variant?: 'text' | 'circle' | 'rect' | 'card'
}

export function Skeleton({ className, variant = 'rect' }: SkeletonProps) {
  const base = 'animate-pulse bg-gradient-to-r from-ag-neutral via-ag-mist/10 to-ag-neutral bg-[length:200%_100%]'
  
  const variants = {
    text:   'h-4 rounded-full w-full',
    circle: 'rounded-full aspect-square',
    rect:   'rounded-xl',
    card:   'rounded-2xl h-64 w-full',
  }

  return <div className={cn(base, variants[variant], className)} />
}

export function SkeletonCard() {
  return (
    <div className="glass rounded-2xl p-6 space-y-4">
      <Skeleton variant="circle" className="w-12 h-12" />
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-5/6" />
    </div>
  )
}

export function SkeletonHero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
      <Skeleton variant="text" className="w-32 h-3" />
      <Skeleton variant="rect" className="w-2/3 h-24 md:h-36" />
      <Skeleton variant="text" className="w-96 h-5" />
      <div className="flex gap-4 mt-4">
        <Skeleton variant="rect" className="w-36 h-12" />
        <Skeleton variant="rect" className="w-36 h-12" />
      </div>
    </div>
  )
}
