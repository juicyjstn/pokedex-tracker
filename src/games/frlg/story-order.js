/**
 * FRLG story progression order — locations listed in the rough sequence
 * a player would first visit them during a normal playthrough.
 *
 * Used for the "Story Order" sort in the Pokédex grid.
 * indexOf(location) gives its story index; -1 means unknown → sorted last.
 */
export const STORY_ORDER = [
  // ── Pallet Town / Route 1 ──────────────────────────────────────────
  'Pallet Town',                        // Starters
  'Route 1',                            // Rattata, Pidgey

  // ── Viridian City ─────────────────────────────────────────────────
  'Viridian City',                      // Fishing (Old Rod)
  'Route 22',                           // Nidoran, Mankey — accessible pre-Badge 1

  // ── Badge 1 (Brock) ───────────────────────────────────────────────
  'Route 2 South Towards Viridian City',// Flash errand route
  'Viridian Forest',                    // Caterpie/Weedle, Pikachu
  'Route 2',                            // Pidgey, Nidoran
  'Pewter City Museum',                 // Fossil gifts

  // ── Badge 2 (Misty) ───────────────────────────────────────────────
  'Route 3',
  'Route 3 Pokemon Center',             // Magikarp vendor
  'Mt Moon (1F)',
  'Mt Moon (B1F)',
  'Mt Moon (B2F)',                      // Clefairy, Geodude, Paras, Zubat
  'Route 4',
  'Route 4 Pokemon Center',            // Trade (Spearow ↔ Farfetch'd)
  'Cerulean City',                      // Fishing
  'Route 24',                           // Caterpie/Weedle, Bellsprout/Oddish, Abra
  'Route 25',

  // ── Badge 3 (Lt. Surge) ───────────────────────────────────────────
  'Route 5',
  'Route 6',
  'Vermilion City',                     // Fishing
  'Ss Anne',                            // Cut HM

  // ── Post-Surge (Cut available) ────────────────────────────────────
  'Digletts Cave',                      // Diglett, Dugtrio
  'Route 11',                           // Drowzee, Spearow, Ekans/Sandshrew
  'Route 9',
  'Route 10',                           // Voltorb
  'Rock Tunnel (1F)',
  'Rock Tunnel (B1F)',                  // Onix, Geodude, Machop, Zubat

  // ── Badge 4 (Erika) ───────────────────────────────────────────────
  'Route 8',                            // Growlithe/Vulpix, Drowzee, Abra
  'Route 7',
  'Celadon City',                       // Game Corner
  'Celadon City Celadon Mansion',       // Eevee gift

  // ── Pokémon Tower ─────────────────────────────────────────────────
  'Pokemon Tower (3F)',
  'Pokemon Tower (4F)',
  'Pokemon Tower (5F)',
  'Pokemon Tower (6F)',
  'Pokemon Tower (7F)',                 // Gastly, Haunter, Cubone

  // ── Saffron / Silph Co ────────────────────────────────────────────
  'Saffron City Silph Co (7F)',         // Lapras gift
  'Saffron City Fighting Dojo',         // Hitmonlee or Hitmonchan

  // ── Routes south of Lavender (Pokeflute needed) ───────────────────
  'Route 12',
  'Route 13',
  'Route 14',
  'Route 15',

  // ── Cycling Road ──────────────────────────────────────────────────
  'Route 16',
  'Route 17',
  'Route 18',

  // ── Badge 5 (Koga) ────────────────────────────────────────────────
  'Fuchsia City',

  // ── Safari Zone ───────────────────────────────────────────────────
  'Safari Zone Middle',
  'Safari Zone Area 1 East',
  'Safari Zone Area 2 North',
  'Safari Zone Area 3 West',

  // ── Sea Routes / Seafoam Islands (Surf) ───────────────────────────
  'Sea Route 19',
  'Sea Route 20',
  'Seafoam Islands (1F)',
  'Seafoam Islands (B1F)',
  'Seafoam Islands (B2F)',
  'Seafoam Islands (B3F)',
  'Seafoam Islands (B4F)',
  'Sea Route 21',

  // ── Badge 6 (Blaine) ──────────────────────────────────────────────
  'Cinnabar Island',
  'Pokemon Mansion (1F)',
  'Pokemon Mansion (2F)',
  'Pokemon Mansion (3F)',
  'Pokemon Mansion (B1F)',              // Magmar (LG) / Electrode static
  'Cinnabar Island Cinnabar Lab',       // Trade fossils; Porygon

  // ── Power Plant (Surf required, often done around here) ───────────
  'Power Plant',                        // Zapdos, Magnemite, Voltorb

  // ── Sevii Islands — One/Two/Three (Tri-Pass, post-Blaine) ─────────
  'One Island',
  'Kindle Road',
  'Mt Ember',
  'Mt Ember Inside',
  'Mt Ember Cave',
  'Mt Ember Summit',
  'Mt Ember (B1F)',
  'Mt Ember (B2F)',
  'Mt Ember (B3F)',
  'Mt Ember 1f Cave Behind Team Rocket',
  'Cape Brink',
  'Bond Bridge',
  'Three Isle Port',
  'Berry Forest',

  // ── Badge 7 (Sabrina) already handled pre-Cinnabar, but Giovanni ──
  'Route 23',
  'Victory Road 2 (1F)',
  'Victory Road 2 (2F)',
  'Victory Road 2 (3F)',

  // ── Post-game: Sevii Islands Four–Seven (Rainbow Pass) ────────────
  'Four Island',
  'Icefall Cave Entrance',
  'Icefall Cave (1F)',
  'Icefall Cave (B1F)',
  'Icefall Cave Waterfall',
  'Five Island',
  'Resort Gorgeous',
  'Water Labyrinth',
  'Lost Cave Room 1',
  'Lost Cave Room 2',
  'Lost Cave Room 3',
  'Lost Cave Room 4',
  'Lost Cave Room 5',
  'Lost Cave Room 6',
  'Lost Cave Room 7',
  'Lost Cave Room 8',
  'Lost Cave Room 9',
  'Lost Cave Room 10',
  'Lost Cave Item Rooms',
  'Treasure Beach',
  'Water Path',
  'Green Path',
  'Outcast Island',
  'Memorial Pillar',
  'Ruin Valley',
  'Altering Cave A',
  'Altering Cave B',
  'Altering Cave C',
  'Altering Cave D',
  'Altering Cave E',
  'Altering Cave F',
  'Altering Cave G',
  'Altering Cave H',
  'Altering Cave I',
  'Canyon Entrance',
  'Sevault Canyon',
  'Five Isle Meadow',
  'Pattern Bush',
  'Trainer Tower',

  // ── Tanoby Ruins (unlock Tanoby Key puzzle on Seven Island) ───────
  'Tanoby Ruins',
  'Monean Chamber',
  'Dilford Chamber',
  'Liptoo Chamber',
  'Weepth Chamber',
  'Rixy Chamber',
  'Viapos Chamber',
  'Scufib Chamber',

  // ── Post-game: Cerulean Cave ──────────────────────────────────────
  'Cerulean Cave (1F)',
  'Cerulean Cave (2F)',
  'Cerulean Cave (B1F)',               // Mewtwo

  // ── Roaming / Event / Gift ────────────────────────────────────────
  'Roaming Kanto',                     // Legendary beasts (post-Nat. Dex)
  'Pokecenter',                        // Gift Pokémon
  'Birth Island',                      // Deoxys (event)
  'Navel Rock',                        // Ho-Oh / Lugia (event)
  'Nintendo Event',                    // Mystery Gift
]
