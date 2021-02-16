import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { allCategories } from 'src/app/shared/data/categories';
import { leaderboards } from 'src/app/shared/data/leaderboards';
import { getDurationFromTimestamp } from 'src/app/shared/utils/duration';
import { getSpeedrunsByCreatedDate } from 'src/app/shared/utils/operate-speedruns';
import { SpeedrunsSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public _scores$: Observable<any> = of(null);

  constructor(
    private _store: Store,
    private _speedrunsSelector: SpeedrunsSelector,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this._getLastScores();
  }

  private _getLastScores(): void {
    this._scores$ = this._store
      .select(this._speedrunsSelector.getSpeedruns)
      .pipe(
        map((speedruns: any) => {
          if (speedruns && speedruns.length > 0) {
            const validatedSpeedruns = Array.from(speedruns).filter(
              (s: any) => !!s.validated
            );
            return getSpeedrunsByCreatedDate(validatedSpeedruns, 10);
          }

          return [];
        })
      );
  }

  public _goToLeaderboards(): void {
    this._router.navigate(['leaderboards']);
  }

  public _getDurationTime(duration: number) {
    return getDurationFromTimestamp(duration);
  }

  public _getScoreLeaderboard(leaderboard: string) {
    const foundSubLeaderboard = leaderboards.find(
      (l: any) =>
        !!l.leaderboards &&
        l.leaderboards.length > 0 &&
        l.leaderboards.find((subL: any) => subL.id === leaderboard)
    );

    return foundSubLeaderboard
      ? foundSubLeaderboard.leaderboards?.find(
          (subL: any) => subL.id === leaderboard
        )?.name
      : leaderboards.find((l) => l.id === leaderboard)?.name;
  }

  public _getScoreCategory(category: string) {
    return allCategories.find((c) => c.id === category)?.name;
  }
}
