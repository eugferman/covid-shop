import { combineReducers } from 'redux';
import loginUserReducer from './loginUserReducer';

const allReducers = combineReducers({
  dataLoginUser: loginUserReducer,
});

export default allReducers;
