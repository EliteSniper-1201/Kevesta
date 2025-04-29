import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './styles/CardDetailsModal.style'

export default function CardDetailsModal({ visible, onClose, cardDetails }) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>Details</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButton}>×</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Card Details */}
                    <View style={styles.detailRow}>
                        <View>
                            <Text style={styles.label}>BTC</Text>
                        <Text style={styles.value}>1116 **** ****</Text>
                        </View>
                        
                        <View style={styles.defaultBadge}>
                            <Text style={styles.defaultText}>Default</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    {/* Details Section */}
                    <View style={styles.section}>
                        <DetailItem label="Card" value="Bitcoin (BTC)" />
                        <DetailItem label="Status" value="Active" valueStyle={{ color: '#4CAF50' }} />
                        <DetailItem label="Currency" value="USD" />
                        <DetailItem label="Type" value="Debit" />
                        <DetailItem label="Exp. Date" value="06/2024" />
                    </View>

                    {/* Balance Section */}
                    <View style={[styles.detailRow, styles.balanceRow]}>
                        <Text style={styles.label}>Balance</Text>
                        <Text style={styles.balanceValue}>1,598,000</Text>
                    </View>


                </View>
            </View>
        </Modal>
    );
};

const DetailItem = ({ label, value, valueStyle }) => (
    <View style={styles.detailRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={[styles.value, valueStyle]}>{value}</Text>
    </View>
);
