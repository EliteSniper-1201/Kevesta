import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import styles from './styles/CardsScreen.style';
import { router } from 'expo-router';
import BottomNav from '@/components/BottomNav';
import FavoriteBox from '@/components/FavoriteBox';
import HistoryModal from '@/components/HistoryModal';
import PurchaseDetailsModal from '@/components/PurchaseDetailsModal';
import PaymentMethodModal from '@/components/PaymentMethodModal';
import SuccessModal from '@/components/SuccessModal'

export default function CardsScreen() {
  const [activeTab, setActiveTab] = useState('Card');
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showPurchaseDetails, setShowPurchaseDetails] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const [selectedPurchase, setSelectedPurchase] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const virtualCards = [
    { id: '1', name: 'Visa Virtual Card', icon: require('@/assets/images/visa.png') },
    { id: '2', name: 'MasterCard Virtual', icon: require('@/assets/images/mastercard.png') },
    { id: '3', name: 'Amex Virtual Card', icon: require('@/assets/images/amex.png') },
    { id: '4', name: 'Skrill Virtual Card', icon: require('@/assets/images/skrill.png') },
  ];

  const giftCards = [
    { id: '1', brand: 'Amazon', name: 'Amazon Gift Card', icon: require('@/assets/images/amazon.png') },
    { id: '2', brand: 'Apple', name: 'Apple Gift Card', icon: require('@/assets/images/apple.png') },
    { id: '3', brand: 'Google', name: 'Google Play Gift Card', icon: require('@/assets/images/google-play.png') },
    { id: '4', brand: 'Netflix', name: 'Netflix Gift Card', icon: require('@/assets/images/netflix.png') },
  ];

  // const purchaseHistory = [
  //   { id: '1', amount: '$100', date: 'Jun 24, 2024' },
  //   { id: '2', amount: '$100', date: 'Jun 24, 2024' },
  //   { id: '3', amount: '$100', date: 'Jun 24, 2024' },
  //   { id: '4', amount: '$100', date: 'Jun 24, 2024' },
  //   { id: '5', amount: '$100', date: 'Jun 24, 2024' },
  //   { id: '6', amount: '$100', date: 'Jun 24, 2024' },
  //   { id: '7', amount: '$100', date: 'Jun 24, 2024' },
  // ];

  const purchaseHistory = [
    {
      id: '1',
      amount: '$100',
      date: 'Jun 24, 2024',
      details: {
        type: 'Virtual Card Purchase',
        expiration: 'Valid until Dec 2025',
        holder: 'John Doe',
        cardNumber: '**** ***** 5678',
        billFor: 'Electricity'
      }
    },
    {
      id: '2',
      amount: '$100',
      date: 'Jun 24, 2024',
      details: {
        type: 'Virtual Card Purchase',
        expiration: 'Valid until Dec 2025',
        holder: 'John Doe',
        cardNumber: '**** ***** 5678',
        billFor: 'Electricity'
      }
    },
    {
      id: '3',
      amount: '$100',
      date: 'Jun 24, 2024',
      details: {
        type: 'Virtual Card Purchase',
        expiration: 'Valid until Dec 2025',
        holder: 'John Doe',
        cardNumber: '**** ***** 5678',
        billFor: 'Electricity'
      }
    },
    {
      id: '4',
      amount: '$100',
      date: 'Jun 24, 2024',
      details: {
        type: 'Virtual Card Purchase',
        expiration: 'Valid until Dec 2025',
        holder: 'John Doe',
        cardNumber: '**** ***** 5678',
        billFor: 'Electricity'
      }
    },
    {
      id: '5',
      amount: '$100',
      date: 'Jun 24, 2024',
      details: {
        type: 'Virtual Card Purchase',
        expiration: 'Valid until Dec 2025',
        holder: 'John Doe',
        cardNumber: '**** ***** 5678',
        billFor: 'Electricity'
      }
    },
    {
      id: '6',
      amount: '$100',
      date: 'Jun 24, 2024',
      details: {
        type: 'Virtual Card Purchase',
        expiration: 'Valid until Dec 2025',
        holder: 'John Doe',
        cardNumber: '**** ***** 5678',
        billFor: 'Electricity'
      }
    },
    {
      id: '7',
      amount: '$100',
      date: 'Jun 24, 2024',
      details: {
        type: 'Virtual Card Purchase',
        expiration: 'Valid until Dec 2025',
        holder: 'John Doe',
        cardNumber: '**** ***** 5678',
        billFor: 'Electricity'
      }
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>LOGO</Text>
        <Feather name="menu" size={24} color="black" />
      </View>

      <ScrollView>
        {/* Virtual Cards Section */}
        <Text style={styles.sectionTitle}>Virtual Cards</Text>
        <FlatList
          data={virtualCards}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Image source={item.icon} style={styles.cardIcon} />
              <Text style={styles.cardTitle}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.cardList}
        />

        {/* Gift Cards Section */}
        <Text style={styles.sectionTitle}>Gift Cards</Text>
        <FlatList
          data={giftCards}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.giftCard}>
              <Image source={item.icon} style={styles.giftCardIcon} />
              <Text style={styles.giftCardName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.giftCardList}
        />

        <FavoriteBox
          title="Your Purchase History Overview"
          description="Review your previous purchases, including cards, event tickets, and other transactions."
          linkText="View History"
          action={() => setShowHistoryModal(true)}
        />

        <HistoryModal
          visible={showHistoryModal}
          onClose={() => setShowHistoryModal(false)}
          historyData={purchaseHistory}
          onItemPress={(item) => {
            setSelectedPurchase(item);
            setShowPurchaseDetails(true);
            setShowHistoryModal(false);
          }}
        />

      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onTabPress={(tabName) => setActiveTab(tabName)}
      />

      <PurchaseDetailsModal
        visible={showPurchaseDetails}
        onClose={() => setShowPurchaseDetails(false)}
        purchaseData={selectedPurchase}
        onConfirm={() => {
          setShowPurchaseDetails(false);
          setShowPaymentMethod(true);
        }}
      />

      <PaymentMethodModal
        visible={showPaymentMethod}
        onClose={() => setShowPaymentMethod(false)}
        onBack={() => {
          setShowPaymentMethod(false);
          setShowPurchaseDetails(true);
        }}
        onPaymentSelect={(method) => console.log('Selected method:', method)}
        onRequestPayment={() => {
          setShowPaymentMethod(false);
          setShowSuccessModal(true);
        }}
      />

      <SuccessModal
        visible={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        completedObject='Your purchase'
      />
    </View>
  );
};