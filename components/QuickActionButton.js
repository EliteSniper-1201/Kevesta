import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles/QuickActionButton.style'

export default function QuickActionButton({ label }) {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.iconBox}>
        <Image source={iconMap[label]} style={{ width: 24, height: 24 }} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const iconMap = {
  Trading: require('@/assets/icons/trading.png'),
  Withdrawal: require('@/assets/icons/withdrawal.png'),
  Payments: require('@/assets/icons/payments.png'),
  Subscription: require('@/assets/icons/subscription.png'),
  Settings: require('@/assets/icons/settings.png'),
  Rewards: require('@/assets/icons/rewards.png'),
  Help: require('@/assets/icons/help.png'),
  Terms: require('@/assets/icons/terms.png'),
};
