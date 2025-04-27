import React from 'react';
import { View, Text, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles/SubscriptionModal.style';

export default function SubscriptionModal({ visible, onClose, onContinue }) {
  const features = [
    '5GB high-speed data',
    'Up to 50 Mbps',
    '30 days from activation',
    'Free unlimited social media usage (Facebook, WhatsApp, Instagram)',
    'Nighttime data bonus: 2GB (12 AM - 6 AM)',
    'Nationwide data coverage'
  ];

  const eligibility = [
    'New and existing customers',
    'Compatible with 4G and 5G devices'
  ];

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Data Subscriptions</Text>
              <TouchableOpacity onPress={onClose}>
                <MaterialIcons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            {/* Plan Section */}
            <Text style={styles.sectionTitle}>Plan Features</Text>
            {features.map((feature, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listText}>{feature}</Text>
              </View>
            ))}

            {/* Price Section */}
            <Text style={styles.sectionTitle}>Price</Text>
            <View style={styles.priceRow}>
              <Text style={styles.priceText}>$9.99/Month</Text>
              <Text style={styles.taxText}>Exclusive of taxes</Text>
            </View>
            <Text style={styles.renewalText}>Auto renewal 10% off</Text>

            {/* Eligibility */}
            <Text style={styles.sectionTitle}>Eligibility</Text>
            {eligibility.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}

            {/* Activation */}
            <Text style={styles.sectionTitle}>Activation Time</Text>
            <Text style={styles.normalText}>
              - Instant activation upon successful payment
            </Text>

            {/* Support */}
            <Text style={styles.sectionTitle}>Customer Support</Text>
            <Text style={styles.normalText}>
              - 24/7 Chat Support via the mobile app{"\n"}
              - Helpline: 1-800-DATA-PLAN
            </Text>
          </ScrollView>

          {/* Continue Button */}
          <TouchableOpacity
            style={styles.continueButton}
            onPress={onContinue}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};