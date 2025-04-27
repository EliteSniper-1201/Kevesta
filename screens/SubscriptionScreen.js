import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import TabButton from '@/components/TabButton'
import styles from './styles/PaymentScreen.styles'
import QuickActionButton from '@/components/QuickActionButton'
import { Feather } from '@expo/vector-icons'
import SubscriptionModal from '@/components/SubscriptionModal';
import PaymentMethodModal from '@/components/PaymentMethodModal'
import SubscriptionConfirmationModal from '@/components/SubscriptionConfirmationModal';
import SuccessModal from '@/components/SuccessModal'
import DetailsModal from '@/components/DetailsModal';

const tabButton = { btn1: 'Subscriptions', btn2: 'History' };

export default function PaymentScreen() {
    const [activeTab, setActiveTab] = useState(tabButton.btn1);
    const [selectedService, setSelectedService] = useState('');
    const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
    const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [paymentAmount, setPaymentAmount] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedDetails, setSelectedDetails] = useState(null);

    const active = [
        { label: 'Electricity', icon: require('@/assets/icons/outlet.png'), action: () => setShowSubscriptionModal(true) },
        { label: 'Gas', icon: require('@/assets/icons/gas-stove.png'), action: () => setShowSubscriptionModal(true) },
        { label: 'Water', icon: require('@/assets/icons/tap.png'), action: () => setShowSubscriptionModal(true) },
    ];
    const all = [
        { label: 'Electricity', icon: require('@/assets/icons/outlet.png'), action: () => setShowSubscriptionModal(true) },
        { label: 'Gas', icon: require('@/assets/icons/gas-stove.png'), action: () => setShowSubscriptionModal(true) },
        { label: 'Water', icon: require('@/assets/icons/tap.png'), action: () => setShowSubscriptionModal(true) },
        { label: 'Internet', icon: require('@/assets/icons/globe.png'), action: () => setShowSubscriptionModal(true) },
    ];
    const paymentHistory = [
        { service: 'Streaming', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/MasterCard2.png'), },
        { service: 'Streaming', date: 'Jun 24, 2024', amount: '$66.00', status: 'Pending', icon: require('@/assets/icons/VISA2.png'), },
        { service: 'Streaming', date: 'Jun 24, 2024', amount: '$66.00', status: 'Failed', icon: require('@/assets/icons/MasterCard2.png'), },
        { service: 'Streaming', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/Paypal2.png'), },
        { service: 'Streaming', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/VISA2.png'), },
        { service: 'Streaming', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/MasterCard2.png'), },
        { service: 'Streaming', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/VISA2.png'), },
        { service: 'Streaming', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/MasterCard2.png'), },
    ];

    const handlePaymentConfirmation = () => {
        setShowConfirmationModal(false);
        setShowSubscriptionModal(false);
        setPaymentAmount('');
        setSelectedPaymentMethod(null);
        setShowConfirmationModal(false);
        setShowSuccessModal(true);
        setPaymentAmount('');
        setSelectedPaymentMethod(null);
    };

    const transactionDetails = {
        date: 'Jun 24, 2024',
        accountNumber: '0x12*********',
        paymentMethod: 'Mastercard',
        billFor: 'Netflix',
        amount: '$10.00',
        status: 'Active'
    };

    const renderHistoryItem = ({ item }) => {

        return (
            <View>
                <View style={styles.itemContainer} >
                    <View style={{ flexDirection: 'row', gap: 16 }} >
                        <View>
                            <Image source={item.icon} style={{ width: 44, height: 44 }} />
                        </View>
                        <View>
                            <Text style={styles.service}>{item.service}</Text>
                            <Text style={styles.amount}>{item.amount}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={[styles.dateTag]}>
                            <Text style={[styles.dateText]}>{item.date}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 8 }}>
                            <Text style={styles.detailsText}>Details</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setSelectedDetails(item);
                                    setShowDetailsModal(true);
                                }}
                            >
                                <Image source={require('@/assets/icons/Vector.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Divider style={styles.divider} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TabButton
                {...tabButton}
                activeTab={activeTab}
                onTabChange={(tab) => setActiveTab(tab)}
            />

            {activeTab === tabButton.btn1 ? (
                <ScrollView>
                    <View style={styles.searchBox}>
                        <Feather name="search" size={20} color="#999" />
                        <TextInput placeholder="Search here" style={styles.input} />
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Active Subscription</Text>
                        <View style={styles.quickActionsGrid}>
                            {active.map((item, index) => (
                                <QuickActionButton
                                    key={index}
                                    {...item}
                                    onPress={item.action}
                                />
                            ))}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>All Subscription</Text>
                        <View style={styles.quickActionsGrid}>
                            {all.map((item, index) => (
                                <QuickActionButton
                                    key={index}
                                    {...item}
                                    onPress={item.action}
                                />
                            ))}
                        </View>
                    </View>
                </ScrollView>
            ) : (
                <FlatList
                    data={paymentHistory}
                    renderItem={renderHistoryItem}
                    keyExtractor={(item) => item.service}
                />
            )}
            <SubscriptionModal
                visible={showSubscriptionModal}
                onClose={() => setShowSubscriptionModal(false)}
                onContinue={() => {
                    // Handle subscription purchase
                    setShowSubscriptionModal(false);
                    setShowPaymentMethodModal(true);
                }}
            />

            <PaymentMethodModal
                visible={showPaymentMethodModal}
                onClose={() => setShowPaymentMethodModal(false)}
                onBack={() => {
                    setShowPaymentMethodModal(false);
                    setShowSubscriptionModal(true);
                }}
                onPaymentSelect={setSelectedPaymentMethod}
                onRequestPayment={() => {
                    setShowPaymentMethodModal(false);
                    setShowConfirmationModal(true);
                }}
            />

            <SubscriptionConfirmationModal
                visible={showConfirmationModal}
                onClose={() => setShowConfirmationModal(false)}
                onConfirm={handlePaymentConfirmation}
                onEdit={() => {
                    setShowConfirmationModal(false);
                    setShowSubscriptionModal(true);
                }}
            />

            <SuccessModal
                visible={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                completedObject='Your purchase'
            />

            <DetailsModal
                visible={showDetailsModal}
                onClose={() => setShowDetailsModal(false)}
                details={transactionDetails}
            />
        </View>
    );
};
