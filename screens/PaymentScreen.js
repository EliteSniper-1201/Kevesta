import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import TabButton from '@/components/TabButton'
import styles from './styles/PaymentScreen.styles'
import QuickActionButton from '@/components/QuickActionButton'
import { Feather } from '@expo/vector-icons'

const tabButton = { btn1: 'Organization', btn2: 'History' };

export default function PaymentScreen() {
    const [activeTab, setActiveTab] = useState(tabButton.btn1);
    const quickActions = [
        { label: 'Electricity', icon: require('@/assets/icons/outlet.png'), },
        { label: 'Gas', icon: require('@/assets/icons/gas-stove.png') },
        { label: 'Water', icon: require('@/assets/icons/tap.png') },
        { label: 'Internet', icon: require('@/assets/icons/globe.png') },
        { label: 'Telephone', icon: require('@/assets/icons/telephone.png') },
        { label: 'TV', icon: require('@/assets/icons/tv 1.png') },
        { label: 'Credit Card', icon: require('@/assets/icons/credit-card 1.png') },
        { label: 'Govt. Fees', icon: require('@/assets/icons/receipt.png') },
        { label: 'Insurance', icon: require('@/assets/icons/shield-tick.png') },
        { label: 'Tracker', icon: require('@/assets/icons/location.png') },
        { label: 'Others', icon: require('@/assets/icons/cards.png') },
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
                                    setSelectedAsset(item);
                                    setShowAmountModal(true);
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
                        <Text style={styles.sectionTitle}>All Organizations</Text>
                        <View style={styles.quickActionsGrid}>
                            {quickActions.map((item, index) => (
                                <QuickActionButton key={index} {...item} />
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
        </View>
    );
};
