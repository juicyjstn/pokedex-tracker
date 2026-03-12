export const rseConfig = {
  id: 'rse',
  title: 'Ruby / Sapphire / Emerald',
  shortName: 'RSE',
  generation: 'Gen III',

  regionalDex: {
    id: 'hoenn',
    label: 'Hoenn Dex',
    range: '#252–#386',
    activeClass: 'bg-red-600',
    activeTextClass: 'text-red-200',
  },
  nationalLabel: 'All RSE',

  headerColorRegional: 'bg-red-600',
  headerColorRegionalBar: 'bg-red-800',
  headerColorNational: 'bg-indigo-700',
  headerColorNationalBar: 'bg-indigo-900',

  // Version filter buttons (order matters — first entry is the "all" option)
  versions: [
    { id: '',         label: 'All',      activeClass: 'bg-gray-700'  },
    { id: 'ruby',     label: 'Ruby',     activeClass: 'bg-red-600'   },
    { id: 'sapphire', label: 'Sapphire', activeClass: 'bg-blue-600'  },
    { id: 'emerald',  label: 'Emerald',  activeClass: 'bg-green-600' },
  ],

  // For LocationPanel VersionBadge and header exclusivity badges
  versionBadges: {
    both:         [{ label: 'R', bg: 'bg-red-600' }, { label: 'S', bg: 'bg-blue-600' }, { label: 'E', bg: 'bg-green-600' }],
    ruby:         [{ label: 'R only', bg: 'bg-red-600'   }],
    sapphire:     [{ label: 'S only', bg: 'bg-blue-600'  }],
    emerald:      [{ label: 'E only', bg: 'bg-green-600' }],
    'ruby-sapphire': [{ label: 'R', bg: 'bg-red-600' }, { label: 'S', bg: 'bg-blue-600' }],
  },

  // For LocationPanel flavour text
  flavorTextKeys: [
    { id: 'ruby',     label: 'R', bg: 'bg-red-600'   },
    { id: 'sapphire', label: 'S', bg: 'bg-blue-600'  },
    { id: 'emerald',  label: 'E', bg: 'bg-green-600' },
  ],

  // Cover images (keys match version IDs; '' is the default/both cover)
  covers: {
    '':         'cover-rse-both.jpg',
    ruby:       'cover-ruby.jpg',
    sapphire:   'cover-sapphire.jpg',
    emerald:    'cover-emerald.jpg',
  },

  localStorageKey: 'rse-caught-ids',
  hasSortStory: false,

  // Emerald contains all Ruby & Sapphire exclusives — skip version filter for Emerald
  emeraldAll: true,

  noEncounterText: 'No encounter data found for RSE.',
}
