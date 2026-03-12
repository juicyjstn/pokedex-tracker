import { usePokemonStore } from '../store/usePokemonStore'
import { TYPE_COLORS, TYPE_TEXT } from './typeColors'

export function PokemonCard({ pokemon }) {
  const { caughtIds, toggleCaught, selectedId, selectPokemon, clearSelection, dexView } = usePokemonStore()
  const caught = caughtIds.has(pokemon.id)
  const selected = selectedId === pokemon.id

  function handleCardClick() {
    if (selected) {
      clearSelection()
    } else {
      selectPokemon(pokemon.id)
    }
  }

  function handleCheckbox(e) {
    e.stopPropagation()
    if (!caught && pokemon.cry) {
      const audio = new Audio(pokemon.cry)
      audio.play().catch((error) => console.warn('Failed to play Pokemon cry:', error))
    }
    toggleCaught(pokemon.id)
  }

  const versionBadge =
    pokemon.exclusivity === 'firered' ? (
      <span className="text-[9px] font-bold px-1 py-0.5 rounded bg-red-600 text-white leading-none">FR</span>
    ) : pokemon.exclusivity === 'leafgreen' ? (
      <span className="text-[9px] font-bold px-1 py-0.5 rounded bg-green-600 text-white leading-none">LG</span>
    ) : null

  return (
    <div
      onClick={handleCardClick}
      className={`relative flex flex-col items-center p-2 rounded-xl border-2 cursor-pointer transition-all select-none
        ${caught ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-400'}
        ${selected ? 'ring-2 ring-blue-400 border-blue-400' : ''}
      `}
    >
      {/* Caught overlay */}
      {caught && (
        <div className="absolute inset-0 rounded-xl flex items-center justify-center pointer-events-none">
          <span className="text-green-500 opacity-20 text-7xl font-black">✓</span>
        </div>
      )}

      {/* Dex number + version badge */}
      <div className="flex items-center gap-1 w-full mb-0.5">
        <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">
          #{String(pokemon.id).padStart(3, '0')}
          {dexView === 'national' && pokemon.dex === 'kanto' && (
            <span className="ml-1 text-gray-300 dark:text-gray-600">Kanto</span>
          )}
        </span>
        <div className="ml-auto">{versionBadge}</div>
      </div>

      {/* Sprite */}
      <div className="w-16 h-16 flex items-center justify-center">
        {pokemon.sprite ? (
          <img
            src={pokemon.sprite}
            alt={pokemon.name}
            className={`w-full h-full object-contain image-rendering-pixelated transition-opacity ${caught ? 'opacity-60' : 'opacity-100'}`}
            loading="lazy"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 text-xs">?</div>
        )}
      </div>

      {/* Name */}
      <span className={`text-xs font-semibold capitalize mt-1 text-center leading-tight ${caught ? 'text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-100'}`}>
        {pokemon.name}
      </span>

      {/* Type badges */}
      <div className="flex gap-1 mt-1 flex-wrap justify-center">
        {pokemon.types.map(type => (
          <span
            key={type}
            className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide ${TYPE_COLORS[type] || 'bg-gray-300 text-gray-700'} ${TYPE_TEXT[type] || 'text-white'}`}
          >
            {type}
          </span>
        ))}
      </div>

      {/* Caught checkbox */}
      <label
        onClick={e => e.stopPropagation()}
        className="flex items-center gap-1 mt-2 cursor-pointer"
      >
        <input
          type="checkbox"
          checked={caught}
          onChange={handleCheckbox}
          className="w-4 h-4 accent-green-500 cursor-pointer"
        />
        <span className="text-[10px] text-gray-500 dark:text-gray-400">{caught ? 'Caught' : 'Not caught'}</span>
      </label>
    </div>
  )
}
