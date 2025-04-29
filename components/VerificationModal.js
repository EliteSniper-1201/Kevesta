import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import styles from './styles/VerificationModal.style'

export default function VerificationModal({ visible, onClose, onSubmit, onResend }) {
  const [code, setCode] = useState('');

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Verification</Text>

          <View style={styles.messageBox}>
            <Text style={styles.messageText}>
              We have sent a verification code to your email - demoemail@gmail.com
            </Text>
          </View>

          <Text style={styles.label}>Verification Code</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={code}
            onChangeText={setCode}
            placeholder="Enter code"
          />

          <TouchableOpacity style={[styles.submitButton, code ? styles.abledButton : styles.disabledButton]} disabled={!code} onPress={() => onSubmit(code)}>
            <Text style={[styles.submitText , code ? styles.abledText : styles.disabledText]}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onResend}>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

