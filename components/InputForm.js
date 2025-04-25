import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles/InputForm.style';

export default function InputForm({ label, value, placeHolder, onChangeText }) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="#8E8F96"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}