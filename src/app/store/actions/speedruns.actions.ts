import { Action } from '@ngrx/store';

export const GET_SPEEDRUNS = '[SPEEDRUNS] Get Speedruns';
export const GET_SPEEDRUNS_SUCCESS = '[SPEEDRUNS] Get Speedruns Success';

export class GetSpeedrunsAction implements Action {
  public readonly type = GET_SPEEDRUNS;
}

export class GetSpeedrunsSuccessAction implements Action {
  public readonly type = GET_SPEEDRUNS_SUCCESS;
  constructor(public payload: any[]) {}
}

export type SpeedrunsActions = GetSpeedrunsAction | GetSpeedrunsSuccessAction;
