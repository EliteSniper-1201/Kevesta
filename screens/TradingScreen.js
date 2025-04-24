import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, FlatList, useColorScheme, Image } from 'react-native';
import styles from './styles/TradingScreen.styles'
import Header from '@/components/Header';
import TabButton from '@/components/TabButton'
import InputForm from '../components/InputForm';

const tabButton = { btn1: 'Buy LTC/BTC', btn2: 'Sell LTC/BTC' };

export default function TradingScreen() {

    const colorScheme = useColorScheme();
    // const darkMode = colorScheme === 'light';

  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState(tabButton.btn1);
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  const assets = [
    { symbol: 'BTC', value: '$8,000.00', amount: '1,08005000', icon: require('@/assets/icons/BTC.png') },
    { symbol: 'ETH', value: '$2,000.00', amount: '1,08005000', icon: require('@/assets/icons/ETH.png') },
    { symbol: 'BNB', value: '$200.00', amount: '1,08005000', icon: require('@/assets/icons/BNB.png') },
    { symbol: 'USDT', value: '$300.00', amount: '1,08005000', icon: require('@/assets/icons/USDT.png') },
    { symbol: 'XRP', value: '$100.00', amount: '1,08005000', icon: require('@/assets/icons/XRP.png') },
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

                    <InputForm 
                        label="Price"
                        value={price}
                        placeHolder="0.00"
                        onChangeText={setPrice}
                    />
                    <InputForm 
                        label="Amount"
                        value={amount}
                        placeHolder="0.00"
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
                        <View style={styles.assetDetails}>
                            <Image source={item.icon} style={{ width: 44, height: 44 }}/>
                            <View>
                                <Text style={styles.assetSymbol}>{item.symbol}</Text>
                                <Text style={styles.assetValue}>{item.value}</Text>
                            </View>
                        </View>
                        <Text style={styles.assetAmount}>{item.amount}</Text>
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
