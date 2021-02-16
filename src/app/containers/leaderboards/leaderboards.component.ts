import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { leaderboards } from 'src/app/shared/data/leaderboards';
import { SpeedrunsSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss'],
})
export class LeaderboardsComponent implements OnInit {
  public leaderboards = leaderboards;
  public selectedCategory = 'gc';
  public scores: any = [];

  constructor(
    private _store: Store,
    private _speedrunsSelector: SpeedrunsSelector,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this._store
      .select(this._speedrunsSelector.getSpeedruns)
      .subscribe((scores) => {
        this.scores = scores;
      });
  }

  public _getLeaderboardItem(item: any) {
    if (item.leaderboards && item.leaderboards.length > 0) {
      return {
        ...item,
        count: this.scores.filter((score: any) => {
          const subLeaderboardsIds = item.leaderboards.map((a: any) => a.id);

          return subLeaderboardsIds.includes(score.leaderboard);
        }).length,
      };
    }

    return {
      ...item,
      count: this.scores.filter((score: any) => score.leaderboard === item.id)
        .length,
    };
  }

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
