// Action Types
export const USER_LOAD_REQUEST = 'USER_LOAD_REQUEST';
export const USER_LOAD_SUCCESS = 'USER_LOAD_SUCCESS';
export const USER_LOAD_FAILURE = 'USER_LOAD_FAILURE';

export interface userLoadRequestAction {
  type: typeof USER_LOAD_REQUEST;
}

interface userLoadSuccessAction {
  type: typeof USER_LOAD_SUCCESS;
  payload: string;
}

interface userLoadFailuretAction {
  type: typeof USER_LOAD_FAILURE;
}

export type UserNameAction = 
          userLoadRequestAction | 
          userLoadSuccessAction | 
          userLoadFailuretAction;

export interface IResults {
  name: string;
  url: string;
}

// Data Types
export interface IUserName {
  results: IResults[]
}

// State Type
export interface UserNameState {
  data: "";
  loading: boolean;
  error: boolean;
}