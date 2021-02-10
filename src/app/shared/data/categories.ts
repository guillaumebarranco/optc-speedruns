import { Category } from '../models/category';

export const typeCategories: Category[] = [
  {
    name: 'STR',
    id: 'str',
    icon: '/assets/icons/colors/str.png',
    size: 'small',
  },
  {
    name: 'DEX',
    id: 'dex',
    icon: '/assets/icons/colors/dex.png',
    size: 'small',
  },
  {
    name: 'QCK',
    id: 'qck',
    icon: '/assets/icons/colors/qck.png',
    size: 'small',
  },
  {
    name: 'PSY',
    id: 'psy',
    icon: '/assets/icons/colors/psy.png',
    size: 'small',
  },
  {
    name: 'INT',
    id: 'int',
    icon: '/assets/icons/colors/int.png',
    size: 'small',
  },
];

export const classCategories: Category[] = [
  {
    name: 'Sabreur',
    id: 'slasher',
    icon: '/assets/icons/classes/slasher.png',
    size: 'small',
  },
  {
    name: 'Libre',
    id: 'free_spirit',
    icon: '/assets/icons/classes/free_spirit.png',
    size: 'small',
  },
  {
    name: 'Tenace',
    id: 'powerhouse',
    icon: '/assets/icons/classes/powerhouse.png',
    size: 'small',
  },
  {
    name: 'Ambitieux',
    id: 'driven',
    icon: '/assets/icons/classes/driven.png',
    size: 'small',
  },
  {
    name: 'Tireur',
    id: 'shooter',
    icon: '/assets/icons/classes/shooter.png',
    size: 'small',
  },
  {
    name: 'Cogneur',
    id: 'fighter',
    icon: '/assets/icons/classes/fighter.png',
    size: 'small',
  },
  {
    name: 'Intellectuel',
    id: 'cerebral',
    icon: '/assets/icons/classes/cerebral.png',
    size: 'small',
  },
  {
    name: 'Ravageur',
    id: 'striker',
    icon: '/assets/icons/classes/striker.png',
    size: 'small',
  },
];

export const funCategories: Category[] = [
  {
    name: 'Waifus',
    id: 'waifus',
    icon: '/assets/icons/characters/wKSsc17.png',
    size: 'small',
  },
  {
    name: 'Marines',
    id: 'marines',
    icon: '/assets/icons/characters/0De9WWr.png',
    size: 'small',
  },
  {
    name: 'Logias',
    id: 'logias',
    icon: '/assets/icons/characters/SU2P9T4.png',
    size: 'small',
  },
];

export const categories: Category[] = [
  {
    name: 'Aucune restriction',
    id: 'all',
    icon: '',
    size: '',
  },
  {
    name: 'Mono-type',
    id: 'monotype',
    icon: '',
    size: '',
  },
  {
    name: 'Mono-classe',
    id: 'monoclass',
    icon: '',
    size: '',
  },
];

export const allCategories: Category[] = [
  ...categories,
  ...typeCategories,
  ...classCategories,
  ...funCategories,
];
