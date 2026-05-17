import React, { useRef, useState } from 'react';
import { View, Dimensions, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../components/Container';

import Dot from '../../../assets/svg/Dot.svg';

import { black, darkYellow, grey, smokeWhite } from '../../constant/palette';
import CustomText from '../../components/shared/CustomText';
import CustomSection from '../../components/shared/CustomSession';
import { Button } from '../../components/shared/Button';
import { section } from '../../constant/data';
import {
  AuthStackParamList,
  OnboardingItem,
} from '../../utils/AuthStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuthNavigation } from '../../hooks/useNavigationHook';

const { width } = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useAuthNavigation();
  const [trackSection, setTrackSection] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (trackSection < section.length - 1) {
      const nextIndex = trackSection + 1;
      setTrackSection(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    } else {
      navigation.navigate('CreateAccount');
    }
  };

  const renderItem = ({ item }: { item: OnboardingItem }) => (
    <View style={{ width, alignItems: 'center' }}>
      <CustomSection marginTop={85} alignItems="center">
        {item.icon}
      </CustomSection>

      <CustomSection marginTop={40} padding={10}>
        <CustomText
          children={item.title}
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
          children={item.text}
        />
      </CustomSection>
    </View>
  );

  return (
    <ScreenContainer
      showButton
      buttonLabel="Sign up"
      footer={
        <>
          <Button label="Login" onPress={() => navigation.navigate('Login')} />
          <View style={{ height: 12 }} />
          <Button
            label={trackSection === section.length - 1 ? 'Get Started' : 'Next'}
            isOverlay
            onPress={handleNext}
          />
        </>
      }
    >
      <FlatList
        data={section}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        scrollEnabled={false}
      />

      <CustomSection
        flexDirection="row"
        justifyContent="center"
        gap={4}
        padding={4}
      >
        {section.map((_, index) => (
          <Dot
            key={index}
            fill={index === trackSection ? darkYellow : smokeWhite}
            accessibilityLabel={`Step ${index + 1} of ${section.length}`}
          />
        ))}
      </CustomSection>
    </ScreenContainer>
  );
};

export default OnboardingScreen;
