import { Injectable } from '@angular/core';

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FEATURE_NAME } from '../feature-name';
import { State } from '../state';

@Injectable()
export class SpeedrunsSelector {
  private _getState = createFeatureSelector<State>(FEATURE_NAME);

  public getSpeedruns = createSelector(this._getState, (state) => {
    return state;
  });
}
