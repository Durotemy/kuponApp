import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { black } from '../../constant/palette';

const fontWeights = {
  black: 'Cause-Black',
  extraBold: 'Cause-ExtraBold',
  bold: 'Cause-Bold',
  semiBold: 'Cause-SemiBold',
  medium: 'Cause-Medium',
  regular: 'Cause-Regular',
  light: 'Cause-Light',
  extraLight: 'Cause-ExtraLight',
  thin: 'Cause-Thin',
} as const;

const fontSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
} as const;

type textAlign = 'left' | 'right' | 'center';

export const margins = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
} as const;

type fontWeight = keyof typeof fontWeights;
type fontSize = keyof typeof fontSizes;
type marginTop = keyof typeof margins;
type marginBottom = keyof typeof margins;
type marginLeft = keyof typeof margins;

type TextProps = {
  children: React.ReactNode;
  weight?: fontWeight;
  style?: TextStyle;
  size?: fontSize;
  color?: string;
  textAlign?: textAlign;
  marginTop?: marginTop;
  marginBottom?: marginBottom;
  lineHeight?: number;
  marginLeft?: marginLeft;
};

const CustomText = ({
  children,
  weight = 'regular',
  size = 'md',
  style,
  color = black,
  textAlign = 'left',
  marginTop,
  marginBottom,
  marginLeft,
  lineHeight,

  ...props
}: TextProps) => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: fontWeights[weight],
          fontSize: fontSizes[size],
          color: color,
          textAlign: textAlign,
          marginTop: marginTop ? margins[marginTop] : undefined,
          marginBottom: marginBottom ? margins[marginBottom] : undefined,
          lineHeight: lineHeight ? lineHeight : undefined,
          marginLeft: marginLeft ? margins[marginLeft] : undefined,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default CustomText;
