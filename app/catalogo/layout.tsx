import { Suspense } from 'react'

export default function CatalogoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-primary">Cargando...</div>
      </div>
    }>
      {children}
    </Suspense>
  )
}
