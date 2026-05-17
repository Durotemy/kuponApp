import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screen/App/Dashboard';
import Settings from '../screen/App/Settings';

const Tab = createBottomTabNavigator();

export const MyBottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Setting" component={Settings} />
    </Tab.Navigator>
  );
};
