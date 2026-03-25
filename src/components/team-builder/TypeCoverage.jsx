import { useState } from 'react'
import { useTeamStore } from '../../store/useTeamStore'
import { TYPES, getTeamOffensiveCoverage } from '../../data/type-chart'
import { TYPE_COLORS, TYPE_TEXT } from '../typeColors'

export function TypeCoverage() {
  const [open, setOpen] = useState(true)
  const team = useTeamStore(s => s.getActiveTeam())
  const moves = useTeamStore(s => s.moves)

  const members = (team?.members || []).filter(Boolean)
  if (members.length === 0) return null

  // Collect all move types from selected moves
  const moveTypes = []
  for (const m of members) {
    for (const moveName of m.moves) {
      if (moveName && moves[moveName]?.type && moves[moveName].power) {
        moveTypes.push(moves[moveName].type)
      }
    }
  }

  const uniqueMoveTypes = [...new Set(moveTypes)]
  const coverage = getTeamOffensiveCoverage(uniqueMoveTypes)

  const superEffective = TYPES.filter(t => coverage[t] >= 2)
  const neutral = TYPES.filter(t => coverage[t] === 1)
  const notVeryEffective = TYPES.filter(t => coverage[t] > 0 && coverage[t] < 1)
  const immune = TYPES.filter(t => coverage[t] === 0)
  const uncovered = TYPES.filter(t => (coverage[t] || 0) < 2)

  return (
    <section>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full text-left mb-2"
      >
        <span className={`text-gray-400 transition-transform ${open ? 'rotate-90' : ''}`}>&#9654;</span>
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Type Coverage
        </h3>
        <span className="text-[10px] text-gray-400 dark:text-gray-500">
          {superEffective.length}/{TYPES.length} types covered
        </span>
      </button>

      {open && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3 space-y-2">
          {moveTypes.length === 0 ? (
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center py-2">
              Assign damaging moves to see coverage
            </p>
          ) : (
            <>
              {/* Super effective */}
              {superEffective.length > 0 && (
                <div>
                  <span className="text-[10px] font-semibold text-green-600 dark:text-green-400 uppercase">
                    Super Effective ({superEffective.length})
                  </span>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {superEffective.map(t => (
                      <TypeBadge key={t} type={t} />
                    ))}
                  </div>
                </div>
              )}

              {/* Not covered (no SE move) */}
              {uncovered.length > 0 && (
                <div>
                  <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 uppercase">
                    Not Super Effective ({uncovered.length})
                  </span>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {uncovered.map(t => (
                      <TypeBadge key={t} type={t} dim />
                    ))}
                  </div>
                </div>
              )}

              {/* No effect */}
              {immune.length > 0 && (
                <div>
                  <span className="text-[10px] font-semibold text-red-600 dark:text-red-400 uppercase">
                    No Effect ({immune.length})
                  </span>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {immune.map(t => (
                      <TypeBadge key={t} type={t} dim />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </section>
  )
}

function TypeBadge({ type, dim }) {
  const bg = TYPE_COLORS[type] || 'bg-gray-400'
  const text = TYPE_TEXT[type] || 'text-white'
  return (
    <span className={`${bg} ${text} text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${dim ? 'opacity-50' : ''}`}>
      {type}
    </span>
  )
}
