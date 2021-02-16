import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  categories,
  typeCategories,
  classCategories,
  funCategories,
} from 'src/app/shared/data/categories';
import { leaderboards } from 'src/app/shared/data/leaderboards';
import { SpeedrunsSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-sub-leaderboard',
  templateUrl: './sub-leaderboard.component.html',
  styleUrls: ['./sub-leaderboard.component.scss'],
})
export class SubLeaderboardComponent implements OnInit {
  public subLeaderboardsCategories = categories;
  public subLeaderboardsTypeCategories = typeCategories;
  public subLeaderboardsClassCategories = classCategories;
  public subLeaderboardsFunCategories = funCategories;

  public subLeaderboard = '';
  public data: any = null;
  public scores: any = [];

  constructor(
    private _store: Store,
    private _speedrunsSelector: SpeedrunsSelector,
    public _route: ActivatedRoute,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    const params: any = this._route.params;
    this.data = leaderboards.find((l) => l.id === params._value.leaderboard);
    this.subLeaderboard = params._value.sub_leaderboard;

    this._store
      .select(this._speedrunsSelector.getSpeedruns)
      .subscribe((scores) => {
        this.scores = scores;
      });
  }

  public _onOpenLeaderboard(leaderboardItem: any): void {
    this._router.navigate([
      `/leaderboards/${this.data.id}/${this.subLeaderboard}/${leaderboardItem.id}`,
    ]);
  }

  public _getLeaderboardItem(item: any) {
    if (item.id === 'all') {
      return {
        ...item,
        count: this.scores.filter(
          (score: any) => score.leaderboard === this.subLeaderboard
        ).length,
      };
    } else if (item.id === 'monotype') {
      return {
        ...item,
        count: this.scores.filter(
          (score: any) =>
            score.leaderboard === this.subLeaderboard && !!score.isMonotype
        ).length,
      };
    } else if (item.id === 'monoclass') {
      return {
        ...item,
        count: this.scores.filter(
          (score: any) =>
            score.leaderboard === this.subLeaderboard && !!score.isMonoclass
        ).length,
      };
    } else {
      return {
        ...item,
        count: this.scores.filter(
          (score: any) =>
            score.leaderboard === this.subLeaderboard &&
            score.category === item.id
        ).length,
      };
    }
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
