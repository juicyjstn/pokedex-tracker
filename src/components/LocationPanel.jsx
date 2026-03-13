import { useState, useEffect } from 'react'
import { usePokemonStore } from '../store/usePokemonStore'
import { TYPE_COLORS, TYPE_TEXT } from './typeColors'

const METHOD_ICON = {
  walk: '🦶',
  surf: '🏊',
  'old-rod': '🎣',
  'good-rod': '🎣',
  'super-rod': '🎣',
  gift: '🎁',
  'gift-egg': '🎁',
  trade: '🔄',
  static: '⭐',
  'only-one': '⭐',
  'pick-up': '📦',
  'rock-smash': '🪨',
  headbutt: '🌳',
  pokeflute: '🎵',
  'roaming-grass': '🌿',
}

const STAT_BARS = [
  { key: 'hp',  label: 'HP',  color: 'bg-green-500'  },
  { key: 'atk', label: 'Atk', color: 'bg-red-500'    },
  { key: 'def', label: 'Def', color: 'bg-orange-400' },
  { key: 'spa', label: 'SpA', color: 'bg-blue-500'   },
  { key: 'spd', label: 'SpD', color: 'bg-teal-500'   },
  { key: 'spe', label: 'Spe', color: 'bg-yellow-400' },
]

function formatEggGroup(slug) {
  if (slug === 'no-eggs') return 'No Eggs'
  return slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
}

function SectionHeader({ title, open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-3 py-2 bg-gray-100 dark:bg-gray-900 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-expanded={open}
    >
      <span>{title}</span>
      <span className={`transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}>▼</span>
    </button>
  )
}

export function LocationPanel() {
  const {
    pokemon, selectedId, clearSelection,
    caughtIds, toggleCaught, selectPokemon, setFilterEggGroups,
    gameConfig, filterLocation,
    getPokemon: storePokemon,
    getEvolutionChain, getEvolutionLabel, evoStepLabel, evolutionDataFor,
  } = usePokemonStore()

  const p = pokemon.find(pk => pk.id === selectedId)

  const [encounterOpen, setEncounterOpen] = useState(true)
  const [dexOpen, setDexOpen] = useState(true)
  const [learnsetOpen, setLearnsetOpen] = useState(false)

  // Reset sections when switching Pokémon
  useEffect(() => {
    setEncounterOpen(true)
    setDexOpen(true)
    setLearnsetOpen(false)
  }, [selectedId])

  if (!p) return null

  const caught    = caughtIds.has(p.id)
  const chain     = getEvolutionChain(p.id)
  const evoInfo   = evolutionDataFor(p.id)

  // VersionBadge — config-driven
  function VersionBadge({ versions }) {
    if (!gameConfig) return null
    const badges = gameConfig.versionBadges[versions] ?? gameConfig.versionBadges.both
    return (
      <span className="flex gap-1">
        {badges.map(b => (
          <span key={b.label} className={`text-[9px] font-bold px-1 py-0.5 rounded ${b.bg} text-white leading-none`}>
            {b.label}
          </span>
        ))}
      </span>
    )
  }

  // Group encounters by location
  const byLocation = {}
  for (const enc of p.encounters) {
    if (!byLocation[enc.location]) byLocation[enc.location] = []
    byLocation[enc.location].push(enc)
  }
  const locationGroups = Object.entries(byLocation).sort(([, aEncs], [, bEncs]) => {
    const aMin = Math.min(...aEncs.map(e => e.minLevel ?? Infinity))
    const bMin = Math.min(...bEncs.map(e => e.minLevel ?? Infinity))
    return aMin - bMin
  })

  // Look up a Pokémon sprite/name from the full store list
  const getPkmn = id => pokemon.find(pk => pk.id === id)

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white dark:bg-gray-800 shadow-[-8px_0_40px_rgba(0,0,0,0.3)] border-l border-gray-200 dark:border-gray-700 flex flex-col z-50 overflow-hidden">

      {/* ── Header ── */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        {p.sprite && (
          <img src={p.sprite} alt={p.name} className="w-14 h-14 object-contain" style={{ imageRendering: 'pixelated' }} />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">#{String(p.id).padStart(3, '0')}</span>
            {/* Config-driven exclusivity badge */}
            {gameConfig && p.exclusivity && p.exclusivity !== 'both' &&
              (gameConfig.versionBadges[p.exclusivity] ?? []).map(b => (
                <span key={b.label} className={`text-[9px] font-bold px-1 py-0.5 rounded ${b.bg} text-white leading-none`}>
                  {b.label}
                </span>
              ))
            }
          </div>
          <h2 className="text-base font-bold capitalize text-gray-900 dark:text-gray-100 truncate">{p.name}</h2>
          <div className="flex gap-1 mt-0.5">
            {p.types.map(type => (
              <span key={type} className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide ${TYPE_COLORS[type] || 'bg-gray-300'} ${TYPE_TEXT[type] || 'text-white'}`}>
                {type}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={clearSelection}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl sm:text-xl p-2 sm:p-1 leading-none ml-1 shrink-0 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close"
        >✕</button>
      </div>

      {/* ── Caught toggle ── */}
      <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={caught}
            onChange={() => {
              if (!caught && p.cry) {
                new Audio(p.cry).play().catch(() => {})
              }
              toggleCaught(p.id)
            }}
            className="w-4 h-4 accent-green-500"
          />
          <span className={`text-sm font-medium ${caught ? 'text-green-600' : 'text-gray-500 dark:text-gray-400'}`}>
            {caught ? 'Caught ✓' : 'Not caught'}
          </span>
        </label>
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">

        {/* Evolution chain — always visible if chain exists */}
        {chain && (
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-3 py-1.5 bg-gray-100 dark:bg-gray-900 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Evolution
            </div>
            <div className="p-2">
              {chain.type === 'linear' && (
                <div className="flex items-start justify-center gap-0.5 flex-wrap">
                  {chain.chain.map((item, i) =>
                    typeof item === 'number' ? (
                      <button
                        key={i}
                        onClick={() => selectPokemon(item)}
                        className={`flex flex-col items-center rounded-lg p-1 w-[72px] transition-colors ${
                          item === p.id
                            ? 'bg-blue-100 dark:bg-blue-900/60 ring-1 ring-blue-400'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {getPkmn(item)?.sprite
                          ? <img src={getPkmn(item).sprite} alt="" className="w-10 h-10 object-contain" style={{ imageRendering: 'pixelated' }} />
                          : <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[10px] text-gray-400">?</div>
                        }
                        <span className="text-[9px] capitalize text-gray-500 dark:text-white leading-tight mt-0.5 w-full text-center whitespace-nowrap">
                          {getPkmn(item)?.name || `#${item}`}
                        </span>
                      </button>
                    ) : (
                      <div key={i} className="flex flex-col items-center justify-center px-0.5 pt-2">
                        <span className="text-gray-300 dark:text-gray-300 text-sm leading-none">›</span>
                        <span className="text-[8px] text-gray-400 dark:text-white text-center leading-tight whitespace-nowrap max-w-[48px]">
                          {evoStepLabel(item)}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
              {chain.type === 'branching' && (
                <div className="flex items-start gap-2">
                  {/* Base form */}
                  <button
                    onClick={() => selectPokemon(chain.baseId)}
                    className={`flex flex-col items-center rounded-lg p-1 w-[72px] shrink-0 transition-colors ${
                      chain.baseId === p.id
                        ? 'bg-blue-100 dark:bg-blue-900/60 ring-1 ring-blue-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {getPkmn(chain.baseId)?.sprite && (
                      <img src={getPkmn(chain.baseId).sprite} alt="" className="w-10 h-10 object-contain" style={{ imageRendering: 'pixelated' }} />
                    )}
                    <span className="text-[9px] capitalize text-gray-500 dark:text-white leading-tight mt-0.5 w-full text-center whitespace-nowrap">
                      {getPkmn(chain.baseId)?.name || `#${chain.baseId}`}
                    </span>
                  </button>
                  {/* Branches */}
                  <div className="flex flex-col gap-1">
                    {chain.branches.map((branch, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <div className="flex flex-col items-center">
                          <span className="text-gray-300 dark:text-gray-300 text-xs">›</span>
                          <span className="text-[8px] text-gray-400 dark:text-white whitespace-nowrap">
                            {evoStepLabel(branch.evoData)}
                          </span>
                        </div>
                        <button
                          onClick={() => selectPokemon(branch.id)}
                          className={`flex flex-col items-center rounded-lg p-1 w-[72px] transition-colors ${
                            branch.id === p.id
                              ? 'bg-blue-100 dark:bg-blue-900/60 ring-1 ring-blue-400'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {getPkmn(branch.id)?.sprite && (
                            <img src={getPkmn(branch.id).sprite} alt="" className="w-10 h-10 object-contain" style={{ imageRendering: 'pixelated' }} />
                          )}
                          <span className="text-[9px] capitalize text-gray-500 dark:text-white leading-tight mt-0.5 w-full text-center whitespace-nowrap">
                            {getPkmn(branch.id)?.name || `#${branch.id}`}
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Encounter Data ── */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <SectionHeader title="Encounter Data" open={encounterOpen} onToggle={() => setEncounterOpen(o => !o)} />
          {encounterOpen && (
            <div className="p-2 space-y-2">
              {evoInfo && (
                <div className="rounded-lg border border-blue-100 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/40 px-3 py-2 flex items-center gap-2">
                  <span className="text-lg">🔄</span>
                  <div>
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">Obtained by Evolution</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">{getEvolutionLabel(evoInfo)}</p>
                  </div>
                </div>
              )}
              {locationGroups.length > 0 ? (
                <div className="space-y-2">
                  {locationGroups.map(([location, encs]) => {
                    const isFiltered = filterLocation && (
                      location === filterLocation ||
                      encs.some(e => e.area === filterLocation)
                    )
                    return (
                    <div key={location} className={`rounded-lg border overflow-hidden ${isFiltered ? 'border-amber-400 dark:border-amber-500' : 'border-gray-100 dark:border-gray-700'}`}>
                      <div className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide flex items-center justify-between ${isFiltered ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400' : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                        <span>{location}</span>
                        {isFiltered && <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 ml-2">📍 Filtered</span>}
                      </div>
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-gray-100 dark:border-gray-700">
                            <th className="text-left px-3 py-1 text-gray-400 dark:text-gray-500 font-medium">Method</th>
                            <th className="text-center px-2 py-1 text-gray-400 dark:text-gray-500 font-medium">Lvl</th>
                            <th className="text-center px-2 py-1 text-gray-400 dark:text-gray-500 font-medium">%</th>
                            <th className="text-right px-3 py-1 text-gray-400 dark:text-gray-500 font-medium">Ver</th>
                          </tr>
                        </thead>
                        <tbody>
                          {encs.map((enc, i) => (
                            <tr key={i} className="border-b border-gray-50 dark:border-gray-700 last:border-0">
                              <td className="px-3 py-1.5 text-gray-600 dark:text-gray-300">
                                <span className="mr-1">{METHOD_ICON[enc.method] || '•'}</span>
                                {enc.methodDisplay}
                                {enc.notes && <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5 leading-tight">{enc.notes}</div>}
                              </td>
                              <td className="text-center px-2 py-1.5 text-gray-600 dark:text-gray-300">
                                {enc.minLevel != null
                                  ? enc.minLevel === enc.maxLevel ? enc.minLevel : `${enc.minLevel}–${enc.maxLevel}`
                                  : '—'}
                              </td>
                              <td className="text-center px-2 py-1.5 text-gray-600 dark:text-gray-300">
                                {enc.chance != null ? `${enc.chance}%` : '—'}
                              </td>
                              <td className="px-3 py-1.5 text-right">
                                <VersionBadge versions={enc.versions} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    )
                  })}
                </div>
              ) : !evoInfo ? (
                <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-4">
                  {gameConfig?.noEncounterText ?? 'No encounter data found.'}
                </p>
              ) : null}
            </div>
          )}
        </div>

        {/* ── Pokédex Entry ── */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <SectionHeader title="Pokédex Entry" open={dexOpen} onToggle={() => setDexOpen(o => !o)} />
          {dexOpen && (
            <div className="p-3 space-y-3">
              {/* Flavor text — config-driven keys */}
              {gameConfig && gameConfig.flavorTextKeys.some(({ id }) => p.flavorText?.[id]) ? (
                <div className="space-y-2">
                  {gameConfig.flavorTextKeys.map(({ id, label, bg }) =>
                    p.flavorText?.[id] ? (
                      <div key={id} className="flex gap-2 items-start">
                        <span className={`${bg} text-white text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 mt-0.5 leading-none`}>
                          {label}
                        </span>
                        <p className="text-xs text-gray-700 dark:text-gray-300 italic leading-relaxed">
                          {p.flavorText[id]}
                        </p>
                      </div>
                    ) : null
                  )}
                </div>
              ) : (
                <p className="text-xs text-gray-400 dark:text-gray-500 italic">No Pokédex entry available.</p>
              )}

              {/* Egg groups — clickable to filter grid */}
              {p.eggGroups?.length > 0 && (
                <div>
                  <div className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
                    Egg Group{p.eggGroups.length > 1 ? 's' : ''}
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    {p.eggGroups.map(g => (
                      <button
                        key={g}
                        onClick={() => { setFilterEggGroups([g]); clearSelection() }}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-300 transition-colors cursor-pointer"
                        title={`Show all ${formatEggGroup(g)} Pokémon`}
                      >
                        {formatEggGroup(g)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Base stats */}
              {p.stats && (
                <div>
                  <div className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1.5">Base Stats</div>
                  <div className="space-y-1">
                    {STAT_BARS.map(({ key, label, color }) => {
                      const val = p.stats[key] || 0
                      const pct = Math.round((val / 255) * 100)
                      return (
                        <div key={key} className="flex items-center gap-2">
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 w-6 text-right font-mono shrink-0">{label}</span>
                          <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-[10px] text-gray-600 dark:text-gray-300 font-mono w-7 text-right shrink-0">{val}</span>
                        </div>
                      )
                    })}
                    <div className="flex items-center gap-2 pt-1 mt-1 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 w-6 text-right shrink-0">BST</span>
                      <div className="flex-1" />
                      <span className="text-[10px] font-bold text-gray-700 dark:text-gray-200 font-mono w-7 text-right shrink-0">{p.stats.bst}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Learnset ── */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <SectionHeader title="Learnset" open={learnsetOpen} onToggle={() => setLearnsetOpen(o => !o)} />
          {learnsetOpen && (
            <div className="p-2 space-y-3">
              {/* Level Up */}
              {p.learnset?.levelUp?.length > 0 && (
                <div>
                  <div className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-1 pb-1">Level Up</div>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <th className="text-center px-2 py-1 text-gray-400 dark:text-gray-500 font-medium w-10">Lv</th>
                        <th className="text-left px-3 py-1 text-gray-400 dark:text-gray-500 font-medium">Move</th>
                      </tr>
                    </thead>
                    <tbody>
                      {p.learnset.levelUp.map((entry, i) => (
                        <tr key={`${entry.level}-${entry.move}-${i}`} className="border-b border-gray-50 dark:border-gray-700 last:border-0">
                          <td className="text-center px-2 py-1.5 text-gray-400 dark:text-gray-500 font-mono">{entry.level === 0 ? '—' : entry.level}</td>
                          <td className="px-3 py-1.5 text-gray-700 dark:text-gray-200">{entry.move}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TM / HM */}
              {p.learnset?.tmhm?.length > 0 && (
                <div>
                  <div className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-1 pb-1">TM / HM</div>
                  <table className="w-full text-xs">
                    <tbody>
                      {p.learnset.tmhm.map((entry, i) => (
                        <tr key={i} className="border-b border-gray-50 dark:border-gray-700 last:border-0">
                          <td className="px-2 py-1.5 text-gray-400 dark:text-gray-500 font-mono w-12 shrink-0">{entry.label}</td>
                          <td className="px-2 py-1.5 text-gray-700 dark:text-gray-200">{entry.move}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Move Tutor */}
              {p.learnset?.tutor?.length > 0 && (
                <div>
                  <div className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-1 pb-1">Move Tutor</div>
                  <div className="flex flex-wrap gap-1 px-1">
                    {p.learnset.tutor.map((move, i) => (
                      <span key={i} className="text-[10px] px-1.5 py-0.5 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                        {move}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Egg Moves */}
              {p.learnset?.egg?.length > 0 && (
                <div>
                  <div className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-1 pb-1">Egg Moves</div>
                  <div className="flex flex-wrap gap-1 px-1">
                    {p.learnset.egg.map((move, i) => (
                      <span key={i} className="text-[10px] px-1.5 py-0.5 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded">
                        {move}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {!p.learnset?.levelUp?.length && !p.learnset?.tmhm?.length && !p.learnset?.tutor?.length && !p.learnset?.egg?.length && (
                <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-4">No learnset data available.</p>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
