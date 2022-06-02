import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import UserDashboard from '../pages/UserDashboard';
import NegotiationPage from '../pages/NegotiationPage';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
    return(
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen name="UserDashboard" component={UserDashboard} />
            <AppStack.Screen name="NegotiationPage" component={NegotiationPage} />
        </AppStack.Navigator>
    )
}

export default Routes; 