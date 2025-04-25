import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import styles from './styles/PaymentMethodModal.style'
import CustomCheckbox from '@/components/CheckBox'

export default function PaymentMethodModal({ visible, onClose, onBack }) {
    const paymentMethods = [
        { id: 1, icon: require('@/assets/icons/MasterCard.png'), name: 'Mastercard', expDate: '06/24', isDefault: true },
        { id: 2, icon: require('@/assets/icons/VISA.png'), name: 'VISA', expDate: '06/24' },
        { id: 3, icon: require('@/assets/icons/PayPal.png'), name: 'Paypal', expDate: '06/24' },
        { id: 4, icon: require('@/assets/icons/ApplePay.png'), name: 'Apple Pay', expDate: '06/24' },
        { id: 5, icon: require('@/assets/icons/GooglePay.png'), name: 'Google Pay', expDate: '06/24' },
    ];

    const [selectedItems, setSelectedItems] = useState([]);
    const handleCheck = (itemId) => {
        setSelectedItems(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
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
                    <View style={styles.header}>
                        <Text style={styles.title}>Select Payment Method</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButton}>×</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.content}>
                        <Text style={styles.sectionTitle}>Select your asset</Text>

                        {paymentMethods.map(method => (
                            <TouchableOpacity
                                key={method.id}
                                style={styles.methodCard}
                            >
                                <View style={styles.methodInfo}>
                                    <View style={{ flex: 1, flexDirection: 'row', gap: 10, }}>
                                        <CustomCheckbox
                                            key={method.id}
                                            label={method.icon}
                                            value={selectedItems.includes(method.id)}
                                            onValueChange={() => handleCheck(method.id)}
                                        />
                                        <View>
                                            <Text style={styles.methodName}>{method.name}</Text>
                                            <Text style={styles.expDate}>Exp. date {method.expDate}</Text>
                                        </View>
                                    </View>

                                    {method.isDefault && (
                                        <View style={styles.defaultBadge}>
                                            <Text style={styles.defaultText}>Default</Text>
                                        </View>
                                    )}
                                </View>
                                {method.apr && (
                                    <Text style={styles.aprText}>{method.apr}% APR</Text>
                                )}
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.requestButton]}
                        >
                            <Text style={styles.buttonText}>Request Payment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.backButton]}
                            onPress={onBack}
                        >
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </Modal>
    );
};
