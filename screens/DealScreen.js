// App.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Total Booking Card */}
      <View style={styles.cardLarge}>
        <View style={styles.iconRow}>
          <MaterialCommunityIcons name="airplane" size={24} color="#3366FF" />
          <FontAwesome5 name="building" size={20} color="#F7C137" style={{ marginLeft: 8 }} />
        </View>
        <Text style={styles.title}>Total Booking</Text>
        <Text style={styles.number}>230</Text>
      </View>

      {/* Small Cards */}
      <View style={styles.cardRow}>
        {/* Flights */}
        <View style={styles.cardSmall}>
          <MaterialCommunityIcons name="airplane" size={24} color="#3366FF" />
          <Text style={styles.cardTitle}>Flights</Text>
          <Text style={styles.cardText}>Book domestic and international flights with ease</Text>
        </View>

        {/* Apartments */}
        <View style={styles.cardSmall}>
          <FontAwesome5 name="building" size={22} color="#F7C137" />
          <Text style={styles.cardTitle}>Apartments</Text>
          <Text style={styles.cardText}>Find the perfect place to stay.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'flex-start',
  },
  cardLarge: {
    backgroundColor: '#f8f9fd',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    color: '#5e5e5e',
  },
  number: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardSmall: {
    backgroundColor: '#f8f9fd',
    borderRadius: 16,
    padding: 16,
    width: '48%',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardText: {
    fontSize: 13,
    color: '#5e5e5e',
    marginTop: 4,
  },
});
