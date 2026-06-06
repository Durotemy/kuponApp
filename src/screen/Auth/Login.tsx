import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/Container';
import CustomTitle from '../../components/shared/CustomTitle';
import CustomSection from '../../components/shared/CustomSession';
import TransferInput from '../../components/TransferInput';
import { Button } from '../../components/shared/Button';
import Track from '../../../assets/svg/logintrack.svg';
import { useLoginHook } from '../../hooks/useLoginHook';
import { useAuth } from '../../context/authContext';

const Login = () => {
  const {
    blurred,
    error,
    formData,
    handleBlurred,
    validateForm,
    setFormData,
    handleChange,
  } = useLoginHook();

  const { setUser, user } = useAuth();

  const handleSubmit = () => {
    const isValid = validateForm();
    console.log('sValid', isValid);
    if (!isValid) return;

    setUser({
      id: '1',
      name: 'Duro',
      email: formData.email,
    });
  };

  const isDisable = !formData.email || !formData.password;
  return (
    <ScreenContainer>
      <CustomTitle children="Login" marginLeft="xs" />
      <CustomSection alignItems="center">
        <Track />
      </CustomSection>
      <CustomSection justifyContent="center" padding={10}>
        <TransferInput
          label="Email Address"
          blurred={() => handleBlurred('email')}
          onChangeText={value => handleChange('email', value)}
          value={formData.email}
          error={error.email}
        />

        <TransferInput
          label="Enter Password"
          blurred={() => handleBlurred('password')}
          onChangeText={value => handleChange('password', value)}
          value={formData.password}
          error={error.password}
        />

        <CustomSection marginTop={40}>
          <Button disable={isDisable} label="Sign In" onPress={handleSubmit} />
        </CustomSection>
      </CustomSection>
    </ScreenContainer>
  );
};

export default Login;

const styles = StyleSheet.create({});
