import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './Navigation/AuthNavigator';
import AppNavigator from './Navigation/AppNavigator';
import { Text } from 'react-native';
import { AuthProvider, useAuth } from './context/authContext';

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {/* <Text>RootNavigator</Text> */}
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
