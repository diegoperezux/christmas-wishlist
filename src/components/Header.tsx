import type { GiftList } from '../types'
import TabBar from './TabBar'

interface HeaderProps {
  list: GiftList
  lists: GiftList[]
  activeListId: string
  onListChange: (id: string) => void
}

const themes: Record<GiftList['theme'], { gradient: string; subtitle: string; message: string }> = {
  emerald: {
    gradient: 'from-emerald-950 via-emerald-800 to-emerald-700',
    subtitle: 'text-emerald-200',
    message: 'text-emerald-50/90',
  },
  rose: {
    gradient: 'from-rose-950 via-rose-900 to-rose-700',
    subtitle: 'text-rose-200',
    message: 'text-rose-50/90',
  },
  blue: {
    gradient: 'from-blue-950 via-blue-900 to-blue-700',
    subtitle: 'text-blue-200',
    message: 'text-blue-50/90',
  },
}

export default function Header({ list, lists, activeListId, onListChange }: HeaderProps) {
  const theme = themes[list.theme]

  return (
    <header
      className={`relative overflow-hidden bg-linear-to-br text-white transition-colors duration-500 ${theme.gradient}`}
    >
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
        <p
          className={`mt-4 text-xs font-medium uppercase tracking-[0.3em] sm:text-sm ${theme.subtitle}`}
        >
          {list.subtitle}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-6xl">
          {list.title}
        </h1>
        <p
          className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${theme.message}`}
        >
          {list.message}
        </p>

        <TabBar lists={lists} activeListId={activeListId} onChange={onListChange} />
      </div>
    </header>
  )
}
