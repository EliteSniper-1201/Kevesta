import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles/WithdrawalConfirmationModal.style';

export default function WithdrawalConfirmationModal({ visible, onConfirm, onCancel, asset, paymentMethod, amount }) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onCancel}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>Confirmation</Text>
                        <TouchableOpacity onPress={onCancel}>
                            <Text style={styles.closeButton}>×</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.subtitle}>Please check to proceed the trade</Text>

                    <View style={styles.detailsContainer}>
                        <Text style={styles.sectionTitle}>Asset</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.detailText}>
                                {asset?.fullname} ({asset?.name}) 
                            </Text>
                            <Text style={styles.amount}>${amount}</Text>
                        </View>


                        <Text style={styles.sectionTitle}>Payment Method</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.detailText}>
                            {paymentMethod?.name} 
                        </Text>
                        <Text style={styles.cardNumber}>1116 **** ****{paymentMethod?.last4}</Text>
                        </View>
                        
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
