import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Layout from '../../components/Container';
import CustomText from '../../components/shared/CustomText';
import CustomTitle from '../../components/shared/CustomTitle';
import CustomSection from '../../components/shared/CustomSession';
import TransferInput from '../../components/TransferInput';
import { Button } from '../../components/shared/Button';

const CreateAccountScreen = () => {
  return (
    <Layout
      footer={
        <>
          <Button label="Submit" onPress={() => {}} />
        </>
      }
    >
      <CustomSection padding={10}>
        <CustomTitle children="Create Account" />

        <TransferInput
          label="Full Name"
          blurred={() => true}
          onChangeText={() => {}}
          value=""
        />
        <TransferInput
          label="Email Address"
          blurred={() => true}
          onChangeText={() => {}}
          value=""
        />
        <TransferInput
          label="Phone Number"
          blurred={() => true}
          onChangeText={() => {}}
          value=""
        />
        <TransferInput
          label="Password"
          blurred={() => true}
          onChangeText={() => {}}
          value=""
        />
      </CustomSection>
    </Layout>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({});
