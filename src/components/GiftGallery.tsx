import { useState } from 'react'

interface GiftGalleryProps {
  photos: string[]
  title: string
}

export default function GiftGallery({ photos, title }: GiftGalleryProps) {
  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState<Record<number, boolean>>({})

  const current = photos[index]
  const showImage = photos.length > 0 && !failed[index]

  const go = (delta: number) => {
    setIndex((prev) => (prev + delta + photos.length) % photos.length)
  }

  return (
    <div className="relative aspect-4/3 overflow-hidden bg-white">
      {showImage ? (
        <img
          src={current}
          alt={photos.length > 1 ? `${title} — foto ${index + 1} de ${photos.length}` : title}
          loading="lazy"
          onError={() => setFailed((prev) => ({ ...prev, [index]: true }))}
          className="h-full w-full object-contain"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-linear-to-br from-emerald-50 to-stone-100 text-5xl"
          aria-hidden="true"
        >
          🎁
        </div>
      )}

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-stone-700 shadow-md ring-1 ring-stone-300 transition hover:bg-white focus-visible:outline-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Foto siguiente"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-stone-700 shadow-md ring-1 ring-stone-300 transition hover:bg-white focus-visible:outline-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {photos.map((photo, photoIndex) => (
              <button
                key={photo}
                type="button"
                onClick={() => setIndex(photoIndex)}
                aria-label={`Ver foto ${photoIndex + 1}`}
                aria-current={photoIndex === index}
                className={`h-2 w-2 rounded-full transition ${
                  photoIndex === index ? 'bg-emerald-700' : 'bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
