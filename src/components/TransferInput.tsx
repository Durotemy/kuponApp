import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

type InputProps = {
  label: string;
  onChangeText: (text: string) => void;
  blurred: () => void;
  error?: string;
  value: string;
};

const TransferInput = ({
  label,
  onChangeText,
  blurred,
  error,
  value,
}: InputProps) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder="Put in characters"
        value={value}
        style={styles.input}
        maxLength={20}
        onChangeText={onChangeText}
        onBlur={blurred}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    fontSize: 14,
    textTransform: 'capitalize',
  },

  input: {
    borderWidth: 0.2,
    borderColor: '#bfb4b4',
    padding: 10,
    height: 40,
    borderRadius: 6,
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});

export default TransferInput;
