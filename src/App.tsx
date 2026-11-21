import { useEffect, useMemo, useState } from 'react'
import FilterBar from './components/FilterBar'
import Footer from './components/Footer'
import GiftGrid from './components/GiftGrid'
import Header from './components/Header'
import { lists } from './data/lists'

const ALL_CATEGORIES = 'Todas'

export default function App() {
  const [activeListId, setActiveListId] = useState(lists[0].id)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(ALL_CATEGORIES)

  const activeList = lists.find((list) => list.id === activeListId) ?? lists[0]

  useEffect(() => {
    document.title = `${activeList.title} 🎄 — ${activeList.ownerName}`
  }, [activeList])

  const categories = useMemo(() => {
    const unique = new Set(
      activeList.gifts
        .map((gift) => gift.category)
        .filter((value): value is string => Boolean(value)),
    )
    return [ALL_CATEGORIES, ...Array.from(unique).sort((a, b) => a.localeCompare(b))]
  }, [activeList])

  const filteredGifts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return activeList.gifts.filter((gift) => {
      const matchesCategory = category === ALL_CATEGORIES || gift.category === category
      const matchesQuery =
        normalizedQuery === '' ||
        gift.title.toLowerCase().includes(normalizedQuery) ||
        (gift.description?.toLowerCase().includes(normalizedQuery) ?? false)
      return matchesCategory && matchesQuery
    })
  }, [activeList, query, category])

  const handleListChange = (listId: string) => {
    setActiveListId(listId)
    setQuery('')
    setCategory(ALL_CATEGORIES)
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-700">
      <div
        id="gift-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeList.id}`}
        tabIndex={0}
        className="focus-visible:outline-none"
      >
        <Header
          list={activeList}
          lists={lists}
          activeListId={activeListId}
          onListChange={handleListChange}
        />

        <main className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
          <FilterBar
            categories={categories}
            activeCategory={category}
            onCategoryChange={setCategory}
            query={query}
            onQueryChange={setQuery}
          />

          <p className="mb-6 text-sm text-stone-500">
            {filteredGifts.length} {filteredGifts.length === 1 ? 'regalo' : 'regalos'}
          </p>

          <GiftGrid gifts={filteredGifts} />
        </main>
      </div>

      <Footer ownerName={activeList.ownerName} />
    </div>
  )
}
