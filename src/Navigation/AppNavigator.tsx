import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screen/App';
import { AppStackParamList } from '../utils/AppStackParamList';
import { MyBottomTabs } from './BottomTabNavigator';

// const Stack = createNativeStackNavigator<AppStackParamList>();
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={MyBottomTabs} />
      {/* <Stack.Screen name="self" component={SelfScreen} /> */}
      {/* <Stack.Screen name="others" component={OtherssScreen} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
