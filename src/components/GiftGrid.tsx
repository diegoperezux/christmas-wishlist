import type { Gift } from '../types'
import GiftCard from './GiftCard'

interface GiftGridProps {
  gifts: Gift[]
}

export default function GiftGrid({ gifts }: GiftGridProps) {
  if (gifts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-16 text-center">
        <span className="text-4xl" aria-hidden="true">
          🔎
        </span>
        <p className="mt-4 font-serif text-lg font-semibold text-stone-800">
          No encontré regalos con ese filtro
        </p>
        <p className="mt-1 text-sm text-stone-500">
          Prueba con otra categoría o borra la búsqueda.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {gifts.map((gift) => (
        <GiftCard key={gift.id} gift={gift} />
      ))}
    </div>
  )
}
