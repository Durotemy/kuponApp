import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenContainerProps {
  children: React.ReactNode;
  loading?: boolean;
  scroll?: boolean;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  barStyle?: 'light-content' | 'dark-content' | 'default';
  statusBarBg?: string;
  avoidKeyboard?: boolean;
  style?: object;

  showButton?: boolean;
  buttonLabel?: string;
  buttonPress?: () => void;
  footer?: React.ReactNode;
}

export default function ScreenContainer({
  children,
  loading = false,
  scroll = true,
  edges = ['top', 'bottom', 'left', 'right'],
  barStyle = 'dark-content',
  statusBarBg = '#FFFFFF',
  avoidKeyboard = true,
  style,
  footer,
}: ScreenContainerProps) {
  const content = scroll ? (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  ) : (
    <View style={styles.content}>{children}</View>
  );

  const screen = (
    <SafeAreaView edges={edges} style={[styles.safe, style]}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={statusBarBg}
        translucent={Platform.OS === 'android'}
      />

      <View style={styles.wrapper}>
        <View style={styles.body}>{content}</View>

        {footer && <View style={styles.buttonContainer}>{footer}</View>}

        {loading && (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" color="#6C63FF" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );

  if (!avoidKeyboard) return screen;

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {screen}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  wrapper: {
    flex: 1,
  },

  body: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 8,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 8,
    paddingBottom: 20,
  },

  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },

  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
