import { useMemo } from 'react'
import { useTeamStore } from '../../store/useTeamStore'
import { applyNature, STAT_LABELS } from '../../data/natures'
import { TYPE_COLORS } from '../typeColors'

export function TeamSummary() {
  const teams = useTeamStore(s => s.teams)
  const activeTeamId = useTeamStore(s => s.activeTeamId)
  const pokemon = useTeamStore(s => s.pokemon)

  const team = useMemo(() => teams.find(t => t.id === activeTeamId) ?? null, [teams, activeTeamId])
  const teamPokemon = useMemo(() => {
    if (!team) return []
    return team.members.map(m => m ? pokemon.find(p => p.id === m.pokemonId) ?? null : null)
  }, [team, pokemon])

  const members = (team?.members || []).filter(Boolean)
  const pokemonList = teamPokemon.filter(Boolean)

  if (members.length === 0) {
    return (
      <div className="text-center text-sm text-gray-400 dark:text-gray-500 py-3">
        Add Pokemon to see team stats
      </div>
    )
  }

  // Calculate stats
  const stats = members.map((m, i) => {
    const pkmn = pokemonList[i]
    if (!pkmn) return null
    return m.nature ? applyNature(pkmn.stats, m.nature) : pkmn.stats
  }).filter(Boolean)

  const totalBst = stats.reduce((sum, s) => sum + s.bst, 0)
  const avgBst = Math.round(totalBst / stats.length)

  // Type distribution
  const typeCounts = {}
  pokemonList.forEach(p => {
    if (!p) return
    p.types.forEach(t => { typeCounts[t] = (typeCounts[t] || 0) + 1 })
  })
  const sortedTypes = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])

  // Stat averages
  const avgStats = {}
  const statKeys = ['hp', 'atk', 'def', 'spa', 'spd', 'spe']
  for (const key of statKeys) {
    avgStats[key] = Math.round(stats.reduce((sum, s) => sum + s[key], 0) / stats.length)
  }
  const maxStat = Math.max(...Object.values(avgStats))

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3">
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {/* BST */}
        <div>
          <span className="text-gray-500 dark:text-gray-400 text-xs">Avg BST</span>
          <p className="font-bold text-gray-900 dark:text-gray-100">{avgBst}</p>
        </div>

        {/* Team size */}
        <div>
          <span className="text-gray-500 dark:text-gray-400 text-xs">Team Size</span>
          <p className="font-bold text-gray-900 dark:text-gray-100">{members.length}/6</p>
        </div>

        {/* Types */}
        <div className="flex-1 min-w-0">
          <span className="text-gray-500 dark:text-gray-400 text-xs">Team Types</span>
          <div className="flex flex-wrap gap-1 mt-0.5">
            {sortedTypes.map(([type, count]) => (
              <span
                key={type}
                className={`${TYPE_COLORS[type] || 'bg-gray-400'} text-white text-[10px] font-bold px-1.5 py-0 rounded-full uppercase`}
              >
                {type} {count > 1 ? `×${count}` : ''}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Average stat bars */}
      <div className="mt-3 grid grid-cols-6 gap-1.5">
        {statKeys.map(key => (
          <div key={key} className="text-center">
            <div className="text-[9px] font-medium text-gray-500 dark:text-gray-400 uppercase">
              {STAT_LABELS[key]}
            </div>
            <div className="text-xs font-bold text-gray-800 dark:text-gray-200">{avgStats[key]}</div>
            <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-0.5">
              <div
                className="h-full bg-blue-500 rounded-full transition-all"
                style={{ width: `${(avgStats[key] / Math.max(maxStat, 1)) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
