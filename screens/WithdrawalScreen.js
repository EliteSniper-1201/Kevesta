import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView  } from 'react-native';
import { Divider } from 'react-native-elements';
import styles from './styles/WithdrawalScreen.style'
import TabButton from '@/components/TabButton'

const tabButton = { btn1: 'Crypto', btn2: 'Bank Account' };

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

const paymentMethods = [
  { title: 'Crypto', status: 'Active', details: 'BTC 06/2024', amount: '1,598,000' },
  { title: 'VISA', status: 'Active', details: 'BTC 06/2024', amount: '1,598,000' },
  { title: 'BTC 06/2024', status: 'Active', details: 'BTC 06/2024', amount: '1,598,000' },
  { title: 'Pay', status: 'Active', details: 'BTC 06/2024', amount: '1,598,000' },
];

const transactions = [
  { crypto: 'BTC', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete' },
  { crypto: 'ETH', date: 'Jun 24, 2024', amount: '$66.00', status: 'Pending' },
  { crypto: 'BNB', date: 'Jun 24, 2024', amount: '$66.00', status: 'Failed' },
  { crypto: 'USDT', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete' },
  { crypto: 'XRP', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete' },
];

export default function WithdrawalScreen() {
  const [activeTab, setActiveTab] = useState(tabButton.btn1);

  const renderCryptoItem = ({ item }) => {
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

  const renderBankAccount = () => (
    <ScrollView>
      {/* Payment Methods */}
      <Text style={styles.sectionTitle}>Bank Account</Text>
      {paymentMethods.map((method, index) => (
        <TouchableOpacity key={index} style={styles.methodCard}>
          <View style={styles.methodHeader}>
            <Text style={styles.methodTitle}>{method.title}</Text>
            <Text style={styles.activeStatus}>{method.status}</Text>
          </View>
          <Text style={styles.methodDetail}>{method.details}</Text>
          <Text style={styles.amountText}>{method.amount}</Text>
        </TouchableOpacity>
      ))}

      {/* Transaction History */}
      <Text style={styles.sectionTitle}>Transaction History</Text>
      {transactions.map((transaction, index) => (
        <View key={index} style={styles.transactionItem}>
          <View style={styles.transactionLeft}>
            <Text style={styles.cryptoText}>{transaction.crypto}</Text>
            <Text style={styles.dateText}>{transaction.date}</Text>
          </View>
          <View style={styles.transactionRight}>
            <Text style={styles.amountText}>{transaction.amount}</Text>
            <Text style={[styles.statusText, { color: getStatusColor(transaction.status) }]}>
              {transaction.status}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Complete': return '#4CAF50';
      case 'Pending': return '#FFC107';
      case 'Failed': return '#F44336';
      default: return '#000';
    }
  };

  return (
    <View style={styles.container}>
      <TabButton 
        {...tabButton}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />
      
      {activeTab === tabButton.btn1 ? (
        <FlatList
          data={cryptoAssets}
          renderItem={renderCryptoItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        renderBankAccount()
      )}
    </View>
  );
};
