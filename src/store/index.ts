import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { UserNameState } from './ducks/userName/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { UserPasswordState } from './ducks/userPassword/types';

export interface ApplicationState {
  userName: UserNameState;
  userPassword: UserPasswordState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;