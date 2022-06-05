import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserNameState } from './ducks/userName/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { UserPasswordState } from './ducks/userPassword/types';

export interface ApplicationState {
  userName: UserNameState;
  userPassword: UserPasswordState;
}

const persistConfig = {
  key: "main-root",
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

const Persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export{Persistor};
export default store;