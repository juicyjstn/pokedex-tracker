// Gen 3 type effectiveness chart (no Fairy type)
export const TYPES = [
  'normal','fire','water','electric','grass','ice',
  'fighting','poison','ground','flying','psychic',
  'bug','rock','ghost','dragon','dark','steel',
]

// EFFECTIVENESS[attackingType][defendingType] = damage multiplier
// 0 = immune, 0.5 = not very effective, 1 = neutral, 2 = super effective
export const EFFECTIVENESS = {
  normal:   { normal:1, fire:1, water:1, electric:1, grass:1, ice:1, fighting:1, poison:1, ground:1, flying:1, psychic:1, bug:1, rock:0.5, ghost:0, dragon:1, dark:1, steel:0.5 },
  fire:     { normal:1, fire:0.5, water:0.5, electric:1, grass:2, ice:2, fighting:1, poison:1, ground:1, flying:1, psychic:1, bug:2, rock:0.5, ghost:1, dragon:0.5, dark:1, steel:2 },
  water:    { normal:1, fire:2, water:0.5, electric:1, grass:0.5, ice:1, fighting:1, poison:1, ground:2, flying:1, psychic:1, bug:1, rock:2, ghost:1, dragon:0.5, dark:1, steel:1 },
  electric: { normal:1, fire:1, water:2, electric:0.5, grass:0.5, ice:1, fighting:1, poison:1, ground:0, flying:2, psychic:1, bug:1, rock:1, ghost:1, dragon:0.5, dark:1, steel:1 },
  grass:    { normal:1, fire:0.5, water:2, electric:1, grass:0.5, ice:1, fighting:1, poison:0.5, ground:2, flying:0.5, psychic:1, bug:0.5, rock:2, ghost:1, dragon:0.5, dark:1, steel:0.5 },
  ice:      { normal:1, fire:0.5, water:0.5, electric:1, grass:2, ice:0.5, fighting:1, poison:1, ground:2, flying:2, psychic:1, bug:1, rock:1, ghost:1, dragon:2, dark:1, steel:0.5 },
  fighting: { normal:2, fire:1, water:1, electric:1, grass:1, ice:2, fighting:1, poison:0.5, ground:1, flying:0.5, psychic:0.5, bug:0.5, rock:2, ghost:0, dragon:1, dark:2, steel:2 },
  poison:   { normal:1, fire:1, water:1, electric:1, grass:2, ice:1, fighting:1, poison:0.5, ground:0.5, flying:1, psychic:1, bug:1, rock:0.5, ghost:0.5, dragon:1, dark:1, steel:0 },
  ground:   { normal:1, fire:2, water:1, electric:2, grass:0.5, ice:1, fighting:1, poison:2, ground:1, flying:0, psychic:1, bug:0.5, rock:2, ghost:1, dragon:1, dark:1, steel:2 },
  flying:   { normal:1, fire:1, water:1, electric:0.5, grass:2, ice:1, fighting:2, poison:1, ground:1, flying:1, psychic:1, bug:2, rock:0.5, ghost:1, dragon:1, dark:1, steel:0.5 },
  psychic:  { normal:1, fire:1, water:1, electric:1, grass:1, ice:1, fighting:2, poison:2, ground:1, flying:1, psychic:0.5, bug:1, rock:1, ghost:1, dragon:1, dark:0, steel:0.5 },
  bug:      { normal:1, fire:0.5, water:1, electric:1, grass:2, ice:1, fighting:0.5, poison:0.5, ground:1, flying:0.5, psychic:2, bug:1, rock:1, ghost:0.5, dragon:1, dark:2, steel:0.5 },
  rock:     { normal:1, fire:2, water:1, electric:1, grass:1, ice:2, fighting:0.5, poison:1, ground:0.5, flying:2, psychic:1, bug:2, rock:1, ghost:1, dragon:1, dark:1, steel:0.5 },
  ghost:    { normal:0, fire:1, water:1, electric:1, grass:1, ice:1, fighting:1, poison:1, ground:1, flying:1, psychic:2, bug:1, rock:1, ghost:2, dragon:1, dark:0.5, steel:0.5 },
  dragon:   { normal:1, fire:1, water:1, electric:1, grass:1, ice:1, fighting:1, poison:1, ground:1, flying:1, psychic:1, bug:1, rock:1, ghost:1, dragon:2, dark:1, steel:0.5 },
  dark:     { normal:1, fire:1, water:1, electric:1, grass:1, ice:1, fighting:0.5, poison:1, ground:1, flying:1, psychic:2, bug:1, rock:1, ghost:2, dragon:1, dark:0.5, steel:0.5 },
  steel:    { normal:1, fire:0.5, water:0.5, electric:0.5, grass:1, ice:2, fighting:1, poison:1, ground:1, flying:1, psychic:1, bug:1, rock:2, ghost:1, dragon:1, dark:1, steel:0.5 },
}

/** Get the damage multiplier for an attack type against a Pokemon's type(s) */
export function getEffectiveness(attackType, defenseTypes) {
  let mult = 1
  for (const dt of defenseTypes) {
    mult *= EFFECTIVENESS[attackType]?.[dt] ?? 1
  }
  return mult
}

/**
 * Get offensive coverage for a team's selected moves.
 * Returns an object: { type: bestMultiplier } for each defending type.
 * moveTypes is an array of move type strings (from the team's selected moves).
 */
export function getTeamOffensiveCoverage(moveTypes) {
  const coverage = {}
  for (const defType of TYPES) {
    let best = 0
    for (const atkType of moveTypes) {
      const mult = EFFECTIVENESS[atkType]?.[defType] ?? 1
      if (mult > best) best = mult
    }
    coverage[defType] = best
  }
  return coverage
}

/**
 * Get defensive weaknesses for a team.
 * teamTypes is an array of [type1, type2?] arrays (one per team member).
 * Returns an object: { type: numberOfWeakMembers } for types that hit at least one member SE.
 */
export function getTeamWeaknesses(teamTypes) {
  const weaknesses = {}
  for (const atkType of TYPES) {
    let weakCount = 0
    for (const memberTypes of teamTypes) {
      const mult = getEffectiveness(atkType, memberTypes)
      if (mult > 1) weakCount++
    }
    if (weakCount > 0) weaknesses[atkType] = weakCount
  }
  return weaknesses
}

/**
 * Get defensive resistances for a team.
 * Returns an object: { type: numberOfResistantMembers }
 */
export function getTeamResistances(teamTypes) {
  const resistances = {}
  for (const atkType of TYPES) {
    let resistCount = 0
    for (const memberTypes of teamTypes) {
      const mult = getEffectiveness(atkType, memberTypes)
      if (mult < 1) resistCount++
    }
    if (resistCount > 0) resistances[atkType] = resistCount
  }
  return resistances
}
