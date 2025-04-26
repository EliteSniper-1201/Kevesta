import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles/KeySectionCard.style'
import { router } from 'expo-router';

export default function KeySectionCard({ icon, label, cta, rout }) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={{ width: 24, height: 24 }} />
      </View>
      <Text style={styles.title}>{label}</Text>
      <TouchableOpacity onPress={() => router.push(rout)}>
        <Text style={styles.cta}>{cta} →</Text>
      </TouchableOpacity>
    </View>
  )
}
