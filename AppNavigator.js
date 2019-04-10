import React from 'react';
import { createStackNavigator , createAppContainer} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from './screens/auth/LoginScreen';
import SignupScreen from './screens/auth/SignupScreen';

const RootStackNavigator = createStackNavigator (
{
  Login: { screen: LoginScreen},
  Signup: { screen: SignupScreen},

  Main: { screen: MainTabNavigator}
}
);

const AppNavigator = createAppContainer(RootStackNavigator);

export default AppNavigator;