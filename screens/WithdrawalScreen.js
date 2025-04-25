import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import { Divider } from 'react-native-elements';
import styles from './styles/WithdrawalScreen.style'
import TabButton from '@/components/TabButton'
import InputForm from '@/components/InputForm';
import AmountSelectionModal from '@/components/AmountSelectionModal';
import PaymentMethodModal from '@/components/PaymentMethodModal';
import ConfirmationModal from '@/components/ConfirmationModal';

const tabButton = { btn1: 'Crypto', btn2: 'Bank Accounts' };

const cryptoAssets = [
  { fullname: "Bitcoin", name: "BTC", amount: 8000, apr: 7.46, icon: require('@/assets/icons/BTC.png') },
  { fullname: "Ethereum", name: "ETH", amount: 2000, apr: 7.46, icon: require('@/assets/icons/ETH.png') },
  { fullname: "Binance", name: "BNB", amount: 200, apr: 7.46, icon: require('@/assets/icons/BNB.png') },
  { fullname: "Stablecoin", name: "USDT", amount: 200, apr: 7.46, icon: require('@/assets/icons/USDT.png') },
  { fullname: "", name: "XRP", amount: 100, apr: 7.46, icon: require('@/assets/icons/XRP.png') },
  { fullname: "TRON", name: "TRX", amount: 0, apr: -40.1, icon: require('@/assets/icons/TRX.png') },
  { fullname: "", name: "LINK", amount: 0, apr: -40.1, icon: require('@/assets/icons/LINK.png') },
  { fullname: "", name: "ADA", amount: 0, apr: -40.1, icon: require('@/assets/icons/ADA.png') },
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
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [amount, setAmount] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentConfirmation = () => {
    // Handle actual payment logic here
    console.log("Confirming payment with:", {
      asset: selectedAsset,
      paymentMethod: selectedPaymentMethod,
      amount: amount
    });
    
    // Close all modals
    setShowConfirmationModal(false);
    setShowPaymentModal(false);
    setShowAmountModal(false);
  };



  const renderCryptoItem = ({ item }) => {
    const isPositiveAPR = item.apr > 0;
    const aprStyle = isPositiveAPR ? styles.aprPositive : styles.aprNegative;
    const aprTextStyle = isPositiveAPR ? styles.aprTextPositive : styles.aprTextNegative;

    return (
      <View>
        <View style={styles.itemContainer} >
          <View style={{ flexDirection: 'row', gap: 16 }} >
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
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Text style={styles.withdrawText}>Withdraw</Text>
              <TouchableOpacity
                onPress={() => {
                  setSelectedAsset(item);
                  setShowAmountModal(true);
                }}
              >
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

      <AmountSelectionModal
        visible={showAmountModal}
        onClose={() => setShowAmountModal(false)}
        selectedAsset={selectedAsset}
        amount={amount}
        setAmount={setAmount}
        onNext={() => {
          setShowAmountModal(false);
          setShowPaymentModal(true);
        }}
      />
      <PaymentMethodModal
        visible={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onBack={() => {
          setShowPaymentModal(false);
          setShowAmountModal(true);
        }}
        onPaymentSelect={setSelectedPaymentMethod}
        onRequestPayment={() => {
          setShowPaymentModal(false);
          setShowConfirmationModal(true);
        }}
      />
      <ConfirmationModal
        visible={showConfirmationModal}
        onConfirm={handlePaymentConfirmation}
        onCancel={() => setShowConfirmationModal(false)}
        asset={selectedAsset}
        paymentMethod={selectedPaymentMethod}
        amount={amount}
      />
    </View>
  );
};
