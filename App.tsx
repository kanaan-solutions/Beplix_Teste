import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/';
import PageHeader from './src/components/Header';

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <PageHeader /> */}
        <Routes />
      </NavigationContainer>
      <StatusBar style="light" />
    </>
);  
}