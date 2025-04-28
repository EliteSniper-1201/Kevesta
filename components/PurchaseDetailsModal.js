import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles/PurchaseDetailsModal.style';

export default function PurchaseDetailsModal({ visible, onClose, purchaseData, onConfirm }) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Modal Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Purchase Details</Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Purchase Details */}
          <View style={styles.detailsContainer}>
            <DetailRow label="Type of Purchase" value="Virtual Card Purchase" />
            <DetailRow label="Amount" value="$100" />
            <DetailRow label="Expiration Date" value="Valid until Dec 2025" />
            <DetailRow label="Card Holder Name" value="John Doe" />
            <DetailRow label="Partial Card Number" value="**** ***** 5678" />
            <DetailRow label="Bill For" value="Electricity" />
          </View>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const DetailRow = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

