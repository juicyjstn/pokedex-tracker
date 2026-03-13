import { useState, useEffect, useRef } from 'react'
import { encode, decode } from '../utils/shareCode.js'
import { usePokemonStore, loadCaughtIds } from '../store/usePokemonStore'

const TOTAL_POKEMON = 386

export function ShareCodeModal({ mode, onClose, gameConfig, caughtIds }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-[60] backdrop-blur-[1px]" onClick={onClose} />
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {mode === 'export' ? (
            <ExportView gameConfig={gameConfig} caughtIds={caughtIds} onClose={onClose} />
          ) : (
            <ImportView onClose={onClose} />
          )}
        </div>
      </div>
    </>
  )
}

/* ── Export View ───────────────────────────────────────────────────────────── */

function ExportView({ gameConfig, caughtIds, onClose }) {
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef(null)

  const code = encode(gameConfig.shortName, caughtIds)
  const count = caughtIds.size

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: select the text
      textareaRef.current?.select()
    }
  }

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Export Share Code</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl leading-none p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          ✕
        </button>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {gameConfig.title} — {count} / {TOTAL_POKEMON} caught
      </p>

      <textarea
        ref={textareaRef}
        readOnly
        value={code}
        onFocus={(e) => e.target.select()}
        className="w-full h-20 px-3 py-2 text-sm font-mono bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg resize-none text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex items-center gap-3 mt-3">
        <button
          onClick={handleCopy}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
        {!copied && (
          <span className="text-xs text-gray-400 dark:text-gray-500">
            Paste this code on another device to restore your progress
          </span>
        )}
      </div>
    </div>
  )
}

/* ── Import View ──────────────────────────────────────────────────────────── */

function ImportView({ onClose }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [phase, setPhase] = useState('input') // 'input' | 'confirm' | 'done'
  const [decoded, setDecoded] = useState(null)
  const [existingCount, setExistingCount] = useState(0)

  function handleLoad() {
    setError('')
    try {
      const result = decode(input)
      setDecoded(result)
      // Check existing save for same game
      const existing = loadCaughtIds(result.gameConfig.localStorageKey)
      setExistingCount(existing.size)
      setPhase('confirm')
    } catch (err) {
      setError(err.message)
    }
  }

  function handleImport(merge) {
    const { gameConfig: importConfig, caughtIds: importedIds } = decoded
    let finalIds = importedIds

    if (merge) {
      const existing = loadCaughtIds(importConfig.localStorageKey)
      finalIds = new Set([...existing, ...importedIds])
    }

    usePokemonStore.getState().importCaughtIds(importConfig.localStorageKey, finalIds)
    setDecoded({ ...decoded, finalCount: finalIds.size })
    setPhase('done')
  }

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Import Share Code</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl leading-none p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          ✕
        </button>
      </div>

      {phase === 'input' && (
        <>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Paste a share code from another device:
          </p>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="FRLG:1:..."
            className="w-full h-20 px-3 py-2 text-sm font-mono bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg resize-none text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error && (
            <p className="text-sm text-red-500 dark:text-red-400 mt-2">{error}</p>
          )}
          <button
            onClick={handleLoad}
            disabled={!input.trim()}
            className="mt-3 px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed text-white transition-colors"
          >
            Load Code
          </button>
        </>
      )}

      {phase === 'confirm' && decoded && (
        <div className="space-y-3">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <p className="font-semibold text-gray-900 dark:text-gray-100">{decoded.gameConfig.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {decoded.caughtIds.size} / {TOTAL_POKEMON} Pokemon in this code
            </p>
            {existingCount > 0 && (
              <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                Your current {decoded.gameConfig.shortName} save has {existingCount} Pokemon caught.
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleImport(false)}
              className="flex-1 px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            >
              Replace
            </button>
            {existingCount > 0 && (
              <button
                onClick={() => handleImport(true)}
                className="flex-1 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Merge
              </button>
            )}
            <button
              onClick={() => { setPhase('input'); setDecoded(null) }}
              className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {phase === 'done' && decoded && (
        <div className="text-center py-4">
          <p className="text-green-600 dark:text-green-400 font-semibold text-lg mb-1">
            Imported!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {decoded.finalCount ?? decoded.caughtIds.size} Pokemon loaded for {decoded.gameConfig.title}
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          >
            Done
          </button>
        </div>
      )}
    </div>
  )
}
