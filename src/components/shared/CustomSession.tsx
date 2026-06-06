import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type CustomSectionProps = {
  children: React.ReactNode;

  borderStyle?: 'solid' | 'dashed';
  borderWidth?: number;
  borderColor?: string;

  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  gap?: number;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';

  flexDirection?: 'row' | 'column';

  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;

  width?: ViewStyle['width'];
  height?: ViewStyle['height'];

  backgroundColor?: string;
  borderRadius?: number;

  style?: StyleProp<ViewStyle>;
};

const CustomSection = ({
  children,

  margin,
  marginTop,
  marginBottom,
  marginHorizontal,
  marginVertical,

  justifyContent,
  alignItems,
  borderStyle,
  borderColor,
  flexDirection,
  gap,

  padding,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  paddingVertical,

  width,
  height,

  backgroundColor = 'transparent',
  borderRadius = 16,
  borderWidth,

  style,
}: CustomSectionProps) => {
  return (
    <View
      style={[
        styles.container,

        {
          margin,
          marginTop,
          marginBottom,
          marginHorizontal,
          marginVertical,

          width: width,
          height: height,

          padding,
          paddingTop,
          paddingBottom,
          paddingHorizontal,
          paddingVertical,

          flexDirection,
          gap,

          justifyContent,
          alignItems,

          backgroundColor,
          borderRadius,

          borderStyle,
          borderWidth,
          borderColor,
        },

        style,
      ]}
    >
      {children}
    </View>
  );
};

export default CustomSection;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
