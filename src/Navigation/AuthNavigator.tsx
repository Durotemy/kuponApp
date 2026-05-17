import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen, CreateAccountScreen } from '../screen/Auth';
import { AuthStackParamList } from '../utils/AuthStackParamList';
import Login from '../screen/Auth/Login';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
