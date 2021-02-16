import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { leaderboards } from 'src/app/shared/data/leaderboards';
import { SpeedrunsSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  public data: any;
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

    this._store
      .select(this._speedrunsSelector.getSpeedruns)
      .subscribe((scores) => {
        this.scores = scores;
      });
  }

  public _onOpenLeaderboard(leaderboardItem: any): void {
    this._router.navigate([
      `/leaderboards/${this.data.id}/${leaderboardItem.id}`,
    ]);
  }

  public _getLeaderboardItem(item: any) {
    return {
      ...item,
      count: this.scores.filter((score: any) => score.leaderboard === item.id)
        .length,
    };
  }

  public _previousPage(): void {
    this._router.navigate([`/leaderboards/`]);
  }
}
