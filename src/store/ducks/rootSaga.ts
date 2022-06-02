import { all, takeLatest } from 'redux-saga/effects';

import { USER_LOAD_REQUEST } from './userName/types';
import { PASSWORD_LOAD_REQUEST } from './userPassword/types';

import { userLoad } from './userName/saga';
import { passwordLoad } from './userPassword/saga';

export default function* rootSaga(): any {
  return yield all([
    takeLatest(USER_LOAD_REQUEST, userLoad),
    takeLatest(PASSWORD_LOAD_REQUEST, passwordLoad)
  ]);
}