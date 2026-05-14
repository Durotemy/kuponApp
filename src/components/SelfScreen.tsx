import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SharedProps } from '../utils/transfer.map';
import Layout from './Container';

const SelfScreen = ({ formData, setFormData }: SharedProps) => {
  return (
    <>
      <Layout>
        <Text>HELLO 1</Text>
        <Text>HELLO 2</Text>
        <Text>HELLO 3</Text>
        <Text>HELLO 4</Text>
        <Text>HELLO 5</Text>
      </Layout>
    </>
  );
};

export default SelfScreen;
