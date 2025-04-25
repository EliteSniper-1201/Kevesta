import React from 'react'
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import QuickActionButton from '@/components/QuickActionButton'
import FavoriteBox from '@/components/FavoriteBox'
import KeySectionCard from '@/components/KeySectionCard'
import styles from './styles/HomeScreen.styles'
import Header from '@/components/Header'

const quickActions = [
    { icon: 'chart-bar', label: 'Trading' },
    { icon: 'cash-plus', label: 'Withdrawal' },
    { icon: 'wallet-outline', label: 'Payments' },
    { icon: 'file-document-outline', label: 'Subscription' },
    { icon: 'cog-outline', label: 'Settings' },
    { icon: 'medal-outline', label: 'Rewards' },
    { icon: 'help-circle-outline', label: 'Help' },
    { icon: 'clipboard-text-outline', label: 'Terms' },
  ]  
const keySections = [
    { id: '1', icon: 'chart', label: 'Trading', cta: 'Start Trading', rout: '/trading' },
    { id: '2', icon: 'dollar', label: 'Trading', cta: 'Withdraw Now', rout: '/withdrawal' },
    { id: '3', icon: 'wallet', label: 'Trading', cta: 'Make a Payment', rout: '/payment' },
    { id: '4', icon: 'calendar', label: 'Trading', cta: 'Book Now', rout: '/trading' },
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
