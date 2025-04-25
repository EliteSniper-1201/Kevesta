import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import InputForm from '@/components/InputForm';
import styles from './styles/AmountSelectionModal.style';

export default function AmountSelectionModal({ visible, onClose, selectedAsset, amount, setAmount, onNext }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Amount</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.selected}>
            <View style={styles.selectedLeft}>
              <Image 
                source={selectedAsset?.icon} 
                style={{ width: 28, height: 28 }} 
              />
              <Text style={styles.selectedLeftText}>
                {selectedAsset?.fullname}({selectedAsset?.name})
              </Text>
            </View>
            <Text style={styles.selectedRightText}>
              ${selectedAsset?.amount}
            </Text>
          </View>

          <View style={styles.inputSection}>
            <InputForm
              label="Add Amount"
              placeHolder="Add Amount"
              value={amount}
              onChangeText={setAmount}
            />
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.button, amount ? styles.confirmButton : styles.disabledButton]}
              disabled={!amount}
              onPress={onNext}
            >
              <Text style={[amount ? styles.confirmButtonText : styles.buttonText]}>
                Next
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
