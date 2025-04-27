import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles/FavoriteBox.style'
import { useRouter } from 'expo-router';

export default function FavoriteBox({title, description, linkText, action}) {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>
        {description}
      </Text>
      <TouchableOpacity onPress={action}>
        <Text style={styles.link}>{linkText} →</Text>
      </TouchableOpacity>
    </View>
  )
}
