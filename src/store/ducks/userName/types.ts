// Action Types
export const LOAD_REQUEST = 'LOAD_REQUEST';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

export interface loadRequestAction {
  type: typeof LOAD_REQUEST;
}

interface loadSuccessAction {
  type: typeof LOAD_SUCCESS;
  payload: string;
}

interface loadFailuretAction {
  type: typeof LOAD_FAILURE;
}

export type UserNameAction = 
          loadRequestAction | 
          loadSuccessAction | 
          loadFailuretAction;

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