import { Button, StyleSheet, Text, View } from 'react-native';
import React, { use } from 'react';
import { SharedProps } from '../utils/transfer.map';
import TransferInput from './TransferInput';
import Layout from './Container';
import { useFormHook } from '../hooks/useTransferForm';

const OthersScreen = ({
  formData,
  setFormData,
  handleChange,
  handleBlurred,
  error,
  value,
  validateForm,
}: SharedProps) => {
  // const { handleChange, handleBlurred, blurred, error, validateForm } =
  //   useFormHook();

  return (
    <Layout>
      <TransferInput
        label="Account Name"
        value={formData.accountName}
        onChangeText={text => handleChange('accountName', text)}
        blurred={() => handleBlurred('accountName')}
        error={error.accountName}
      />
      <TransferInput
        label="Account Number"
        value={formData.accountNumber}
        onChangeText={text => handleChange('accountNumber', text)}
        blurred={() => handleBlurred('accountNumber')}
        error={error.accountNumber}
      />
      <TransferInput
        label="Bank Name"
        onChangeText={text => handleChange('bankName', text)}
        value={formData.bankName}
        blurred={() => handleBlurred('bankName')}
        error={error.bankName}
      />

      <Button title="Submit" onPress={validateForm} />
    </Layout>
  );
};

export default OthersScreen;
