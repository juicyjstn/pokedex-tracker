import { frlgConfig } from './frlg/config'
import { rseConfig } from './rse/config'

// Central registry of all available game trackers.
// To add a new game, import its config and append it here.
export const GAMES = [frlgConfig, rseConfig]
