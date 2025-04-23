import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/TabButton.style'

export default function TabButtons({ btn1, btn2, activeTab, onTabChange }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabChange(btn1)}
      >
        <Text style={styles.tabText}>{btn1}</Text>
        {activeTab === btn1 && <View style={styles.activeLine} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabChange(btn2)}
      >
        <Text style={styles.tabText}>{btn2}</Text>
        {activeTab === btn2 && <View style={styles.activeLine} />}
      </TouchableOpacity>
    </View>
  );
}
