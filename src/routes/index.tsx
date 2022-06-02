import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import UserDashboard from '../pages/UserDashboard';
import NegotiationPage from '../pages/NegotiationPage';
import Transactions from '../pages/Transactions';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
	return(
		<AppStack.Navigator screenOptions={{ headerShown: false }}>
			<AppStack.Screen name="Login" component={Login} />
			<AppStack.Screen name="UserDashboard" component={UserDashboard} />
			<AppStack.Screen name="NegotiationPage" component={NegotiationPage} />
			<AppStack.Screen name="Transactions" component={Transactions} />
		</AppStack.Navigator>
	)
}

export default Routes; 