import React from 'react';
import CustomText, { margins } from './CustomText';
import { TextStyle } from 'react-native';

type margin = keyof typeof margins;

type TitleProps = {
  children: React.ReactNode;
  style?: TextStyle;

  size?: 'lg' | 'xl' | 'xxl';
  weight?: 'bold' | 'extraBold' | 'black';
  color?: string;

  textAlign?: 'left' | 'right' | 'center';
  marginTop?: 'sm' | 'md' | 'lg' | 'xl';
  marginBottom?: 'sm' | 'md' | 'lg' | 'xl';
  marginLeft?: margin;
};

const CustomTitle = ({
  children,
  size = 'xl',
  weight = 'bold',
  marginBottom = 'md',
  marginTop = 'lg',
  color,
  textAlign = 'left',
  marginLeft,
  style,
}: TitleProps) => {
  return (
    <CustomText
      size={size}
      weight={weight}
      marginBottom={marginBottom}
      marginTop={marginTop}
      color={color}
      textAlign={textAlign}
      style={style}
      marginLeft={marginLeft ? marginLeft : undefined}
    >
      {children}
    </CustomText>
  );
};

export default CustomTitle;
