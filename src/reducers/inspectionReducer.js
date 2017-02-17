import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function inspectionReducer(state = initialState.inspection, action) {
  switch(action.type) {
    case types.LOAD_INSPECTION_SUCCESS:
      return action.inspection;

    case types.CREATE_INSPECTION_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.inspection)
      ];

    default:
      return state;
  }
}
