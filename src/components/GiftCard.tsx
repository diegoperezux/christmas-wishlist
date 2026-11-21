import type { Gift, Priority } from '../types'
import { asset } from '../lib/asset'
import GiftGallery from './GiftGallery'

interface GiftCardProps {
  gift: Gift
}

const priorityStyles: Record<Priority, string> = {
  alta: 'bg-red-100 text-red-700 ring-red-200',
  media: 'bg-amber-100 text-amber-700 ring-amber-200',
  baja: 'bg-stone-100 text-stone-600 ring-stone-200',
}

const priorityLabels: Record<Priority, string> = {
  alta: 'Lo quiero mucho',
  media: 'Me gustaría',
  baja: 'Si te nace',
}

function formatPrice(gift: Gift): string | null {
  if (gift.price === undefined) return null
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: gift.currency ?? 'MXN',
    maximumFractionDigits: 0,
  }).format(gift.price)
}

function renderBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-stone-800">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

export default function GiftCard({ gift }: GiftCardProps) {
  const price = formatPrice(gift)
  const photos = (gift.images ?? (gift.image ? [gift.image] : [])).map(asset)

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/60">
      <div className="relative">
        <GiftGallery photos={photos} title={gift.title} />

        {gift.priority && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium ring-1 ${priorityStyles[gift.priority]}`}
          >
            {priorityLabels[gift.priority]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {gift.category && (
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-700">
            {gift.category}
          </p>
        )}
        <h3 className="mt-1 font-serif text-xl font-semibold text-stone-900">
          {gift.title}
        </h3>
        {gift.description && (
          <p className="mt-2 text-sm leading-relaxed text-stone-600">{renderBold(gift.description)}</p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          {price && <span className="text-sm font-semibold text-stone-900">{price}</span>}
          <a
            href={gift.storeUrl ?? `https://www.google.com/search?q=${encodeURIComponent(gift.title)}`}
            target="_blank"
            rel="noreferrer"
            className="ml-auto items-center inline-flex gap-1 rounded-full bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-800 focus-visible:outline-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {gift.storeUrl ? 'Ver en tienda' : 'Buscar en Google'}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  )
}
