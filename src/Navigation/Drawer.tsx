import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyBottomTabs } from './BottomTabNavigator';
import Profile from '../screen/App/Profile';

// extra screens you want in drawer

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={MyBottomTabs}
        options={{ title: 'Home' }}
      />

      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
