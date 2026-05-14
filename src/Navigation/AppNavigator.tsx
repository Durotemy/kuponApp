import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screen/App';
import { AppStackParamList } from '../utils/AppStackParamList';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      {/* <Stack.Screen name="self" component={SelfScreen} /> */}
      {/* <Stack.Screen name="others" component={OtherssScreen} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
