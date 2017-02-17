import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import inspection from './inspectionReducer';
import criteria from './criteriaReducer';

const rootReducer = combineReducers({
  inspection,
  ajaxCallsInProgress,
  criteria
});

export default rootReducer;
