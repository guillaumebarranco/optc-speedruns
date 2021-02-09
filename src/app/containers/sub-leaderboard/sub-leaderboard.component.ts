import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { leaderboards } from '../leaderboards/leaderboards.component';

export const typeCategories = [
  {
    name: 'STR',
    id: 'str',
    icon: '/assets/icons/str.png',
    size: 'small',
  },
  {
    name: 'DEX',
    id: 'dex',
    icon: '/assets/icons/dex.png',
    size: 'small',
  },
  {
    name: 'QCK',
    id: 'qck',
    icon: '/assets/icons/qck.png',
    size: 'small',
  },
  {
    name: 'PSY',
    id: 'psy',
    icon: '/assets/icons/psy.png',
    size: 'small',
  },
  {
    name: 'INT',
    id: 'int',
    icon: '/assets/icons/int.png',
    size: 'small',
  },
];

export const classCategories = [
  {
    name: 'Sabreur',
    id: 'slasher',
    icon: '/assets/icons/slasher.png',
    size: 'small',
  },
  {
    name: 'Libre',
    id: 'free_spirit',
    icon: '/assets/icons/free_spirit.png',
    size: 'small',
  },
  {
    name: 'Tenace',
    id: 'powerhouse',
    icon: '/assets/icons/powerhouse.png',
    size: 'small',
  },
  {
    name: 'Ambitieux',
    id: 'driven',
    icon: '/assets/icons/driven.png',
    size: 'small',
  },
  {
    name: 'Tireur',
    id: 'shooter',
    icon: '/assets/icons/shooter.png',
    size: 'small',
  },
  {
    name: 'Cogneur',
    id: 'fighter',
    icon: '/assets/icons/fighter.png',
    size: 'small',
  },
  {
    name: 'Intellectuel',
    id: 'cerebral',
    icon: '/assets/icons/cerebral.png',
    size: 'small',
  },
  {
    name: 'Ravageur',
    id: 'striker',
    icon: '/assets/icons/striker.png',
    size: 'small',
  },
];

export const categories = [
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

export const allCategories = [
  ...categories,
  ...typeCategories,
  ...classCategories,
];

@Component({
  selector: 'app-sub-leaderboard',
  templateUrl: './sub-leaderboard.component.html',
  styleUrls: ['./sub-leaderboard.component.scss'],
})
export class SubLeaderboardComponent implements OnInit {
  public subLeaderboardsCategories = categories;
  public subLeaderboardsTypeCategories = typeCategories;
  public subLeaderboardsClassCategories = classCategories;

  public subLeaderboard = '';
  public data: any = null;

  constructor(public _route: ActivatedRoute, private _router: Router) {}

  public ngOnInit(): void {
    const params: any = this._route.params;
    console.log('params._value', params._value);
    this.data = leaderboards.find((l) => l.id === params._value.leaderboard);
    this.subLeaderboard = params._value.sub_leaderboard;
    console.log('this.data', this.data);
  }

  public _onOpenLeaderboard(leaderboardItem: any): void {
    this._router.navigate([
      `/leaderboards/${this.data.id}/${this.subLeaderboard}/${leaderboardItem.id}`,
    ]);
  }

  public _previousPage(): void {
    const params: any = this._route.params;

    const url =
      params._value.leaderboard === params._value.sub_leaderboard
        ? `/leaderboards/`
        : `/leaderboards/${params._value.leaderboard}`;

    this._router.navigate([url]);
  }
}
