import { useState } from 'react'
import { useTeamStore } from '../../store/useTeamStore'
import { TrainerCard } from './TrainerCard'
import { TYPE_COLORS, TYPE_TEXT } from '../typeColors'
import { getEffectiveness } from '../../data/type-chart'

const CATEGORIES = [
  { id: 'gym', label: 'Gym Leaders' },
  { id: 'elite-four', label: 'Elite Four' },
  { id: 'champion', label: 'Champion' },
  { id: 'rival', label: 'Rival' },
  { id: 'boss', label: 'Bosses' },
]

export function TrainerMatchup() {
  const [open, setOpen] = useState(true)
  const [activeCategory, setActiveCategory] = useState('gym')
  const [expandedTrainer, setExpandedTrainer] = useState(null)

  const trainers = useTeamStore(s => s.trainers)
  const moveDb = useTeamStore(s => s.moves)
  const team = useTeamStore(s => s.getActiveTeam())
  const teamPokemon = useTeamStore(s => s.getTeamPokemon())

  const members = team?.members || []
  const hasMoves = members.some(m => m && m.moves.some(Boolean))

  if (!trainers.length) return null

  const categoryTrainers = trainers.filter(t => t.category === activeCategory)
  const availableCategories = CATEGORIES.filter(c => trainers.some(t => t.category === c.id))

  // Calculate coverage for each trainer
  const getCoverageScore = (trainer) => {
    if (!hasMoves) return null
    let totalPokemon = 0
    let coveredPokemon = 0

    for (const t of trainer.teams) {
      for (const tp of t.pokemon) {
        totalPokemon++
        let isCovered = false
        for (const member of members) {
          if (!member) continue
          for (const moveName of member.moves) {
            if (!moveName) continue
            const moveData = moveDb[moveName]
            if (!moveData?.type || !moveData.power) continue
            if (getEffectiveness(moveData.type, tp.types) >= 2) {
              isCovered = true
              break
            }
          }
          if (isCovered) break
        }
        if (isCovered) coveredPokemon++
      }
    }
    return { covered: coveredPokemon, total: totalPokemon }
  }

  return (
    <section>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full text-left mb-2"
      >
        <span className={`text-gray-400 transition-transform ${open ? 'rotate-90' : ''}`}>&#9654;</span>
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Trainer Matchups
        </h3>
      </button>

      {open && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-1 mb-3">
            {availableCategories.map(c => (
              <button
                key={c.id}
                onClick={() => { setActiveCategory(c.id); setExpandedTrainer(null) }}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors
                  ${activeCategory === c.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Trainer list */}
          <div className="space-y-1">
            {categoryTrainers.map(trainer => {
              const score = getCoverageScore(trainer)
              const isExpanded = expandedTrainer === trainer.id
              const specialityBg = TYPE_COLORS[trainer.speciality] || 'bg-gray-400'
              const specialityText = TYPE_TEXT[trainer.speciality] || 'text-white'

              return (
                <div key={trainer.id} className="rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedTrainer(isExpanded ? null : trainer.id)}
                    className="w-full flex items-center gap-2 px-2 py-1.5 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors"
                  >
                    <span className={`text-gray-400 text-[10px] transition-transform ${isExpanded ? 'rotate-90' : ''}`}>&#9654;</span>
                    <span className="text-xs font-medium text-gray-900 dark:text-gray-100 flex-1">
                      {trainer.name}
                    </span>
                    {trainer.speciality && (
                      <span className={`${specialityBg} ${specialityText} text-[8px] font-bold px-1.5 rounded-full uppercase`}>
                        {trainer.speciality}
                      </span>
                    )}
                    {score && (
                      <span className={`text-[10px] font-medium ${score.covered === score.total ? 'text-green-600 dark:text-green-400' : score.covered > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-red-500'}`}>
                        {score.covered}/{score.total}
                      </span>
                    )}
                    {trainer.location && (
                      <span className="text-[9px] text-gray-400 dark:text-gray-500 hidden sm:inline">
                        {trainer.location}
                      </span>
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-3 pb-2 pt-1">
                      <TrainerCard
                        trainer={trainer}
                        moves={moveDb}
                        teamPokemon={teamPokemon}
                        teamMembers={members}
                      />
                    </div>
                  )}
                </div>
              )
            })}

            {categoryTrainers.length === 0 && (
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center py-3">
                No trainer data for this category
              </p>
            )}
          </div>

          {!hasMoves && members.some(Boolean) && (
            <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-2">
              Assign moves to see matchup coverage
            </p>
          )}
        </div>
      )}
    </section>
  )
}
