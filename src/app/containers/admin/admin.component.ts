import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public _scores$: Observable<any> = of(null);

  constructor(private _router: Router, private _firestore: AngularFirestore) {}

  public ngOnInit(): void {
    this._checkIfAdminIsLogged();

    this._scores$ = this._getScores();

    this._scores$.subscribe((a) => console.log(a));
  }

  public _checkIfAdminIsLogged() {
    this._firestore
      .collection('users')
      .valueChanges()
      .subscribe((users) => {
        let isAdminAuthenticated = false;

        users.forEach((user: any) => {
          if (localStorage.getItem('optcWorldRecordsAdminCode') === user.code) {
            isAdminAuthenticated = true;
          }
        });

        if (!isAdminAuthenticated) {
          this._router.navigate(['/home']);
        }
      });
  }

  public _getDurationTime(duration: number) {
    const seconds = duration % 60;
    const minutes = (duration - seconds) / 60;

    return `${minutes} min ${seconds}s`;
  }

  public _getScores(): any {
    return this._firestore
      .collection('speedruns', (ref) =>
        ref.where('validated', '==', false).where('removed', '==', false)
      )
      .valueChanges({ idField: '$id' });
  }

  public _validateScore(score: any): void {
    const id = score.$id;
    delete score.$id;

    this._firestore.doc(`speedruns/${id}`).update({
      ...score,
      validated: true,
    });
  }

  public _removeScore(score: any): void {
    const id = score.$id;
    delete score.$id;

    this._firestore.doc(`speedruns/${id}`).update({
      ...score,
      removed: true,
    });
  }
}
