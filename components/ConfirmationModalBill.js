import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './styles/ConfirmationModalBill.style';

export default function ConfirmationModalBill({
  visible,
  onConfirm,
  onCancel,
  providerDetails,
  amount
}) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Confirmation</Text>
            <TouchableOpacity onPress={onCancel}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>Please check to proceed the trade</Text>

          {/* Bill Details Section */}
          <View style={styles.detailsSection}>
            <DetailRow label="Bill For" value={providerDetails.serviceType} />
            <DetailRow label="Provider" value={providerDetails.providerName} />
            <DetailRow label="Account" value={providerDetails.accountNumber} />
            <DetailRow label="Amount" value={`${amount}`} />
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={onConfirm}
            >
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.editButton]}
              onPress={onCancel}
            >
              <Text style={styles.editButtonText}>Edit Bill</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const DetailRow = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const BreakdownItem = ({ title, details }) => (
  <View style={styles.breakdownItem}>
    <Text style={styles.breakdownItemTitle}>{title}</Text>
    {details.map((detail, index) => (
      <View key={index} style={styles.breakdownDetail}>
        <Text style={styles.breakdownDetailLabel}>{detail.label}</Text>
        <Text style={styles.breakdownDetailValue}>{detail.value}</Text>
      </View>
    ))}
  </View>
);