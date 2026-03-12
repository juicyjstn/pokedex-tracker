import { usePokemonStore } from '../store/usePokemonStore'
import { PokemonCard } from './PokemonCard'

export function PokedexGrid() {
  const { getFiltered, selectedId } = usePokemonStore()
  const filtered = getFiltered()

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500">
        <span className="text-5xl mb-4">🔍</span>
        <p className="text-lg font-medium">No Pokémon match your filters.</p>
        <p className="text-sm mt-1">Try adjusting or resetting your filters.</p>
      </div>
    )
  }

  return (
    <div
      className="grid gap-3 p-4"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))' }}
    >
      {filtered.map(p => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </div>
  )
}
