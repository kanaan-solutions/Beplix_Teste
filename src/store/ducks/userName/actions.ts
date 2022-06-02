import { USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOAD_FAILURE } from './types';

export const userLoadRequest = () => ({
  type: USER_LOAD_REQUEST,
});

export const userLoadSuccess = (data: string) => ({
  type: USER_LOAD_SUCCESS,
  payload: data,
}
);

export const userLoadFailure = () => ({
  type: USER_LOAD_FAILURE,
});