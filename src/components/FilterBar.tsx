interface FilterBarProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  query: string
  onQueryChange: (query: string) => void
}

export default function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
}: FilterBarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isActive
                  ? 'bg-emerald-700 text-white'
                  : 'bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-100'
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      <label className="relative block sm:w-64">
        <span className="sr-only">Buscar regalo</span>
        <span
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
          aria-hidden="true"
        >
          🔍
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Buscar regalo…"
          className="w-full rounded-full border-0 bg-white py-2 pl-10 pr-4 text-sm text-stone-700 ring-1 ring-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </label>
    </div>
  )
}
