import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { leaderboards } from 'src/app/shared/data/leaderboards';

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
