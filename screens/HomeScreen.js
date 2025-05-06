import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import QuickActionButton from '@/components/QuickActionButton'
import FavoriteBox from '@/components/FavoriteBox'
import KeySectionCard from '@/components/KeySectionCard'
import styles from './styles/HomeScreen.styles'
import CryptoStatus from '@/components/CryptoStatus'
import { router } from 'expo-router';
import BottomNav from '@/components/BottomNav';
import TrendingNews from '@/components/TrendingNews';

const quickActions = [
  { label: 'Trading', icon: require('@/assets/icons/trading.png'), action: (() => router.push('/trading')), },
  { label: 'Withdrawal', icon: require('@/assets/icons/withdrawal.png'), action: (() => router.push('/withdrawal')), },
  { label: 'Payments', icon: require('@/assets/icons/payments.png'), action: (() => router.push('/payment')), },
  { label: 'Subscription', icon: require('@/assets/icons/subscription.png'), action: (() => router.push('/subscription')), },
  { label: 'Settings', icon: require('@/assets/icons/settings.png'), action: (() => router.push('/setting')), },
  { label: 'Rewards', icon: require('@/assets/icons/rewards.png'), action: (() => router.push('/event')), },
  { label: 'Help', icon: require('@/assets/icons/help.png'), action: (() => router.push('/help')), },
  { label: 'Terms', icon: require('@/assets/icons/terms.png'), action: (() => router.push('/terms')), },
]
const keySections = [
  { id: '1', icon: require('@/assets/icons/line-chart 2.png'), label: 'Trading', cta: 'Start Trading', rout: '/trading' },
  { id: '2', icon: require('@/assets/icons/dollar-symbol 1.png'), label: 'Withdrawal', cta: 'Withdraw Now', rout: '/cryptolist' },
  { id: '3', icon: require('@/assets/icons/Wallet.png'), label: 'Payment', cta: 'Make a Payment', rout: '/phoneauth' },
  { id: '4', icon: require('@/assets/icons/Calendar.png'), label: 'Subscription', cta: 'Book Now', rout: '/moonpay' },
] 

export default function HomeScreen() {

  const [activeTab, setActiveTab] = useState('Home');

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
            <CryptoStatus />
            <View style={styles.searchBox}>
              <Feather name="search" size={20} color="#999" />
              <TextInput placeholder="Search here" style={styles.input} />
            </View>

            <View style={styles.quickActionsGrid}>
              {quickActions.map((item, index) => (
                <QuickActionButton key={index} {...item} />
              ))}
            </View>

            <FavoriteBox
              title="See Your Favorites"
              description="Access your favorites instantly for a faster, more convenient experience!"
              linkText="See Favorites"
              action={() => router.push('/favorite')}
              />
            <Text style={styles.sectionTitle}>Key Sections</Text>
          </>
        }
        ListFooterComponent={
          <TrendingNews/>
        }
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <KeySectionCard {...item} />}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <BottomNav
        activeTab={activeTab}
        onTabPress={(tabName) => setActiveTab(tabName)}
      />

    </View>
  )
}