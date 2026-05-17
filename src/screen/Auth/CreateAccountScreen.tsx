import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from '../../components/shared/CustomText';
import CustomTitle from '../../components/shared/CustomTitle';
import CustomSection from '../../components/shared/CustomSession';
import ScreenContainer from '../../components/Container';
import TransferInput from '../../components/TransferInput';
import { Button } from '../../components/shared/Button';
import { mildbrown } from '../../constant/palette';

import { useOnboardingHoook } from '../../hooks/useOnboardingHook';
import { useAuthNavigation } from '../../hooks/useNavigationHook';

const CreateAccountScreen = () => {
  const {
    blurred,
    error,
    formData,
    handleBlurred,
    handleChange,
    setFormData,
    validateForm,
    value,
  } = useOnboardingHoook();

  const navigation = useAuthNavigation();

  const handleSubmit = () => {
    validateForm();
  };
  return (
    <ScreenContainer>
      <CustomSection padding={10}>
        <CustomTitle children="Create Account" />

        <TransferInput
          label="Full Name"
          blurred={() => handleBlurred('fullName')}
          onChangeText={value => handleChange('fullName', value)}
          value={formData.fullName}
          error={error.fullName}
        />

        <TransferInput
          label="Email"
          blurred={() => handleBlurred('emailAddress')}
          onChangeText={value => handleChange('emailAddress', value)}
          value={formData.emailAddress}
          error={error.emailAddress}
        />

        <TransferInput
          label={'Phone numner'}
          blurred={() => handleBlurred('phoneNumber')}
          onChangeText={value => handleChange('phoneNumber', value)}
          value={formData.phoneNumber}
          error={error.phoneNumber}
        />

        <TransferInput
          label="Password"
          blurred={() => handleBlurred('password')}
          onChangeText={value => handleChange('password', value)}
          value={formData.password}
          error={error.password}
        />

        <TransferInput
          label="Confirm Password"
          blurred={() => handleBlurred('confirmPassword')}
          onChangeText={value => handleChange('confirmPassword', value)}
          value={formData.confirmPassword}
          error={error.confirmPassword}
        />

        <CustomSection marginTop={40}>
          <Button label="Continue" onPress={handleSubmit} />
          <CustomSection
            marginTop={40}
            flexDirection="row"
            gap={8}
            justifyContent="center"
          >
            <CustomText>Already have an account?</CustomText>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <CustomText color={mildbrown}>Sign In</CustomText>
            </TouchableOpacity>
          </CustomSection>
        </CustomSection>
      </CustomSection>
    </ScreenContainer>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({});
