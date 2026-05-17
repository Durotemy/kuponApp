import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import RootNavigator from './src/roots';
import { AuthProvider } from './src/context/authContext';

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function bootstrap() {
      try {
        // await Font.loadAsync({ ... });
        // await restoreAuthToken();
      } catch (e) {
        console.warn('[Bootstrap]', e);
      } finally {
        // setIsReady(true);
        // SplashScreen.hide(); // ← hide splash when ready
      }
    }
    bootstrap();
  }, []);

  // if (!isReady) return null;

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <AuthProvider>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#FFFFFF"
            translucent={false}
          />
          <RootNavigator />
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
