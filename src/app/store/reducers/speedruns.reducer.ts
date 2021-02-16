import {
  GET_SPEEDRUNS_SUCCESS,
  SpeedrunsActions,
} from '../actions/speedruns.actions';

export const initialState: any[] = [];

export function reducer(state = initialState, action: SpeedrunsActions): any[] {
  switch (action.type) {
    case GET_SPEEDRUNS_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
}
