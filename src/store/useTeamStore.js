import { create } from 'zustand'

// Lazy JSON loaders per game (same as usePokemonStore — Vite deduplicates the import)
const DATA_LOADERS = {
  frlg: () => import('../games/frlg/pokemon.json'),
  rse:  () => import('../games/rse/pokemon.json'),
}

const TRAINER_LOADERS = {
  frlg: () => import('../games/frlg/trainers.js'),
  rse:  () => import('../games/rse/trainers.js'),
}

const EVO_MODULES = {
  frlg: () => import('../games/frlg/evolutions.js'),
  rse:  () => import('../games/rse/evolutions.js'),
}

function lsKey(gameId) { return `teams-${gameId}` }

function loadTeams(gameId) {
  try {
    const raw = localStorage.getItem(lsKey(gameId))
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

function saveTeams(gameId, data) {
  localStorage.setItem(lsKey(gameId), JSON.stringify(data))
}

let nextId = Date.now()
function genId() { return `team-${nextId++}` }

function createDefaultTeam() {
  return {
    id: genId(),
    name: 'Team 1',
    members: [null, null, null, null, null, null],
  }
}

export const useTeamStore = create((set, get) => ({
  // ── Game context ──────────────────────────────────────────────────────────
  gameId: null,
  gameConfig: null,
  pokemon: [],
  moves: {},
  trainers: [],
  evolutions: null,  // { evolutionData, getFullEvolutionChain }
  loaded: false,

  // ── Team data ─────────────────────────────────────────────────────────────
  teams: [],
  activeTeamId: null,

  // ── UI state ──────────────────────────────────────────────────────────────
  selectedSlot: null,     // 0-5, which slot is being edited for moves
  searchQuery: '',
  filterType: '',

  // ── Actions ───────────────────────────────────────────────────────────────

  async loadTeamBuilder(config) {
    set({
      gameId: config.id,
      gameConfig: config,
      pokemon: [],
      moves: {},
      trainers: [],
      evolutions: null,
      loaded: false,
      selectedSlot: null,
      searchQuery: '',
      filterType: '',
    })

    // Load saved teams or create default
    const saved = loadTeams(config.id)
    if (saved) {
      set({ teams: saved.teams, activeTeamId: saved.activeTeamId })
    } else {
      const team = createDefaultTeam()
      set({ teams: [team], activeTeamId: team.id })
    }

    // Load all data in parallel
    const [pokemonMod, movesMod, trainersMod, evosMod] = await Promise.all([
      DATA_LOADERS[config.id](),
      import('../data/moves.json'),
      TRAINER_LOADERS[config.id](),
      EVO_MODULES[config.id](),
    ])

    set({
      pokemon: pokemonMod.default.pokemon,
      moves: movesMod.default,
      trainers: trainersMod.trainers,
      evolutions: evosMod,
      loaded: true,
    })
  },

  // ── Team CRUD ─────────────────────────────────────────────────────────────

  createTeam(name) {
    const team = { ...createDefaultTeam(), name: name || `Team ${get().teams.length + 1}` }
    const teams = [...get().teams, team]
    set({ teams, activeTeamId: team.id })
    get()._save()
  },

  renameTeam(id, name) {
    const teams = get().teams.map(t => t.id === id ? { ...t, name } : t)
    set({ teams })
    get()._save()
  },

  deleteTeam(id) {
    let { teams, activeTeamId } = get()
    teams = teams.filter(t => t.id !== id)
    if (teams.length === 0) {
      const t = createDefaultTeam()
      teams = [t]
      activeTeamId = t.id
    } else if (activeTeamId === id) {
      activeTeamId = teams[0].id
    }
    set({ teams, activeTeamId, selectedSlot: null })
    get()._save()
  },

  switchTeam(id) {
    set({ activeTeamId: id, selectedSlot: null })
    get()._save()
  },

  // ── Team member management ────────────────────────────────────────────────

  addPokemon(pokemonId) {
    const team = get().getActiveTeam()
    if (!team) return
    const emptyIdx = team.members.findIndex(m => m === null)
    if (emptyIdx === -1) return // team full
    const members = [...team.members]
    members[emptyIdx] = { pokemonId, nature: null, moves: [null, null, null, null] }
    get()._updateActiveTeam({ members })
    set({ selectedSlot: emptyIdx })
  },

  removePokemon(slotIndex) {
    const team = get().getActiveTeam()
    if (!team) return
    const members = [...team.members]
    members[slotIndex] = null
    get()._updateActiveTeam({ members })
    set({ selectedSlot: get().selectedSlot === slotIndex ? null : get().selectedSlot })
  },

  setNature(slotIndex, natureName) {
    const team = get().getActiveTeam()
    if (!team || !team.members[slotIndex]) return
    const members = [...team.members]
    members[slotIndex] = { ...members[slotIndex], nature: natureName }
    get()._updateActiveTeam({ members })
  },

  setMove(slotIndex, moveIndex, moveName) {
    const team = get().getActiveTeam()
    if (!team || !team.members[slotIndex]) return
    const members = [...team.members]
    const moves = [...members[slotIndex].moves]
    moves[moveIndex] = moveName
    members[slotIndex] = { ...members[slotIndex], moves }
    get()._updateActiveTeam({ members })
  },

  clearMove(slotIndex, moveIndex) {
    get().setMove(slotIndex, moveIndex, null)
  },

  selectSlot(index) {
    set({ selectedSlot: index })
  },

  setSearch(q) { set({ searchQuery: q }) },
  setFilterType(t) { set({ filterType: t }) },

  // ── Derived ───────────────────────────────────────────────────────────────

  getActiveTeam() {
    const { teams, activeTeamId } = get()
    return teams.find(t => t.id === activeTeamId) ?? null
  },

  /** Returns full Pokemon objects for the active team's members */
  getTeamPokemon() {
    const team = get().getActiveTeam()
    if (!team) return []
    const { pokemon } = get()
    return team.members.map(m => {
      if (!m) return null
      return pokemon.find(p => p.id === m.pokemonId) ?? null
    })
  },

  /** Returns filtered Pokemon for the selection grid */
  getFilteredPokemon() {
    const { pokemon, searchQuery, filterType } = get()
    return pokemon.filter(p => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase()
        const numMatch = String(p.id).padStart(3, '0').includes(q) || String(p.id).includes(q)
        if (!p.name.includes(q) && !numMatch) return false
      }
      if (filterType && !p.types.includes(filterType)) return false
      return true
    })
  },

  /**
   * Returns the full learnset for a team member, merged with pre-evolution moves.
   * Each entry: { move, type, power, accuracy, category, pp, source, sourceLabel, level }
   */
  getAvailableMoves(slotIndex) {
    const team = get().getActiveTeam()
    if (!team || !team.members[slotIndex]) return []
    const { pokemon, moves: moveDb, evolutions } = get()
    const member = team.members[slotIndex]
    const pkmn = pokemon.find(p => p.id === member.pokemonId)
    if (!pkmn || !pkmn.learnset) return []

    const seen = new Map() // moveName → entry (keep best source)

    const addMoves = (learnset, pokemonName, isPreEvo = false) => {
      // Level-up moves
      for (const { move, level } of (learnset.levelUp || [])) {
        const data = moveDb[move]
        const key = `${move}-levelup${isPreEvo ? '-preevo' : ''}`
        if (!seen.has(key)) {
          seen.set(key, {
            move, ...(data || {}),
            source: 'level-up',
            sourceLabel: `Lv. ${level}`,
            level,
            isPreEvo,
            preEvoName: isPreEvo ? pokemonName : null,
          })
        }
      }

      // TM/HM moves (only from the Pokemon itself, not pre-evos)
      if (!isPreEvo) {
        for (const { label, move } of (learnset.tmhm || [])) {
          if (!seen.has(move + '-tm')) {
            const data = moveDb[move]
            seen.set(move + '-tm', {
              move, ...(data || {}),
              source: 'tm',
              sourceLabel: label,
              level: null,
              isPreEvo: false,
              preEvoName: null,
            })
          }
        }
      }

      // Tutor moves (only from the Pokemon itself)
      if (!isPreEvo) {
        for (const move of (learnset.tutor || [])) {
          if (!seen.has(move + '-tutor')) {
            const data = moveDb[move]
            seen.set(move + '-tutor', {
              move, ...(data || {}),
              source: 'tutor',
              sourceLabel: 'Tutor',
              level: null,
              isPreEvo: false,
              preEvoName: null,
            })
          }
        }
      }

      // Egg moves (only from the Pokemon itself)
      if (!isPreEvo) {
        for (const move of (learnset.egg || [])) {
          if (!seen.has(move + '-egg')) {
            const data = moveDb[move]
            seen.set(move + '-egg', {
              move, ...(data || {}),
              source: 'egg',
              sourceLabel: 'Egg',
              level: null,
              isPreEvo: false,
              preEvoName: null,
            })
          }
        }
      }
    }

    // Add this Pokemon's moves
    addMoves(pkmn.learnset, pkmn.name)

    // Walk evolution chain backwards to get pre-evolution moves
    if (evolutions?.evolutionData) {
      let currentId = pkmn.id
      while (evolutions.evolutionData[currentId]?.from) {
        const preEvoId = evolutions.evolutionData[currentId].from
        const preEvo = pokemon.find(p => p.id === preEvoId)
        if (preEvo?.learnset) {
          addMoves(preEvo.learnset, preEvo.name, true)
        }
        currentId = preEvoId
      }
    }

    return [...seen.values()]
  },

  // ── Internal helpers ──────────────────────────────────────────────────────

  _updateActiveTeam(updates) {
    const { teams, activeTeamId } = get()
    const updated = teams.map(t =>
      t.id === activeTeamId ? { ...t, ...updates } : t
    )
    set({ teams: updated })
    // Save after state update
    setTimeout(() => get()._save(), 0)
  },

  _save() {
    const { gameId, teams, activeTeamId } = get()
    if (gameId) saveTeams(gameId, { teams, activeTeamId })
  },
}))
