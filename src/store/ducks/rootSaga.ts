import { all, takeLatest } from 'redux-saga/effects';

import { LOAD_REQUEST } from './userName/types';
import { load } from './userName/saga';

export default function* rootSaga(): any {
  return yield all([
    takeLatest(LOAD_REQUEST, load)
  ]);
}