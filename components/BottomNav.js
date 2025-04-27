import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { router } from 'expo-router';
import styles from './styles/BottomNav.style';

export default function BottomNav({ activeTab, onTabPress }) {
  const routes = [
    { name: 'Home', icon: require('@/assets/icons/menu.png'), action: () => router.push('/home') },
    { name: 'Deals', icon: require('@/assets/icons/deals.png'), action: () => router.push('/home') },
    { name: 'Card', icon: require('@/assets/icons/card.png'), action: () => router.push('/cards') },
    { name: 'Notifications', icon: require('@/assets/icons/notification.png'), action: () => router.push('/home') },
    { name: 'Profile', icon: require('@/assets/icons/profile.png'), action: () => router.push('/home') },
  ];

  return (
    <View style={styles.container}>
      {routes.map((route) => (
        <TouchableOpacity
          key={route.name}
          style={styles.tab}
          onPress={() => {
            onTabPress(route.name);
            route.action();
          }}
          accessibilityRole="button"
          accessibilityLabel={`${route.name} tab`}
        >
          <Image
          source={route.icon}
          />

          <Text style={[
            styles.label,
            activeTab === route.name && styles.activeLabel
          ]}>
            {route.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
