// All 25 Pokemon natures with stat modifiers
// Neutral natures have plus: null, minus: null
// Other natures give +10% to one stat and -10% to another
export const NATURES = [
  { name: 'Hardy',   plus: null,  minus: null  },
  { name: 'Lonely',  plus: 'atk', minus: 'def' },
  { name: 'Brave',   plus: 'atk', minus: 'spe' },
  { name: 'Adamant', plus: 'atk', minus: 'spa' },
  { name: 'Naughty', plus: 'atk', minus: 'spd' },
  { name: 'Bold',    plus: 'def', minus: 'atk' },
  { name: 'Docile',  plus: null,  minus: null  },
  { name: 'Relaxed', plus: 'def', minus: 'spe' },
  { name: 'Impish',  plus: 'def', minus: 'spa' },
  { name: 'Lax',     plus: 'def', minus: 'spd' },
  { name: 'Timid',   plus: 'spe', minus: 'atk' },
  { name: 'Hasty',   plus: 'spe', minus: 'def' },
  { name: 'Serious', plus: null,  minus: null  },
  { name: 'Jolly',   plus: 'spe', minus: 'spa' },
  { name: 'Naive',   plus: 'spe', minus: 'spd' },
  { name: 'Modest',  plus: 'spa', minus: 'atk' },
  { name: 'Mild',    plus: 'spa', minus: 'def' },
  { name: 'Quiet',   plus: 'spa', minus: 'spe' },
  { name: 'Bashful', plus: null,  minus: null  },
  { name: 'Rash',    plus: 'spa', minus: 'spd' },
  { name: 'Calm',    plus: 'spd', minus: 'atk' },
  { name: 'Gentle',  plus: 'spd', minus: 'def' },
  { name: 'Sassy',   plus: 'spd', minus: 'spe' },
  { name: 'Careful', plus: 'spd', minus: 'spa' },
  { name: 'Quirky',  plus: null,  minus: null  },
]

export const STAT_LABELS = {
  hp:  'HP',
  atk: 'Atk',
  def: 'Def',
  spa: 'SpA',
  spd: 'SpD',
  spe: 'Spe',
}

/** Get a display label for a nature, e.g. "Adamant (+Atk / -SpA)" */
export function getNatureLabel(nature) {
  if (!nature.plus) return nature.name
  return `${nature.name} (+${STAT_LABELS[nature.plus]} / -${STAT_LABELS[nature.minus]})`
}

/** Apply nature modifiers to base stats. Returns a new stats object. */
export function applyNature(stats, natureName) {
  const nature = NATURES.find(n => n.name === natureName)
  if (!nature || !nature.plus) return { ...stats }
  const result = { ...stats }
  result[nature.plus] = Math.floor(result[nature.plus] * 1.1)
  result[nature.minus] = Math.floor(result[nature.minus] * 0.9)
  result.bst = result.hp + result.atk + result.def + result.spa + result.spd + result.spe
  return result
}
