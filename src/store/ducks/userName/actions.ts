import { IUserName, LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE } from './types';

export const loadRequest = () => ({
  type: LOAD_REQUEST,
});

export const loadSuccess = (data: string) => ({
  type: LOAD_SUCCESS,
  payload: data,
}
);

export const loadFailure = () => ({
  type: LOAD_FAILURE,
});