// Action Types
export const PASSWORD_LOAD_REQUEST = 'PASSWORD_LOAD_REQUEST';
export const PASSWORD_LOAD_SUCCESS = 'PASSWORD_LOAD_SUCCESS';
export const PASSWORD_LOAD_FAILURE = 'PASSWORD_LOAD_FAILURE';

export interface passwordLoadRequestAction {
  type: typeof PASSWORD_LOAD_REQUEST;
}

interface passwordLoadSuccessAction {
  type: typeof PASSWORD_LOAD_SUCCESS;
  payload: string;
}

interface passwordLoadFailuretAction {
  type: typeof PASSWORD_LOAD_FAILURE;
}

export type UserPasswordAction = 
          passwordLoadRequestAction | 
          passwordLoadSuccessAction | 
          passwordLoadFailuretAction;

export interface IResults {
  name: string;
  url: string;
}

// Data Types
export interface IUserPassword {
  results: IResults[]
}

// State Type
export interface UserPasswordState {
  data: "";
  loading: boolean;
  error: boolean;
}