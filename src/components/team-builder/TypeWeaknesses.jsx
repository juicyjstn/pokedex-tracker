import { useState, useMemo } from 'react'
import { useTeamStore } from '../../store/useTeamStore'
import { TYPES, getTeamWeaknesses, getTeamResistances } from '../../data/type-chart'
import { TYPE_COLORS, TYPE_TEXT } from '../typeColors'

export function TypeWeaknesses() {
  const [open, setOpen] = useState(true)
  const teams = useTeamStore(s => s.teams)
  const activeTeamId = useTeamStore(s => s.activeTeamId)
  const pokemon = useTeamStore(s => s.pokemon)

  const team = useMemo(() => teams.find(t => t.id === activeTeamId) ?? null, [teams, activeTeamId])
  const teamPokemon = useMemo(() => {
    if (!team) return []
    return team.members.map(m => m ? pokemon.find(p => p.id === m.pokemonId) ?? null : null)
  }, [team, pokemon])

  const pokemonList = teamPokemon.filter(Boolean)
  if (pokemonList.length === 0) return null

  const teamTypes = pokemonList.map(p => p.types)
  const weaknesses = getTeamWeaknesses(teamTypes)
  const resistances = getTeamResistances(teamTypes)

  const sortedWeaknesses = Object.entries(weaknesses).sort((a, b) => b[1] - a[1])
  const sortedResistances = Object.entries(resistances).sort((a, b) => b[1] - a[1])

  return (
    <section>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full text-left mb-2"
      >
        <span className={`text-gray-400 transition-transform ${open ? 'rotate-90' : ''}`}>&#9654;</span>
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Type Weaknesses &amp; Resistances
        </h3>
      </button>

      {open && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3 space-y-3">
          {/* Weaknesses */}
          {sortedWeaknesses.length > 0 && (
            <div>
              <span className="text-[10px] font-semibold text-red-600 dark:text-red-400 uppercase mb-1 block">
                Weaknesses
              </span>
              <div className="space-y-0.5">
                {sortedWeaknesses.map(([type, count]) => (
                  <div key={type} className="flex items-center gap-2">
                    <TypeBadge type={type} />
                    <div className="flex-1 flex gap-0.5">
                      {Array.from({ length: count }).map((_, i) => (
                        <div key={i} className="w-4 h-2.5 rounded-sm bg-red-400 dark:bg-red-500" />
                      ))}
                      {Array.from({ length: pokemonList.length - count }).map((_, i) => (
                        <div key={i} className="w-4 h-2.5 rounded-sm bg-gray-200 dark:bg-gray-700" />
                      ))}
                    </div>
                    <span className={`text-[10px] font-medium ${count >= 3 ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'}`}>
                      {count}/{pokemonList.length}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resistances */}
          {sortedResistances.length > 0 && (
            <div>
              <span className="text-[10px] font-semibold text-green-600 dark:text-green-400 uppercase mb-1 block">
                Resistances
              </span>
              <div className="space-y-0.5">
                {sortedResistances.map(([type, count]) => (
                  <div key={type} className="flex items-center gap-2">
                    <TypeBadge type={type} />
                    <div className="flex-1 flex gap-0.5">
                      {Array.from({ length: count }).map((_, i) => (
                        <div key={i} className="w-4 h-2.5 rounded-sm bg-green-400 dark:bg-green-500" />
                      ))}
                      {Array.from({ length: pokemonList.length - count }).map((_, i) => (
                        <div key={i} className="w-4 h-2.5 rounded-sm bg-gray-200 dark:bg-gray-700" />
                      ))}
                    </div>
                    <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">
                      {count}/{pokemonList.length}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

function TypeBadge({ type }) {
  const bg = TYPE_COLORS[type] || 'bg-gray-400'
  const text = TYPE_TEXT[type] || 'text-white'
  return (
    <span className={`${bg} ${text} text-[9px] font-bold px-1.5 py-0 rounded-full capitalize w-14 text-center shrink-0`}>
      {type}
    </span>
  )
}
