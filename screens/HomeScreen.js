import React from 'react'
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import QuickActionButton from '@/components/QuickActionButton'
import FavoriteBox from '@/components/FavoriteBox'
import KeySectionCard from '@/components/KeySectionCard'
import styles from './styles/HomeScreen.styles'
import Header from '@/components/Header'
import { router } from 'expo-router';

const quickActions = [
    { label: 'Trading', icon: require('@/assets/icons/trading.png'), action: (() => router.push('/trading')), },
    { label: 'Withdrawal', icon: require('@/assets/icons/withdrawal.png'), action: (() => router.push('/withdrawal')), },
    { label: 'Payments', icon: require('@/assets/icons/payments.png'), action: (() => router.push('/payment')), },
    { label: 'Subscription', icon: require('@/assets/icons/subscription.png'), action: (() => router.push('/subscription')), },
    { label: 'Settings', icon: require('@/assets/icons/settings.png'), action: (() => router.push('/payment')), },
    { label: 'Rewards', icon: require('@/assets/icons/rewards.png'), action: (() => router.push('/payment')), },
    { label: 'Help', icon: require('@/assets/icons/help.png'), action: (() => router.push('/payment')), },
    { label: 'Terms', icon: require('@/assets/icons/terms.png'), action: (() => router.push('/payment')), },
  ]  
const keySections = [
    { id: '1', icon: require('@/assets/icons/line-chart 2.png'), label: 'Trading', cta: 'Start Trading', rout: '/trading' },
    { id: '2', icon: require('@/assets/icons/dollar-symbol 1.png'), label: 'Trading', cta: 'Withdraw Now', rout: '/withdrawal' },
    { id: '3', icon: require('@/assets/icons/Wallet.png'), label: 'Trading', cta: 'Make a Payment', rout: '/payment' },
    { id: '4', icon: require('@/assets/icons/Calendar.png'), label: 'Trading', cta: 'Book Now', rout: '/phoneAuth' },
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <FlatList
          data={keySections}
          ListHeaderComponent={
            <>
              <View style={styles.header}>
                <Text style={styles.logo}>LOGO</Text>
                <Feather name="bell" size={24} color="black" />
              </View>
              <Header/>
              <View style={styles.searchBox}>
                <Feather name="search" size={20} color="#999" />
                <TextInput placeholder="Search here" style={styles.input} />
              </View>

              <View style={styles.quickActionsGrid}>
                {quickActions.map((item, index) => (
                <QuickActionButton key={index} {...item} />
                ))}
              </View>

              <FavoriteBox />
              <Text style={styles.sectionTitle}>Key Sections</Text>
            </>
          }
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <KeySectionCard {...item} />}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      <View style={styles.bottomNav}>
        {['Home', 'Deals', 'Card', 'Notifications', 'Profile'].map((item) => (
          <TouchableOpacity key={item} style={styles.navItem}>
            <Image source={iconMap[item]} style={{ width: 24, height: 24 }} />
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const iconMap = {
  Home: require('@/assets/icons/menu.png'),
  Deals: require('@/assets/icons/deals.png'),
  Card: require('@/assets/icons/card.png'),
  Notifications: require('@/assets/icons/notification.png'),
  Profile: require('@/assets/icons/profile.png'),
};
