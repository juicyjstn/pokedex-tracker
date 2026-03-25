import { useState } from 'react'
import { useTeamStore } from '../../store/useTeamStore'
import { MoveRow } from './MoveRow'
import { TYPE_COLORS, TYPE_TEXT } from '../typeColors'

const SOURCE_FILTERS = [
  { id: '', label: 'All' },
  { id: 'level-up', label: 'Level Up' },
  { id: 'tm', label: 'TM/HM' },
  { id: 'tutor', label: 'Tutor' },
  { id: 'egg', label: 'Egg' },
]

export function MovePlanner() {
  const { selectedSlot, getActiveTeam, getTeamPokemon, getAvailableMoves, setMove, clearMove } = useTeamStore()
  const [editingMoveIdx, setEditingMoveIdx] = useState(null)
  const [moveSearch, setMoveSearch] = useState('')
  const [sourceFilter, setSourceFilter] = useState('')

  const team = getActiveTeam()
  const teamPokemon = getTeamPokemon()

  if (selectedSlot === null || !team?.members[selectedSlot]) return null

  const member = team.members[selectedSlot]
  const pkmn = teamPokemon[selectedSlot]
  if (!pkmn) return null

  const availableMoves = getAvailableMoves(selectedSlot)
  const assignedMoves = new Set(member.moves.filter(Boolean))

  // Filter available moves
  let filteredMoves = availableMoves
  if (moveSearch) {
    const q = moveSearch.toLowerCase()
    filteredMoves = filteredMoves.filter(m => m.move.toLowerCase().includes(q))
  }
  if (sourceFilter) {
    filteredMoves = filteredMoves.filter(m => m.source === sourceFilter)
  }

  // Sort: level-up first by level, then TM, tutor, egg. Pre-evo moves last within each group.
  filteredMoves = [...filteredMoves].sort((a, b) => {
    if (a.isPreEvo !== b.isPreEvo) return a.isPreEvo ? 1 : -1
    const srcOrder = { 'level-up': 0, tm: 1, tutor: 2, egg: 3 }
    const sa = srcOrder[a.source] ?? 4
    const sb = srcOrder[b.source] ?? 4
    if (sa !== sb) return sa - sb
    if (a.source === 'level-up' && b.source === 'level-up') return (a.level || 0) - (b.level || 0)
    return a.move.localeCompare(b.move)
  })

  const handleSelectMove = (moveName) => {
    if (editingMoveIdx !== null) {
      setMove(selectedSlot, editingMoveIdx, moveName)
      setEditingMoveIdx(null)
      setMoveSearch('')
    }
  }

  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
        Move Planner
        <span className="text-xs font-normal text-gray-400 capitalize">— {pkmn.name}</span>
      </h3>

      {/* Current 4 move slots */}
      <div className="space-y-1 mb-3">
        {[0, 1, 2, 3].map(i => {
          const moveName = member.moves[i]
          const moveData = moveName ? availableMoves.find(m => m.move === moveName) : null

          return (
            <div key={i} className="flex items-center gap-1.5">
              <span className="text-[10px] text-gray-400 dark:text-gray-500 w-3 text-right font-mono">{i + 1}</span>
              {moveName && moveData ? (
                <div className="flex-1 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-xs">
                  <span className={`${TYPE_COLORS[moveData.type] || 'bg-gray-400'} ${TYPE_TEXT[moveData.type] || 'text-white'} text-[8px] font-bold px-1 rounded-full uppercase`}>
                    {moveData.type?.slice(0, 3)}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{moveName}</span>
                  <span className="text-gray-400 dark:text-gray-500 text-[10px] ml-auto">
                    {moveData.power ? `${moveData.power}pw` : '—'}
                  </span>
                  <button
                    onClick={() => { setEditingMoveIdx(i); setMoveSearch('') }}
                    className="text-blue-500 hover:text-blue-700 text-[10px] font-medium"
                  >
                    Change
                  </button>
                  <button
                    onClick={() => clearMove(selectedSlot, i)}
                    className="text-gray-400 hover:text-red-500 text-[10px]"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => { setEditingMoveIdx(i); setMoveSearch('') }}
                  className={`flex-1 px-2 py-1 rounded-lg text-xs text-left transition-colors
                    ${editingMoveIdx === i
                      ? 'bg-blue-50 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400'
                      : 'bg-gray-50 dark:bg-gray-700/50 text-gray-400 dark:text-gray-500 hover:text-blue-500'
                    }`}
                >
                  {editingMoveIdx === i ? 'Select a move below...' : '+ Add move'}
                </button>
              )}
            </div>
          )
        })}
      </div>

      {/* Move browser (shown when editing) */}
      {editingMoveIdx !== null && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
          {/* Header row */}
          <div className="grid items-center gap-1 px-2 mb-1 text-[9px] font-semibold text-gray-400 dark:text-gray-500 uppercase"
               style={{ gridTemplateColumns: '1fr 50px 32px 32px 16px 60px' }}>
            <span>Move</span>
            <span className="text-center">Type</span>
            <span className="text-center">Pwr</span>
            <span className="text-center">Acc</span>
            <span className="text-center">Cat</span>
            <span className="text-right">Source</span>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-2">
            <input
              autoFocus
              type="text"
              placeholder="Search moves..."
              value={moveSearch}
              onChange={e => setMoveSearch(e.target.value)}
              className="flex-1 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-xs text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <select
              value={sourceFilter}
              onChange={e => setSourceFilter(e.target.value)}
              className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              {SOURCE_FILTERS.map(f => (
                <option key={f.id} value={f.id}>{f.label}</option>
              ))}
            </select>
          </div>

          {/* Move list */}
          <div className="max-h-64 overflow-y-auto space-y-0.5">
            {filteredMoves.map((entry, i) => (
              <MoveRow
                key={`${entry.move}-${entry.source}-${entry.isPreEvo}-${i}`}
                entry={entry}
                onSelect={() => handleSelectMove(entry.move)}
                isAssigned={assignedMoves.has(entry.move)}
                isSelected={false}
              />
            ))}
            {filteredMoves.length === 0 && (
              <p className="text-center text-xs text-gray-400 dark:text-gray-500 py-4">
                No moves match your search
              </p>
            )}
          </div>

          <button
            onClick={() => setEditingMoveIdx(null)}
            className="mt-2 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            Cancel
          </button>
        </div>
      )}
    </section>
  )
}
