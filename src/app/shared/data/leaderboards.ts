import { Leaderboard } from '../models/leaderboard';

const forestLeaderBoards: Leaderboard[] = [
  {
    name: `Forêt d'entraînement - Faucon`,
    id: 'hawk',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0005_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Poing ardent`,
    id: 'hiken',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0012_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Dieu`,
    id: 'god',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0016_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Soleil`,
    id: 'sun',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0019_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Barbe`,
    id: 'beard',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0008_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Faisan`,
    id: 'pheasant',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0011_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Serpent`,
    id: 'snake',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0015_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Le Roux`,
    id: 'red_hair',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0017_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Démon céleste`,
    id: 'heavenly_demon',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0020_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Room`,
    id: 'room',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0024_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Singe`,
    id: 'monkey',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0027_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Ténèbres`,
    id: 'darkness',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0034_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Gang`,
    id: 'gang',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0040_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Mamma`,
    id: 'mamma',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0041_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Poupées de paille`,
    id: 'straw',
    category: 'forest',
    icon: 'assets/icons/forests/ship_0049_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Magnétique`,
    id: 'magnetic',
    category: 'forest',
    icon: 'assets/icons/forests/O2XNkW6.png',
    leaderboards: [],
  },
];

const gcLeaderboards: Leaderboard[] = [
  {
    name: 'Garp Challenge - Doflamingo',
    id: 'doffy',
    category: 'gc',
    icon: 'assets/icons/characters/f1909.png',
    leaderboards: [
      {
        name: 'Garp Challenge - Doflamingo - 1',
        id: 'doffy_1',
        icon: 'assets/icons/characters/f1909.png',
      },
      {
        name: 'Garp Challenge - Doflamingo - 2',
        id: 'doffy_2',
        icon: 'assets/icons/characters/f1910.png',
      },
    ],
  },
  {
    name: 'Garp Challenge - Revolutionnaires',
    id: 'revo',
    category: 'gc',
    icon: 'assets/icons/characters/ZhjhDY0.png',
    leaderboards: [
      {
        name: 'Garp Challenge - Revolutionnaires - 1',
        id: 'revo_1',
        icon: 'assets/icons/characters/ZhjhDY0.png',
      },
      {
        name: 'Garp Challenge - Doflamingo - 2',
        id: 'revo_2',
        icon: 'assets/icons/characters/ez8oSPA.png',
      },
    ],
  },
  {
    name: 'Garp Challenge - Barbe Blanche',
    id: 'whitebeard',
    category: 'gc',
    icon: 'assets/icons/characters/uGcinPS.png',
    leaderboards: [],
  },
  {
    name: 'Garp Challenge - Ener',
    id: 'enel',
    category: 'gc',
    icon: 'assets/icons/characters/f2232.png',
    leaderboards: [],
  },
  {
    name: 'Garp Challenge - Marine',
    id: 'marine',
    category: 'gc',
    icon: 'assets/icons/characters/f2975.png',
    leaderboards: [],
  },
];

export const leaderboards: Leaderboard[] = [
  ...gcLeaderboards,
  ...forestLeaderBoards,
];
