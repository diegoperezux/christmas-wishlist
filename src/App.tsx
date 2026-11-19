import { useMemo, useState } from 'react'
import FilterBar from './components/FilterBar'
import Footer from './components/Footer'
import GiftGrid from './components/GiftGrid'
import Header from './components/Header'
import { gifts } from './data/gifts'
import { wishlist } from './data/wishlist'

const ALL_CATEGORIES = 'Todas'

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(ALL_CATEGORIES)

  const categories = useMemo(() => {
    const unique = new Set(
      gifts.map((gift) => gift.category).filter((value): value is string => Boolean(value)),
    )
    return [ALL_CATEGORIES, ...Array.from(unique).sort((a, b) => a.localeCompare(b))]
  }, [])

  const filteredGifts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return gifts.filter((gift) => {
      const matchesCategory = category === ALL_CATEGORIES || gift.category === category
      const matchesQuery =
        normalizedQuery === '' ||
        gift.title.toLowerCase().includes(normalizedQuery) ||
        (gift.description?.toLowerCase().includes(normalizedQuery) ?? false)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <div className="min-h-screen bg-stone-50 text-stone-700">
      <Header wishlist={wishlist} />

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

      <Footer ownerName={wishlist.ownerName} />
    </div>
  )
}
