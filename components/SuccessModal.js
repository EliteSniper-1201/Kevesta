import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/SuccessModal.style';

export default function PaymentSuccessModal({ visible, onClose, completedObject }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>

          <Ionicons name="checkmark-circle" size={64} color="#34C759" style={styles.icon} />
          <Text style={styles.title}>{completedObject} Completed</Text>

          <TouchableOpacity style={styles.invoiceButton}>
            <Text style={styles.invoiceButtonText}>View Invoice</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
