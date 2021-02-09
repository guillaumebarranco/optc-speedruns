import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmitRecordComponent } from 'src/app/components/dialogs';
import { leaderboards } from '../leaderboards/leaderboards.component';
import {
  allCategories,
  classCategories,
  typeCategories,
} from '../sub-leaderboard/sub-leaderboard.component';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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
    private _route: ActivatedRoute,
    private _router: Router,
    private _dialog: MatDialog,
    private _firestore: AngularFirestore
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
        return scores.sort((a, b) => {
          if (a.duration < b.duration) {
            return -1;
          } else if (a.duration > b.duration) {
            return 1;
          } else {
            return 0;
          }
        });
      })
    );
  }

  public _getScores(): any {
    switch (this.category.id) {
      case 'all':
        return this._firestore
          .collection('speedruns', (ref) =>
            ref
              .where('leaderboard', '==', this.subLeaderboard.id)
              .where('validated', '==', true)
          )
          .valueChanges();
      case 'monotype':
        return this._firestore
          .collection('speedruns', (ref) =>
            ref
              .where('leaderboard', '==', this.subLeaderboard.id)
              .where('validated', '==', true)
              .where('isMonotype', '==', true)
          )
          .valueChanges();
      case 'monoclass':
        return this._firestore
          .collection('speedruns', (ref) =>
            ref
              .where('leaderboard', '==', this.subLeaderboard.id)
              .where('validated', '==', true)
              .where('isMonoclass', '==', true)
          )
          .valueChanges();
      default:
        return this._firestore
          .collection('speedruns', (ref) =>
            ref
              .where('leaderboard', '==', this.subLeaderboard.id)
              .where('validated', '==', true)
              .where('category', '==', this.category.id)
          )
          .valueChanges();
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
    const seconds = duration % 60;
    const minutes = (duration - seconds) / 60;

    return `${minutes} min ${seconds}s`;
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
          const score = {
            ...value,
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
