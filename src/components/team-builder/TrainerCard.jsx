import { TYPE_COLORS, TYPE_TEXT } from '../typeColors'
import { getEffectiveness } from '../../data/type-chart'

export function TrainerCard({ trainer, teamEntry, moves: moveDb, teamPokemon, teamMembers }) {
  return (
    <div className="space-y-2">
      {trainer.teams.map((t, ti) => (
        <div key={ti}>
          {trainer.teams.length > 1 && (
            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium mb-1">{t.label}</p>
          )}
          <div className="space-y-1">
            {t.pokemon.map((tp, pi) => {
              // Find which team members have a SE move against this trainer Pokemon
              const coveringMembers = []
              for (let i = 0; i < 6; i++) {
                const member = teamMembers[i]
                const pkmn = teamPokemon[i]
                if (!member || !pkmn) continue
                for (const moveName of member.moves) {
                  if (!moveName) continue
                  const moveData = moveDb[moveName]
                  if (!moveData?.type || !moveData.power) continue
                  const eff = getEffectiveness(moveData.type, tp.types)
                  if (eff >= 2) {
                    coveringMembers.push(pkmn.name)
                    break
                  }
                }
              }

              const isCovered = coveringMembers.length > 0

              return (
                <div key={pi} className="flex items-center gap-2 text-xs">
                  {/* Trainer's Pokemon */}
                  <span className="w-20 font-medium text-gray-900 dark:text-gray-100 capitalize truncate">
                    {tp.name}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 text-[10px] w-8">
                    Lv.{tp.level}
                  </span>
                  <div className="flex gap-0.5">
                    {tp.types.map(type => (
                      <span
                        key={type}
                        className={`${TYPE_COLORS[type] || 'bg-gray-400'} ${TYPE_TEXT[type] || 'text-white'} text-[7px] font-bold px-1 rounded-full uppercase`}
                      >
                        {type.slice(0, 3)}
                      </span>
                    ))}
                  </div>
                  {/* Coverage indicator */}
                  <span className={`ml-auto text-[10px] font-medium ${isCovered ? 'text-green-600 dark:text-green-400' : 'text-gray-400 dark:text-gray-500'}`}>
                    {isCovered ? coveringMembers.map(n => n.slice(0, 6)).join(', ') : 'no SE'}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
