import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles/ConfirmationModal.style';

export default function ConfirmationModal({ visible, onConfirm, onCancel, asset, paymentMethod, amount }) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onCancel}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Confirmation</Text>
                    <Text style={styles.subtitle}>Please check to proceed the trade</Text>

                    <View style={styles.detailsContainer}>
                        <Text style={styles.sectionTitle}>Asset</Text>
                        <Text style={styles.detailText}>
                            {asset?.fullname} ({asset?.name}) ${asset?.amount}
                        </Text>

                        <Text style={styles.sectionTitle}>Payment Method</Text>
                        <Text style={styles.detailText}>
                            {paymentMethod?.name} **** {paymentMethod?.last4}
                        </Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.confirmButton]}
                            onPress={onConfirm}
                        >
                            <Text style={styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onCancel}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
