import { useState } from 'react'
import { GAMES } from '../games/index.js'
import { usePokemonStore } from '../store/usePokemonStore'
import { ShareCodeModal } from './ShareCodeModal'

function loadProgress(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw).length : 0
  } catch { return 0 }
}

// Total Pokémon per game (used for progress badge on home screen)
// These are the totals for the "all" view so the badge is meaningful at a glance
const GAME_TOTALS = {
  frlg: 386,  // all Pokémon obtainable in FRLG
  rse:  386,  // all Pokémon in RSE dex
}

export function HomeScreen() {
  const { loadGame, openTeamBuilder, darkMode, toggleDarkMode } = usePokemonStore()
  const [showImport, setShowImport] = useState(false)
  const base = import.meta.env.BASE_URL

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 dark:bg-gray-950 text-white px-5 py-4 flex items-center justify-between shadow-md">
        <div>
          <h1 className="text-xl font-bold tracking-tight">🎮 Pokédex Tracker</h1>
          <p className="text-gray-400 text-xs mt-0.5">Choose a game to start tracking</p>
        </div>
        {/* Dark mode toggle */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-base select-none">☀️</span>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className={`relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none
              ${darkMode ? 'bg-white/30' : 'bg-black/30'}`}
          >
            <span
              className="absolute top-0.5 left-0 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200"
              style={{ transform: darkMode ? 'translateX(22px)' : 'translateX(2px)' }}
            />
          </button>
          <span className="text-base select-none">🌙</span>
        </div>
      </header>

      {/* Game cards */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl">
          {GAMES.map(game => {
            const caught = loadProgress(game.localStorageKey)
            const total  = GAME_TOTALS[game.id] ?? 0
            const pct    = total > 0 ? Math.round((caught / total) * 100) : 0
            const cover  = `${base}${game.covers['']}`

            return (
              <button
                key={game.id}
                onClick={() => loadGame(game)}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-left focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {/* Cover image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={cover}
                    alt={`${game.title} cover`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Generation badge */}
                  <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {game.generation}
                  </span>
                </div>

                {/* Card body */}
                <div className="px-4 py-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="font-bold text-gray-900 dark:text-gray-100 text-base leading-tight">
                        {game.title}
                      </h2>
                      <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                        {game.regionalDex.label} · {game.regionalDex.range}
                      </p>
                    </div>
                    {/* Caught progress badge */}
                    {caught > 0 && (
                      <span className="shrink-0 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-[11px] font-semibold px-2 py-0.5 rounded-full">
                        {pct}% caught
                      </span>
                    )}
                  </div>

                  {/* Progress bar */}
                  {total > 0 && (
                    <div className="mt-2.5">
                      <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5 text-right">
                        {caught} / {total}
                      </p>
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Team Builder cards */}
        <h2 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-8 mb-3 w-full max-w-2xl">
          Team Builder
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl">
          {GAMES.map(game => {
            const cover = `${base}${game.covers['']}`
            return (
              <button
                key={`team-${game.id}`}
                onClick={() => openTeamBuilder(game)}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-left focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {/* Cover image with overlay */}
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={cover}
                    alt={`${game.title} cover`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-2 right-2 bg-blue-600/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                    Team Builder
                  </span>
                </div>

                {/* Card body */}
                <div className="px-4 py-3">
                  <h2 className="font-bold text-gray-900 dark:text-gray-100 text-base leading-tight">
                    {game.shortName} Team Builder
                  </h2>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                    Plan your team, moves &amp; matchups
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowImport(true)}
            className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2 transition-colors"
          >
            Import a share code
          </button>
        </div>

        {showImport && (
          <ShareCodeModal mode="import" onClose={() => setShowImport(false)} />
        )}
      </main>
    </div>
  )
}
