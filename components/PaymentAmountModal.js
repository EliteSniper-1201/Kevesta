import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/PaymentAmountModal.style';

export default function PaymentAmountModal({ visible, onClose, onNext, provider, amount, setAmount }) {
  const [paymentAmount, setPaymentAmount] = useState({
    amount: '$100',
    add: '',
  });

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.subtitle}>{provider} Bill</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Enter Payment Amount</Text>

          <Text style={styles.label}>Have to Pay</Text>
          <TextInput
            style={styles.input}
            value={paymentAmount.amount}
            editable={false}
          />

          <Text style={styles.label}>Add Amount</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter add amount"
            placeholderTextColor={'#8E8F96'}
            value={amount}
            onChangeText={setAmount}
          />

          <TouchableOpacity
            style={[amount ? styles.continueButton : styles.continueDisabledButton]}
            disabled={!amount}
            onPress={() => {
              onNext();
            }}
          >
            <Text style={[amount ? styles.continueText : styles.continueDisabledText]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
