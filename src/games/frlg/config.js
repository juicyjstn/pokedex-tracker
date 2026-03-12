export const frlgConfig = {
  id: 'frlg',
  title: 'FireRed / LeafGreen',
  shortName: 'FRLG',
  generation: 'Gen III',

  regionalDex: {
    id: 'kanto',
    label: 'Kanto Dex',
    range: '#001–#151',
    activeClass: 'bg-red-600',
    activeTextClass: 'text-red-200',
  },
  nationalLabel: 'All FRLG',

  headerColorRegional: 'bg-red-600',
  headerColorRegionalBar: 'bg-red-800',
  headerColorNational: 'bg-indigo-700',
  headerColorNationalBar: 'bg-indigo-900',

  // Version filter buttons (order matters — first entry is the "all" option)
  versions: [
    { id: '',          label: 'Both',      activeClass: 'bg-gray-700'  },
    { id: 'firered',   label: 'FireRed',   activeClass: 'bg-red-600'   },
    { id: 'leafgreen', label: 'LeafGreen', activeClass: 'bg-green-600' },
  ],

  // For LocationPanel VersionBadge and header exclusivity badges
  versionBadges: {
    both:      [{ label: 'FR', bg: 'bg-red-600' }, { label: 'LG', bg: 'bg-green-600' }],
    firered:   [{ label: 'FR only', bg: 'bg-red-600'   }],
    leafgreen: [{ label: 'LG only', bg: 'bg-green-600' }],
  },

  // For LocationPanel flavour text
  flavorTextKeys: [
    { id: 'firered',   label: 'FR', bg: 'bg-red-600'   },
    { id: 'leafgreen', label: 'LG', bg: 'bg-green-600' },
  ],

  // Cover images (keys match version IDs; '' is the default/both cover)
  covers: {
    '':          'cover-frlg-both.jpg',
    firered:     'cover-firered.jpg',
    leafgreen:   'cover-leafgreen.jpg',
  },

  localStorageKey: 'frlg-caught-ids',
  hasSortStory: true,

  // Emerald special-case: false for FRLG (only relevant for RSE)
  emeraldAll: false,

  noEncounterText: 'No encounter data found for FRLG.',
}
