import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles/CheckBox.style';

export default function CustomCheckbox({ label, value, onValueChange }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onValueChange(!value)}
    >
      <View style={[styles.checkbox, value && styles.checked]}>
        {value && <Icon name="check" size={16} color="white" />}
      </View>
      <Image source={label} style={{ width: 46, height: 32 }} />
    </TouchableOpacity>
  );
};