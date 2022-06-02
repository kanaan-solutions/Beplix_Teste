import { Reducer, Action } from 'redux';
import { 
    UserPasswordState,
    UserPasswordAction,
    PASSWORD_LOAD_FAILURE,
    PASSWORD_LOAD_REQUEST,
    PASSWORD_LOAD_SUCCESS
 } from './types';

const INITIAL_STATE: UserPasswordState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<UserPasswordState, Action> = (
  state = INITIAL_STATE,
  action: UserPasswordAction
) => {
  switch (action.type) {
    case PASSWORD_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PASSWORD_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case PASSWORD_LOAD_FAILURE:
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