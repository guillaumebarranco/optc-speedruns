import { Component } from '@angular/core';
import { Router } from '@angular/router';

const forestLeaderBoards = [
  {
    name: `Forêt d'entraînement - Faucon`,
    id: 'hawk',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0005_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Poing ardent`,
    id: 'hiken',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0012_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Dieu`,
    id: 'god',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0016_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Soleil`,
    id: 'sun',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0019_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Barbe`,
    id: 'beard',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0008_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Faisan`,
    id: 'pheasant',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0011_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Serpent`,
    id: 'snake',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0015_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Le Roux`,
    id: 'red_hair',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0017_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Démon céleste`,
    id: 'heavenly_demon',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0020_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Room`,
    id: 'room',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0024_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Singe`,
    id: 'monkey',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0027_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Ténèbres`,
    id: 'darkness',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0034_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Gang`,
    id: 'gang',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0040_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Mamma`,
    id: 'mamma',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0041_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Poupées de paille`,
    id: 'straw',
    category: 'forest',
    icon: 'https://optcreddit.github.io/ships/img/icon/ship_0049_t2.png',
    leaderboards: [],
  },
  {
    name: `Forêt d'entraînement - Magnétique`,
    id: 'magnetic',
    category: 'forest',
    icon: 'https://i.imgur.com/O2XNkW6.png',
    leaderboards: [],
  },
];

const gcLeaderboards = [
  {
    name: 'Garp Challenge - Doflamingo',
    id: 'doffy',
    category: 'gc',
    icon:
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f1909.png',
    leaderboards: [
      {
        name: 'Garp Challenge - Doflamingo - 1',
        id: 'doffy_1',
        icon:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f1909.png',
      },
      {
        name: 'Garp Challenge - Doflamingo - 2',
        id: 'doffy_2',
        icon:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f1910.png',
      },
    ],
  },
  {
    name: 'Garp Challenge - Revolutionnaires',
    id: 'revo',
    category: 'gc',
    icon: 'https://i.imgur.com/ZhjhDY0.png',
    leaderboards: [
      {
        name: 'Garp Challenge - Revolutionnaires - 1',
        id: 'revo_1',
        icon: 'https://i.imgur.com/ZhjhDY0.png',
      },
      {
        name: 'Garp Challenge - Doflamingo - 2',
        id: 'revo_2',
        icon: 'https://i.imgur.com/ez8oSPA.png',
      },
    ],
  },
  {
    name: 'Garp Challenge - Barbe Blanche',
    id: 'whitebeard',
    category: 'gc',
    icon: 'https://i.imgur.com/uGcinPS.png',
    leaderboards: [],
  },
  {
    name: 'Garp Challenge - Ener',
    id: 'enel',
    category: 'gc',
    icon:
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f2232.png',
    leaderboards: [],
  },
  {
    name: 'Garp Challenge - Marine',
    id: 'marine',
    category: 'gc',
    icon:
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f2975.png',
    leaderboards: [],
  },
];

export const leaderboards = [...gcLeaderboards, ...forestLeaderBoards];

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss'],
})
export class LeaderboardsComponent {
  public leaderboards = leaderboards;

  public selectedCategory = 'gc';

  constructor(private _router: Router) {}

  public _onOpenLeaderboard(leaderboard: any, leaderboardItem: any): void {
    if (leaderboard.leaderboards && leaderboard.leaderboards.length > 1) {
      this._router.navigate([`/leaderboards/${leaderboardItem.id}`]);
    } else {
      this._router.navigate([
        `/leaderboards/${leaderboardItem.id}/${leaderboardItem.id}`,
      ]);
    }
  }
}
