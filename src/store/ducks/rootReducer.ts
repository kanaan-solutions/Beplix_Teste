import { combineReducers } from 'redux';

import userName from './userName';
import userPassword from './userPassword';

export default combineReducers({
  userName,
  userPassword
});