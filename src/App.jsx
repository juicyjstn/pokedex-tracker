import { useState, useEffect } from 'react'
import { usePokemonStore } from './store/usePokemonStore'
import { HomeScreen } from './components/HomeScreen'
import { Sidebar } from './components/Sidebar'
import { FilterBar } from './components/FilterBar'
import { PokedexGrid } from './components/PokedexGrid'
import { LocationPanel } from './components/LocationPanel'

export default function App() {
  const {
    gameConfig, loaded,
    caughtIds, selectedId, clearSelection,
    getFiltered, getActivePokemon,
    dexView, darkMode, toggleDarkMode,
    filterVersion,
  } = usePokemonStore()

  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Sync dark mode class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  // ── Home screen ────────────────────────────────────────────────────────────
  if (!gameConfig) {
    return <HomeScreen />
  }

  // ── Loading spinner ────────────────────────────────────────────────────────
  if (!loaded) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 dark:text-gray-400 dark:bg-gray-900">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-bounce">⏳</div>
          <p>Loading Pokédex...</p>
        </div>
      </div>
    )
  }

  // ── Tracker ────────────────────────────────────────────────────────────────
  const filtered       = getFiltered()
  const activePokemon  = getActivePokemon()
  const caughtCount    = [...caughtIds].filter(id => activePokemon.some(p => p.id === id)).length
  const total          = activePokemon.length

  const headerBg      = dexView === 'national' ? gameConfig.headerColorNational    : gameConfig.headerColorRegional
  const headerBgBar   = dexView === 'national' ? gameConfig.headerColorNationalBar : gameConfig.headerColorRegionalBar
  const headerSubtext = dexView === 'national' ? 'text-indigo-200'                 : gameConfig.regionalDex.activeTextClass

  const base = import.meta.env.BASE_URL
  const coverFile = gameConfig.covers[filterVersion] ?? gameConfig.covers['']
  const coverImage = `${base}${coverFile}`

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* App header */}
      <header className={`${headerBg} text-white px-4 py-3 flex items-center gap-3 shadow-md`}>
        {/* Hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Open game menu"
          className="shrink-0 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-1.5 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <rect y="3"  width="20" height="2" rx="1"/>
            <rect y="9"  width="20" height="2" rx="1"/>
            <rect y="15" width="20" height="2" rx="1"/>
          </svg>
        </button>

        {/* Cover image */}
        <img
          src={coverImage}
          alt="Game cover"
          className="h-10 w-auto rounded shadow-md object-cover shrink-0 transition-all duration-300"
        />

        {/* Title + count */}
        <div>
          <h1 className="text-lg font-bold leading-tight">{gameConfig.title} Tracker</h1>
          <p className={`${headerSubtext} text-xs`}>
            {dexView === 'national'
              ? gameConfig.nationalLabel
              : gameConfig.regionalDex.label
            } — {caughtCount} / {total} caught
            {caughtCount === total && total > 0 && ' 🎉'}
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex-1 max-w-xs ml-auto hidden sm:block">
          <div className={`h-2 rounded-full ${headerBgBar} overflow-hidden`}>
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: total ? `${(caughtCount / total) * 100}%` : '0%' }}
            />
          </div>
          <p className={`text-right ${headerSubtext} text-[10px] mt-0.5`}>
            {total ? Math.round((caughtCount / total) * 100) : 0}%
          </p>
        </div>

        {/* Dark mode toggle */}
        <div className="flex items-center gap-1.5 shrink-0 ml-3">
          <span className="text-base select-none">☀️</span>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className={`relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none
              ${darkMode ? 'bg-white/30' : 'bg-black/20'}`}
          >
            <span
              className="absolute top-0.5 left-0 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200"
              style={{ transform: darkMode ? 'translateX(22px)' : 'translateX(2px)' }}
            />
          </button>
          <span className="text-base select-none">🌙</span>
        </div>
      </header>

      {/* Filter bar */}
      <FilterBar totalCount={total} filteredCount={filtered.length} />

      {/* Main grid */}
      <main>
        <PokedexGrid />
      </main>

      {/* Location detail panel */}
      {selectedId && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={clearSelection}
          />
          <LocationPanel />
        </>
      )}
    </div>
  )
}
