import {combineReducers} from 'redux';

import login from './login.reducer';


const reducers = {
  login,
}


export default combineReducers({
  ...reducers
});