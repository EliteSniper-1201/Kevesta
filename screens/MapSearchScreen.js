import React, { useState, useMemo } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import 'react-native-get-random-values';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { router } from 'expo-router';
import styles from './styles/MapScreen.style'

const locations = [
    { title: 'FORT BEMA', lat: 52.2565, lng: 20.9385 },
    { title: 'MARYMONT', lat: 52.2595, lng: 20.9505 },
    { title: 'Lasek na Kole', lat: 52.251, lng: 20.948 },
    { title: 'KOLO', lat: 52.2466, lng: 20.947 },
    { title: 'Park Wodny Moczydło', lat: 52.2367, lng: 20.95355 },
    { title: 'ULRYCHÓW', lat: 52.232, lng: 20.935 },
];

const GOOGLE_API_KEY = 'AIzaSyAxbKpNVHpiGeaMQPulIu4CESkuScJ5izk';

export default function MapScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [shouldDisplayListView, setShouldDisplayListView] = useState(false);

    const filteredLocations = useMemo(() =>
        locations.filter(loc =>
            loc.title.toLowerCase().includes(searchQuery.toLowerCase())
        ),
        [searchQuery]
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    <Feather name="arrow-left" size={20} color="black" />
                    <Text style={styles.title}>Back</Text>
                </TouchableOpacity>
            </View>
            {/* Header */}
            <View style={styles.header}>
                <GooglePlacesAutocomplete
                    // styles={searchStyles}
                    listViewDisplayed={shouldDisplayListView}
                    textInputProps={{
                        onFocus: () => setShouldDisplayListView(true),
                        onBlur: () => setShouldDisplayListView(false)
                    }}
                    styles={{
                        container: {
                          flex: 0,
                          zIndex: 10,
                          width: '100%'
                        },
                        listView: {
                          backgroundColor: 'white',
                          zIndex: 20,
                        },
                        textInput: {
                          height: 50,
                          fontSize: 16,
                          borderColor: '#ccc',
                          borderWidth: 1,
                          borderRadius: 30,
                          paddingHorizontal: 20,
                        },
                      }}
                    placeholder="Search"
                    fetchDetails={true}
                    minLength={2}
                    debounce={300}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    onPress={(data, details = null) => {
                        alert(data); // You can use this to update map position
                    }}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'en',
                    }}
                />
            </View>

            {/* Google Map */}
            <View style={{ borderRadius: 10, flex: 1, margin: 20, overflow: 'hidden' }}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 52.24705,
                        longitude: 20.945425,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    provider={PROVIDER_GOOGLE}
                    googleMapsApiKey={Constants.expoConfig?.extra?.googleMapsApiKey}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    showsCompass={true}
                    showsPointsOfInterest={false}
                >
                    {filteredLocations.map((loc, index) => (
                        <Marker
                            key={`marker-${index}`}
                            coordinate={{ latitude: loc.lat, longitude: loc.lng }}
                            title={loc.title}
                            pinColor="#FF6B6B"  // Custom marker color
                        />
                    ))}
                </MapView>
            </View>
        </SafeAreaView>
    );
};

const searchStyles = StyleSheet.create({
    textInputContainer: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      borderBottomWidth: 0,
      marginHorizontal: 20,
      marginTop: 10,
      width: '100%',
      zIndex: 10,
    },
    textInput: {
      height: 50,
      color: 'black',
      fontSize: 16,
      backgroundColor: '#F3F5F7',
      borderRadius: 25,
      paddingHorizontal: 20,
    },
  });
