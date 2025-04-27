import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles/SubscriptionConfirmationModal.style';

export default function SubscriptionConfirmationModal({ 
  visible, 
  onClose, 
  onConfirm,
  onEdit,
  provider = 'Vattenfall',
  price = '$9.99/Month',
  paymentMethod = 'Mastercard'
}) {
  const startDate = new Date().toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
  const endDate = 'Jan 31, 2024';

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Confirmation</Text>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>Please check to proceed the trade</Text>

          {/* Subscription Details */}
          <View style={styles.detailsContainer}>
            <DetailRow label="Bill For" value="Data Subscription" />
            <DetailRow label="Subscription Type" value={provider} />
            <DetailRow 
              label="Subscription Period" 
              value={`${startDate} - ${endDate}`} 
            />
            <DetailRow label="Price" value={price} emphasized />
            <DetailRow 
              label="Payment Method" 
              value={
                <View style={styles.paymentMethod}>
                  <MaterialIcons name="credit-card" size={20} color="#666" />
                  <Text style={styles.methodText}>{paymentMethod}</Text>
                </View>
              } 
            />
          </View>

          {/* Action Buttons */}
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={onConfirm}
          >
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.editButton}
            onPress={onEdit}
          >
            <Text style={styles.editButtonText}>Edit Bill</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const DetailRow = ({ label, value, emphasized }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={[styles.detailValue, emphasized && styles.emphasizedText]}>
      {value}
    </Text>
  </View>
);

