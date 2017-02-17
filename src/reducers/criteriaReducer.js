import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function criteriaReducer(state = initialState.criteria, action) {
  switch(action.type) {
    case types.LOAD_CRITERIA_SUCCESS:
      return action.criteria;

    default:
      return state;
  }
}
