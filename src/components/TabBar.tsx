import type { KeyboardEvent } from 'react'
import { useRef } from 'react'
import type { GiftList } from '../types'

interface TabBarProps {
  lists: GiftList[]
  activeListId: string
  onChange: (id: string) => void
}

export default function TabBar({ lists, activeListId, onChange }: TabBarProps) {
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([])

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return

    event.preventDefault()
    const delta = event.key === 'ArrowRight' ? 1 : -1
    const nextIndex = (index + delta + lists.length) % lists.length
    onChange(lists[nextIndex].id)
    buttonsRef.current[nextIndex]?.focus()
  }

  return (
    <div
      role="tablist"
      aria-label="Listas de regalos"
      className="mt-8 flex flex-wrap justify-center gap-2"
    >
      {lists.map((list, index) => {
        const isActive = list.id === activeListId
        return (
          <button
            key={list.id}
            ref={(element) => {
              buttonsRef.current[index] = element
            }}
            type="button"
            role="tab"
            id={`tab-${list.id}`}
            aria-selected={isActive}
            aria-controls="gift-panel"
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(list.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              isActive
                ? 'bg-white text-stone-900 shadow-sm'
                : 'bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20'
            }`}
          >
            {list.ownerName}
          </button>
        )
      })}
    </div>
  )
}
