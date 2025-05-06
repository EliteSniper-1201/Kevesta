// app/index.js
import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { SvgUri } from 'react-native-svg';

import { useRouter } from 'expo-router'; // ✅ Correct import

export default function CryptoListScreen() {
  const router = useRouter(); // ✅ Use inside the component
  const [currencies, setCurrencies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  const renderIcon = (uri) => {
    if (uri.endsWith('.svg')) {
      return <SvgUri width="40" height="40" uri={uri} />;
    } else {
      return <Image source={{ uri }} style={styles.icon} />;
    }
  };

  useEffect(() => {
    axios
      .get('https://api.moonpay.com/v3/currencies?apiKey=pk_test_53C8BPTdrgkPxs3WNugCWyVDvcqX4lq')
      .then((res) => {
        const list = res.data.filter((item) => item.type === 'crypto');
        setCurrencies(list);
        setFiltered(list);
      })
      .catch((err) => console.error('Currency fetch error:', err));
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredList = currencies.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.code.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filteredList);
  };
  
  const renderItem = ({ item }) => (
  <TouchableOpacity
    onPress={() => {
     requestAnimationFrame(() => {
      // router.push({ pathname: '/amount', params: { currency: JSON.stringify(item) } });
      router.push(`/amount?currency=${encodeURIComponent(JSON.stringify(item))}`);

    });
    }}  
   >
      <View style={styles.item}>
      {renderIcon(item.icon)}
        <View>
          <Text style={styles.code}>{item.code}</Text>
          <Text style={styles.network}>{item.metadata?.networkCode}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Cryptocurrency"
        value={search}
        onChangeText={handleSearch}
        style={styles.input}
      />
      <FlatList data={filtered} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, marginTop: 40 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  item: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, gap: 12 },
  icon: { width: 40, height: 40, marginRight: 10 },
  code: { fontWeight: 'bold' },
  name: { color: '#555' },
  network: { color: '#999', fontSize: 12 },
});
