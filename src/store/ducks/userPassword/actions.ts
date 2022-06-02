import { PASSWORD_LOAD_REQUEST, PASSWORD_LOAD_SUCCESS, PASSWORD_LOAD_FAILURE } from './types';

export const passwordLoadRequest = () => ({
  type: PASSWORD_LOAD_REQUEST,
});

export const passwordLoadSuccess = (data: string) => ({
  type: PASSWORD_LOAD_SUCCESS,
  payload: data,
}
);

export const passwordLoadFailure = () => ({
  type: PASSWORD_LOAD_FAILURE,
});