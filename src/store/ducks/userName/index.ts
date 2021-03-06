import { Reducer, Action } from 'redux';
import { 
    UserNameState, 
    UserNameAction, 
    USER_LOAD_REQUEST, 
    USER_LOAD_SUCCESS, 
    USER_LOAD_FAILURE } from './types';

const INITIAL_STATE: UserNameState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<UserNameState, Action> = (
  state = INITIAL_STATE,
  action: UserNameAction
) => {
  switch (action.type) {
    case USER_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case USER_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };
    default:
      return state;
  }
};

export default reducer;