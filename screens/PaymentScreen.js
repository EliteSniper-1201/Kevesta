import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import TabButton from '@/components/TabButton'
import styles from './styles/PaymentScreen.styles'
import QuickActionButton from '@/components/QuickActionButton'
import { Feather } from '@expo/vector-icons'
import ServiceProviderModal from '@/components/ServiceProviderModal';
import AccountDetailsModal from '@/components/AccountDetailsModal';
import PaymentAmountModal from '@/components/PaymentAmountModal';
import PaymentMethodModal from '@/components/PaymentMethodModal';
import ConfirmationModalBill from '@/components/ConfirmationModalBill';
import PaymentSuccessModal from '@/components/SuccessModal';
import DetailsModal from '@/components/DetailsModal';
import { router } from 'expo-router';
import Header from '@/components/Header';

const tabButton = { btn1: 'Organization', btn2: 'History' };

export default function PaymentScreen() {

    const [activeTab, setActiveTab] = useState(tabButton.btn1);
    const [showProviderModal, setShowProviderModal] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [showAmountModal, setShowAmountModal] = useState(false);
    const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState('');
    const [accountDetails, setAccountDetails] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedDetails, setSelectedDetails] = useState(null);

    const transactionDetails = {
        date: 'Jun 24, 2024',
        accountNumber: '0x12*********',
        paymentMethod: 'Mastercard',
        billFor: 'Netflix',
        amount: '$10.00',
        status: 'Active'
    };

    const quickActions = [
        { label: 'Electricity', icon: require('@/assets/icons/outlet.png'), action: (() => { setSelectedService('Electricity'); setShowProviderModal(true); }) },
        { label: 'Gas', icon: require('@/assets/icons/gas-stove.png'), action: (() => { setSelectedService('Gas'); setShowProviderModal(true); }) },
        { label: 'Water', icon: require('@/assets/icons/tap.png'), action: (() => { setSelectedService('Water'); setShowProviderModal(true); }) },
        { label: 'Internet', icon: require('@/assets/icons/globe.png'), action: (() => { setSelectedService('Internet'); setShowProviderModal(true); }) },
        { label: 'Telephone', icon: require('@/assets/icons/telephone.png'), action: (() => { setSelectedService('Telephone'); setShowProviderModal(true); }) },
        { label: 'TV', icon: require('@/assets/icons/tv 1.png'), action: (() => { setSelectedService('TV'); setShowProviderModal(true); }) },
        { label: 'Credit Card', icon: require('@/assets/icons/credit-card 1.png'), action: (() => { setSelectedService('Credit Card'); setShowProviderModal(true); }) },
        { label: 'Govt. Fees', icon: require('@/assets/icons/receipt.png'), action: (() => { setSelectedService('Govt. Fees'); setShowProviderModal(true); }) },
        { label: 'Insurance', icon: require('@/assets/icons/shield-tick.png'), action: (() => { setSelectedService('Insurance'); setShowProviderModal(true); }) },
        { label: 'Tracker', icon: require('@/assets/icons/location.png'), action: (() => { setSelectedService('Tracker'); setShowProviderModal(true); }) },
        { label: 'Others', icon: require('@/assets/icons/cards.png'), action: (() => { setSelectedService('Others'); setShowProviderModal(true); }) },
    ];
    const paymentHistory = [
        { service: 'Electricity', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/MasterCard2.png'), },
        { service: 'Gas', date: 'Jun 24, 2024', amount: '$66.00', status: 'Pending', icon: require('@/assets/icons/VISA2.png'), },
        { service: 'Water', date: 'Jun 24, 2024', amount: '$66.00', status: 'Failed', icon: require('@/assets/icons/MasterCard2.png'), },
        { service: 'Internet', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/Paypal2.png'), },
        { service: 'Telephone', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/VISA2.png'), },
        { service: 'TV', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/MasterCard2.png'), },
        { service: 'Credit Card', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/VISA2.png'), },
        { service: 'Insurance', date: 'Jun 24, 2024', amount: '$66.00', status: 'Complete', icon: require('@/assets/icons/MasterCard2.png'), },
    ];
    const providers = {
        Electricity: [
            { name: 'Vottenfall', id: 1 },
            { name: 'EDF', id: 2 },
            { name: 'E.ON for electricity', id: 3 },
        ],
        Gas: [
            { name: 'Vottenfall', id: 1 },
            { name: 'EDF', id: 2 },
            { name: 'E.ON for electricity', id: 3 },
        ],
        Water: [
            { name: 'Vottenfall', id: 1 },
            { name: 'EDF', id: 2 },
            { name: 'E.ON for electricity', id: 3 },
        ],
        Internet: [
            { name: 'Vottenfall', id: 1 },
            { name: 'EDF', id: 2 },
            { name: 'E.ON for electricity', id: 3 },
        ],
        Telephone: [
            { name: 'Vottenfall', id: 1 },
            { name: 'EDF', id: 2 },
            { name: 'E.ON for electricity', id: 3 },
        ],
        TV: [
            { name: 'Vottenfall', id: 1 },
            { name: 'EDF', id: 2 },
            { name: 'E.ON for electricity', id: 3 },
        ],
        CreditCard: [
            { name: 'Vottenfall', id: 1 },
            { name: 'EDF', id: 2 },
            { name: 'E.ON for electricity', id: 3 },
        ],
        GovtFees: [
            { name: 'Vottenfall', id: 1 },
            { name: 'EDF', id: 2 },
            { name: 'E.ON for electricity', id: 3 },
        ],
        Insurance: [
            { name: 'Vottenfall', id: 1 },
            { name: 'EDF', id: 2 },
            { name: 'E.ON for electricity', id: 3 },
        ],
        Tracker: [
            { name: 'Vottenfall', id: 1 },
            { name: 'EDF', id: 2 },
            { name: 'E.ON for electricity', id: 3 },
        ],
        Others: [
            { name: 'Vottenfall', id: 1 },
            { name: 'EDF', id: 2 },
            { name: 'E.ON for electricity', id: 3 },
        ],
    };

    const handlePaymentConfirmation = () => {
        console.log('Processing payment:', {
            service: selectedService,
            provider: selectedProvider,
            accountDetails,
            amount: paymentAmount,
            paymentMethod: selectedPaymentMethod
        });

        // Reset all states
        setShowConfirmationModal(false);
        setSelectedService('');
        setPaymentAmount('');
        setAccountDetails({ number: '', name: '', address: '' });
        setSelectedPaymentMethod(null);
        setShowConfirmationModal(false);
        setShowSuccessModal(true);
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
        <>
            <Header
                title="Payment"
                onBack={() => router.push('/home')}
            />
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
                            <Text style={styles.sectionTitle}>All Organizations</Text>
                            <View style={styles.quickActionsGrid}>
                                {quickActions.map((item, index) => (
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
                <ServiceProviderModal
                    visible={showProviderModal}
                    onClose={() => setShowProviderModal(false)}
                    serviceName={selectedService}
                    providers={providers[selectedService] || []}
                    onProviderSelect={(provider) => {
                        setSelectedProvider(provider);
                        setShowAccountModal(true);
                    }}
                />
                <AccountDetailsModal
                    visible={showAccountModal}
                    onClose={() => setShowAccountModal(false)}
                    provider={selectedProvider}
                    onContinue={(details) => {
                        setAccountDetails(details);
                        setShowAccountModal(false);
                        setShowAmountModal(true);
                    }}
                />
                <PaymentAmountModal
                    visible={showAmountModal}
                    onClose={() => setShowAmountModal(false)}
                    provider={selectedService}
                    amount={paymentAmount}
                    setAmount={setPaymentAmount}
                    onNext={() => {
                        setShowAmountModal(false);
                        setShowPaymentMethodModal(true);
                    }}
                />

                <PaymentMethodModal
                    visible={showPaymentMethodModal}
                    onClose={() => setShowPaymentMethodModal(false)}
                    onBack={() => {
                        setShowPaymentMethodModal(false);
                        setShowAmountModal(true);
                    }}
                    onPaymentSelect={setSelectedPaymentMethod}
                    onRequestPayment={() => {
                        setShowPaymentMethodModal(false);
                        setShowConfirmationModal(true);
                    }}
                />

                <ConfirmationModalBill
                    visible={showConfirmationModal}
                    amount={paymentAmount ? `$${paymentAmount}` : '$0.00'}
                    onConfirm={() => {
                        setShowConfirmationModal(false);
                        setShowSuccessModal(true);
                    }}
                    onCancel={() => setShowConfirmationModal(false)}
                    providerDetails={{
                        serviceType: selectedService,
                        providerName: selectedProvider,
                        accountNumber: accountDetails?.number,
                    }}
                />

                <PaymentSuccessModal
                    visible={showSuccessModal}
                    onClose={() => setShowSuccessModal(false)}
                    completedObject='Bill Payment'
                />

                <DetailsModal
                    visible={showDetailsModal}
                    onClose={() => setShowDetailsModal(false)}
                    details={transactionDetails}
                />
            </View>
        </>

    );
};
