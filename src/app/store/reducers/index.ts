import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { SpeedrunsActions } from '../actions';
import { State } from '../state';

import { reducer } from './speedruns.reducer';

export const reducers: ActionReducerMap<State> = {
  speedruns: <ActionReducer<any[], SpeedrunsActions | Action>>reducer,
};
