import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import styles from './styles/FavoriteScreen.styles'

const services = [
  { id: '1', name: 'Electricity', icon: require('@/assets/icons/outlet 2.png') },
  { id: '2', name: 'Gas', icon: require('@/assets/icons/gas-stove 2.png') },
  { id: '3', name: 'Water', icon: require('@/assets/icons/tap 2.png') },
  { id: '4', name: 'Internet', icon: require('@/assets/icons/globe 2.png') },
  { id: '5', name: 'Telephone', icon: require('@/assets/icons/telephone 2.png') },
];

export default function FavoritesScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.iconLabel}>
        <Image source={item.icon} style={{ width: 24, height: 24 }} />
        <Text style={styles.label}>{item.name}</Text>
      </View>
      <Image source={require('@/assets/icons/Heart.png')}/>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Favorites</Text>
      </View>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Favorite</Text>
      </TouchableOpacity>
    </View>
  );
}