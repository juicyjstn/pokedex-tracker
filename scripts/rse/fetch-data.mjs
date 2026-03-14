/**
 * RSE Pokédex Data Compiler
 *
 * Fetches Pokémon data from PokeAPI:
 *   - IDs 252–386 (Hoenn): all included, dex:'hoenn'
 *   - IDs 1–251 (Gen 1–2): only included if they have RSE encounter data, dex:'national'
 *
 * Run: node scripts/rse/fetch-data.mjs
 * Output: src/games/rse/pokemon.json
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { manualData, versionExclusives, nationalEvolutionIds, gen3TypeOverrides, rseMachines } from '../../src/games/rse/manual.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = path.join(__dirname, '../../src/games/rse/pokemon.json')
const DELAY_MS = 200

const HOENN_MIN = 252
const HOENN_MAX = 386
const NATIONAL_MAX = 251
const RSE_VERSIONS = ['ruby', 'sapphire', 'emerald']

// Cache ability descriptions to avoid re-fetching the same ability
const abilityCache = new Map()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchJson(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
  return res.json()
}

function getVersionExclusivity(id, encounters) {
  // Manual overrides always win
  if (versionExclusives.ruby.includes(id)) return 'ruby'
  if (versionExclusives.sapphire.includes(id)) return 'sapphire'
  // Derive from encounter data when available
  if (encounters.length > 0) {
    const versions = new Set(encounters.map(e => e.versions))
    if (versions.size === 1) {
      const v = [...versions][0]
      if (v === 'ruby' || v === 'sapphire' || v === 'emerald') return v
    }
    return 'both'
  }
  // No encounters and no manual entry — mark null, resolved in a post-pass
  return null
}

function prettifyLocation(name) {
  return name
    .replace(/^hoenn-/, '')
    .replace(/-area$/, '')
    .replace(/-b(\d+)f$/, (_, n) => ` (B${n}F)`)
    .replace(/-(\d+)f$/, (_, n) => ` (${n}F)`)
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

const METHOD_DISPLAY = {
  walk: 'Walk',
  surf: 'Surf',
  'old-rod': 'Old Rod',
  'good-rod': 'Good Rod',
  'super-rod': 'Super Rod',
  'rock-smash': 'Rock Smash',
  headbutt: 'Headbutt',
  gift: 'Gift',
  'gift-egg': 'Gift (Egg)',
  trade: 'Trade',
  static: 'Static',
  'only-one': 'Static',
  pokeflute: 'Poké Flute',
  'roaming-grass': 'Roaming',
  dive: 'Dive',
}

function prettifyMoveName(name) {
  return name
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

async function fetchAbilityDescription(url) {
  if (abilityCache.has(url)) return abilityCache.get(url)
  const data = await fetchJson(url)
  await sleep(DELAY_MS)
  // Prefer game-specific flavor text, fall back to short_effect
  const ft = data.flavor_text_entries.find(
    e => e.language.name === 'en' && e.version_group.name === 'ruby-sapphire'
  )
  const fallback = data.effect_entries.find(e => e.language.name === 'en')
  const desc = ft
    ? ft.flavor_text.replace(/[\f\n\r\u000c]/g, ' ').replace(/\s+/g, ' ').trim()
    : fallback?.short_effect || ''
  abilityCache.set(url, desc)
  return desc
}

function extractStats(data) {
  const s = Object.fromEntries(data.stats.map(x => [x.stat.name, x.base_stat]))
  return {
    hp:  s['hp']              || 0,
    atk: s['attack']          || 0,
    def: s['defense']         || 0,
    spa: s['special-attack']  || 0,
    spd: s['special-defense'] || 0,
    spe: s['speed']           || 0,
    bst: data.stats.reduce((t, x) => t + x.base_stat, 0),
  }
}

async function fetchPokemon(id, total) {
  process.stdout.write(`  [${String(id).padStart(3)}/${total}] #${id}...`)

  const data = await fetchJson(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  await sleep(DELAY_MS)
  const encountersRaw = await fetchJson(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
  await sleep(DELAY_MS)
  const species = await fetchJson(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)

  const sprite =
    data.sprites?.versions?.['generation-iii']?.['ruby-sapphire']?.front_default ||
    data.sprites?.front_default ||
    null

  const types = gen3TypeOverrides[id] ?? data.types.map(t => t.type.name)

  // Build encounter map, merging Ruby/Sapphire/Emerald entries for the same area+method
  const encountersByArea = {}
  for (const enc of encountersRaw) {
    const areaName = enc.location_area.name
    for (const vd of enc.version_details) {
      if (!RSE_VERSIONS.includes(vd.version.name)) continue
      const version = vd.version.name
      for (const detail of vd.encounter_details) {
        const key = `${areaName}::${detail.method.name}`
        if (!encountersByArea[key]) {
          encountersByArea[key] = {
            area: areaName,
            location: prettifyLocation(areaName),
            method: detail.method.name,
            methodDisplay: METHOD_DISPLAY[detail.method.name] || detail.method.name,
            minLevel: detail.min_level,
            maxLevel: detail.max_level,
            chance: detail.chance,
            versions: new Set([version]),
          }
        } else {
          encountersByArea[key].versions.add(version)
          encountersByArea[key].minLevel = Math.min(encountersByArea[key].minLevel, detail.min_level)
          encountersByArea[key].maxLevel = Math.max(encountersByArea[key].maxLevel, detail.max_level)
          encountersByArea[key].chance = Math.max(encountersByArea[key].chance, detail.chance)
        }
      }
    }
  }

  const encounters = Object.values(encountersByArea).map(e => {
    const vSet = e.versions
    let versions
    if (vSet.size === 3) {
      versions = 'both'
    } else if (vSet.size === 2) {
      if (vSet.has('ruby') && vSet.has('sapphire')) versions = 'ruby-sapphire'
      else if (vSet.has('ruby') && vSet.has('emerald')) versions = 'ruby'
      else if (vSet.has('sapphire') && vSet.has('emerald')) versions = 'sapphire'
      else versions = [...vSet].join('-')
    } else {
      versions = [...vSet][0]
    }
    return { ...e, versions }
  })

  // Merge manual data
  const manual = manualData[id]
  if (manual?.obtainMethods) {
    for (const m of manual.obtainMethods) {
      const normalise = method => (method === 'only-one' ? 'static' : method)
      const existing = encounters.find(
        e =>
          (e.area === m.area || e.area.startsWith(m.area + '-')) &&
          normalise(e.method) === normalise(m.method) &&
          // Don't merge version-specific manual entries with different versions
          (m.versions === 'both' || e.versions === 'both' || e.versions === m.versions),
      )
      if (existing) {
        if (m.notes && !existing.notes) existing.notes = m.notes
      } else {
        encounters.push({
          area: m.area,
          location: m.location,
          method: m.method,
          methodDisplay: m.methodDisplay,
          minLevel: m.level || null,
          maxLevel: m.level || null,
          chance: null,
          versions: m.versions,
          notes: m.notes || null,
        })
      }
    }
  }

  // Flavor text — store Ruby, Sapphire, and Emerald entries separately
  const cleanFT = entry =>
    entry ? entry.flavor_text.replace(/[\f\n\r\u000c]/g, ' ').replace(/\s+/g, ' ').trim() : null
  const ftRuby    = species.flavor_text_entries.find(e => e.language.name === 'en' && e.version.name === 'ruby')
  const ftSapph   = species.flavor_text_entries.find(e => e.language.name === 'en' && e.version.name === 'sapphire')
  const ftEmerald = species.flavor_text_entries.find(e => e.language.name === 'en' && e.version.name === 'emerald')
  const flavorText = {
    ruby:     cleanFT(ftRuby)    || null,
    sapphire: cleanFT(ftSapph)   || null,
    emerald:  cleanFT(ftEmerald) || null,
  }

  const eggGroups = species.egg_groups.map(g => g.name)
  const stats = extractStats(data)

  // Extract abilities (Gen 3 has no hidden abilities)
  const abilities = []
  for (const ab of data.abilities.filter(a => !a.is_hidden).sort((a, b) => a.slot - b.slot)) {
    const desc = await fetchAbilityDescription(ab.ability.url)
    abilities.push({
      name: prettifyMoveName(ab.ability.name),
      description: desc,
    })
  }

  // Build learnset — union of ruby-sapphire and emerald version groups
  const seen = new Set()
  const learnset = { levelUp: [], tmhm: [], tutor: [], egg: [] }
  const RSE_GROUPS = ['ruby-sapphire', 'emerald']
  for (const moveEntry of data.moves) {
    for (const vd of moveEntry.version_group_details) {
      if (!RSE_GROUPS.includes(vd.version_group.name)) continue
      const slug = moveEntry.move.name
      const moveName = prettifyMoveName(slug)
      const method = vd.move_learn_method.name
      if (method === 'level-up') {
        const key = `lvl:${slug}:${vd.level_learned_at}`
        if (!seen.has(key)) {
          seen.add(key)
          learnset.levelUp.push({ move: moveName, level: vd.level_learned_at })
        }
      } else if (method === 'machine') {
        const label = rseMachines[slug]
        const key = `tm:${slug}`
        if (label && !seen.has(key)) { seen.add(key); learnset.tmhm.push({ label, move: moveName }) }
      } else if (method === 'tutor') {
        const key = `tutor:${slug}`
        if (!seen.has(key)) { seen.add(key); learnset.tutor.push(moveName) }
      } else if (method === 'egg') {
        const key = `egg:${slug}`
        if (!seen.has(key)) { seen.add(key); learnset.egg.push(moveName) }
      }
    }
  }
  learnset.levelUp.sort((a, b) => a.level - b.level)
  learnset.tmhm.sort((a, b) => a.label.localeCompare(b.label))
  learnset.tutor.sort()
  learnset.egg.sort()

  process.stdout.write(` ✓ (${encounters.length} enc, ${learnset.levelUp.length} lvl, ${learnset.tmhm.length} tm)\n`)

  return {
    id,
    name: data.name,
    types,
    sprite,
    cry: data.cries?.legacy || null,
    exclusivity: getVersionExclusivity(id, encounters),
    encounters,
    flavorText,
    abilities,
    eggGroups,
    stats,
    learnset,
  }
}

async function main() {
  console.log('RSE Pokédex Data Compiler')
  console.log('=========================')

  const pokemon = []
  const errors = []

  // --- Hoenn Dex (252–386): include all ---
  console.log(`\nHoenn Dex (${HOENN_MIN}–${HOENN_MAX}):\n`)
  for (let id = HOENN_MIN; id <= HOENN_MAX; id++) {
    try {
      const p = await fetchPokemon(id, HOENN_MAX)
      pokemon.push({ ...p, dex: 'hoenn' })
      await sleep(DELAY_MS)
    } catch (err) {
      console.error(`  ERROR #${id}: ${err.message}`)
      errors.push(id)
    }
  }

  // --- National Dex (1–251): only include if they have RSE encounters ---
  console.log(`\nNational Dex (1–${NATIONAL_MAX}) — including only those with RSE encounters:\n`)
  for (let id = 1; id <= NATIONAL_MAX; id++) {
    try {
      const p = await fetchPokemon(id, NATIONAL_MAX)
      if (p.encounters.length > 0 || nationalEvolutionIds.includes(id)) {
        pokemon.push({ ...p, dex: 'national' })
      }
      await sleep(DELAY_MS)
    } catch (err) {
      console.error(`  ERROR #${id}: ${err.message}`)
      errors.push(id)
    }
  }

  if (errors.length > 0) {
    console.warn(`\nWarning: Failed to fetch IDs: ${errors.join(', ')}`)
  }

  pokemon.sort((a, b) => a.id - b.id)

  // Post-pass: inherit exclusivity for evolution-only Pokémon (exclusivity === null)
  const byId = Object.fromEntries(pokemon.map(p => [p.id, p]))
  const evoSrc = fs.readFileSync(
    new URL('../../src/games/rse/evolutions.js', import.meta.url).pathname, 'utf-8'
  )
  const evoMatch = evoSrc.match(/export const evolutionData\s*=\s*(\{[\s\S]*?\n\})/)
  if (evoMatch) {
    // eslint-disable-next-line no-eval
    const evolutionData = eval('(' + evoMatch[1] + ')')
    function resolveExclusivity(id, visited = new Set()) {
      if (visited.has(id)) return 'both'
      visited.add(id)
      const evo = evolutionData[id]
      if (!evo) return 'both'
      const parent = byId[evo.from]
      if (!parent) return 'both'
      if (parent.exclusivity !== null) return parent.exclusivity
      return resolveExclusivity(evo.from, visited)
    }
    for (const p of pokemon) {
      if (p.exclusivity === null) {
        p.exclusivity = resolveExclusivity(p.id)
      }
    }
  }
  // Any remaining nulls fall back to 'both'
  for (const p of pokemon) {
    if (p.exclusivity === null) p.exclusivity = 'both'
  }

  const hoennList = pokemon.filter(p => p.dex === 'hoenn')
  const nationalList = pokemon.filter(p => p.dex === 'national')
  const allLocations = [...new Set(pokemon.flatMap(p => p.encounters.map(e => e.location)))].sort()

  const output = {
    generatedAt: new Date().toISOString(),
    hoennCount: hoennList.length,
    nationalCount: nationalList.length,
    locations: allLocations,
    pokemon,
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8')

  console.log(`\nDone! Written to ${OUTPUT_PATH}`)
  console.log(`  Hoenn Pokémon: ${hoennList.length}`)
  console.log(`  National-only Pokémon: ${nationalList.length} (${nationalList.map(p => `#${p.id} ${p.name}`).join(', ')})`)
  console.log(`  Unique locations: ${allLocations.length}`)
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
