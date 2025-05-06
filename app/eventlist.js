import React from 'react'
import EventListScreen from '@/screens/EventListScreen'
import { View } from 'react-native';

export default function List() {
  return (
    <View style={{ flex: 1}}>
      <EventListScreen/>
    </View>
  )
}
