import { create } from 'zustand'
import * as frlgEvos from '../games/frlg/evolutions.js'
import * as rseEvos  from '../games/rse/evolutions.js'
import { STORY_ORDER as FRLG_STORY_ORDER } from '../games/frlg/story-order.js'

// Static map of game-specific module bundles
const GAME_MODULES = {
  frlg: { evos: frlgEvos, storyOrder: FRLG_STORY_ORDER },
  rse:  { evos: rseEvos,  storyOrder: null },
}

// Lazy JSON loaders per game (keeps large JSONs out of the initial bundle)
const DATA_LOADERS = {
  frlg: () => import('../games/frlg/pokemon.json'),
  rse:  () => import('../games/rse/pokemon.json'),
}

const LS_DARK_KEY = 'dark-mode'

export function loadCaughtIds(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch { return new Set() }
}

function saveCaughtIds(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]))
}

function loadDarkMode() {
  try { return localStorage.getItem(LS_DARK_KEY) !== 'false' }
  catch { return true }
}

// Story-order availability clamp: each method only unlocks at a certain story point
const METHOD_MIN = {
  'old-rod':       20,   // Vermilion City (~Badge 3)
  'surf':          47,   // Safari Zone (~Badge 5)
  'good-rod':      46,   // Fuchsia City (~Badge 5)
  'super-rod':     73,   // Sevii Islands (post-game)
  'roaming-grass': 120,  // Legendary beasts (post-National Dex)
}

export const usePokemonStore = create((set, get) => ({
  // ── Game ───────────────────────────────────────────────────────────────────
  gameConfig:  null,   // null = home screen
  gameModules: null,   // { evos, storyOrder } for the active game

  // ── Data ───────────────────────────────────────────────────────────────────
  pokemon:   [],
  locations: [],
  loaded:    false,

  // ── User state ─────────────────────────────────────────────────────────────
  caughtIds: new Set(),
  darkMode:  loadDarkMode(),

  // ── View ───────────────────────────────────────────────────────────────────
  dexView: 'regional',   // 'regional' | 'national'

  // ── Filters ────────────────────────────────────────────────────────────────
  searchQuery:    '',
  filterType:     '',
  filterLocation: '',
  filterVersion:  '',
  filterCaught:   '',
  filterEggGroups: [],
  sortBy: 'id',   // 'id' | 'name' | 'type' | 'story'

  // ── Selected Pokémon ───────────────────────────────────────────────────────
  selectedId: null,

  // ── Actions ────────────────────────────────────────────────────────────────

  async loadGame(config) {
    const { gameConfig, caughtIds } = get()
    // Persist current game's caught IDs
    if (gameConfig) saveCaughtIds(gameConfig.localStorageKey, caughtIds)

    set({
      gameConfig:  config,
      gameModules: GAME_MODULES[config.id] ?? null,
      pokemon:     [],
      locations:   [],
      loaded:      false,
      caughtIds:   loadCaughtIds(config.localStorageKey),
      dexView:     'regional',
      searchQuery: '', filterType: '', filterLocation: '',
      filterVersion: '', filterCaught: '', filterEggGroups: [],
      sortBy: 'id', selectedId: null,
    })

    const loader = DATA_LOADERS[config.id]
    if (!loader) throw new Error(`No data loader for game: ${config.id}`)
    const { default: data } = await loader()
    set({ pokemon: data.pokemon, locations: data.locations, loaded: true })
  },

  goHome() {
    const { gameConfig, caughtIds } = get()
    if (gameConfig) saveCaughtIds(gameConfig.localStorageKey, caughtIds)
    set({ gameConfig: null, gameModules: null, pokemon: [], locations: [], loaded: false, selectedId: null })
  },

  toggleCaught(id) {
    const { gameConfig } = get()
    const ids = new Set(get().caughtIds)
    if (ids.has(id)) ids.delete(id); else ids.add(id)
    if (gameConfig) saveCaughtIds(gameConfig.localStorageKey, ids)
    set({ caughtIds: ids })
  },

  importCaughtIds(localStorageKey, newIds) {
    saveCaughtIds(localStorageKey, newIds)
    // Update in-memory state if the imported game is currently loaded
    if (get().gameConfig?.localStorageKey === localStorageKey) {
      set({ caughtIds: newIds })
    }
  },

  toggleDarkMode() {
    const next = !get().darkMode
    localStorage.setItem(LS_DARK_KEY, next)
    set({ darkMode: next })
  },

  setDexView(v)         { set({ dexView: v, selectedId: null }) },
  setSearch(q)          { set({ searchQuery: q }) },
  setFilterType(t)      { set({ filterType: t }) },
  setFilterLocation(l)  { set({ filterLocation: l }) },
  setFilterVersion(v)   { set({ filterVersion: v }) },
  setFilterCaught(c)    { set({ filterCaught: c }) },
  setFilterEggGroups(g) { set({ filterEggGroups: g }) },
  setSortBy(s)          { set({ sortBy: s }) },
  selectPokemon(id)     { set({ selectedId: id }) },
  clearSelection()      { set({ selectedId: null }) },

  resetFilters() {
    set({
      searchQuery: '', filterType: '', filterLocation: '',
      filterVersion: '', filterCaught: '', filterEggGroups: [], sortBy: 'id',
    })
  },

  // ── Evolution helpers (delegate to the active game's module) ───────────────

  getPokemon(id) {
    return get().pokemon.find(p => p.id === id)
  },

  getEvolutionChain(id) {
    return get().gameModules?.evos.getFullEvolutionChain(id) ?? null
  },

  getEvolutionLabel(evo) {
    return get().gameModules?.evos.getEvolutionLabel(evo) ?? `Evolves from ${evo.fromName}`
  },

  evoStepLabel(evo) {
    return get().gameModules?.evos.evoStepLabel(evo) ?? '→'
  },

  evolutionDataFor(id) {
    return get().gameModules?.evos.evolutionData[id] ?? null
  },

  // ── Derived lists ──────────────────────────────────────────────────────────

  getActivePokemon() {
    const { pokemon, dexView, gameConfig } = get()
    if (dexView === 'regional') {
      return pokemon.filter(p => p.dex === gameConfig?.regionalDex.id)
    }
    return pokemon
  },

  getFiltered() {
    const {
      caughtIds, searchQuery, filterType, filterLocation,
      filterVersion, filterCaught, filterEggGroups, sortBy, gameConfig, gameModules,
    } = get()
    const base = get().getActivePokemon()

    let list = base.filter(p => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase()
        const numMatch = String(p.id).padStart(3, '0').includes(q) || String(p.id).includes(q)
        if (!p.name.includes(q) && !numMatch) return false
      }
      if (filterType && !p.types.includes(filterType)) return false
      if (filterLocation) {
        const has = p.encounters.some(e => e.location === filterLocation || e.area === filterLocation)
        if (!has) return false
      }
      if (filterVersion) {
        const skipForEmerald = gameConfig?.emeraldAll && filterVersion === 'emerald'
        if (!skipForEmerald && p.exclusivity !== 'both' && p.exclusivity !== filterVersion) return false
      }
      if (filterCaught === 'caught'   && !caughtIds.has(p.id)) return false
      if (filterCaught === 'uncaught' &&  caughtIds.has(p.id)) return false
      if (filterEggGroups.length > 0 && !filterEggGroups.some(g => p.eggGroups?.includes(g))) return false
      return true
    })

    if (sortBy === 'story' && gameConfig?.hasSortStory && gameModules?.storyOrder) {
      const STORY_ORDER = gameModules.storyOrder
      const evolutionData = gameModules.evos.evolutionData
      const allPokemon = get().pokemon
      const cache = new Map()

      const getStoryIdx = (id, visited = new Set()) => {
        if (cache.has(id)) return cache.get(id)
        if (visited.has(id)) return Infinity
        visited.add(id)
        const pk = allPokemon.find(p => p.id === id)
        if (!pk) { cache.set(id, Infinity); return Infinity }

        const encIdxes = pk.encounters.flatMap(e => {
          const locIdx = STORY_ORDER.indexOf(e.location)
          if (locIdx === -1) return []
          const methodMin = METHOD_MIN[e.method] ?? 0
          return [Math.max(locIdx, methodMin)]
        })
        if (encIdxes.length > 0) {
          const idx = Math.min(...encIdxes)
          cache.set(id, idx); return idx
        }
        const parent = evolutionData[id]?.from
        if (parent != null) {
          const parentIdx = getStoryIdx(parent, visited)
          const idx = parentIdx === Infinity ? Infinity : parentIdx + 0.5
          cache.set(id, idx); return idx
        }
        cache.set(id, Infinity); return Infinity
      }

      list = [...list].sort((a, b) => {
        const ai = getStoryIdx(a.id)
        const bi = getStoryIdx(b.id)
        return ai !== bi ? ai - bi : a.id - b.id
      })
    } else {
      list = [...list].sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name)
        if (sortBy === 'type') {
          const ta = a.types[0] || '', tb = b.types[0] || ''
          return ta.localeCompare(tb) || a.id - b.id
        }
        return a.id - b.id
      })
    }

    return list
  },
}))
