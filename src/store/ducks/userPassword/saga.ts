import { call, put } from 'redux-saga/effects';
import api from '../../../services/pokeApi';

import {  passwordLoadFailure, passwordLoadSuccess } from './actions';
import { IResults } from './types';

export function* passwordLoad(): any {
  try {
    const request = yield call(api.get, '/move');

    const response = request.data.results.map((item: IResults) => {
      return item.name
    })

    const newResponse = response.splice(13,1).toString()
    
    yield put(passwordLoadSuccess(newResponse));
  } catch (err) {
    yield put(passwordLoadFailure());
  }
}