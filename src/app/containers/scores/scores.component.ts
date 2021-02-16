import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { leaderboards } from 'src/app/shared/data/leaderboards';
import {
  allCategories,
  typeCategories,
  classCategories,
} from 'src/app/shared/data/categories';
import { SubmitRecordComponent } from 'src/app/shared/components/dialogs';
import { getDurationFromTimestamp } from 'src/app/shared/utils/duration';
import { Store } from '@ngrx/store';
import { SpeedrunsSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss'],
})
export class ScoresComponent implements OnInit {
  public leaderboard: any = null;
  public subLeaderboard: any = null;
  public category: any = null;

  public _scores$: Observable<any> = of(null);
  private _scoresCollection: AngularFirestoreCollection<any>;
  public _isAdminAuthenticated = false;

  constructor(
    private _store: Store,
    private _speedrunsSelector: SpeedrunsSelector,
    private _firestore: AngularFirestore,
    private _route: ActivatedRoute,
    private _router: Router,
    private _dialog: MatDialog
  ) {
    this._scoresCollection = _firestore.collection<any>('speedruns');
  }

  public ngOnInit(): void {
    const params: any = this._route.params;

    this.leaderboard = leaderboards.find(
      (l) => l.id === params._value.leaderboard
    );

    this.subLeaderboard =
      this.leaderboard.leaderboards.length > 1
        ? this.leaderboard.leaderboards.find(
            (l: any) => l.id === params._value.sub_leaderboard
          )
        : this.leaderboard;

    this.category = allCategories.find(
      (l: any) => l.id === params._value.category
    );

    this._checkIfAdminIsLogged();

    this._scores$ = this._getScores().pipe(
      map((scores: any[]) => {
        return Array.from(scores)
          .sort((a, b) => {
            if (a.duration < b.duration) {
              return -1;
            } else if (a.duration > b.duration) {
              return 1;
            } else {
              return 0;
            }
          })
          .slice(0, 10);
      })
    );
  }

  public _getScores(): any {
    const scores$ = this._store.select(this._speedrunsSelector.getSpeedruns);

    switch (this.category.id) {
      case 'all':
        return scores$.pipe(
          map((scores: any) =>
            Array.from(scores).filter(
              (s: any) =>
                !!s.validated && s.leaderboard === this.subLeaderboard.id
            )
          )
        );

      case 'monotype':
        return scores$.pipe(
          map((scores: any) =>
            Array.from(scores).filter(
              (s: any) =>
                !!s.validated &&
                s.leaderboard === this.subLeaderboard.id &&
                !!s.isMonotype
            )
          )
        );

      case 'monoclass':
        return scores$.pipe(
          map((scores: any) =>
            Array.from(scores).filter(
              (s: any) =>
                !!s.validated &&
                s.leaderboard === this.subLeaderboard.id &&
                !!s.isMonoclass
            )
          )
        );
      default:
        return scores$.pipe(
          map((scores: any) =>
            Array.from(scores).filter(
              (s: any) =>
                !!s.validated &&
                s.leaderboard === this.subLeaderboard.id &&
                s.category === this.category.id
            )
          )
        );
    }
  }

  public _checkIfAdminIsLogged() {
    this._firestore
      .collection('users')
      .valueChanges()
      .subscribe((users) => {
        users.forEach((user: any) => {
          if (localStorage.getItem('optcWorldRecordsAdminCode') === user.code) {
            this._isAdminAuthenticated = true;
          }
        });
      });
  }

  public _getDurationTime(duration: number) {
    return getDurationFromTimestamp(duration);
  }

  public _previousPage(): void {
    const params: any = this._route.params;

    const url = `/leaderboards/${params._value.leaderboard}/${params._value.sub_leaderboard}`;
    this._router.navigate([url]);
  }

  public _submitRecord(): void {
    this._dialog
      .open(SubmitRecordComponent)
      .afterClosed()
      .subscribe((value) => {
        if (value && value.duration) {
          const splitDuration = value.duration.split(':');

          const duration =
            Number(splitDuration[0]) * 60 + Number(splitDuration[1]);

          const score = {
            ...value,
            duration,
            leaderboard: this.subLeaderboard.id,
            category: this.category.id,
            isMonotype:
              !!typeCategories.find((cat) => cat.id === this.category.id) ||
              this.category.id === 'monotype',
            isMonoclass:
              !!classCategories.find((cat) => cat.id === this.category.id) ||
              this.category.id === 'monoclass',
            validated: this._isAdminAuthenticated,
            removed: false,
            created: Date.now() / 1000,
          };

          this._scoresCollection.add(score);
        }
      });
  }
}
