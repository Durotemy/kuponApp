import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { intitialData } from '../../helper/transfer';
import { formData } from '../../utils/transfer.map';
import SelfScreen from '../../components/SelfScreen';
import OthersScreen from '../../components/OthersScreen';
import Layout from '../../components/Container';
import { useFormHook } from '../../hooks/useTransferForm';

const HomeScreen = () => {
  const {
    formData,
    setFormData,
    handleBlurred,
    error,
    handleChange,
    value,
    validateForm,
  } = useFormHook();
  const [transferType, setTransferType] = useState<'self' | 'other'>('other');

  const sharedProps = {
    formData,
    setFormData,
    handleBlurred,
    error,
    handleChange,
    value,
    validateForm,
  };
  type TransferType = 'self' | 'other';

  const transferMapSetUp: Record<TransferType, React.ComponentType<any>> = {
    self: SelfScreen,
    other: OthersScreen,
  };

  const ActiveScreen = transferMapSetUp[transferType];

  return (
    <View style={{ flex: 1 }}>
      <ActiveScreen {...sharedProps} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
