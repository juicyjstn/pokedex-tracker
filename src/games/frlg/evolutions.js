// Gen 1 evolution data: maps Pokémon ID → how it evolves from a prior form
// trigger: 'level' | 'stone' | 'trade'
export const evolutionData = {
  2:   { from: 1,   fromName: 'Bulbasaur',  trigger: 'level', level: 16 },
  3:   { from: 2,   fromName: 'Ivysaur',    trigger: 'level', level: 32 },
  5:   { from: 4,   fromName: 'Charmander', trigger: 'level', level: 16 },
  6:   { from: 5,   fromName: 'Charmeleon', trigger: 'level', level: 36 },
  8:   { from: 7,   fromName: 'Squirtle',   trigger: 'level', level: 16 },
  9:   { from: 8,   fromName: 'Wartortle',  trigger: 'level', level: 36 },
  11:  { from: 10,  fromName: 'Caterpie',   trigger: 'level', level: 7  },
  12:  { from: 11,  fromName: 'Metapod',    trigger: 'level', level: 10 },
  14:  { from: 13,  fromName: 'Weedle',     trigger: 'level', level: 7  },
  15:  { from: 14,  fromName: 'Kakuna',     trigger: 'level', level: 10 },
  17:  { from: 16,  fromName: 'Pidgey',     trigger: 'level', level: 18 },
  18:  { from: 17,  fromName: 'Pidgeotto',  trigger: 'level', level: 36 },
  20:  { from: 19,  fromName: 'Rattata',    trigger: 'level', level: 20 },
  22:  { from: 21,  fromName: 'Spearow',    trigger: 'level', level: 20 },
  24:  { from: 23,  fromName: 'Ekans',      trigger: 'level', level: 22 },
  26:  { from: 25,  fromName: 'Pikachu',    trigger: 'stone', item: 'Thunder Stone' },
  28:  { from: 27,  fromName: 'Sandshrew',  trigger: 'level', level: 22 },
  30:  { from: 29,  fromName: 'Nidoran♀',  trigger: 'level', level: 16 },
  31:  { from: 30,  fromName: 'Nidorina',   trigger: 'stone', item: 'Moon Stone' },
  33:  { from: 32,  fromName: 'Nidoran♂',  trigger: 'level', level: 16 },
  34:  { from: 33,  fromName: 'Nidorino',   trigger: 'stone', item: 'Moon Stone' },
  36:  { from: 35,  fromName: 'Clefairy',   trigger: 'stone', item: 'Moon Stone' },
  38:  { from: 37,  fromName: 'Vulpix',     trigger: 'stone', item: 'Fire Stone' },
  40:  { from: 39,  fromName: 'Jigglypuff', trigger: 'stone', item: 'Moon Stone' },
  44:  { from: 43,  fromName: 'Oddish',     trigger: 'level', level: 21 },
  45:  { from: 44,  fromName: 'Gloom',      trigger: 'stone', item: 'Leaf Stone' },
  47:  { from: 46,  fromName: 'Paras',      trigger: 'level', level: 24 },
  49:  { from: 48,  fromName: 'Venonat',    trigger: 'level', level: 31 },
  51:  { from: 50,  fromName: 'Diglett',    trigger: 'level', level: 26 },
  53:  { from: 52,  fromName: 'Meowth',     trigger: 'level', level: 28 },
  55:  { from: 54,  fromName: 'Psyduck',    trigger: 'level', level: 33 },
  57:  { from: 56,  fromName: 'Mankey',     trigger: 'level', level: 28 },
  59:  { from: 58,  fromName: 'Growlithe',  trigger: 'stone', item: 'Fire Stone' },
  61:  { from: 60,  fromName: 'Poliwag',    trigger: 'level', level: 25 },
  62:  { from: 61,  fromName: 'Poliwhirl',  trigger: 'stone', item: 'Water Stone' },
  64:  { from: 63,  fromName: 'Abra',       trigger: 'level', level: 16 },
  65:  { from: 64,  fromName: 'Kadabra',    trigger: 'trade' },
  67:  { from: 66,  fromName: 'Machop',     trigger: 'level', level: 28 },
  68:  { from: 67,  fromName: 'Machoke',    trigger: 'trade' },
  70:  { from: 69,  fromName: 'Bellsprout', trigger: 'level', level: 29 },
  71:  { from: 70,  fromName: 'Weepinbell', trigger: 'stone', item: 'Leaf Stone' },
  73:  { from: 72,  fromName: 'Tentacool',  trigger: 'level', level: 30 },
  75:  { from: 74,  fromName: 'Geodude',    trigger: 'level', level: 25 },
  76:  { from: 75,  fromName: 'Graveler',   trigger: 'trade' },
  78:  { from: 77,  fromName: 'Ponyta',     trigger: 'level', level: 40 },
  80:  { from: 79,  fromName: 'Slowpoke',   trigger: 'level', level: 37 },
  82:  { from: 81,  fromName: 'Magnemite',  trigger: 'level', level: 30 },
  85:  { from: 84,  fromName: 'Doduo',      trigger: 'level', level: 31 },
  87:  { from: 86,  fromName: 'Seel',       trigger: 'level', level: 34 },
  89:  { from: 88,  fromName: 'Grimer',     trigger: 'level', level: 38 },
  91:  { from: 90,  fromName: 'Shellder',   trigger: 'stone', item: 'Water Stone' },
  93:  { from: 92,  fromName: 'Gastly',     trigger: 'level', level: 25 },
  94:  { from: 93,  fromName: 'Haunter',    trigger: 'trade' },
  97:  { from: 96,  fromName: 'Drowzee',    trigger: 'level', level: 26 },
  99:  { from: 98,  fromName: 'Krabby',     trigger: 'level', level: 28 },
  101: { from: 100, fromName: 'Voltorb',    trigger: 'level', level: 30 },
  103: { from: 102, fromName: 'Exeggcute',  trigger: 'stone', item: 'Leaf Stone' },
  105: { from: 104, fromName: 'Cubone',     trigger: 'level', level: 28 },
  110: { from: 109, fromName: 'Koffing',    trigger: 'level', level: 35 },
  112: { from: 111, fromName: 'Rhyhorn',    trigger: 'level', level: 42 },
  117: { from: 116, fromName: 'Horsea',     trigger: 'level', level: 32 },
  119: { from: 118, fromName: 'Goldeen',    trigger: 'level', level: 33 },
  121: { from: 120, fromName: 'Staryu',     trigger: 'stone', item: 'Water Stone' },
  130: { from: 129, fromName: 'Magikarp',   trigger: 'level', level: 20 },
  134: { from: 133, fromName: 'Eevee',      trigger: 'stone', item: 'Water Stone' },
  135: { from: 133, fromName: 'Eevee',      trigger: 'stone', item: 'Thunder Stone' },
  136: { from: 133, fromName: 'Eevee',      trigger: 'stone', item: 'Fire Stone' },
  139: { from: 138, fromName: 'Omanyte',    trigger: 'level', level: 40 },
  141: { from: 140, fromName: 'Kabuto',     trigger: 'level', level: 40 },
  148: { from: 147, fromName: 'Dratini',    trigger: 'level', level: 30 },
  149: { from: 148, fromName: 'Dragonair',  trigger: 'level', level: 55 },

  // --- Gen 2 (National Dex chains available in FRLG) ---
  162: { from: 161, fromName: 'Sentret',    trigger: 'level', level: 15 },
  166: { from: 165, fromName: 'Ledyba',     trigger: 'level', level: 18 },
  168: { from: 167, fromName: 'Spinarak',   trigger: 'level', level: 22 },
  176: { from: 175, fromName: 'Togepi',     trigger: 'friendship' },
  178: { from: 177, fromName: 'Natu',       trigger: 'level', level: 25 },
  180: { from: 179, fromName: 'Mareep',     trigger: 'level', level: 15 },
  181: { from: 180, fromName: 'Flaaffy',    trigger: 'level', level: 30 },
  184: { from: 183, fromName: 'Marill',     trigger: 'level', level: 18 },
  188: { from: 187, fromName: 'Hoppip',     trigger: 'level', level: 18 },
  189: { from: 188, fromName: 'Skiploom',   trigger: 'level', level: 27 },
  195: { from: 194, fromName: 'Wooper',     trigger: 'level', level: 20 },
  205: { from: 204, fromName: 'Pineco',     trigger: 'level', level: 31 },
  217: { from: 216, fromName: 'Teddiursa',  trigger: 'level', level: 30 },
  221: { from: 220, fromName: 'Swinub',     trigger: 'level', level: 33 },
  224: { from: 223, fromName: 'Remoraid',   trigger: 'level', level: 25 },
  229: { from: 228, fromName: 'Houndour',   trigger: 'level', level: 24 },
  232: { from: 231, fromName: 'Phanpy',     trigger: 'level', level: 25 },
  247: { from: 246, fromName: 'Larvitar',   trigger: 'level', level: 30 },
  248: { from: 247, fromName: 'Pupitar',    trigger: 'level', level: 55 },
}

export function getEvolutionLabel(evo) {
  if (evo.trigger === 'level') return `Evolves from ${evo.fromName} at level ${evo.level}`
  if (evo.trigger === 'stone') return `Evolves from ${evo.fromName} using ${evo.item}`
  if (evo.trigger === 'trade') return `Evolves from ${evo.fromName} by trading`
  if (evo.trigger === 'friendship') return `Evolves from ${evo.fromName} with high friendship`
  return `Evolves from ${evo.fromName}`
}

// Short label shown between sprites in the evolution chain visual
export function evoStepLabel(evo) {
  if (evo.trigger === 'level') return `Lv. ${evo.level}`
  if (evo.trigger === 'stone') return evo.item
  if (evo.trigger === 'trade') return 'Trade'
  if (evo.trigger === 'friendship') return 'Friendship'
  return '→'
}

// Returns the full evolution chain for any Pokémon in the chain.
// Linear:   { type: 'linear',    chain: [id, evoData, id, evoData, id, ...] }
// Branching:{ type: 'branching', baseId, branches: [{id, evoData}, ...] }
// No chain: null
export function getFullEvolutionChain(pokemonId) {
  // Walk up to base form
  let baseId = pokemonId
  while (evolutionData[baseId]) baseId = evolutionData[baseId].from

  // All direct children of a given id
  const childrenOf = parentId =>
    Object.entries(evolutionData)
      .filter(([, d]) => d.from === parentId)
      .map(([id, d]) => ({ id: Number(id), evoData: d }))

  const direct = childrenOf(baseId)
  if (direct.length === 0) return null

  // Branching (e.g. Eevee → Vaporeon/Jolteon/Flareon)
  if (direct.length > 1) {
    return { type: 'branching', baseId, branches: direct }
  }

  // Linear chain: walk down until leaf
  const chain = [baseId]
  let cur = baseId
  while (true) {
    const kids = childrenOf(cur)
    if (kids.length === 0) break
    chain.push(kids[0].evoData)
    chain.push(kids[0].id)
    cur = kids[0].id
  }
  if (chain.length === 1) return null
  return { type: 'linear', chain }
}
