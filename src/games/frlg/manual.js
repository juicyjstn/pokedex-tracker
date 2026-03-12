// Manually curated FRLG data for Pokémon not covered by PokeAPI encounter data.
// Each entry uses the same shape as API encounter data so it merges cleanly.
//
// obtainMethods: array of { location, method, methodDisplay, versions, notes }
//   - versions: 'both' | 'firered' | 'leafgreen'
//   - method: 'gift' | 'trade' | 'static' | 'walk' | 'surf' | etc.

export const manualData = {
  // --- STARTERS ---
  1: { // Bulbasaur
    obtainMethods: [{ location: 'Pallet Town', area: 'pallet-town', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Choose as starter from Prof. Oak (1 of 3 choices)" }],
  },
  4: { // Charmander
    obtainMethods: [{ location: 'Pallet Town', area: 'pallet-town', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Choose as starter from Prof. Oak (1 of 3 choices)" }],
  },
  7: { // Squirtle
    obtainMethods: [{ location: 'Pallet Town', area: 'pallet-town', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Choose as starter from Prof. Oak (1 of 3 choices)" }],
  },

  // --- FOSSILS ---
  138: { // Omanyte (Dome Fossil)
    obtainMethods: [
      { location: 'Mt Moon (B2F)', area: 'mt-moon-b2f', method: 'pick-up', methodDisplay: 'Item Pick-up', versions: 'both', notes: "Pick Dome Fossil on Mt. Moon B2F (exclusive choice vs. Helix)" },
      { location: 'Cinnabar Island Cinnabar Lab', area: 'cinnabar-island-cinnabar-lab', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Revived from Dome Fossil at Cinnabar Lab" },
    ],
  },
  140: { // Kabuto (Helix Fossil)
    obtainMethods: [
      { location: 'Mt Moon (B2F)', area: 'mt-moon-b2f', method: 'pick-up', methodDisplay: 'Item Pick-up', versions: 'both', notes: "Pick Helix Fossil on Mt. Moon B2F (exclusive choice vs. Dome)" },
      { location: 'Cinnabar Island Cinnabar Lab', area: 'cinnabar-island-cinnabar-lab', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Revived from Helix Fossil at Cinnabar Lab" },
    ],
  },
  142: { // Aerodactyl (Old Amber)
    obtainMethods: [
      { location: 'Pewter City Museum', area: 'pewter-city', method: 'pick-up', methodDisplay: 'Item Pick-up', versions: 'both', notes: "Receive Old Amber from scientist in Pewter Museum (back room)" },
      { location: 'Cinnabar Island Cinnabar Lab', area: 'cinnabar-island-cinnabar-lab', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Revived from Old Amber at Cinnabar Lab" },
    ],
  },

  // --- GIFT POKÉMON ---
  25: { // Pikachu — starter in Yellow; in FRLG it's just a wild encounter in Viridian Forest
    // No special manual entry needed; PokeAPI covers wild encounters
  },
  133: { // Eevee
    obtainMethods: [{ location: 'Celadon City Celadon Mansion', area: 'celadon-city-celadon-mansion', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Received from on top floor of Celadon Mansion" }],
  },
  106: { // Hitmonlee
    obtainMethods: [{ location: 'Saffron City', area: 'saffron-city', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Choose Hitmonlee from Karate Master in Fighting Dojo (exclusive vs. Hitmonchan)" }],
  },
  107: { // Hitmonchan
    obtainMethods: [{ location: 'Saffron City', area: 'saffron-city', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Choose Hitmonchan from Karate Master in Fighting Dojo (exclusive vs. Hitmonlee)" }],
  },
  131: { // Lapras
    obtainMethods: [{ location: 'Saffron City Silph Co (7F)', area: 'saffron-city-silph-co-7f', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Given by Silph Co. employee on 7F after defeating Giovanni" }],
  },
  137: { // Porygon
    obtainMethods: [{ location: 'Celadon City', area: 'celadon-city', method: 'gift', methodDisplay: 'Gift', versions: 'both', notes: "Purchased for 9,999 coins at Celadon Game Corner Prize Corner" }],
  },

  // --- IN-GAME TRADES ---
  83: { // Farfetch'd
    obtainMethods: [{ location: 'Vermilion City', area: 'vermilion-city', method: 'trade', methodDisplay: 'In-Game Trade', versions: 'both', notes: "Trade a Spearow to NPC in Vermilion City house" }],
  },
  122: { // Mr. Mime
    obtainMethods: [{ location: 'Route 2', area: 'route-2', method: 'trade', methodDisplay: 'In-Game Trade', versions: 'both', notes: "Trade an Abra to NPC outside Diglett's Cave entrance on Route 2" }],
  },
  128: { // Tauros — FR: get via trade
    obtainMethods: [
      { location: 'Route 16', area: 'route-16', method: 'trade', methodDisplay: 'In-Game Trade', versions: 'firered', notes: "Trade a Slowpoke to NPC on Route 16 (FireRed)" },
    ],
  },
  // Jynx trade
  124: { // Jynx
    obtainMethods: [{ location: 'Cerulean City', area: 'cerulean-city', method: 'trade', methodDisplay: 'In-Game Trade', versions: 'both', notes: "Trade a Poliwhirl to NPC in Cerulean City house" }],
  },

  // --- LEGENDARY / STATIC ENCOUNTERS ---
  // Note: PokeAPI covers most of these as wild encounters, but adding notes for clarity
  144: { // Articuno
    obtainMethods: [{ location: 'Seafoam Islands (B4F)', area: 'seafoam-islands-b4f', method: 'static', methodDisplay: 'Static', versions: 'both', notes: "Lv.50 — found in Seafoam Islands B4F; requires Strength & Surf" }],
  },
  145: { // Zapdos
    obtainMethods: [{ location: 'Power Plant', area: 'power-plant-area', method: 'static', methodDisplay: 'Static', versions: 'both', notes: "Lv.50 — found deep in Power Plant on Route 10; requires Surf" }],
  },
  146: { // Moltres
    obtainMethods: [{ location: 'Mt Ember Summit', area: 'mt-ember-summit', method: 'static', methodDisplay: 'Static', versions: 'both', notes: "Lv.50 — found at top of Mt. Ember on One Island (post-game)" }],
  },
  150: { // Mewtwo
    obtainMethods: [{ location: 'Cerulean Cave (B1F)', area: 'cerulean-cave-b1f', method: 'static', methodDisplay: 'Static', versions: 'both', notes: "Lv.70 — found in Cerulean Cave B1F; requires all 8 badges" }],
  },
  151: { // Mew
    obtainMethods: [{ location: 'Nintendo Event', area: 'special-event', method: 'gift', methodDisplay: 'Event', versions: 'both', notes: "Obtained via Nintendo Mystery Gift event (no longer available)" }],
  },
}

// Gen 2 Pokémon that are obtainable only by evolution (no wild FRLG encounters).
// The fetch script will always include these in the national dex.
export const nationalEvolutionIds = [
  162, // Furret      ← Sentret (#161)
  166, // Ledian      ← Ledyba (#165)
  168, // Ariados     ← Spinarak (#167)
  176, // Togetic     ← Togepi (#175)
  178, // Xatu        ← Natu (#177)
  180, // Flaaffy     ← Mareep (#179)
  181, // Ampharos    ← Flaaffy (#180)
  184, // Azumarill   ← Marill (#183)
  188, // Skiploom    ← Hoppip (#187)
  189, // Jumpluff    ← Skiploom (#188)
  195, // Quagsire    ← Wooper (#194)
  205, // Forretress  ← Pineco (#204)
  217, // Ursaring    ← Teddiursa (#216)
  221, // Piloswine   ← Swinub (#220)
  224, // Octillery   ← Remoraid (#223)
  229, // Houndoom    ← Houndour (#228)
  232, // Donphan     ← Phanpy (#231)
  247, // Pupitar     ← Larvitar (#246)
  248, // Tyranitar   ← Pupitar (#247)
]

// Gen 3 type corrections: PokeAPI returns current (post-Gen-6) types.
// Fairy type didn't exist in Gen 3, so these Pokémon had different types in FRLG.
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
}

// Version-exclusive Pokémon in FRLG (wild encounters)
// This supplements PokeAPI data which may not always mark exclusivity clearly.
export const versionExclusives = {
  firered: [23, 24, 43, 44, 45, 54, 55, 58, 59, 123, 125],
  // Ekans, Arbok, Oddish, Gloom, Vileplume, Psyduck, Golduck, Growlithe, Arcanine, Scyther, Electabuzz
  leafgreen: [27, 28, 37, 38, 52, 53, 69, 70, 71, 126, 127],
  // Sandshrew, Sandslash, Vulpix, Ninetales, Meowth, Persian, Bellsprout, Weepinbell, Victreebel, Magmar, Pinsir
}

// FRLG TM/HM — maps move slug → label (TM01–TM50, HM01–HM07)
export const frlgMachines = {
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
  'flash': 'HM05', 'rock-smash': 'HM06', 'waterfall': 'HM07',
}
