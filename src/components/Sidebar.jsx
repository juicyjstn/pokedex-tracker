import { useEffect, useState } from 'react'
import { GAMES } from '../games/index.js'
import { usePokemonStore } from '../store/usePokemonStore'
import { ShareCodeModal } from './ShareCodeModal'

export function Sidebar({ open, onClose }) {
  const { gameConfig, caughtIds, loadGame, openTeamBuilder } = usePokemonStore()
  const [shareModal, setShareModal] = useState(null) // null | 'export' | 'import'
  const base = import.meta.env.BASE_URL

  // Close on Escape key
  useEffect(() => {
    if (!open) return
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-[1px] transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 shadow-2xl border-r border-gray-200 dark:border-gray-700
          flex flex-col transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label="Game selector sidebar"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950">
          <h2 className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Select Game</h2>
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl leading-none rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Game list */}
        <nav className="flex-1 overflow-y-auto py-2">
          {GAMES.map(game => {
            const isActive = gameConfig?.id === game.id
            const cover = `${base}${game.covers['']}`

            return (
              <button
                key={game.id}
                onClick={() => { loadGame(game); onClose() }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors
                  ${isActive
                    ? 'bg-blue-50 dark:bg-blue-900/30 border-r-2 border-blue-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              >
                {/* Mini cover */}
                <img
                  src={cover}
                  alt=""
                  className="w-10 h-10 object-cover rounded-lg shrink-0 shadow"
                />
                <div className="min-w-0">
                  <p className={`text-sm font-semibold leading-tight truncate
                    ${isActive ? 'text-blue-700 dark:text-blue-300' : 'text-gray-800 dark:text-gray-200'}`}>
                    {game.title}
                  </p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{game.generation}</p>
                </div>
                {isActive && (
                  <span className="ml-auto shrink-0 text-blue-500 text-sm">✓</span>
                )}
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-3 space-y-1">
          {gameConfig && (
            <button
              onClick={() => { openTeamBuilder(gameConfig); onClose() }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <span>🛠️</span>
              <span>Team Builder</span>
            </button>
          )}
          {gameConfig && (
            <button
              onClick={() => { setShareModal('export'); onClose() }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <span>📤</span>
              <span>Export Code</span>
            </button>
          )}
          <button
            onClick={() => { setShareModal('import'); onClose() }}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <span>📥</span>
            <span>Import Code</span>
          </button>
          <button
            onClick={() => { usePokemonStore.getState().goHome(); onClose() }}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <span>🏠</span>
            <span>Home Screen</span>
          </button>
        </div>
      </aside>

      {shareModal && (
        <ShareCodeModal
          mode={shareModal}
          onClose={() => setShareModal(null)}
          gameConfig={gameConfig}
          caughtIds={caughtIds}
        />
      )}
    </>
  )
}
