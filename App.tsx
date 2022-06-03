import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Routes from './src/routes/';
import store, { Persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
          <StatusBar style="light" />
        </PersistGate>
      </Provider>
    </>
);  
}