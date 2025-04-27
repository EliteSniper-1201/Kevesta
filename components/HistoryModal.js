import React from 'react';
import { Modal, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '@/components/styles/HistoryModal.style'

export default function HistoryModal({ visible, onClose, historyData, action }) {
    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Purchase History</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Feather name="x" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        {historyData.map((item) => (
                            <TouchableOpacity key={item.id} style={styles.historyItem} onPress={action}>
                                <View style={styles.historyDetails}>
                                    <View style={{ flexDirection: 'row', gap: 16 }}>
                                        <Image source={require('@/assets/icons/MasterCard2.png')} />
                                        <View>
                                            <Text style={styles.historyAmount}>Virtual Card</Text>
                                            <Text style={styles.historyItemTitle}>{item.amount}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.historyDate}>{item.date}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};
