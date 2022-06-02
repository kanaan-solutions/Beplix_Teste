import { call, put } from 'redux-saga/effects';
import api from '../../../services/pokeApi';

import { userLoadSuccess, userLoadFailure } from './actions';
import { IResults } from './types';

export function* userLoad(): any {
  try {
    const request = yield call(api.get, '/pokemon?limit=493&offset=0');

    const response = request.data.results.map((item: IResults) => {
      return item.name
    })

    const newResponse = response.splice(492,1).toString()
    
    yield put(userLoadSuccess(newResponse));
  } catch (err) {
    yield put(userLoadFailure());
  }
}