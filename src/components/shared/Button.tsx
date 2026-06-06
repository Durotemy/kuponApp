import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { lightestbrown, mildbrown, white } from '../../constant/palette';

type ButtonProps = {
  label: string;
  onPress: () => void;
  isOverlay?: boolean;
  disable?: boolean;
  width?: ViewStyle['width'];
  backgroundColor?: string;
  buttonTextColor?: string;
};

const Button = ({
  label,
  onPress,
  isOverlay,
  disable = false,
  backgroundColor = mildbrown,
  buttonTextColor = white,
  width = '100%',
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        disable
          ? styles.backgroundDisable
          : isOverlay
          ? styles.overlaybackground
          : styles.background,
        { width },
        !disable && { backgroundColor },
      ]}
      onPress={onPress}
      disabled={disable}
    >
      <Text
        style={[
          isOverlay ? styles.isOverLabel : styles.label,
          { color: buttonTextColor },
          { fontWeight: 'bold' },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };

const styles = StyleSheet.create({
  background: {
    backgroundColor: mildbrown,
    borderRadius: 100,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backgroundDisable: {
    backgroundColor: lightestbrown,
    borderRadius: 100,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  overlaybackground: {
    borderColor: mildbrown,
    borderWidth: 1,
    borderRadius: 100,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    color: 'white',
    fontWeight: '400',
  },
  isOverLabel: {
    color: mildbrown,
    fontWeight: '400',
  },
});
