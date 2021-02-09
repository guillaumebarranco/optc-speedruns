import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { leaderboards } from '../leaderboards/leaderboards.component';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  public data: any;

  constructor(public _route: ActivatedRoute, private _router: Router) {}

  public ngOnInit(): void {
    const params: any = this._route.params;
    this.data = leaderboards.find((l) => l.id === params._value.leaderboard);
    console.log('this.data', this.data);
  }

  public _onOpenLeaderboard(leaderboardItem: any): void {
    this._router.navigate([
      `/leaderboards/${this.data.id}/${leaderboardItem.id}`,
    ]);
  }

  public _previousPage(): void {
    this._router.navigate([`/leaderboards/`]);
  }
}
