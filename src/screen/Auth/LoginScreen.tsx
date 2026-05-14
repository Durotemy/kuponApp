import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

import Layout from '../../components/Container';
import Logo from '../../../assets/svg/LoginImage.svg';
import { black, grey } from '../../constant/palette';
import CustomText from '../../components/shared/CustomText';
import CustomSection from '../../components/shared/CustomSession';
import { Button } from '../../components/shared/Button';

const LoginScreen = () => {
  const rotate1 = useRef(new Animated.Value(0)).current;
  const rotate2 = useRef(new Animated.Value(0)).current;
  const rotate3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = (value: Animated.Value, duration = 8000) => {
      Animated.loop(
        Animated.timing(value, {
          toValue: 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    };

    animate(rotate1);
    animate(rotate2);
    animate(rotate3);
  }, []);

  const spin1 = rotate1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spin2 = rotate2.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });

  const spin3 = rotate3.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Layout
      showButton={true}
      buttonLabel="Sign up"
      footer={
        <>
          <Button label="Login" onPress={() => {}} />

          <View style={{ height: 12 }} />

          <Button isOverlay label="Sign Up" onPress={() => {}} />
        </>
      }
    >
      <CustomSection marginTop={25} alignItems="center">
        <Logo />
      </CustomSection>

      <CustomSection marginTop={40} padding={10}>
        <CustomText
          children="Welcome to Kupon"
          color={black}
          size="xl"
          weight="bold"
          textAlign="center"
        />

        <CustomText
          marginTop={'lg'}
          textAlign="center"
          color={grey}
          lineHeight={28}
          children="Kupon redefines  logistics and revolutionize the e-commerce experience, empowering businesses and individuals with seamless connections, efficient operations, and limitless possibilities."
        />
      </CustomSection>
    </Layout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
