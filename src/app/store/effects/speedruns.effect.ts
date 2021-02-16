import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { GetSpeedrunsSuccessAction, GET_SPEEDRUNS } from '../actions';

@Injectable()
export class SpeedrunsEffect {
  @Effect({ dispatch: true })
  public selectAllMedicalDevicesAction$ = this._actions$.pipe(
    ofType(GET_SPEEDRUNS),
    switchMap(() =>
      this._firestore
        .collection('speedruns', (ref) => ref.orderBy('created', 'desc'))
        .valueChanges()
    ),
    map((speedruns: any[]) => new GetSpeedrunsSuccessAction(speedruns))
  );

  constructor(
    private _actions$: Actions,
    private _firestore: AngularFirestore
  ) {}
}
