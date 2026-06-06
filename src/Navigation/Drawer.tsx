import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyBottomTabs } from './BottomTabNavigator';

import MarketIcon from '../../assets/svg/market.svg';
import SellItem from '../../assets/svg/SellItem.svg';
import SendPackage from '../../assets/svg/CarIcon.svg';
import Profile from '../screen/App/Profile';

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

      <Drawer.Screen
        name="Market place"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => <SellItem />,
        }}
      />
      <Drawer.Screen
        name="Sell Item"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => <SellItem />,
        }}
      />
      <Drawer.Screen
        name="Send Package "
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => <SendPackage />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;

// features/auth/
//   screens/
//     LoginScreen.tsx
//     RegisterScreen.tsx

//   hooks/
//     useLogin.ts
//     useRegister.ts

//   services/
//     authService.ts

//   types/
//     auth.types.ts
