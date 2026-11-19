import type { WishlistConfig } from '../types'

interface HeaderProps {
  wishlist: WishlistConfig
}

export default function Header({ wishlist }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-linear-to-br from-emerald-950 via-emerald-800 to-emerald-700 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, white 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, white 1px, transparent 1.5px), radial-gradient(circle at 45% 85%, white 1px, transparent 1.5px)',
          backgroundSize: '140px 140px, 200px 200px, 100px 100px',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
        <span className="text-4xl" aria-hidden="true">
          🎄
        </span>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-emerald-200 sm:text-sm">
          {wishlist.subtitle}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-6xl">
          {wishlist.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-emerald-50/90 sm:text-lg">
          {wishlist.message}
        </p>
      </div>
    </header>
  )
}
