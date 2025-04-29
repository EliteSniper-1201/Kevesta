import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles/TradeConfirmationModal.style'

export default function TradeConfirmationModal({ visible, price, amount, type, onClose, onConfirm, onEdit }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Confirmaiton</Text>
          <Text style={styles.subtitle}>Please Check to procced the trade</Text>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Price</Text>
              <Text style={styles.detail}>Bitcoin (BTC)</Text>
            </View>
            <Text style={styles.value}>${price}</Text>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Type</Text>
              <Text style={styles.detail}>Transaction Type</Text>
            </View>
            <Text style={styles.value}>{type}</Text>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Amount</Text>
              <Text style={styles.detail}>Total amount</Text>
            </View>
            <Text style={styles.value}>{amount}</Text>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Fee</Text>
              <Text style={styles.detail}>Transaction Fees</Text>
            </View>
            <Text style={styles.value}>$10.00</Text>
          </View>
          <View style={{flexDirection: 'col', gap: 16, marginTop: 24}}>
            <TouchableOpacity style={styles.confirmBtn} onPress={onConfirm}>
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.editBtn} onPress={onEdit}>
              <Text style={styles.editText}>Edit Trade</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

