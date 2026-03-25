import { useEffect } from 'react'
import { usePokemonStore } from '../../store/usePokemonStore'
import { useTeamStore } from '../../store/useTeamStore'
import { TeamSelector } from './TeamSelector'
import { TeamBar } from './TeamBar'
import { TeamSummary } from './TeamSummary'
import { MovePlanner } from './MovePlanner'
import { TypeCoverage } from './TypeCoverage'
import { TypeWeaknesses } from './TypeWeaknesses'
import { TrainerMatchup } from './TrainerMatchup'
import { TeamPokemonGrid } from './TeamPokemonGrid'

export default function TeamBuilderPage({ config }) {
  const { darkMode, toggleDarkMode, closeTeamBuilder } = usePokemonStore()
  const { loaded, loadTeamBuilder } = useTeamStore()

  useEffect(() => {
    loadTeamBuilder(config)
  }, [config.id])

  // Sync dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  if (!loaded) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 dark:text-gray-400 dark:bg-gray-900">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-bounce">⏳</div>
          <p>Loading Team Builder...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-blue-700 dark:bg-blue-900 text-white px-4 py-3 flex items-center gap-3 shadow-md">
        <button
          onClick={closeTeamBuilder}
          className="shrink-0 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-1.5 transition-colors"
          aria-label="Back to home"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="flex-1">
          <h1 className="text-lg font-bold leading-tight">{config.shortName} Team Builder</h1>
          <p className="text-blue-200 text-xs">Plan your team, moves &amp; matchups</p>
        </div>

        {/* Dark mode toggle */}
        <div className="flex items-center gap-1.5 shrink-0">
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-3 py-4 space-y-4">
        <TeamSelector />
        <TeamBar />
        <TeamSummary />
        <MovePlanner />
        <TypeCoverage />
        <TypeWeaknesses />
        <TrainerMatchup />
        <TeamPokemonGrid />
      </div>
    </div>
  )
}
