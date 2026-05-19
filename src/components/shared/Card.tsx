import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type CardProps = {
  children: React.ReactNode;

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

  backgroundColor?: string;
  borderRadius?: number;

  style?: StyleProp<ViewStyle>;
};

const Card = ({
  children,

  margin,
  marginTop,
  marginBottom,
  marginHorizontal,
  marginVertical,

  justifyContent,
  alignItems,

  flexDirection,
  gap,

  padding,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  paddingVertical,

  width,

  backgroundColor = '',
  borderRadius = 16,

  style,
}: CardProps) => {
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
        },

        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
