import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import styles from './styles/WithdrawalScreen.style'

const cryptoAssets = [
  { name: "BTC", amount: 8000, apr: 7.46, icon: require('@/assets/icons/BTC.png') },
  { name: "ETH", amount: 2000, apr: 7.46, icon: require('@/assets/icons/ETH.png') },
  { name: "BNB", amount: 200, apr: 7.46, icon: require('@/assets/icons/BNB.png') },
  { name: "USDT", amount: 200, apr: 7.46, icon: require('@/assets/icons/USDT.png') },
  { name: "XRP", amount: 100, apr: 7.46, icon: require('@/assets/icons/XRP.png') },
  { name: "TRX", amount: 0, apr: -40.1, icon: require('@/assets/icons/TRX.png') },
  { name: "LINK", amount: 0, apr: -40.1, icon: require('@/assets/icons/LINK.png') },
  { name: "ADA", amount: 0, apr: -40.1, icon: require('@/assets/icons/ADA.png') },
];

export default function CryptoWithdrawalScreen() {
  const renderItem = ({ item }) => {
    const isPositiveAPR = item.apr > 0;
    const aprStyle = isPositiveAPR ? styles.aprPositive : styles.aprNegative;
    const aprTextStyle = isPositiveAPR ? styles.aprTextPositive : styles.aprTextNegative;

    return (
      <View>
        <View style={styles.itemContainer} >
          <View style={{ flexDirection: 'row', gap:16 }} >
            <View>
              <Image source={item.icon} style={{ width: 44, height: 44 }} />
            </View>
            <View>
              <Text style={styles.cryptoName}>{item.name}</Text>
              <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
            </View>
          </View>
          <View>
            <View style={[styles.aprTag, aprStyle]}>
              <Text style={[styles.aprText, aprTextStyle]}>{item.apr > 0 ? `+${item.apr}% APR` : `${item.apr}% APR`}</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 8}}>
              <Text style={styles.withdrawText}>Withdraw</Text>
              <TouchableOpacity>
                <Image source={require('@/assets/icons/Vector.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Divider style={styles.divider} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cryptoAssets}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};
