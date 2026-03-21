// Manually curated RSE data for Pokémon not covered by PokeAPI encounter data.
// Each entry uses the same shape as API encounter data so it merges cleanly.
//
// obtainMethods: array of { location, method, methodDisplay, versions, notes }
//   - versions: 'both' | 'ruby' | 'sapphire' | 'emerald'
//   - method: 'gift' | 'trade' | 'static' | 'walk' | 'surf' | etc.

export const manualData = {
  // --- STARTERS ---
  252: { // Treecko
    obtainMethods: [{ location: 'Route 101', area: 'hoenn-route-101', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Choose as starter from Prof. Birch on Route 101 (1 of 3 choices)" }],
  },
  255: { // Torchic
    obtainMethods: [{ location: 'Route 101', area: 'hoenn-route-101', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Choose as starter from Prof. Birch on Route 101 (1 of 3 choices)" }],
  },
  258: { // Mudkip
    obtainMethods: [{ location: 'Route 101', area: 'hoenn-route-101', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Choose as starter from Prof. Birch on Route 101 (1 of 3 choices)" }],
  },

  // --- FOSSILS ---
  345: { // Lileep (Root Fossil)
    obtainMethods: [
      { location: 'Mirage Tower', area: 'hoenn-mirage-tower', method: 'pick-up', methodDisplay: 'Item Pick-up', versions: 'both', notes: "Pick Root Fossil on Mirage Tower 4F (exclusive choice vs. Claw Fossil)" },
      { location: 'Rustboro City Devon Corp', area: 'hoenn-rustboro-city', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Revived from Root Fossil at Devon Corp in Rustboro City" },
    ],
  },
  347: { // Anorith (Claw Fossil)
    obtainMethods: [
      { location: 'Mirage Tower', area: 'hoenn-mirage-tower', method: 'pick-up', methodDisplay: 'Item Pick-up', versions: 'both', notes: "Pick Claw Fossil on Mirage Tower 4F (exclusive choice vs. Root Fossil)" },
      { location: 'Rustboro City Devon Corp', area: 'hoenn-rustboro-city', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Revived from Claw Fossil at Devon Corp in Rustboro City" },
    ],
  },

  // --- GIFT POKÉMON ---
  360: { // Wynaut
    obtainMethods: [{ location: 'Lavaridge Town', area: 'hoenn-lavaridge-town', method: 'gift-egg', methodDisplay: 'Gift (Egg)', versions: 'both', notes: "Received as an Egg from old lady in Lavaridge Town" }],
  },
  351: { // Castform
    obtainMethods: [{ location: 'Route 119 Weather Institute', area: 'hoenn-route-119', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Given by Weather Institute scientist after defeating Team Magma/Aqua" }],
  },
  374: { // Beldum
    obtainMethods: [{ location: 'Mossdeep City', area: 'hoenn-mossdeep-city', method: 'gift', methodDisplay: 'Gift', versions: 'emerald', notes: "Left by Steven Stone in his house in Mossdeep City after defeating the Elite Four (Emerald)" }],
  },

  // --- IN-GAME TRADES ---
  222: { // Corsola
    obtainMethods: [{ location: 'Pacifidlog Town', area: 'hoenn-pacifidlog-town', method: 'trade', methodDisplay: 'In-Game Trade', versions: 'both', notes: "Trade a Bagon to NPC in Pacifidlog Town" }],
  },

  // --- LEGENDARY / STATIC ENCOUNTERS ---
  377: { // Regirock
    obtainMethods: [{ location: 'Desert Ruins', area: 'hoenn-desert-ruins', method: 'static', methodDisplay: 'Static', versions: 'both', notes: "Lv.40 — found in Desert Ruins on Route 111; requires completing the Sealed Chamber puzzle" }],
  },
  378: { // Regice
    obtainMethods: [{ location: 'Island Cave', area: 'hoenn-island-cave', method: 'static', methodDisplay: 'Static', versions: 'both', notes: "Lv.40 — found in Island Cave on Route 105; requires completing the Sealed Chamber puzzle" }],
  },
  379: { // Registeel
    obtainMethods: [{ location: 'Ancient Tomb', area: 'hoenn-ancient-tomb', method: 'static', methodDisplay: 'Static', versions: 'both', notes: "Lv.40 — found in Ancient Tomb on Route 120; requires completing the Sealed Chamber puzzle" }],
  },
  380: { // Latias
    obtainMethods: [
      { location: 'Southern Island', area: 'hoenn-southern-island', method: 'static', methodDisplay: 'Static', versions: 'sapphire', notes: "Lv.50 — found on Southern Island with Eon Ticket (Sapphire)" },
      { location: 'Hoenn (Roaming)', area: 'hoenn-route-101', method: 'roaming-grass', methodDisplay: 'Roaming', versions: 'ruby', notes: "Lv.40 — roams across Hoenn after defeating the Elite Four (Ruby)" },
      { location: 'Southern Island', area: 'hoenn-southern-island', method: 'static', methodDisplay: 'Static', versions: 'emerald', notes: "Lv.50 — one of the two Eon Pokémon; choose Latias or Latios at Southern Island (Emerald)" },
    ],
  },
  381: { // Latios
    obtainMethods: [
      { location: 'Southern Island', area: 'hoenn-southern-island', method: 'static', methodDisplay: 'Static', versions: 'ruby', notes: "Lv.50 — found on Southern Island with Eon Ticket (Ruby)" },
      { location: 'Hoenn (Roaming)', area: 'hoenn-route-101', method: 'roaming-grass', methodDisplay: 'Roaming', versions: 'sapphire', notes: "Lv.40 — roams across Hoenn after defeating the Elite Four (Sapphire)" },
      { location: 'Southern Island', area: 'hoenn-southern-island', method: 'static', methodDisplay: 'Static', versions: 'emerald', notes: "Lv.50 — one of the two Eon Pokémon; choose Latias or Latios at Southern Island (Emerald)" },
    ],
  },
  382: { // Kyogre
    obtainMethods: [
      { location: 'Cave of Origin', area: 'hoenn-cave-of-origin', method: 'static', methodDisplay: 'Static', versions: 'sapphire', notes: "Lv.45 — encountered in Cave of Origin in Sootopolis City (Sapphire)" },
      { location: 'Marine Cave', area: 'hoenn-marine-cave', method: 'static', methodDisplay: 'Static', versions: 'emerald', notes: "Lv.70 — found in Marine Cave (location rotates); requires catching Groudon first (Emerald)" },
    ],
  },
  383: { // Groudon
    obtainMethods: [
      { location: 'Cave of Origin', area: 'hoenn-cave-of-origin', method: 'static', methodDisplay: 'Static', versions: 'ruby', notes: "Lv.45 — encountered in Cave of Origin in Sootopolis City (Ruby)" },
      { location: 'Terra Cave', area: 'hoenn-terra-cave', method: 'static', methodDisplay: 'Static', versions: 'emerald', notes: "Lv.70 — found in Terra Cave (location rotates); requires catching Kyogre first (Emerald)" },
    ],
  },
  384: { // Rayquaza
    obtainMethods: [{ location: 'Sky Pillar', area: 'hoenn-sky-pillar', method: 'static', methodDisplay: 'Static', versions: 'both', notes: "Lv.70 — found at the top of Sky Pillar on Route 131; requires Mach Bike to ascend" }],
  },
  385: { // Jirachi
    obtainMethods: [{ location: 'Pokémon Colosseum Bonus Disc', area: 'special-event', method: 'gift', methodDisplay: 'Event', versions: 'both', notes: "Transferred from Pokémon Colosseum Bonus Disc (Japan) or Pokémon Channel (PAL)" }],
  },
  386: { // Deoxys
    obtainMethods: [{ location: 'Nintendo Event', area: 'special-event', method: 'gift', methodDisplay: 'Event', versions: 'emerald', notes: "Obtained via Nintendo event or Pokémon Rocks America (Emerald); Birth Island accessible via Aurora Ticket" }],
  },
}

// Gen 1–2 Pokémon that are obtainable in RSE only by evolution (no wild encounters).
// The fetch script will always include these in the national dex.
export const nationalEvolutionIds = [
  // Gen 1 evolution-only (if base form has RSE encounter)
  6,   // Charizard    ← Charmeleon (#5)   [Charmeleon from Charcoal salesman trade in Emerald? Skip for now]
  // Gen 2 Pokémon
  162, // Furret      ← Sentret
  169, // Crobat      ← Golbat (#42)
  166, // Ledian      ← Ledyba
  168, // Ariados     ← Spinarak
  176, // Togetic     ← Togepi [Togepi obtainable via trade or events]
  178, // Xatu        ← Natu
  180, // Flaaffy     ← Mareep
  181, // Ampharos    ← Flaaffy
  183, // Marill      ← Azurill
  184, // Azumarill   ← Marill
  188, // Skiploom    ← Hoppip
  189, // Jumpluff    ← Skiploom
  195, // Quagsire    ← Wooper
  205, // Forretress  ← Pineco
  217, // Ursaring    ← Teddiursa
  221, // Piloswine   ← Swinub
  224, // Octillery   ← Remoraid
  229, // Houndoom    ← Houndour
  232, // Donphan     ← Phanpy
  247, // Pupitar     ← Larvitar
  248, // Tyranitar   ← Pupitar
]

// Gen 3 type corrections: PokeAPI returns current (post-Gen-6) types.
// Fairy type didn't exist in Gen 3, so these Pokémon had different types in RSE.
export const gen3TypeOverrides = {
  35:  ['normal'],          // Clefairy:   Fairy → Normal
  36:  ['normal'],          // Clefable:   Fairy → Normal
  39:  ['normal'],          // Jigglypuff: Normal/Fairy → Normal
  40:  ['normal'],          // Wigglytuff: Normal/Fairy → Normal
  122: ['psychic'],         // Mr. Mime:   Psychic/Fairy → Psychic
  175: ['normal'],          // Togepi:     Fairy → Normal
  176: ['normal', 'flying'],// Togetic:    Fairy/Flying → Normal/Flying
  183: ['water'],           // Marill:     Water/Fairy → Water
  184: ['water'],           // Azumarill:  Water/Fairy → Water
  298: ['normal'],          // Azurill:    Normal/Fairy → Normal
  // Gen 3 new Pokémon
  280: ['psychic'],         // Ralts:      Psychic/Fairy → Psychic
  281: ['psychic'],         // Kirlia:     Psychic/Fairy → Psychic
  282: ['psychic'],         // Gardevoir:  Psychic/Fairy → Psychic
  300: ['normal'],          // Skitty:     Normal/Fairy → Normal (Skitty is just Normal)
  301: ['normal'],          // Delcatty:   Normal/Fairy → Normal
  // Mawile was Steel/Fairy → Steel in Gen 3
  303: ['steel'],           // Mawile:     Steel/Fairy → Steel
  // Snorunt/Glalie are Ice in both, fine
  // Jigglypuff line already covered above
}

// Version-exclusive Pokémon in RSE (wild encounters)
// Ruby exclusives vs Sapphire exclusives
export const versionExclusives = {
  ruby: [
    273, 274, 275, // Seedot, Nuzleaf, Shiftry
    303,           // Mawile
    335,           // Zangoose
    338,           // Solrock
    383,           // Groudon
  ],
  sapphire: [
    270, 271, 272, // Lotad, Lombre, Ludicolo
    302,           // Sableye
    336,           // Seviper
    337,           // Lunatone
    382,           // Kyogre
  ],
}

// RSE TM/HM — maps move slug → label (TM01–TM50, HM01–HM08)
// TM01–TM50 are identical to FRLG; RSE adds HM08: Dive
export const rseMachines = {
  'focus-punch': 'TM01', 'dragon-claw': 'TM02', 'water-pulse': 'TM03',
  'calm-mind': 'TM04', 'roar': 'TM05', 'toxic': 'TM06', 'hail': 'TM07',
  'bulk-up': 'TM08', 'bullet-seed': 'TM09', 'hidden-power': 'TM10',
  'sunny-day': 'TM11', 'taunt': 'TM12', 'ice-beam': 'TM13', 'blizzard': 'TM14',
  'hyper-beam': 'TM15', 'light-screen': 'TM16', 'protect': 'TM17',
  'rain-dance': 'TM18', 'giga-drain': 'TM19', 'safeguard': 'TM20',
  'frustration': 'TM21', 'solar-beam': 'TM22', 'iron-tail': 'TM23',
  'thunderbolt': 'TM24', 'thunder': 'TM25', 'earthquake': 'TM26',
  'return': 'TM27', 'dig': 'TM28', 'psychic': 'TM29', 'shadow-ball': 'TM30',
  'brick-break': 'TM31', 'double-team': 'TM32', 'reflect': 'TM33',
  'shock-wave': 'TM34', 'flamethrower': 'TM35', 'sludge-bomb': 'TM36',
  'sandstorm': 'TM37', 'fire-blast': 'TM38', 'rock-tomb': 'TM39',
  'aerial-ace': 'TM40', 'torment': 'TM41', 'facade': 'TM42',
  'secret-power': 'TM43', 'rest': 'TM44', 'attract': 'TM45', 'thief': 'TM46',
  'steel-wing': 'TM47', 'skill-swap': 'TM48', 'snatch': 'TM49', 'overheat': 'TM50',
  'cut': 'HM01', 'fly': 'HM02', 'surf': 'HM03', 'strength': 'HM04',
  'flash': 'HM05', 'rock-smash': 'HM06', 'waterfall': 'HM07', 'dive': 'HM08',
}
