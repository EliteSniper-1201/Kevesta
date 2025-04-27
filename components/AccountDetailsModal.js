import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/AccountDetailsModal.style';

export default function AccountDetailsModal({ visible, onClose, provider, onContinue }) {
  const [accountDetails, setAccountDetails] = useState({
    number: '',
    name: '',
    address: '',
  });

  const handleSubmit = () => {
    if (!accountDetails.number) {
      alert('Please enter account number');
      return;
    }
    onContinue(accountDetails);
  };

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
          <Text style={styles.title}>Enter Account Details</Text>

          <Text style={styles.label}>Account Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter account number"
            placeholderTextColor={'#8E8F96'}
            value={accountDetails.number}
            onChangeText={text => setAccountDetails(prev => ({ ...prev, number: text }))}
          />

          <Text style={styles.label}>Name on Account</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            placeholderTextColor={'#8E8F96'}
            value={accountDetails.name}
            onChangeText={(text) => setAccountDetails({ ...accountDetails, name: text })}
          />

          <Text style={styles.label}>Address Lookup</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter address lookup"
            placeholderTextColor={'#8E8F96'}
            value={accountDetails.address}
            onChangeText={(text) => setAccountDetails({ ...accountDetails, address: text })}
          />

          <TouchableOpacity
            style={[(accountDetails.number && accountDetails.name && accountDetails.address) ? styles.continueButton : styles.continueDisabledButton]}
            disabled={!(accountDetails.number && accountDetails.name && accountDetails.address)}
            onPress={handleSubmit}
          >
            <Text style={[(accountDetails.number && accountDetails.name && accountDetails.address) ? styles.continueText : styles.continueDisabledText]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
