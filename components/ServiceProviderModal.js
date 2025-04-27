import React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles/ServiceProviderModal.style'

export default function ServiceProviderModal({ visible, onClose, serviceName, providers }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{serviceName} Bill</Text>
          <Text style={styles.subtitle}>Select Provider</Text>

          <ScrollView style={styles.providerList}>
            {providers.map((provider, index) => (
              <TouchableOpacity
                key={index}
                style={styles.providerItem}
                onPress={() => console.log('Selected provider:', provider)}
              >
                <Text style={styles.providerName}>{provider.name}</Text>
                <Text style={styles.checkmark}>✓</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={onClose}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

