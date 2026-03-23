import { useState, useRef, useEffect } from 'react'
import { usePokemonStore } from '../store/usePokemonStore'

const TYPES = [
  'normal','fire','water','electric','grass','ice','fighting','poison',
  'ground','flying','psychic','bug','rock','ghost','dragon',
]

const EGG_GROUPS = [
  'monster', 'water1', 'water2', 'water3', 'bug', 'flying',
  'field', 'fairy', 'grass', 'human-like', 'mineral',
  'amorphous', 'ditto', 'dragon', 'no-eggs',
]

function formatEggGroup(slug) {
  if (slug === 'no-eggs') return 'No Eggs'
  return slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
}

export function FilterBar({ totalCount, filteredCount }) {
  const {
    gameConfig,
    dexView, setDexView,
    searchQuery, filterType, filterLocation, filterMethods, filterVersion, filterCaught, filterEggGroups, sortBy,
    locations, setSearch, setFilterType, setFilterLocation, setFilterMethods, setFilterVersion,
    setFilterCaught, setFilterEggGroups, setSortBy, resetFilters, getMethodsForLocation,
  } = usePokemonStore()

  const [eggGroupOpen, setEggGroupOpen] = useState(false)
  const [methodOpen, setMethodOpen] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(() => window.innerWidth >= 640)
  const eggDropRef = useRef(null)
  const methodDropRef = useRef(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    if (!eggGroupOpen && !methodOpen) return
    function handleClick(e) {
      if (eggGroupOpen && eggDropRef.current && !eggDropRef.current.contains(e.target)) {
        setEggGroupOpen(false)
      }
      if (methodOpen && methodDropRef.current && !methodDropRef.current.contains(e.target)) {
        setMethodOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [eggGroupOpen, methodOpen])

  function toggleEggGroup(g) {
    const next = filterEggGroups.includes(g)
      ? filterEggGroups.filter(x => x !== g)
      : [...filterEggGroups, g]
    setFilterEggGroups(next)
  }

  function toggleMethod(m) {
    const next = filterMethods.includes(m)
      ? filterMethods.filter(x => x !== m)
      : [...filterMethods, m]
    setFilterMethods(next)
  }

  const availableMethods = getMethodsForLocation()

  const methodLabel =
    filterMethods.length === 0 ? 'All Methods'
    : filterMethods.length === 1 ? (availableMethods.find(m => m.method === filterMethods[0])?.methodDisplay ?? filterMethods[0])
    : `${filterMethods.length} Methods`

  const eggGroupLabel =
    filterEggGroups.length === 0 ? 'Egg Group'
    : filterEggGroups.length === 1 ? formatEggGroup(filterEggGroups[0])
    : `${filterEggGroups.length} Groups`

  const isFiltered = searchQuery || filterType || filterLocation || filterMethods.length > 0 || filterVersion || filterCaught || filterEggGroups.length > 0

  if (!gameConfig) return null

  const { regionalDex, nationalLabel, regionalDex: { activeClass, activeTextClass } } = gameConfig

  return (
    <div className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3 space-y-1.5 sm:space-y-2">

        {/* Row 1: Dex toggle — prominent, full width */}
        <div className="flex rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden text-sm font-semibold">
          <button
            onClick={() => setDexView('regional')}
            className={`flex-1 py-1.5 sm:py-2 transition-colors flex items-center justify-center gap-1 sm:gap-2
              ${dexView === 'regional'
                ? `${activeClass} text-white`
                : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
          >
            🗺️ {regionalDex.label}
            <span className={`text-xs font-normal ${dexView === 'regional' ? activeTextClass : 'text-gray-400 dark:text-gray-500'}`}>
              {regionalDex.range}
            </span>
          </button>
          <button
            onClick={() => setDexView('national')}
            className={`flex-1 py-1.5 sm:py-2 transition-colors flex items-center justify-center gap-1 sm:gap-2 border-l border-gray-200 dark:border-gray-700
              ${dexView === 'national'
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
          >
            🌍 National Dex
            <span className={`text-xs font-normal ${dexView === 'national' ? 'text-indigo-200' : 'text-gray-400 dark:text-gray-500'}`}>
              {nationalLabel}
            </span>
          </button>
        </div>

        {/* Filter toggle — shown on all screen sizes */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setFiltersOpen(o => !o)}
            className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h4a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Filters
            {isFiltered && (
              <span className="ml-1 bg-blue-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center" aria-label="Filters active">
                ●
              </span>
            )}
            <span className={`text-[10px] transition-transform duration-150 ${filtersOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            {isFiltered ? (
              <span>{filteredCount} / {totalCount} shown</span>
            ) : (
              <span>{totalCount} Pokémon</span>
            )}
            {isFiltered && (
              <button
                onClick={resetFilters}
                className="text-xs text-red-500 hover:text-red-700 border border-red-200 hover:border-red-400 rounded px-2 py-1 transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Search + Sort */}
        <div className={`flex gap-2 flex-wrap items-center ${filtersOpen ? '' : 'hidden'}`}>
          <input
            type="search"
            placeholder="Search name or #..."
            value={searchQuery}
            onChange={e => setSearch(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-base sm:text-sm w-40 sm:w-44 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="id">Sort: # (Dex)</option>
            <option value="name">Sort: Name</option>
            <option value="type">Sort: Type</option>
            {gameConfig.hasSortStory && (
              <option value="story">Sort: Story Order</option>
            )}
          </select>

        </div>

        {/* Row 3: Filters */}
        <div className={`flex gap-2 flex-wrap items-center ${filtersOpen ? '' : 'hidden'}`}>
          <select
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 capitalize focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Types</option>
            {TYPES.map(t => (
              <option key={t} value={t} className="capitalize">{t.charAt(0).toUpperCase() + t.slice(1)}</option>
            ))}
          </select>

          <select
            value={filterLocation}
            onChange={e => setFilterLocation(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 max-w-[160px] sm:max-w-[200px]"
          >
            <option value="">All Locations</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          {/* Method multiselect dropdown */}
          <div className="relative" ref={methodDropRef}>
            <button
              onClick={() => setMethodOpen(o => !o)}
              className={`flex items-center gap-1.5 border rounded-lg px-2 py-1.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
                ${filterMethods.length > 0
                  ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              <span className="whitespace-nowrap">{methodLabel}</span>
              <span className={`text-[10px] transition-transform duration-150 ${methodOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {methodOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 py-1 min-w-[160px] max-h-64 overflow-y-auto">
                {availableMethods.map(({ method, methodDisplay }) => (
                  <label
                    key={method}
                    className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={filterMethods.includes(method)}
                      onChange={() => toggleMethod(method)}
                      className="w-3.5 h-3.5 accent-blue-500 shrink-0"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-200">{methodDisplay}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Egg group multiselect dropdown */}
          <div className="relative" ref={eggDropRef}>
            <button
              onClick={() => setEggGroupOpen(o => !o)}
              className={`flex items-center gap-1.5 border rounded-lg px-2 py-1.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
                ${filterEggGroups.length > 0
                  ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              <span className="whitespace-nowrap">{eggGroupLabel}</span>
              <span className={`text-[10px] transition-transform duration-150 ${eggGroupOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {eggGroupOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 py-1 min-w-[160px] max-h-64 overflow-y-auto">
                {EGG_GROUPS.map(g => (
                  <label
                    key={g}
                    className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={filterEggGroups.includes(g)}
                      onChange={() => toggleEggGroup(g)}
                      className="w-3.5 h-3.5 accent-blue-500 shrink-0"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-200">{formatEggGroup(g)}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Version filter buttons — driven by gameConfig.versions */}
          <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden text-sm">
            {gameConfig.versions.map(({ id, label, activeClass: vActive }, i) => (
              <button
                key={id}
                onClick={() => setFilterVersion(id)}
                className={`px-3 py-1.5 transition-colors whitespace-nowrap
                  ${filterVersion === id
                    ? `${vActive} text-white`
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}
                  ${i > 0 ? 'border-l border-gray-300 dark:border-gray-600' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Caught / Uncaught filter */}
          <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden text-sm">
            {[['', 'All'], ['caught', 'Caught ✓'], ['uncaught', 'Uncaught']].map(([val, label], i) => (
              <button
                key={val}
                onClick={() => setFilterCaught(val)}
                className={`px-3 py-1.5 transition-colors
                  ${filterCaught === val
                    ? val === 'caught' ? 'bg-green-500 text-white' : val === 'uncaught' ? 'bg-gray-600 text-white' : 'bg-gray-700 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}
                  ${i > 0 ? 'border-l border-gray-300 dark:border-gray-600' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
