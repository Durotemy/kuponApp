import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { lightestbrown, mildbrown } from '../../constant/palette';

type ButtonProps = {
  label: string;
  onPress: () => void;
  isOverlay?: boolean;
  disable?: boolean;
};

const Button = ({
  label,
  onPress,
  isOverlay,
  disable = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={
        disable
          ? styles.backgroundDisable
          : isOverlay
          ? styles.overlaybackground
          : styles.background
      }
      onPress={onPress}
      disabled={disable}
    >
      <Text style={isOverlay ? styles.isOverLabel : styles.label}>{label}</Text>
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
  },
  backgroundDisable: {
    backgroundColor: lightestbrown,
    borderRadius: 100,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlaybackground: {
    borderColor: mildbrown,
    borderWidth: 1,
    borderRadius: 100,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
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
