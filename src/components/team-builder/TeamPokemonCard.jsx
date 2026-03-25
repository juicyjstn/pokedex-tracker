import { TYPE_COLORS } from '../typeColors'

export function TeamPokemonCard({ pokemon, isOnTeam, onAdd }) {
  return (
    <button
      onClick={onAdd}
      disabled={isOnTeam}
      className={`flex flex-col items-center rounded-xl border p-2 transition-all text-center
        ${isOnTeam
          ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20 opacity-60 cursor-default'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md cursor-pointer'
        }`}
    >
      <img
        src={pokemon.sprite}
        alt={pokemon.name}
        className="w-12 h-12 object-contain"
        loading="lazy"
      />
      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">
        #{String(pokemon.id).padStart(3, '0')}
      </span>
      <span className="text-xs font-medium text-gray-900 dark:text-gray-100 capitalize leading-tight">
        {pokemon.name}
      </span>
      <div className="flex gap-0.5 mt-0.5">
        {pokemon.types.map(t => (
          <span
            key={t}
            className={`${TYPE_COLORS[t] || 'bg-gray-400'} text-white text-[7px] font-bold px-1 rounded-full uppercase`}
          >
            {t.slice(0, 3)}
          </span>
        ))}
      </div>
      {isOnTeam && (
        <span className="text-[9px] text-green-600 dark:text-green-400 font-medium mt-0.5">On team</span>
      )}
    </button>
  )
}
