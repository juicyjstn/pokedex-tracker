import { useState, useMemo } from 'react'
import { useTeamStore } from '../../store/useTeamStore'
import { TeamPokemonCard } from './TeamPokemonCard'
import { TYPES } from '../../data/type-chart'

export function TeamPokemonGrid() {
  const { addPokemon, teams, activeTeamId, pokemon, searchQuery, setSearch, filterType, setFilterType } = useTeamStore()
  const [open, setOpen] = useState(true)

  const team = useMemo(() => teams.find(t => t.id === activeTeamId) ?? null, [teams, activeTeamId])
  const filtered = useMemo(() => {
    return pokemon.filter(p => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase()
        const numMatch = String(p.id).padStart(3, '0').includes(q) || String(p.id).includes(q)
        if (!p.name.includes(q) && !numMatch) return false
      }
      if (filterType && !p.types.includes(filterType)) return false
      return true
    })
  }, [pokemon, searchQuery, filterType])
  const teamIds = new Set((team?.members || []).filter(Boolean).map(m => m.pokemonId))
  const teamFull = (team?.members || []).filter(Boolean).length >= 6

  return (
    <section>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full text-left mb-2"
      >
        <span className={`text-gray-400 transition-transform ${open ? 'rotate-90' : ''}`}>&#9654;</span>
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Add Pokemon</h3>
        {teamFull && <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">(team full)</span>}
      </button>

      {open && (
        <>
          {/* Search & filter */}
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="Search name or #..."
              value={searchQuery}
              onChange={e => setSearch(e.target.value.toLowerCase())}
              className="flex-1 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              className="px-2 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">All types</option>
              {TYPES.map(t => (
                <option key={t} value={t}>{t[0].toUpperCase() + t.slice(1)}</option>
              ))}
            </select>
          </div>

          {/* Grid */}
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}
          >
            {filtered.slice(0, 60).map(p => (
              <TeamPokemonCard
                key={p.id}
                pokemon={p}
                isOnTeam={teamIds.has(p.id)}
                onAdd={() => !teamFull && !teamIds.has(p.id) && addPokemon(p.id)}
              />
            ))}
          </div>
          {filtered.length > 60 && (
            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-2">
              Showing 60 of {filtered.length} — use search to narrow
            </p>
          )}
          {filtered.length === 0 && (
            <p className="text-center text-sm text-gray-400 dark:text-gray-500 py-6">
              No Pokemon match your search
            </p>
          )}
        </>
      )}
    </section>
  )
}
