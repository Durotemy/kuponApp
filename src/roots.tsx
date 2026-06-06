import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './Navigation/AuthNavigator';
import AppNavigator from './Navigation/AppNavigator';
import { Text } from 'react-native';
import { AuthProvider, useAuth } from './context/authContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { user } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* <Text>RootNavigator</Text> */}
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </QueryClientProvider>
  );
}
