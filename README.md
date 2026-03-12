# Pokédex Tracker

A combined Pokédex and encounter tracker for the **Generation III** games, usable in the browser.

🔗 **Live app:** [juicyjstn.github.io/pokedex-tracker](https://juicyjstn.github.io/pokedex-tracker/)

> Previously hosted as separate sites — both now redirect here:
> [FRLG-Tracker](https://juicyjstn.github.io/FRLG-Tracker/) · [RSE-Tracker](https://juicyjstn.github.io/RSE-Tracker/)

---

## Games

| Game | Regional Dex | Pokémon tracked |
|------|-------------|-----------------|
| 🔴🟢 **FireRed / LeafGreen** | Kanto (#001–#151) | 211 (Kanto + in-game non-Kanto) |
| 🔴🔵🟢 **Ruby / Sapphire / Emerald** | Hoenn (#252–#386) | 190 (Hoenn + in-game Gen 1–2) |

---

## Features

### 🏠 Home Screen & Navigation
- Home screen shows all available game trackers with cover art and per-game caught progress
- **Hamburger sidebar** (☰) to switch between games without leaving the app
- Caught progress is saved **per game** and persists across sessions

### 📋 Pokédex with Tracking
- Browse the full regional dex plus every non-regional species with an in-game encounter
- Mark each Pokémon as **caught** — progress saved locally in your browser
- Cry audio plays when marking a Pokémon as caught
- Switch between **Regional Dex** and **National Dex** (all obtainable) views
- Progress bar in the header shows how much of the active dex you've caught

### 🔍 Filters & Sorting
- **Search** by name or Pokédex number
- **Type** filter
- **Location** filter
- **Egg group** filter (multi-select dropdown)
- **Version** filter — FireRed/LeafGreen exclusives or Ruby/Sapphire/Emerald exclusives
- **Caught status** — show only caught or uncaught
- **Sort** by Dex number, name, type, or Story Order *(FRLG only — sorts by earliest point in the game each Pokémon becomes obtainable)*

### 🔍 Per-Pokémon Detail Panel
Click any Pokémon to open its detail panel:

**Evolution Chain**
- Visual sprite chain with evolution method labels (level, stone, trade, friendship, beauty)
- Click any Pokémon in the chain to jump directly to its entry
- Branching evolutions shown side-by-side (Wurmple line, Clamperl, Nincada, etc.)

**Encounter Data**
- All wild encounter locations with method (walk, surf, fishing, rock smash, etc.), level range, encounter rate, and version availability
- Locations sorted by level — earliest-game encounters first
- Evolution method shown for Pokémon obtained by evolving

**Pokédex Entry**
- Version-specific flavor text, each labeled with a version badge (FR/LG or R/S/E)
- Egg groups (clickable — filters the main grid to that egg group)
- Base stat bars (HP, Atk, Def, SpA, SpD, Spe) with numeric values and BST total

**Learnset** *(Gen 3 accurate)*
- Level-up moves with levels
- TM/HM compatibility with disc labels
- Move Tutor moves
- Egg moves

### 🎨 UI
- Dark mode (default on) with toggle — shared preference across all games
- Cover art in the header changes to match the active version filter
- Detail panel slides over the grid without shifting the layout

---

## Data Sources

- Encounter data, learnsets, stats, and Pokédex entries fetched from [PokéAPI](https://pokeapi.co/)
- All data is **Gen 3 accurate** — types (no Fairy), moves, and learnsets reflect each game's generation

---

## Tech Stack

- **React 18** + **Vite 6**
- **Zustand** — state management
- **Tailwind CSS v4**
- Data from [PokéAPI](https://pokeapi.co/)

---

## Development

```bash
npm install
npm run dev
```

### Regenerate Pokédex data

Each game has its own fetch script. Data is written to `src/games/{game}/pokemon.json`.
These make hundreds of API calls and take several minutes due to rate limiting.

```bash
npm run fetch-frlg      # regenerate FRLG data
npm run fetch-rse       # regenerate RSE data
npm run fetch-all       # regenerate all games
```

---

## Adding a New Game

The app is designed to scale. Adding a new tracker requires:

1. **Create `src/games/{game}/`** with:
   - `config.js` — game config object (title, dex range, versions, colors, etc.)
   - `evolutions.js` — evolution chain data
   - `manual.js` — manual encounter overrides and machine lists
   - `pokemon.json` — generated data (via fetch script)

2. **Register it** in `src/games/index.js`:
   ```js
   import { newGameConfig } from './newgame/config'
   export const GAMES = [frlgConfig, rseConfig, newGameConfig]
   ```

3. **Add a fetch script** at `scripts/{game}/fetch-data.mjs`

That's it — the home screen, sidebar, store, and all components pick it up automatically.
