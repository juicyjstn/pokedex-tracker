export const trainers = [
  // ============================================================
  // GYM LEADERS
  // ============================================================
  {
    id: 'roxanne',
    name: 'Roxanne',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Stone Badge',
    location: 'Rustboro City',
    speciality: 'rock',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 74, name: 'geodude', level: 12, types: ['rock', 'ground'], moves: ['Tackle', 'Defense Curl', 'Rock Throw', 'Rock Tomb'] },
        { id: 74, name: 'geodude', level: 12, types: ['rock', 'ground'], moves: ['Tackle', 'Defense Curl', 'Rock Throw', 'Rock Tomb'] },
        { id: 299, name: 'nosepass', level: 15, types: ['rock'], moves: ['Block', 'Harden', 'Tackle', 'Rock Tomb'] },
      ]
    }]
  },
  {
    id: 'brawly',
    name: 'Brawly',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Knuckle Badge',
    location: 'Dewford Town',
    speciality: 'fighting',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 66, name: 'machop', level: 16, types: ['fighting'], moves: ['Karate Chop', 'Low Kick', 'Seismic Toss', 'Bulk Up'] },
        { id: 307, name: 'meditite', level: 16, types: ['fighting', 'psychic'], moves: ['Focus Punch', 'Light Screen', 'Reflect', 'Bulk Up'] },
        { id: 296, name: 'makuhita', level: 19, types: ['fighting'], moves: ['Arm Thrust', 'Vital Throw', 'Reversal', 'Bulk Up'] },
      ]
    }]
  },
  {
    id: 'wattson',
    name: 'Wattson',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Dynamo Badge',
    location: 'Mauville City',
    speciality: 'electric',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 100, name: 'voltorb', level: 20, types: ['electric'], moves: ['Rollout', 'Spark', 'Self-Destruct', 'Shock Wave'] },
        { id: 309, name: 'electrike', level: 20, types: ['electric'], moves: ['Shock Wave', 'Leer', 'Quick Attack', 'Thunder Wave'] },
        { id: 81, name: 'magnemite', level: 22, types: ['electric', 'steel'], moves: ['Supersonic', 'Shock Wave', 'Thunder Wave', 'Sonic Boom'] },
        { id: 310, name: 'manectric', level: 24, types: ['electric'], moves: ['Quick Attack', 'Shock Wave', 'Thunder Wave', 'Howl'] },
      ]
    }]
  },
  {
    id: 'flannery',
    name: 'Flannery',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Heat Badge',
    location: 'Lavaridge Town',
    speciality: 'fire',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 218, name: 'slugma', level: 24, types: ['fire'], moves: ['Overheat', 'Smog', 'Light Screen', 'Sunny Day'] },
        { id: 218, name: 'slugma', level: 24, types: ['fire'], moves: ['Overheat', 'Smog', 'Light Screen', 'Sunny Day'] },
        { id: 323, name: 'camerupt', level: 26, types: ['fire', 'ground'], moves: ['Overheat', 'Tackle', 'Sunny Day', 'Attract'] },
        { id: 324, name: 'torkoal', level: 29, types: ['fire'], moves: ['Overheat', 'Body Slam', 'Flail', 'Attract'] },
      ]
    }]
  },
  {
    id: 'norman',
    name: 'Norman',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Balance Badge',
    location: 'Petalburg City',
    speciality: 'normal',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 289, name: 'slaking', level: 28, types: ['normal'], moves: ['Encore', 'Counter', 'Yawn', 'Facade'] },
        { id: 288, name: 'vigoroth', level: 30, types: ['normal'], moves: ['Slash', 'Faint Attack', 'Facade', 'Encore'] },
        { id: 289, name: 'slaking', level: 31, types: ['normal'], moves: ['Focus Punch', 'Slack Off', 'Yawn', 'Facade'] },
      ]
    }]
  },
  {
    id: 'winona',
    name: 'Winona',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Feather Badge',
    location: 'Fortree City',
    speciality: 'flying',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 333, name: 'swablu', level: 29, types: ['normal', 'flying'], moves: ['Perish Song', 'Mirror Move', 'Safeguard', 'Aerial Ace'] },
        { id: 357, name: 'tropius', level: 29, types: ['grass', 'flying'], moves: ['Sunny Day', 'Aerial Ace', 'Solar Beam', 'Synthesis'] },
        { id: 279, name: 'pelipper', level: 30, types: ['water', 'flying'], moves: ['Water Gun', 'Supersonic', 'Protect', 'Aerial Ace'] },
        { id: 227, name: 'skarmory', level: 31, types: ['steel', 'flying'], moves: ['Sand Attack', 'Fury Attack', 'Steel Wing', 'Aerial Ace'] },
        { id: 334, name: 'altaria', level: 33, types: ['dragon', 'flying'], moves: ['Earthquake', 'Dragon Dance', 'Dragon Breath', 'Aerial Ace'] },
      ]
    }]
  },
  {
    id: 'tate-and-liza',
    name: 'Tate & Liza',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Mind Badge',
    location: 'Mossdeep City',
    speciality: 'psychic',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 337, name: 'lunatone', level: 42, types: ['rock', 'psychic'], moves: ['Calm Mind', 'Psychic', 'Hypnosis', 'Light Screen'] },
        { id: 338, name: 'solrock', level: 42, types: ['rock', 'psychic'], moves: ['Calm Mind', 'Psychic', 'Sunny Day', 'Solar Beam'] },
      ]
    }]
  },
  {
    id: 'wallace',
    name: 'Wallace',
    category: 'gym',
    title: 'Gym Leader',
    badge: 'Rain Badge',
    location: 'Sootopolis City',
    speciality: 'water',
    teams: [{
      label: 'Gym Battle',
      pokemon: [
        { id: 370, name: 'luvdisc', level: 40, types: ['water'], moves: ['Water Pulse', 'Attract', 'Sweet Kiss', 'Flail'] },
        { id: 340, name: 'whiscash', level: 42, types: ['water', 'ground'], moves: ['Rain Dance', 'Water Pulse', 'Amnesia', 'Earthquake'] },
        { id: 342, name: 'crawdaunt', level: 40, types: ['water', 'dark'], moves: ['Water Pulse', 'Crabhammer', 'Taunt', 'Swords Dance'] },
        { id: 119, name: 'seaking', level: 42, types: ['water'], moves: ['Water Pulse', 'Rain Dance', 'Fury Attack', 'Horn Drill'] },
        { id: 350, name: 'milotic', level: 43, types: ['water'], moves: ['Water Pulse', 'Recover', 'Ice Beam', 'Toxic'] },
      ]
    }]
  },

  // ============================================================
  // ELITE FOUR
  // ============================================================
  {
    id: 'sidney',
    name: 'Sidney',
    category: 'elite-four',
    title: 'Elite Four',
    location: 'Ever Grande City',
    speciality: 'dark',
    teams: [{
      label: 'Elite Four Battle',
      pokemon: [
        { id: 262, name: 'mightyena', level: 46, types: ['dark'], moves: ['Roar', 'Double-Edge', 'Sand Attack', 'Crunch'] },
        { id: 332, name: 'cacturne', level: 46, types: ['grass', 'dark'], moves: ['Leech Seed', 'Faint Attack', 'Needle Arm', 'Cotton Spore'] },
        { id: 275, name: 'shiftry', level: 48, types: ['grass', 'dark'], moves: ['Torment', 'Double Team', 'Swagger', 'Extrasensory'] },
        { id: 319, name: 'sharpedo', level: 48, types: ['water', 'dark'], moves: ['Crunch', 'Surf', 'Swagger', 'Slash'] },
        { id: 359, name: 'absol', level: 49, types: ['dark'], moves: ['Aerial Ace', 'Rock Slide', 'Swords Dance', 'Slash'] },
      ]
    }]
  },
  {
    id: 'phoebe',
    name: 'Phoebe',
    category: 'elite-four',
    title: 'Elite Four',
    location: 'Ever Grande City',
    speciality: 'ghost',
    teams: [{
      label: 'Elite Four Battle',
      pokemon: [
        { id: 356, name: 'dusclops', level: 48, types: ['ghost'], moves: ['Shadow Punch', 'Confuse Ray', 'Curse', 'Protect'] },
        { id: 354, name: 'banette', level: 49, types: ['ghost'], moves: ['Shadow Ball', 'Grudge', 'Will-O-Wisp', 'Faint Attack'] },
        { id: 302, name: 'sableye', level: 50, types: ['dark', 'ghost'], moves: ['Shadow Ball', 'Faint Attack', 'Double Team', 'Night Shade'] },
        { id: 354, name: 'banette', level: 49, types: ['ghost'], moves: ['Shadow Ball', 'Psychic', 'Thunderbolt', 'Facade'] },
        { id: 356, name: 'dusclops', level: 51, types: ['ghost'], moves: ['Shadow Ball', 'Ice Beam', 'Rock Slide', 'Earthquake'] },
      ]
    }]
  },
  {
    id: 'glacia',
    name: 'Glacia',
    category: 'elite-four',
    title: 'Elite Four',
    location: 'Ever Grande City',
    speciality: 'ice',
    teams: [{
      label: 'Elite Four Battle',
      pokemon: [
        { id: 362, name: 'glalie', level: 50, types: ['ice'], moves: ['Light Screen', 'Crunch', 'Icy Wind', 'Ice Beam'] },
        { id: 364, name: 'sealeo', level: 50, types: ['ice', 'water'], moves: ['Encore', 'Body Slam', 'Hail', 'Ice Ball'] },
        { id: 364, name: 'sealeo', level: 52, types: ['ice', 'water'], moves: ['Attract', 'Double-Edge', 'Hail', 'Blizzard'] },
        { id: 362, name: 'glalie', level: 52, types: ['ice'], moves: ['Light Screen', 'Crunch', 'Hail', 'Ice Beam'] },
        { id: 365, name: 'walrein', level: 53, types: ['ice', 'water'], moves: ['Surf', 'Body Slam', 'Ice Beam', 'Sheer Cold'] },
      ]
    }]
  },
  {
    id: 'drake',
    name: 'Drake',
    category: 'elite-four',
    title: 'Elite Four',
    location: 'Ever Grande City',
    speciality: 'dragon',
    teams: [{
      label: 'Elite Four Battle',
      pokemon: [
        { id: 371, name: 'bagon', level: 52, types: ['dragon'], moves: ['Dragon Claw', 'Headbutt', 'Brick Break', 'Flamethrower'] },
        { id: 330, name: 'flygon', level: 53, types: ['ground', 'dragon'], moves: ['Fly', 'Crunch', 'Dragon Breath', 'Flamethrower'] },
        { id: 330, name: 'flygon', level: 53, types: ['ground', 'dragon'], moves: ['Fly', 'Crunch', 'Dragon Breath', 'Flamethrower'] },
        { id: 334, name: 'altaria', level: 54, types: ['dragon', 'flying'], moves: ['Aerial Ace', 'Dragon Dance', 'Dragon Breath', 'Refresh'] },
        { id: 373, name: 'salamence', level: 55, types: ['dragon', 'flying'], moves: ['Flamethrower', 'Dragon Claw', 'Rock Slide', 'Crunch'] },
      ]
    }]
  },

  // ============================================================
  // CHAMPION
  // ============================================================
  {
    id: 'steven',
    name: 'Steven',
    category: 'champion',
    title: 'Champion',
    location: 'Ever Grande City',
    speciality: 'steel',
    teams: [{
      label: 'Champion Battle',
      pokemon: [
        { id: 227, name: 'skarmory', level: 57, types: ['steel', 'flying'], moves: ['Toxic', 'Aerial Ace', 'Spikes', 'Steel Wing'] },
        { id: 346, name: 'cradily', level: 56, types: ['rock', 'grass'], moves: ['Giga Drain', 'Ancient Power', 'Sludge Bomb', 'Confuse Ray'] },
        { id: 344, name: 'claydol', level: 55, types: ['ground', 'psychic'], moves: ['Earthquake', 'Ancient Power', 'Psychic', 'Light Screen'] },
        { id: 348, name: 'armaldo', level: 56, types: ['rock', 'bug'], moves: ['Water Pulse', 'Ancient Power', 'Aerial Ace', 'Slash'] },
        { id: 306, name: 'aggron', level: 56, types: ['steel', 'rock'], moves: ['Thunder', 'Earthquake', 'Solar Beam', 'Dragon Claw'] },
        { id: 376, name: 'metagross', level: 58, types: ['steel', 'psychic'], moves: ['Earthquake', 'Psychic', 'Meteor Mash', 'Shadow Ball'] },
      ]
    }]
  },

  // ============================================================
  // RIVAL BATTLES
  // ============================================================
  {
    id: 'rival-1',
    name: 'May / Brendan',
    category: 'rival',
    title: 'Rival',
    location: 'Route 103',
    teams: [
      {
        label: 'If player chose Treecko',
        pokemon: [
          { id: 255, name: 'torchic', level: 5, types: ['fire'], moves: ['Scratch', 'Growl'] },
        ]
      },
      {
        label: 'If player chose Torchic',
        pokemon: [
          { id: 258, name: 'mudkip', level: 5, types: ['water'], moves: ['Tackle', 'Growl'] },
        ]
      },
      {
        label: 'If player chose Mudkip',
        pokemon: [
          { id: 252, name: 'treecko', level: 5, types: ['grass'], moves: ['Pound', 'Leer'] },
        ]
      },
    ]
  },
  {
    id: 'rival-2',
    name: 'May / Brendan',
    category: 'rival',
    title: 'Rival',
    location: 'Route 110',
    teams: [
      {
        label: 'If player chose Treecko',
        pokemon: [
          { id: 218, name: 'slugma', level: 18, types: ['fire'], moves: ['Smog', 'Ember', 'Rock Throw', 'Harden'] },
          { id: 278, name: 'wingull', level: 18, types: ['water', 'flying'], moves: ['Wing Attack', 'Water Gun', 'Supersonic', 'Growl'] },
          { id: 256, name: 'combusken', level: 20, types: ['fire', 'fighting'], moves: ['Peck', 'Double Kick', 'Ember', 'Sand Attack'] },
        ]
      },
      {
        label: 'If player chose Torchic',
        pokemon: [
          { id: 280, name: 'ralts', level: 18, types: ['psychic'], moves: ['Confusion', 'Double Team', 'Growl', 'Teleport'] },
          { id: 218, name: 'slugma', level: 18, types: ['fire'], moves: ['Smog', 'Ember', 'Rock Throw', 'Harden'] },
          { id: 259, name: 'marshtomp', level: 20, types: ['water', 'ground'], moves: ['Water Gun', 'Mud Shot', 'Bide', 'Tackle'] },
        ]
      },
      {
        label: 'If player chose Mudkip',
        pokemon: [
          { id: 278, name: 'wingull', level: 18, types: ['water', 'flying'], moves: ['Wing Attack', 'Water Gun', 'Supersonic', 'Growl'] },
          { id: 280, name: 'ralts', level: 18, types: ['psychic'], moves: ['Confusion', 'Double Team', 'Growl', 'Teleport'] },
          { id: 253, name: 'grovyle', level: 20, types: ['grass'], moves: ['Absorb', 'Quick Attack', 'Fury Cutter', 'Pursuit'] },
        ]
      },
    ]
  },
  {
    id: 'rival-3',
    name: 'May / Brendan',
    category: 'rival',
    title: 'Rival',
    location: 'Route 119',
    teams: [
      {
        label: 'If player chose Treecko',
        pokemon: [
          { id: 218, name: 'slugma', level: 29, types: ['fire'], moves: ['Flamethrower', 'Smog', 'Light Screen', 'Rock Slide'] },
          { id: 279, name: 'pelipper', level: 29, types: ['water', 'flying'], moves: ['Wing Attack', 'Water Gun', 'Protect', 'Supersonic'] },
          { id: 256, name: 'combusken', level: 31, types: ['fire', 'fighting'], moves: ['Double Kick', 'Peck', 'Bulk Up', 'Ember'] },
        ]
      },
      {
        label: 'If player chose Torchic',
        pokemon: [
          { id: 280, name: 'ralts', level: 29, types: ['psychic'], moves: ['Psychic', 'Calm Mind', 'Double Team', 'Teleport'] },
          { id: 218, name: 'slugma', level: 29, types: ['fire'], moves: ['Flamethrower', 'Smog', 'Light Screen', 'Rock Slide'] },
          { id: 259, name: 'marshtomp', level: 31, types: ['water', 'ground'], moves: ['Water Gun', 'Mud Shot', 'Mud Sport', 'Take Down'] },
        ]
      },
      {
        label: 'If player chose Mudkip',
        pokemon: [
          { id: 279, name: 'pelipper', level: 29, types: ['water', 'flying'], moves: ['Wing Attack', 'Water Gun', 'Protect', 'Supersonic'] },
          { id: 280, name: 'ralts', level: 29, types: ['psychic'], moves: ['Psychic', 'Calm Mind', 'Double Team', 'Teleport'] },
          { id: 253, name: 'grovyle', level: 31, types: ['grass'], moves: ['Leaf Blade', 'Pursuit', 'Quick Attack', 'Screech'] },
        ]
      },
    ]
  },
  {
    id: 'rival-4',
    name: 'May / Brendan',
    category: 'rival',
    title: 'Rival',
    location: 'Lilycove City',
    teams: [
      {
        label: 'If player chose Treecko',
        pokemon: [
          { id: 338, name: 'solrock', level: 31, types: ['rock', 'psychic'], moves: ['Sunny Day', 'Solar Beam', 'Psychic', 'Cosmic Power'] },
          { id: 218, name: 'slugma', level: 32, types: ['fire'], moves: ['Flamethrower', 'Light Screen', 'Sunny Day', 'Rock Slide'] },
          { id: 279, name: 'pelipper', level: 32, types: ['water', 'flying'], moves: ['Surf', 'Wing Attack', 'Protect', 'Supersonic'] },
          { id: 257, name: 'blaziken', level: 34, types: ['fire', 'fighting'], moves: ['Blaze Kick', 'Double Kick', 'Peck', 'Bulk Up'] },
        ]
      },
      {
        label: 'If player chose Torchic',
        pokemon: [
          { id: 338, name: 'solrock', level: 31, types: ['rock', 'psychic'], moves: ['Sunny Day', 'Solar Beam', 'Psychic', 'Cosmic Power'] },
          { id: 282, name: 'gardevoir', level: 32, types: ['psychic'], moves: ['Psychic', 'Calm Mind', 'Double Team', 'Hypnosis'] },
          { id: 218, name: 'slugma', level: 32, types: ['fire'], moves: ['Flamethrower', 'Light Screen', 'Sunny Day', 'Rock Slide'] },
          { id: 260, name: 'swampert', level: 34, types: ['water', 'ground'], moves: ['Surf', 'Earthquake', 'Take Down', 'Mud Shot'] },
        ]
      },
      {
        label: 'If player chose Mudkip',
        pokemon: [
          { id: 338, name: 'solrock', level: 31, types: ['rock', 'psychic'], moves: ['Sunny Day', 'Solar Beam', 'Psychic', 'Cosmic Power'] },
          { id: 279, name: 'pelipper', level: 32, types: ['water', 'flying'], moves: ['Surf', 'Wing Attack', 'Protect', 'Supersonic'] },
          { id: 282, name: 'gardevoir', level: 32, types: ['psychic'], moves: ['Psychic', 'Calm Mind', 'Double Team', 'Hypnosis'] },
          { id: 254, name: 'sceptile', level: 34, types: ['grass'], moves: ['Leaf Blade', 'Pursuit', 'Screech', 'Giga Drain'] },
        ]
      },
    ]
  },

  // ============================================================
  // EVIL TEAM BOSSES
  // ============================================================
  {
    id: 'maxie',
    name: 'Maxie',
    category: 'boss',
    title: 'Team Magma Leader',
    teams: [
      {
        label: 'Mt. Chimney',
        location: 'Mt. Chimney',
        pokemon: [
          { id: 262, name: 'mightyena', level: 24, types: ['dark'], moves: ['Bite', 'Roar', 'Sand Attack', 'Swagger'] },
          { id: 323, name: 'camerupt', level: 25, types: ['fire', 'ground'], moves: ['Ember', 'Magnitude', 'Focus Energy', 'Take Down'] },
          { id: 41, name: 'zubat', level: 24, types: ['poison', 'flying'], moves: ['Bite', 'Astonish', 'Confuse Ray', 'Wing Attack'] },
        ]
      },
      {
        label: 'Magma Hideout',
        location: 'Magma Hideout',
        pokemon: [
          { id: 262, name: 'mightyena', level: 37, types: ['dark'], moves: ['Crunch', 'Scary Face', 'Swagger', 'Take Down'] },
          { id: 42, name: 'golbat', level: 38, types: ['poison', 'flying'], moves: ['Bite', 'Confuse Ray', 'Air Cutter', 'Mean Look'] },
          { id: 323, name: 'camerupt', level: 39, types: ['fire', 'ground'], moves: ['Earthquake', 'Eruption', 'Rock Slide', 'Take Down'] },
        ]
      },
    ]
  },
  {
    id: 'archie',
    name: 'Archie',
    category: 'boss',
    title: 'Team Aqua Leader',
    teams: [
      {
        label: 'Seafloor Cavern',
        location: 'Seafloor Cavern',
        pokemon: [
          { id: 262, name: 'mightyena', level: 41, types: ['dark'], moves: ['Crunch', 'Scary Face', 'Swagger', 'Take Down'] },
          { id: 42, name: 'golbat', level: 41, types: ['poison', 'flying'], moves: ['Bite', 'Confuse Ray', 'Air Cutter', 'Mean Look'] },
          { id: 319, name: 'sharpedo', level: 43, types: ['water', 'dark'], moves: ['Crunch', 'Surf', 'Slash', 'Swagger'] },
        ]
      },
    ]
  },
];
