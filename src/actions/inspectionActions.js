import inspectionApi from '../api/mockInspectionApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// export function loadInspectionSuccess(inspection) {
//   return {type: types.LOAD_INSPECTION_SUCCESS, inspection};
// }

export function createInspectionSuccess(inspection) {
  return {type: types.CREATE_INSPECTION_SUCCESS, inspection};
}

export function saveInspectionResultSuccess(inspection) {
  return {type: types.SAVE_INSPECTION_RESULT_SUCCESS, inspection};
}

/* THUNKS */
// export function loadInspection() {
//   return dispatch => {
//     dispatch(beginAjaxCall());
//     return inspectionApi.getInspection().then(inspection => {
//       dispatch(loadInspectionSuccess(inspection));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// export function saveInspectionResult(inspection) {
//   return function (dispatch) {
//     "use strict";
//     dispatch(beginAjaxCall());
//     return inspectionApi.saveInspectionResult(inspection).then(savedInspection => {
//       // inspection.id ? dispatch(updateInspectionSuccess(savedInspection)) :
//         dispatch(createInspectionSuccess(savedInspection));
//     // }).catch(error => {
//     //   dispatch(ajaxCallError(error));
//     //   throw(error);
//     });
//   };
// }


export function saveInspectionResult(inspectionResult) {
  return function (dispatch) {
    "use strict";
    dispatch(beginAjaxCall());
    return inspectionApi.saveInspectionResult(inspectionResult).then(savedInspection => {
      savedInspection.idInspectionResult ?
        dispatch(updateInspectionResultSuccess(savedInspection)) :
        dispatch(createInspectionSuccess(savedInspection));
      }).catch(error => {
         dispatch(ajaxCallError(error));
         throw(error);
      });
  };
}
