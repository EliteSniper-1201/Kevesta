import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '@/screens/styles/HomeScreen.styles'

export default function Header({ darkMode }) {
  return (
    <View style={[darkMode ? styles.darkHeaderContainer : styles.headerContainer]}>
      <Text style={[styles.sectionTitle, darkMode && styles.darkSectionTitle]}>Total Crypto Value</Text>
      <View style={styles.balanceRow}>
        <View style={[styles.tagContainer, darkMode && styles.darkTagContainer]}>
          <Text style={[styles.tagText, darkMode && styles.darkTagText]}>+7.46 APR</Text>
        </View>
        <Text style={[styles.balance, darkMode && styles.darkBalance]}>$10,500</Text>
      </View>

      <View style={styles.coins}>
        <Image
          source={darkMode ? require('@/assets/images/black.png') : require('@/assets/images/white.png')}
          style={[styles.reactLogo]}
        />
      </View>
    </View>
  )
}
