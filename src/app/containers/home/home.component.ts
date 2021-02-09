import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { leaderboards } from '../leaderboards/leaderboards.component';
import { allCategories } from '../sub-leaderboard/sub-leaderboard.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public _scores$: Observable<any> = of(null);

  constructor(private _router: Router, private _firestore: AngularFirestore) {}

  public ngOnInit(): void {
    this._getLastScores();
  }

  private _getLastScores(): void {
    this._scores$ = this._firestore
      .collection('speedruns', (ref) => ref.orderBy('created').limit(5))
      .valueChanges();
  }

  public _goToLeaderboards(): void {
    this._router.navigate(['leaderboards']);
  }

  public _getDurationTime(duration: number) {
    const seconds = duration % 60;
    const minutes = (duration - seconds) / 60;

    return `${minutes}min ${seconds}s`;
  }

  public _getScoreLeaderboard(leaderboard: string) {
    const foundSubLeaderboard = leaderboards.find(
      (l) =>
        !!l.leaderboards &&
        l.leaderboards.length > 0 &&
        l.leaderboards.find((subL) => subL.id === leaderboard)
    );

    return foundSubLeaderboard
      ? foundSubLeaderboard.leaderboards.find((subL) => subL.id === leaderboard)
          ?.name
      : leaderboards.find((l) => l.id === leaderboard)?.name;
  }

  public _getScoreCategory(category: string) {
    return allCategories.find((c) => c.id === category)?.name;
  }
}
