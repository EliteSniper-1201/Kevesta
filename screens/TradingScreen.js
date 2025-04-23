import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, FlatList, useColorScheme } from 'react-native';
import styles from './styles/TradingScreen.styles'
import Header from '@/components/Header';
import TabButton from '@/components/TabButton'

const tabButton = { btn1: 'Buy LTC/BTC', btn2: 'Sell LTC/BTC' };

export default function TradingScreen() {

    const colorScheme = useColorScheme();
    // const darkMode = colorScheme === 'light';

  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState(tabButton.btn1);
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  const assets = [
    { symbol: 'BTC', value: '$8,000.00', amount: '1,08005000' },
    { symbol: 'ETH', value: '$2,000.00', amount: '1,08005000' },
    { symbol: 'BNB', value: '$200.00', amount: '1,08005000' },
    { symbol: 'USDT', value: '$300.00', amount: '1,08005000' },
    { symbol: 'XRP', value: '$100.00', amount: '1,08005000' },
  ];

  return (
    <View style={styles.container}>
    <FlatList
        ListHeaderComponent={
            <>        
                <Header darkMode={darkMode}/>
                <View>
                    <TabButton {...tabButton} 
                    activeTab={activeTab}
                    onTabChange={(tab) => setActiveTab(tab)}
                    />
                </View>
                <ScrollView style={styles.content}>
                     {/* Price/Amount Inputs */}
                    <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Price"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={price}
                        onChangeText={setPrice}
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Amount"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />
                    
                    <TouchableOpacity 
                        style={[
                        styles.actionButton,
                        activeTab === tabButton.btn1 ? styles.buyButton : styles.sellButton
                        ]}
                    >
                        <Text style={styles.actionButtonText}>
                        {activeTab === tabButton.btn1 ? 'Buy' : 'Sell'}
                        </Text>
                    </TouchableOpacity>
                    </View>

                    {/* Assets List */}
                    <Text style={styles.sectionTitle}>List of Assets</Text>
                    <FlatList
                    data={assets}
                    keyExtractor={(item) => item.symbol}
                    renderItem={({ item }) => (
                        <View style={styles.assetItem}>
                        <Text style={styles.assetSymbol}>{item.symbol}</Text>
                        <View style={styles.assetDetails}>
                            <Text style={styles.assetValue}>{item.value}</Text>
                            <Text style={styles.assetAmount}>{item.amount}</Text>
                        </View>
                        </View>
                    )}
                    />
                </ScrollView>
            </>
        }
    />
    </View>
  );
}
