export const trainers = [
  // ─── GYM LEADERS ───────────────────────────────────────────────────────────

  {
    id: 'brock',
    name: 'Brock',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Boulder Badge',
    location: 'Pewter City',
    speciality: 'rock',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 74, name: 'geodude', level: 12, types: ['rock', 'ground'], moves: ['Tackle', 'Defense Curl'] },
        { id: 95, name: 'onix', level: 14, types: ['rock', 'ground'], moves: ['Tackle', 'Bind', 'Rock Tomb'] },
      ]
    }]
  },

  {
    id: 'misty',
    name: 'Misty',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Cascade Badge',
    location: 'Cerulean City',
    speciality: 'water',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 120, name: 'staryu', level: 18, types: ['water'], moves: ['Tackle', 'Harden', 'Water Pulse', 'Recover'] },
        { id: 121, name: 'starmie', level: 21, types: ['water', 'psychic'], moves: ['Water Pulse', 'Rapid Spin', 'Recover', 'Swift'] },
      ]
    }]
  },

  {
    id: 'lt-surge',
    name: 'Lt. Surge',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Thunder Badge',
    location: 'Vermilion City',
    speciality: 'electric',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 100, name: 'voltorb', level: 21, types: ['electric'], moves: ['Sonic Boom', 'Tackle', 'Screech', 'Shock Wave'] },
        { id: 25, name: 'pikachu', level: 18, types: ['electric'], moves: ['Shock Wave', 'Quick Attack', 'Tail Whip', 'Thunder Wave'] },
        { id: 26, name: 'raichu', level: 24, types: ['electric'], moves: ['Shock Wave', 'Quick Attack', 'Tail Whip', 'Thunder Wave'] },
      ]
    }]
  },

  {
    id: 'erika',
    name: 'Erika',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Rainbow Badge',
    location: 'Celadon City',
    speciality: 'grass',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 71, name: 'victreebel', level: 29, types: ['grass', 'poison'], moves: ['Stun Spore', 'Acid', 'Giga Drain', 'PoisonPowder'] },
        { id: 114, name: 'tangela', level: 24, types: ['grass'], moves: ['Constrict', 'Ingrain', 'Giga Drain', 'PoisonPowder'] },
        { id: 45, name: 'vileplume', level: 29, types: ['grass', 'poison'], moves: ['Stun Spore', 'Acid', 'Giga Drain', 'Sleep Powder'] },
      ]
    }]
  },

  {
    id: 'koga',
    name: 'Koga',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Soul Badge',
    location: 'Fuchsia City',
    speciality: 'poison',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 109, name: 'koffing', level: 37, types: ['poison'], moves: ['Tackle', 'Smokescreen', 'Sludge', 'Self-Destruct'] },
        { id: 89, name: 'muk', level: 39, types: ['poison'], moves: ['Minimize', 'Sludge', 'Acid Armor', 'Toxic'] },
        { id: 109, name: 'koffing', level: 37, types: ['poison'], moves: ['Tackle', 'Smokescreen', 'Sludge', 'Self-Destruct'] },
        { id: 110, name: 'weezing', level: 43, types: ['poison'], moves: ['Tackle', 'Smokescreen', 'Sludge', 'Self-Destruct'] },
      ]
    }]
  },

  {
    id: 'sabrina',
    name: 'Sabrina',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Marsh Badge',
    location: 'Saffron City',
    speciality: 'psychic',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 64, name: 'kadabra', level: 38, types: ['psychic'], moves: ['Psybeam', 'Reflect', 'Future Sight', 'Calm Mind'] },
        { id: 122, name: 'mr-mime', level: 37, types: ['psychic'], moves: ['Barrier', 'Psybeam', 'Baton Pass', 'Calm Mind'] },
        { id: 49, name: 'venomoth', level: 38, types: ['bug', 'poison'], moves: ['Psybeam', 'Gust', 'Leech Life', 'Supersonic'] },
        { id: 65, name: 'alakazam', level: 43, types: ['psychic'], moves: ['Psychic', 'Recover', 'Future Sight', 'Calm Mind'] },
      ]
    }]
  },

  {
    id: 'blaine',
    name: 'Blaine',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Volcano Badge',
    location: 'Cinnabar Island',
    speciality: 'fire',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 58, name: 'growlithe', level: 42, types: ['fire'], moves: ['Ember', 'Bite', 'Take Down', 'Fire Blast'] },
        { id: 77, name: 'ponyta', level: 40, types: ['fire'], moves: ['Stomp', 'Bounce', 'Fire Spin', 'Fire Blast'] },
        { id: 78, name: 'rapidash', level: 42, types: ['fire'], moves: ['Stomp', 'Bounce', 'Fire Spin', 'Fire Blast'] },
        { id: 59, name: 'arcanine', level: 47, types: ['fire'], moves: ['Extreme Speed', 'Bite', 'Take Down', 'Fire Blast'] },
      ]
    }]
  },

  {
    id: 'giovanni-gym',
    name: 'Giovanni',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Earth Badge',
    location: 'Viridian City',
    speciality: 'ground',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 111, name: 'rhyhorn', level: 45, types: ['ground', 'rock'], moves: ['Take Down', 'Rock Blast', 'Scary Face', 'Earthquake'] },
        { id: 51, name: 'dugtrio', level: 42, types: ['ground'], moves: ['Slash', 'Sand Tomb', 'Mud-Slap', 'Earthquake'] },
        { id: 31, name: 'nidoqueen', level: 44, types: ['poison', 'ground'], moves: ['Body Slam', 'Double Kick', 'Poison Sting', 'Earthquake'] },
        { id: 34, name: 'nidoking', level: 45, types: ['poison', 'ground'], moves: ['Thrash', 'Double Kick', 'Poison Sting', 'Earthquake'] },
        { id: 112, name: 'rhydon', level: 50, types: ['ground', 'rock'], moves: ['Take Down', 'Rock Blast', 'Scary Face', 'Earthquake'] },
      ]
    }]
  },

  // ─── ELITE FOUR ─────────────────────────────────────────────────────────────

  {
    id: 'lorelei',
    name: 'Lorelei',
    category: 'elite-four',
    title: 'Elite Four',
    location: 'Indigo Plateau',
    speciality: 'ice',
    teams: [{
      label: 'Elite Four Battle',
      pokemon: [
        { id: 87, name: 'dewgong', level: 52, types: ['water', 'ice'], moves: ['Ice Beam', 'Surf', 'Hail', 'Safeguard'] },
        { id: 91, name: 'cloyster', level: 51, types: ['water', 'ice'], moves: ['Ice Beam', 'Supersonic', 'Protect', 'Hail'] },
        { id: 80, name: 'slowbro', level: 52, types: ['water', 'psychic'], moves: ['Ice Beam', 'Surf', 'Yawn', 'Amnesia'] },
        { id: 124, name: 'jynx', level: 54, types: ['ice', 'psychic'], moves: ['Ice Punch', 'Lovely Kiss', 'Attract', 'Double Slap'] },
        { id: 131, name: 'lapras', level: 54, types: ['water', 'ice'], moves: ['Ice Beam', 'Surf', 'Body Slam', 'Confuse Ray'] },
      ]
    }]
  },

  {
    id: 'bruno',
    name: 'Bruno',
    category: 'elite-four',
    title: 'Elite Four',
    location: 'Indigo Plateau',
    speciality: 'fighting',
    teams: [{
      label: 'Elite Four Battle',
      pokemon: [
        { id: 95, name: 'onix', level: 51, types: ['rock', 'ground'], moves: ['Rock Tomb', 'Iron Tail', 'Earthquake', 'Sandstorm'] },
        { id: 107, name: 'hitmonchan', level: 53, types: ['fighting'], moves: ['Sky Uppercut', 'Mach Punch', 'Rock Tomb', 'Counter'] },
        { id: 106, name: 'hitmonlee', level: 53, types: ['fighting'], moves: ['Mega Kick', 'Foresight', 'Brick Break', 'Facade'] },
        { id: 95, name: 'onix', level: 54, types: ['rock', 'ground'], moves: ['Rock Tomb', 'Iron Tail', 'Earthquake', 'Dragon Breath'] },
        { id: 68, name: 'machamp', level: 56, types: ['fighting'], moves: ['Cross Chop', 'Bulk Up', 'Scary Face', 'Rock Tomb'] },
      ]
    }]
  },

  {
    id: 'agatha',
    name: 'Agatha',
    category: 'elite-four',
    title: 'Elite Four',
    location: 'Indigo Plateau',
    speciality: 'ghost',
    teams: [{
      label: 'Elite Four Battle',
      pokemon: [
        { id: 94, name: 'gengar', level: 54, types: ['ghost', 'poison'], moves: ['Shadow Punch', 'Confuse Ray', 'Toxic', 'Double Team'] },
        { id: 42, name: 'golbat', level: 54, types: ['poison', 'flying'], moves: ['Confuse Ray', 'Bite', 'Air Cutter', 'Poison Fang'] },
        { id: 93, name: 'haunter', level: 53, types: ['ghost', 'poison'], moves: ['Shadow Punch', 'Confuse Ray', 'Hypnosis', 'Mean Look'] },
        { id: 24, name: 'arbok', level: 56, types: ['poison'], moves: ['Sludge Bomb', 'Bite', 'Iron Tail', 'Screech'] },
        { id: 94, name: 'gengar', level: 58, types: ['ghost', 'poison'], moves: ['Shadow Ball', 'Sludge Bomb', 'Hypnosis', 'Nightmare'] },
      ]
    }]
  },

  {
    id: 'lance',
    name: 'Lance',
    category: 'elite-four',
    title: 'Elite Four',
    location: 'Indigo Plateau',
    speciality: 'dragon',
    teams: [{
      label: 'Elite Four Battle',
      pokemon: [
        { id: 130, name: 'gyarados', level: 56, types: ['water', 'flying'], moves: ['Hyper Beam', 'Dragon Rage', 'Twister', 'Bite'] },
        { id: 148, name: 'dragonair', level: 54, types: ['dragon'], moves: ['Outrage', 'Thunder Wave', 'Hyper Beam', 'Safeguard'] },
        { id: 148, name: 'dragonair', level: 54, types: ['dragon'], moves: ['Outrage', 'Thunder Wave', 'Hyper Beam', 'Safeguard'] },
        { id: 142, name: 'aerodactyl', level: 58, types: ['rock', 'flying'], moves: ['Hyper Beam', 'Ancient Power', 'Wing Attack', 'Scary Face'] },
        { id: 149, name: 'dragonite', level: 60, types: ['dragon', 'flying'], moves: ['Outrage', 'Hyper Beam', 'Wing Attack', 'Safeguard'] },
      ]
    }]
  },

  // ─── CHAMPION ───────────────────────────────────────────────────────────────

  {
    id: 'champion',
    name: 'Blue',
    category: 'champion',
    title: 'Champion',
    location: 'Indigo Plateau',
    speciality: 'mixed',
    teams: [
      {
        label: 'Champion (player chose Bulbasaur)',
        pokemon: [
          { id: 18, name: 'pidgeot', level: 59, types: ['normal', 'flying'], moves: ['Aerial Ace', 'Feather Dance', 'Sand Attack', 'Wing Attack'] },
          { id: 65, name: 'alakazam', level: 57, types: ['psychic'], moves: ['Psychic', 'Future Sight', 'Reflect', 'Recover'] },
          { id: 112, name: 'rhydon', level: 59, types: ['ground', 'rock'], moves: ['Take Down', 'Earthquake', 'Rock Tomb', 'Scary Face'] },
          { id: 103, name: 'exeggutor', level: 59, types: ['grass', 'psychic'], moves: ['Giga Drain', 'Egg Bomb', 'Sleep Powder', 'Light Screen'] },
          { id: 130, name: 'gyarados', level: 61, types: ['water', 'flying'], moves: ['Hydro Pump', 'Dragon Rage', 'Twister', 'Hyper Beam'] },
          { id: 6, name: 'charizard', level: 63, types: ['fire', 'flying'], moves: ['Fire Blast', 'Aerial Ace', 'Slash', 'Dragon Rage'] },
        ]
      },
      {
        label: 'Champion (player chose Charmander)',
        pokemon: [
          { id: 18, name: 'pidgeot', level: 59, types: ['normal', 'flying'], moves: ['Aerial Ace', 'Feather Dance', 'Sand Attack', 'Wing Attack'] },
          { id: 65, name: 'alakazam', level: 57, types: ['psychic'], moves: ['Psychic', 'Future Sight', 'Reflect', 'Recover'] },
          { id: 112, name: 'rhydon', level: 59, types: ['ground', 'rock'], moves: ['Take Down', 'Earthquake', 'Rock Tomb', 'Scary Face'] },
          { id: 59, name: 'arcanine', level: 59, types: ['fire'], moves: ['Extreme Speed', 'Flamethrower', 'Bite', 'Roar'] },
          { id: 103, name: 'exeggutor', level: 61, types: ['grass', 'psychic'], moves: ['Giga Drain', 'Egg Bomb', 'Sleep Powder', 'Light Screen'] },
          { id: 9, name: 'blastoise', level: 63, types: ['water'], moves: ['Hydro Pump', 'Rain Dance', 'Skull Bash', 'Bite'] },
        ]
      },
      {
        label: 'Champion (player chose Squirtle)',
        pokemon: [
          { id: 18, name: 'pidgeot', level: 59, types: ['normal', 'flying'], moves: ['Aerial Ace', 'Feather Dance', 'Sand Attack', 'Wing Attack'] },
          { id: 65, name: 'alakazam', level: 57, types: ['psychic'], moves: ['Psychic', 'Future Sight', 'Reflect', 'Recover'] },
          { id: 112, name: 'rhydon', level: 59, types: ['ground', 'rock'], moves: ['Take Down', 'Earthquake', 'Rock Tomb', 'Scary Face'] },
          { id: 130, name: 'gyarados', level: 59, types: ['water', 'flying'], moves: ['Hydro Pump', 'Dragon Rage', 'Twister', 'Hyper Beam'] },
          { id: 59, name: 'arcanine', level: 61, types: ['fire'], moves: ['Extreme Speed', 'Flamethrower', 'Bite', 'Roar'] },
          { id: 3, name: 'venusaur', level: 63, types: ['grass', 'poison'], moves: ['Solar Beam', 'Sunny Day', 'Growth', 'Synthesis'] },
        ]
      },
    ]
  },

  // ─── RIVAL BATTLES ──────────────────────────────────────────────────────────

  {
    id: 'rival-1',
    name: 'Blue',
    category: 'rival',
    title: 'Rival',
    location: "Oak's Lab",
    teams: [
      {
        label: 'Rival (player chose Bulbasaur)',
        pokemon: [
          { id: 4, name: 'charmander', level: 5, types: ['fire'], moves: ['Scratch', 'Growl'] },
        ]
      },
      {
        label: 'Rival (player chose Charmander)',
        pokemon: [
          { id: 7, name: 'squirtle', level: 5, types: ['water'], moves: ['Tackle', 'Tail Whip'] },
        ]
      },
      {
        label: 'Rival (player chose Squirtle)',
        pokemon: [
          { id: 1, name: 'bulbasaur', level: 5, types: ['grass', 'poison'], moves: ['Tackle', 'Growl'] },
        ]
      },
    ]
  },

  {
    id: 'rival-2',
    name: 'Blue',
    category: 'rival',
    title: 'Rival',
    location: 'Route 22',
    teams: [
      {
        label: 'Rival (player chose Bulbasaur)',
        pokemon: [
          { id: 16, name: 'pidgey', level: 9, types: ['normal', 'flying'], moves: ['Tackle', 'Sand Attack', 'Gust'] },
          { id: 4, name: 'charmander', level: 9, types: ['fire'], moves: ['Scratch', 'Growl', 'Ember'] },
        ]
      },
      {
        label: 'Rival (player chose Charmander)',
        pokemon: [
          { id: 16, name: 'pidgey', level: 9, types: ['normal', 'flying'], moves: ['Tackle', 'Sand Attack', 'Gust'] },
          { id: 7, name: 'squirtle', level: 9, types: ['water'], moves: ['Tackle', 'Tail Whip', 'Water Gun'] },
        ]
      },
      {
        label: 'Rival (player chose Squirtle)',
        pokemon: [
          { id: 16, name: 'pidgey', level: 9, types: ['normal', 'flying'], moves: ['Tackle', 'Sand Attack', 'Gust'] },
          { id: 1, name: 'bulbasaur', level: 9, types: ['grass', 'poison'], moves: ['Tackle', 'Growl', 'Leech Seed'] },
        ]
      },
    ]
  },

  {
    id: 'rival-3',
    name: 'Blue',
    category: 'rival',
    title: 'Rival',
    location: 'Cerulean City',
    teams: [
      {
        label: 'Rival (player chose Bulbasaur)',
        pokemon: [
          { id: 16, name: 'pidgeotto', level: 17, types: ['normal', 'flying'], moves: ['Tackle', 'Sand Attack', 'Gust', 'Quick Attack'] },
          { id: 63, name: 'abra', level: 16, types: ['psychic'], moves: ['Teleport'] },
          { id: 19, name: 'rattata', level: 15, types: ['normal'], moves: ['Tackle', 'Tail Whip', 'Quick Attack', 'Hyper Fang'] },
          { id: 5, name: 'charmeleon', level: 18, types: ['fire'], moves: ['Scratch', 'Growl', 'Ember', 'Metal Claw'] },
        ]
      },
      {
        label: 'Rival (player chose Charmander)',
        pokemon: [
          { id: 16, name: 'pidgeotto', level: 17, types: ['normal', 'flying'], moves: ['Tackle', 'Sand Attack', 'Gust', 'Quick Attack'] },
          { id: 63, name: 'abra', level: 16, types: ['psychic'], moves: ['Teleport'] },
          { id: 19, name: 'rattata', level: 15, types: ['normal'], moves: ['Tackle', 'Tail Whip', 'Quick Attack', 'Hyper Fang'] },
          { id: 8, name: 'wartortle', level: 18, types: ['water'], moves: ['Tackle', 'Tail Whip', 'Water Gun', 'Bite'] },
        ]
      },
      {
        label: 'Rival (player chose Squirtle)',
        pokemon: [
          { id: 16, name: 'pidgeotto', level: 17, types: ['normal', 'flying'], moves: ['Tackle', 'Sand Attack', 'Gust', 'Quick Attack'] },
          { id: 63, name: 'abra', level: 16, types: ['psychic'], moves: ['Teleport'] },
          { id: 19, name: 'rattata', level: 15, types: ['normal'], moves: ['Tackle', 'Tail Whip', 'Quick Attack', 'Hyper Fang'] },
          { id: 2, name: 'ivysaur', level: 18, types: ['grass', 'poison'], moves: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip'] },
        ]
      },
    ]
  },

  {
    id: 'rival-4',
    name: 'Blue',
    category: 'rival',
    title: 'Rival',
    location: 'S.S. Anne',
    teams: [
      {
        label: 'Rival (player chose Bulbasaur)',
        pokemon: [
          { id: 17, name: 'pidgeotto', level: 19, types: ['normal', 'flying'], moves: ['Tackle', 'Sand Attack', 'Gust', 'Quick Attack'] },
          { id: 19, name: 'rattata', level: 16, types: ['normal'], moves: ['Tackle', 'Tail Whip', 'Quick Attack', 'Hyper Fang'] },
          { id: 64, name: 'kadabra', level: 18, types: ['psychic'], moves: ['Confusion', 'Disable', 'Kinesis'] },
          { id: 5, name: 'charmeleon', level: 20, types: ['fire'], moves: ['Scratch', 'Ember', 'Metal Claw', 'Smokescreen'] },
        ]
      },
      {
        label: 'Rival (player chose Charmander)',
        pokemon: [
          { id: 17, name: 'pidgeotto', level: 19, types: ['normal', 'flying'], moves: ['Tackle', 'Sand Attack', 'Gust', 'Quick Attack'] },
          { id: 19, name: 'rattata', level: 16, types: ['normal'], moves: ['Tackle', 'Tail Whip', 'Quick Attack', 'Hyper Fang'] },
          { id: 64, name: 'kadabra', level: 18, types: ['psychic'], moves: ['Confusion', 'Disable', 'Kinesis'] },
          { id: 8, name: 'wartortle', level: 20, types: ['water'], moves: ['Tackle', 'Water Gun', 'Bite', 'Water Pulse'] },
        ]
      },
      {
        label: 'Rival (player chose Squirtle)',
        pokemon: [
          { id: 17, name: 'pidgeotto', level: 19, types: ['normal', 'flying'], moves: ['Tackle', 'Sand Attack', 'Gust', 'Quick Attack'] },
          { id: 19, name: 'rattata', level: 16, types: ['normal'], moves: ['Tackle', 'Tail Whip', 'Quick Attack', 'Hyper Fang'] },
          { id: 64, name: 'kadabra', level: 18, types: ['psychic'], moves: ['Confusion', 'Disable', 'Kinesis'] },
          { id: 2, name: 'ivysaur', level: 20, types: ['grass', 'poison'], moves: ['Tackle', 'Leech Seed', 'Vine Whip', 'PoisonPowder'] },
        ]
      },
    ]
  },

  {
    id: 'rival-5',
    name: 'Blue',
    category: 'rival',
    title: 'Rival',
    location: 'Pokemon Tower',
    teams: [
      {
        label: 'Rival (player chose Bulbasaur)',
        pokemon: [
          { id: 17, name: 'pidgeotto', level: 25, types: ['normal', 'flying'], moves: ['Gust', 'Quick Attack', 'Sand Attack', 'Wing Attack'] },
          { id: 130, name: 'gyarados', level: 23, types: ['water', 'flying'], moves: ['Thrash', 'Bite', 'Dragon Rage', 'Leer'] },
          { id: 58, name: 'growlithe', level: 22, types: ['fire'], moves: ['Ember', 'Leer', 'Take Down', 'Bite'] },
          { id: 64, name: 'kadabra', level: 20, types: ['psychic'], moves: ['Confusion', 'Disable', 'Psybeam', 'Kinesis'] },
          { id: 5, name: 'charmeleon', level: 25, types: ['fire'], moves: ['Ember', 'Metal Claw', 'Rage', 'Scary Face'] },
        ]
      },
      {
        label: 'Rival (player chose Charmander)',
        pokemon: [
          { id: 17, name: 'pidgeotto', level: 25, types: ['normal', 'flying'], moves: ['Gust', 'Quick Attack', 'Sand Attack', 'Wing Attack'] },
          { id: 103, name: 'exeggcute', level: 23, types: ['grass', 'psychic'], moves: ['Confusion', 'Stun Spore', 'PoisonPowder', 'Sleep Powder'] },
          { id: 130, name: 'gyarados', level: 22, types: ['water', 'flying'], moves: ['Thrash', 'Bite', 'Dragon Rage', 'Leer'] },
          { id: 64, name: 'kadabra', level: 20, types: ['psychic'], moves: ['Confusion', 'Disable', 'Psybeam', 'Kinesis'] },
          { id: 8, name: 'wartortle', level: 25, types: ['water'], moves: ['Water Gun', 'Bite', 'Water Pulse', 'Rapid Spin'] },
        ]
      },
      {
        label: 'Rival (player chose Squirtle)',
        pokemon: [
          { id: 17, name: 'pidgeotto', level: 25, types: ['normal', 'flying'], moves: ['Gust', 'Quick Attack', 'Sand Attack', 'Wing Attack'] },
          { id: 58, name: 'growlithe', level: 23, types: ['fire'], moves: ['Ember', 'Leer', 'Take Down', 'Bite'] },
          { id: 103, name: 'exeggcute', level: 22, types: ['grass', 'psychic'], moves: ['Confusion', 'Stun Spore', 'PoisonPowder', 'Sleep Powder'] },
          { id: 64, name: 'kadabra', level: 20, types: ['psychic'], moves: ['Confusion', 'Disable', 'Psybeam', 'Kinesis'] },
          { id: 2, name: 'ivysaur', level: 25, types: ['grass', 'poison'], moves: ['Vine Whip', 'PoisonPowder', 'Sleep Powder', 'Razor Leaf'] },
        ]
      },
    ]
  },

  {
    id: 'rival-6',
    name: 'Blue',
    category: 'rival',
    title: 'Rival',
    location: 'Silph Co.',
    teams: [
      {
        label: 'Rival (player chose Bulbasaur)',
        pokemon: [
          { id: 17, name: 'pidgeot', level: 37, types: ['normal', 'flying'], moves: ['Wing Attack', 'Quick Attack', 'Sand Attack', 'Aerial Ace'] },
          { id: 58, name: 'growlithe', level: 38, types: ['fire'], moves: ['Flamethrower', 'Bite', 'Take Down', 'Leer'] },
          { id: 130, name: 'gyarados', level: 35, types: ['water', 'flying'], moves: ['Thrash', 'Bite', 'Dragon Rage', 'Twister'] },
          { id: 65, name: 'alakazam', level: 35, types: ['psychic'], moves: ['Psychic', 'Reflect', 'Recover', 'Future Sight'] },
          { id: 6, name: 'charizard', level: 40, types: ['fire', 'flying'], moves: ['Flamethrower', 'Slash', 'Scary Face', 'Dragon Rage'] },
        ]
      },
      {
        label: 'Rival (player chose Charmander)',
        pokemon: [
          { id: 17, name: 'pidgeot', level: 37, types: ['normal', 'flying'], moves: ['Wing Attack', 'Quick Attack', 'Sand Attack', 'Aerial Ace'] },
          { id: 103, name: 'exeggcute', level: 38, types: ['grass', 'psychic'], moves: ['Confusion', 'Stun Spore', 'PoisonPowder', 'Sleep Powder'] },
          { id: 130, name: 'gyarados', level: 35, types: ['water', 'flying'], moves: ['Thrash', 'Bite', 'Dragon Rage', 'Twister'] },
          { id: 65, name: 'alakazam', level: 35, types: ['psychic'], moves: ['Psychic', 'Reflect', 'Recover', 'Future Sight'] },
          { id: 9, name: 'blastoise', level: 40, types: ['water'], moves: ['Water Gun', 'Bite', 'Water Pulse', 'Rain Dance'] },
        ]
      },
      {
        label: 'Rival (player chose Squirtle)',
        pokemon: [
          { id: 17, name: 'pidgeot', level: 37, types: ['normal', 'flying'], moves: ['Wing Attack', 'Quick Attack', 'Sand Attack', 'Aerial Ace'] },
          { id: 130, name: 'gyarados', level: 38, types: ['water', 'flying'], moves: ['Thrash', 'Bite', 'Dragon Rage', 'Twister'] },
          { id: 58, name: 'growlithe', level: 35, types: ['fire'], moves: ['Flamethrower', 'Bite', 'Take Down', 'Leer'] },
          { id: 65, name: 'alakazam', level: 35, types: ['psychic'], moves: ['Psychic', 'Reflect', 'Recover', 'Future Sight'] },
          { id: 3, name: 'venusaur', level: 40, types: ['grass', 'poison'], moves: ['Razor Leaf', 'Sleep Powder', 'Growth', 'Sweet Scent'] },
        ]
      },
    ]
  },

  {
    id: 'rival-7',
    name: 'Blue',
    category: 'rival',
    title: 'Rival',
    location: 'Route 22',
    teams: [
      {
        label: 'Rival (player chose Bulbasaur)',
        pokemon: [
          { id: 18, name: 'pidgeot', level: 47, types: ['normal', 'flying'], moves: ['Aerial Ace', 'Feather Dance', 'Sand Attack', 'Wing Attack'] },
          { id: 112, name: 'rhydon', level: 45, types: ['ground', 'rock'], moves: ['Take Down', 'Earthquake', 'Rock Blast', 'Scary Face'] },
          { id: 65, name: 'alakazam', level: 47, types: ['psychic'], moves: ['Psychic', 'Future Sight', 'Reflect', 'Recover'] },
          { id: 59, name: 'arcanine', level: 45, types: ['fire'], moves: ['Extreme Speed', 'Flamethrower', 'Bite', 'Roar'] },
          { id: 130, name: 'gyarados', level: 45, types: ['water', 'flying'], moves: ['Hydro Pump', 'Dragon Rage', 'Twister', 'Bite'] },
          { id: 6, name: 'charizard', level: 53, types: ['fire', 'flying'], moves: ['Fire Blast', 'Aerial Ace', 'Slash', 'Dragon Rage'] },
        ]
      },
      {
        label: 'Rival (player chose Charmander)',
        pokemon: [
          { id: 18, name: 'pidgeot', level: 47, types: ['normal', 'flying'], moves: ['Aerial Ace', 'Feather Dance', 'Sand Attack', 'Wing Attack'] },
          { id: 112, name: 'rhydon', level: 45, types: ['ground', 'rock'], moves: ['Take Down', 'Earthquake', 'Rock Blast', 'Scary Face'] },
          { id: 65, name: 'alakazam', level: 47, types: ['psychic'], moves: ['Psychic', 'Future Sight', 'Reflect', 'Recover'] },
          { id: 103, name: 'exeggutor', level: 45, types: ['grass', 'psychic'], moves: ['Giga Drain', 'Egg Bomb', 'Sleep Powder', 'Light Screen'] },
          { id: 130, name: 'gyarados', level: 45, types: ['water', 'flying'], moves: ['Hydro Pump', 'Dragon Rage', 'Twister', 'Bite'] },
          { id: 9, name: 'blastoise', level: 53, types: ['water'], moves: ['Hydro Pump', 'Rain Dance', 'Skull Bash', 'Bite'] },
        ]
      },
      {
        label: 'Rival (player chose Squirtle)',
        pokemon: [
          { id: 18, name: 'pidgeot', level: 47, types: ['normal', 'flying'], moves: ['Aerial Ace', 'Feather Dance', 'Sand Attack', 'Wing Attack'] },
          { id: 112, name: 'rhydon', level: 45, types: ['ground', 'rock'], moves: ['Take Down', 'Earthquake', 'Rock Blast', 'Scary Face'] },
          { id: 65, name: 'alakazam', level: 47, types: ['psychic'], moves: ['Psychic', 'Future Sight', 'Reflect', 'Recover'] },
          { id: 130, name: 'gyarados', level: 45, types: ['water', 'flying'], moves: ['Hydro Pump', 'Dragon Rage', 'Twister', 'Bite'] },
          { id: 59, name: 'arcanine', level: 45, types: ['fire'], moves: ['Extreme Speed', 'Flamethrower', 'Bite', 'Roar'] },
          { id: 3, name: 'venusaur', level: 53, types: ['grass', 'poison'], moves: ['Solar Beam', 'Sunny Day', 'Growth', 'Synthesis'] },
        ]
      },
    ]
  },

  // ─── TEAM ROCKET BOSS ───────────────────────────────────────────────────────

  {
    id: 'giovanni-rocket-hideout',
    name: 'Giovanni',
    category: 'boss',
    title: 'Team Rocket Boss',
    location: 'Rocket Hideout',
    teams: [{
      label: 'Rocket Hideout Battle',
      pokemon: [
        { id: 95, name: 'onix', level: 25, types: ['rock', 'ground'], moves: ['Tackle', 'Bind', 'Rock Tomb', 'Rage'] },
        { id: 112, name: 'rhyhorn', level: 24, types: ['ground', 'rock'], moves: ['Stomp', 'Tail Whip', 'Fury Attack', 'Scary Face'] },
        { id: 115, name: 'kangaskhan', level: 29, types: ['normal'], moves: ['Mega Punch', 'Rage', 'Bite', 'Tail Whip'] },
      ]
    }]
  },

  {
    id: 'giovanni-silph-co',
    name: 'Giovanni',
    category: 'boss',
    title: 'Team Rocket Boss',
    location: 'Silph Co.',
    teams: [{
      label: 'Silph Co. Battle',
      pokemon: [
        { id: 34, name: 'nidorino', level: 37, types: ['poison'], moves: ['Poison Sting', 'Horn Attack', 'Fury Attack', 'Helping Hand'] },
        { id: 115, name: 'kangaskhan', level: 35, types: ['normal'], moves: ['Mega Punch', 'Rage', 'Bite', 'Tail Whip'] },
        { id: 112, name: 'rhyhorn', level: 37, types: ['ground', 'rock'], moves: ['Stomp', 'Tail Whip', 'Fury Attack', 'Horn Drill'] },
        { id: 31, name: 'nidoqueen', level: 41, types: ['poison', 'ground'], moves: ['Body Slam', 'Double Kick', 'Poison Sting', 'Earthquake'] },
      ]
    }]
  },
]
