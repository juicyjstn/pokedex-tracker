import { useTeamStore } from '../../store/useTeamStore'
import { NatureSelect } from './NatureSelect'
import { TYPE_COLORS } from '../typeColors'

export function TeamSlot({ index }) {
  const { selectedSlot, selectSlot, removePokemon, setNature, getActiveTeam, getTeamPokemon } = useTeamStore()
  const team = getActiveTeam()
  const teamPokemon = getTeamPokemon()

  const member = team?.members[index]
  const pkmn = teamPokemon[index]
  const isSelected = selectedSlot === index

  if (!member || !pkmn) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full min-h-[110px] rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-default">
        <span className="text-2xl">+</span>
        <span className="text-[10px] mt-0.5">Empty</span>
      </div>
    )
  }

  return (
    <button
      onClick={() => selectSlot(isSelected ? null : index)}
      className={`relative flex flex-col items-center w-full rounded-xl border-2 p-2 transition-all cursor-pointer
        ${isSelected
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-md'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600'
        }`}
    >
      {/* Remove button */}
      <span
        onClick={e => { e.stopPropagation(); removePokemon(index) }}
        className="absolute top-1 right-1 text-gray-400 hover:text-red-500 text-xs leading-none p-0.5 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        role="button"
        aria-label={`Remove ${pkmn.name}`}
      >
        ✕
      </span>

      {/* Sprite */}
      <img
        src={pkmn.sprite}
        alt={pkmn.name}
        className="w-12 h-12 object-contain"
        loading="lazy"
      />

      {/* Name */}
      <span className="text-xs font-medium text-gray-900 dark:text-gray-100 capitalize leading-tight mt-0.5">
        {pkmn.name}
      </span>

      {/* Types */}
      <div className="flex gap-0.5 mt-0.5">
        {pkmn.types.map(t => (
          <span
            key={t}
            className={`${TYPE_COLORS[t] || 'bg-gray-400'} text-white text-[8px] font-bold px-1.5 py-0 rounded-full uppercase`}
          >
            {t.slice(0, 3)}
          </span>
        ))}
      </div>

      {/* Nature */}
      <div className="w-full mt-1" onClick={e => e.stopPropagation()}>
        <NatureSelect
          value={member.nature}
          onChange={nature => setNature(index, nature)}
        />
      </div>
    </button>
  )
}
