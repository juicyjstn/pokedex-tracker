import { GAMES } from '../games/index.js'

const VERSION = '1'
const TOTAL_POKEMON = 386
const BYTE_COUNT = Math.ceil(TOTAL_POKEMON / 8) // 49

// Map short names (e.g. 'FRLG') → game config
const SHORT_NAME_MAP = Object.fromEntries(
  GAMES.map(g => [g.shortName, g])
)

/**
 * Encode caught Pokémon IDs into a compact share code.
 * Format: GAME:VERSION:BASE64  (e.g. "FRLG:1:AX9f2b...")
 */
export function encode(shortName, caughtIds) {
  const bytes = new Uint8Array(BYTE_COUNT)
  for (const id of caughtIds) {
    if (id >= 1 && id <= TOTAL_POKEMON) {
      const idx = id - 1
      bytes[idx >> 3] |= 1 << (idx & 7)
    }
  }
  const binary = String.fromCharCode(...bytes)
  return `${shortName}:${VERSION}:${btoa(binary)}`
}

/**
 * Decode a share code back into a game short name and caught ID set.
 * Returns { shortName, gameConfig, caughtIds } or throws with a user-friendly message.
 */
export function decode(code) {
  const trimmed = (code || '').trim()
  if (!trimmed) throw new Error('Please paste a share code.')

  const parts = trimmed.split(':')
  if (parts.length !== 3) throw new Error('Invalid format. Expected GAME:VERSION:CODE.')

  const [shortName, version, payload] = parts

  const gameConfig = SHORT_NAME_MAP[shortName.toUpperCase()]
  if (!gameConfig) throw new Error(`Unknown game "${shortName}". Expected ${Object.keys(SHORT_NAME_MAP).join(' or ')}.`)

  if (version !== VERSION) throw new Error(`Unsupported code version "${version}".`)

  let binary
  try {
    binary = atob(payload)
  } catch {
    throw new Error('Invalid code data. Check that you copied the full code.')
  }

  if (binary.length !== BYTE_COUNT) {
    throw new Error('Invalid code length. Check that you copied the full code.')
  }

  const caughtIds = new Set()
  for (let i = 0; i < TOTAL_POKEMON; i++) {
    if (binary.charCodeAt(i >> 3) & (1 << (i & 7))) {
      caughtIds.add(i + 1)
    }
  }

  return { shortName: shortName.toUpperCase(), gameConfig, caughtIds }
}
