import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/ServiceProviderModal.style';

export default function ServiceProviderModal({ visible, onClose, serviceName, providers, onProviderSelect }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={onClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.subtitle}>{serviceName} Bill</Text>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.closeButton}>×</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Select Provider</Text>

            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setDropdownVisible(!dropdownVisible)}
            >
              {/* Fix 3: Correct conditional rendering */}
              <Text style={{ color: selectedProvider ? 'black' : '#aaa' }}>
                {selectedProvider || 'Select Provider'}
              </Text>
              <Ionicons name="chevron-down" size={20} color="gray" />
            </TouchableOpacity>

            {dropdownVisible && (
              <View style={styles.dropdownList}>
                {/* Fix 4: Handle both string and object providers */}
                {providers.map((provider, index) => {
                  const providerName = typeof provider === 'object' ? provider.name : provider;
                  const providerId = typeof provider === 'object' ? provider.id : index;

                  return (
                    <TouchableOpacity
                      key={providerId}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setSelectedProvider(providerName);
                        setDropdownVisible(false);
                      }}
                    >
                      <Text>{providerName}</Text>
                      {selectedProvider === providerName && (
                        <Ionicons name="checkmark" size={20} color="green" />
                      )}
                    </TouchableOpacity>
                  )
                })}
              </View>
            )}

            <TouchableOpacity
              style={[styles.continueButton, { backgroundColor: selectedProvider ? '#1E6FFB' : '#ccc' }]}
              disabled={!selectedProvider}
              onPress={() => {
                onClose();
                onProviderSelect(selectedProvider); // Trigger parent callback
              }}
            >
              <Text style={[selectedProvider ? styles.continueText : styles.continueDisabledText]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  );
};