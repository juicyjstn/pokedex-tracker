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
  42:  { from: 41,  fromName: 'Zubat',      trigger: 'level', level: 22 },
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
  169: { from: 42,  fromName: 'Golbat',     trigger: 'friendship' },
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

  // --- Azurill → Marill (cross-gen: Gen 3 → Gen 2) ---
  183: { from: 298, fromName: 'Azurill',    trigger: 'friendship' },

  // --- Wynaut → Wobbuffet (cross-gen: Gen 3 → Gen 2) ---
  202: { from: 360, fromName: 'Wynaut',     trigger: 'level', level: 15 },

  // --- Gen 3 (Hoenn) evolution chains ---
  // Starter lines
  253: { from: 252, fromName: 'Treecko',    trigger: 'level', level: 16 },
  254: { from: 253, fromName: 'Grovyle',    trigger: 'level', level: 36 },
  256: { from: 255, fromName: 'Torchic',    trigger: 'level', level: 16 },
  257: { from: 256, fromName: 'Combusken',  trigger: 'level', level: 36 },
  259: { from: 258, fromName: 'Mudkip',     trigger: 'level', level: 16 },
  260: { from: 259, fromName: 'Marshtomp',  trigger: 'level', level: 36 },
  // Wurmple (personality-based split; shown as two parallel paths)
  266: { from: 265, fromName: 'Wurmple',    trigger: 'level', level: 7  }, // → Silcoon
  267: { from: 266, fromName: 'Silcoon',    trigger: 'level', level: 10 },
  268: { from: 265, fromName: 'Wurmple',    trigger: 'level', level: 7  }, // → Cascoon
  269: { from: 268, fromName: 'Cascoon',    trigger: 'level', level: 10 },
  // Lotad line
  271: { from: 270, fromName: 'Lotad',      trigger: 'level', level: 14 },
  272: { from: 271, fromName: 'Lombre',     trigger: 'stone', item: 'Water Stone' },
  // Seedot line
  274: { from: 273, fromName: 'Seedot',     trigger: 'level', level: 14 },
  275: { from: 274, fromName: 'Nuzleaf',    trigger: 'stone', item: 'Leaf Stone' },
  277: { from: 276, fromName: 'Taillow',    trigger: 'level', level: 22 },
  279: { from: 278, fromName: 'Wingull',    trigger: 'level', level: 25 },
  // Ralts line
  281: { from: 280, fromName: 'Ralts',      trigger: 'level', level: 20 },
  282: { from: 281, fromName: 'Kirlia',     trigger: 'level', level: 30 },
  284: { from: 283, fromName: 'Surskit',    trigger: 'level', level: 22 },
  286: { from: 285, fromName: 'Shroomish',  trigger: 'level', level: 23 },
  // Slakoth line
  288: { from: 287, fromName: 'Slakoth',    trigger: 'level', level: 18 },
  289: { from: 288, fromName: 'Vigoroth',   trigger: 'level', level: 36 },
  // Nincada (Ninjask = normal evo; Shedinja appears with empty party slot + Poké Ball)
  291: { from: 290, fromName: 'Nincada',    trigger: 'level', level: 20 }, // Ninjask
  292: { from: 290, fromName: 'Nincada',    trigger: 'level', level: 20 }, // Shedinja
  // Whismur line
  294: { from: 293, fromName: 'Whismur',    trigger: 'level', level: 20 },
  295: { from: 294, fromName: 'Loudred',    trigger: 'level', level: 40 },
  297: { from: 296, fromName: 'Makuhita',   trigger: 'level', level: 24 },
  301: { from: 300, fromName: 'Skitty',     trigger: 'stone', item: 'Moon Stone' },
  // Aron line
  305: { from: 304, fromName: 'Aron',       trigger: 'level', level: 32 },
  306: { from: 305, fromName: 'Lairon',     trigger: 'level', level: 42 },
  308: { from: 307, fromName: 'Meditite',   trigger: 'level', level: 37 },
  310: { from: 309, fromName: 'Electrike',  trigger: 'level', level: 26 },
  317: { from: 316, fromName: 'Gulpin',     trigger: 'level', level: 26 },
  319: { from: 318, fromName: 'Carvanha',   trigger: 'level', level: 30 },
  321: { from: 320, fromName: 'Wailmer',    trigger: 'level', level: 40 },
  323: { from: 322, fromName: 'Numel',      trigger: 'level', level: 33 },
  326: { from: 325, fromName: 'Spoink',     trigger: 'level', level: 32 },
  // Trapinch line
  329: { from: 328, fromName: 'Trapinch',   trigger: 'level', level: 35 },
  330: { from: 329, fromName: 'Vibrava',    trigger: 'level', level: 45 },
  332: { from: 331, fromName: 'Cacnea',     trigger: 'level', level: 32 },
  334: { from: 333, fromName: 'Swablu',     trigger: 'level', level: 35 },
  340: { from: 339, fromName: 'Barboach',   trigger: 'level', level: 30 },
  342: { from: 341, fromName: 'Corphish',   trigger: 'level', level: 30 },
  344: { from: 343, fromName: 'Baltoy',     trigger: 'level', level: 36 },
  346: { from: 345, fromName: 'Lileep',     trigger: 'level', level: 40 },
  348: { from: 347, fromName: 'Anorith',    trigger: 'level', level: 40 },
  // Feebas → Milotic (max Beauty stat)
  350: { from: 349, fromName: 'Feebas',     trigger: 'beauty' },
  354: { from: 353, fromName: 'Shuppet',    trigger: 'level', level: 37 },
  356: { from: 355, fromName: 'Duskull',    trigger: 'level', level: 37 },
  362: { from: 361, fromName: 'Snorunt',    trigger: 'level', level: 42 },
  // Spheal line
  364: { from: 363, fromName: 'Spheal',     trigger: 'level', level: 32 },
  365: { from: 364, fromName: 'Sealeo',     trigger: 'level', level: 44 },
  // Clamperl (branching by held item when traded)
  367: { from: 366, fromName: 'Clamperl',   trigger: 'trade', item: 'DeepSeaTooth' }, // Huntail
  368: { from: 366, fromName: 'Clamperl',   trigger: 'trade', item: 'DeepSeaScale' }, // Gorebyss
  // Bagon line
  372: { from: 371, fromName: 'Bagon',      trigger: 'level', level: 30 },
  373: { from: 372, fromName: 'Shelgon',    trigger: 'level', level: 50 },
  // Beldum line
  375: { from: 374, fromName: 'Beldum',     trigger: 'level', level: 20 },
  376: { from: 375, fromName: 'Metang',     trigger: 'level', level: 45 },
}

export function getEvolutionLabel(evo) {
  if (evo.trigger === 'level') return `Evolves from ${evo.fromName} at level ${evo.level}`
  if (evo.trigger === 'stone') return `Evolves from ${evo.fromName} using ${evo.item}`
  if (evo.trigger === 'trade' && evo.item) return `Evolves from ${evo.fromName} by trading holding ${evo.item}`
  if (evo.trigger === 'trade') return `Evolves from ${evo.fromName} by trading`
  if (evo.trigger === 'friendship') return `Evolves from ${evo.fromName} with high friendship`
  if (evo.trigger === 'beauty') return `Evolves from ${evo.fromName} with max Beauty`
  return `Evolves from ${evo.fromName}`
}

// Short label shown between sprites in the evolution chain visual
export function evoStepLabel(evo) {
  if (evo.trigger === 'level') return `Lv. ${evo.level}`
  if (evo.trigger === 'stone') return evo.item
  if (evo.trigger === 'trade') return 'Trade'
  if (evo.trigger === 'friendship') return 'Friendship'
  if (evo.trigger === 'beauty') return 'Beauty'
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
