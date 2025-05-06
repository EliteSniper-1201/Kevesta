// app/amount.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SvgUri from "react-native-svg";
import { useLocalSearchParams, useRouter } from 'expo-router'; // ✅ useRouter

import axios from 'axios';

export default function AmountInputScreen() {
  const router = useRouter(); // ✅ useRouter
  const params = useLocalSearchParams();
  alert("params===========", params);
  const selectedCurrency = JSON.parse(params.currency);

  const [fiatAmount, setFiatAmount] = useState('');
  const [cryptoAmount, setCryptoAmount] = useState('');
  const [limits, setLimits] = useState(null);
  const [fiatToCrypto, setFiatToCrypto] = useState(true);

  const renderIcon = (uri) => {
    if (uri.endsWith('.svg')) {
      return <SvgUri width="40" height="40" uri={uri} />;
    } else {
      return <Image source={{ uri }} style={styles.icon} />;
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.moonpay.com/v3/currencies/${selectedCurrency.code}/limits?apiKey=pk_test_53C8BPTdrgkPxs3WNugCWyVDvcqX4lq`
      )
      .then((res) => setLimits(res.data))
      .catch((err) => console.error('Limits fetch error:', err));
  }, []);

  const validateAmount = () => {
    const amount = parseFloat(fiatToCrypto ? fiatAmount : cryptoAmount);
    const min = fiatToCrypto ? limits?.minBuyAmount : limits?.minBuyAmountInQuoteCurrency;
    const max = fiatToCrypto ? limits?.maxBuyAmount : limits?.maxBuyAmountInQuoteCurrency;

    if (isNaN(amount) || amount < min || amount > max) {
      Alert.alert('Invalid Amount', `Enter between ${min} and ${max}`);
      return false;
    }
    return true;
  };


  
  const handleContinue = () => {
    if (!validateAmount()) return;

    const params = new URLSearchParams({
      apiKey: 'pk_test_53C8BPTdrgkPxs3WNugCWyVDvcqX4lq',
      currencyCode: selectedCurrency.code,
      [fiatToCrypto ? 'baseCurrencyAmount' : 'quoteCurrencyAmount']: fiatToCrypto
        ? fiatAmount
        : cryptoAmount,
    });

    if ( fiatToCrypto ) {
        const moonPayBuyUrl = `https://buy.moonpay.com?${params.toString()}`;
        router.push({ pathname: '/moonpay', params: { url: moonPayBuyUrl } });

    }
    else {
        const moonPaySellUrl = `https://sell.moonpay.com?${params.toString()}`;
        router.push({ pathname: '/moonpay', params: { url: moonPaySellUrl } });
     }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cryptoInfo}>
        {renderIcon(selectedCurrency.icon)}
        <View>
          <Text style={styles.title}>{selectedCurrency.name}</Text>
          <Text>
            {selectedCurrency.code} | {selectedCurrency.network}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => setFiatToCrypto(!fiatToCrypto)}>
        <Text style={styles.switchText}>
          Switch to {fiatToCrypto ? 'Crypto' : 'Fiat'} input
        </Text>
      </TouchableOpacity>

      <TextInput
        keyboardType="numeric"
        placeholder={fiatToCrypto ? 'Enter fiat amount (USD)' : `Enter ${selectedCurrency.code}`}
        value={fiatToCrypto ? fiatAmount : cryptoAmount}
        onChangeText={(val) => (fiatToCrypto ? setFiatAmount(val) : setCryptoAmount(val))}
        style={styles.input}
      />

      <Button title="Continue to Buy" onPress={handleContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, marginTop: 40 },
  cryptoInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  icon: { width: 50, height: 50, marginRight: 12 },
  title: { fontSize: 18, fontWeight: 'bold' },
  switchText: { color: '#007BFF', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});
