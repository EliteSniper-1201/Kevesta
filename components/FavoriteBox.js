import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles/FavoriteBox.style'
import { useRouter } from 'expo-router';

export default function FavoriteBox() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>See Your Favorites</Text>
      <Text style={styles.desc}>
        Access your favorites instantly for a faster, more convenient experience!
      </Text>
      <TouchableOpacity onPress={() => router.push('/favorite')}>
        <Text style={styles.link}>See Favorites →</Text>
      </TouchableOpacity>
    </View>
  )
}
