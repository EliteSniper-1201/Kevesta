import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles/QuickActionButton.style'
import { router } from 'expo-router';

export default function QuickActionButton({ label, icon, action }) {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={action}>
      <View style={styles.iconBox}>
        <Image source={icon} style={{ width: 24, height: 24 }} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}
