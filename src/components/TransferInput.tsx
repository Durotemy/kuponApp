import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { lighterBrown } from '../constant/palette';

type InputProps = {
  label: string;
  onChangeText: (text: string) => void;
  blurred?: () => void;
  error?: string;
  value: string;
  keyboardType?: 'numeric' | 'default';
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  backgroundColor?: string;
};

const TransferInput = ({
  label,
  onChangeText,
  blurred,
  keyboardType = 'default',
  error,
  value,
  rightIcon,
  backgroundColor,
  leftIcon,
  onRightIconPress,
  onLeftIconPress,
}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View
        style={[
          styles.inputWrapper,
          backgroundColor ? { backgroundColor } : null,
        ]}
      >
        {leftIcon ? (
          <TouchableOpacity
            onPress={onLeftIconPress}
            style={styles.leftIconContainer}
          >
            {leftIcon}
          </TouchableOpacity>
        ) : null}
        <TextInput
          keyboardType={keyboardType}
          placeholder="Put in characters"
          value={value}
          style={styles.input}
          maxLength={20}
          onChangeText={onChangeText}
          onBlur={blurred}
        />

        {rightIcon ? (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.iconContainer}
          >
            {rightIcon}
          </TouchableOpacity>
        ) : null}
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    textTransform: 'capitalize',
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: '#bfb4b4',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 48,
  },

  input: {
    flex: 1,
  },

  iconContainer: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  leftIconContainer: {
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});

export default TransferInput;
