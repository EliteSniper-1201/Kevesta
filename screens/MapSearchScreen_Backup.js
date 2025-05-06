import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import axios from 'axios';

// MapboxGL.setAccessToken('pk.eyJ1Ijoiam9obndvbiIsImEiOiJja2NyczNicGQwMjYzMndudzN4cTRtejJzIn0.XlzsfMUu_p0Mmbtyq15kxw');

export default function MapScreen1() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [coordinates, setCoordinates] = useState([-74.5, 40]); // Initial coordinates

  // Search locations with debounce
  useEffect(() => {
    if (query.length < 3) return;

    const timer = setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`,
          {
            params: {
              access_token: 'pk.eyJ1Ijoiam9obndvbiIsImEiOiJja2NyczNicGQwMjYzMndudzN4cTRtejJzIn0.XlzsfMUu_p0Mmbtyq15kxw',
              autocomplete: true,
              limit: 5,
              types: 'place,address,poi'
            }
          }
        );
        setSuggestions(response.data.features);
      } catch (error) {
        console.error('Search error:', error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Handle location selection
  const handleSelect = async (item) => {
    setQuery(item.place_name);
    setCoordinates(item.center);
    setSuggestions([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search location..."
        value={query}
        onChangeText={setQuery}
      />

      {suggestions.length > 0 && (
        <FlatList
          style={styles.list}
          data={suggestions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.primary}>{item.text}</Text>
              <Text style={styles.secondary}>{item.place_name}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera
          zoomLevel={12}
          animationMode={'flyTo'}
          centerCoordinate={coordinates}
        />
        <MapboxGL.PointAnnotation
          id="marker"
          coordinate={coordinates}
        >
          <View style={styles.marker}/>
        </MapboxGL.PointAnnotation>
      </MapboxGL.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  search: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    zIndex: 1,
  },
  list: {
    maxHeight: 200,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  primary: {
    fontSize: 16,
    fontWeight: '500',
  },
  secondary: {
    color: '#666',
    fontSize: 14,
  },
  marker: {
    height: 20,
    width: 20,
    backgroundColor: '#3b82f6',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  }
});