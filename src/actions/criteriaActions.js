import CriteriaApi from '../api/mockCriteriaApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCriteriaSuccess(criteria) {
  return {type: types.LOAD_CRITERIA_SUCCESS, criteria};
}

export function loadCriteria() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CriteriaApi.getAllCriteria().then(criteria => {
      dispatch(loadCriteriaSuccess(criteria));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveInspection(item) {
  return function (dispatch, getState) {
    "use strict";
    dispatch(beginAjaxCall());
    return
  }
}
