import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import TabButton from '@/components/TabButton'
import styles from './styles/PaymentScreen.styles'

const tabButton = { btn1: 'Organization', btn2: 'History' };

export default function PaymentCategoriesScreen() {
    const [activeTab, setActiveTab] = useState(tabButton.btn1);
    const categories = [
        {
            title: 'Organization',
            items: ['Search here', 'All Organizations'],
        },
        {
            title: 'Electricity',
            items: ['Gas', 'Water', 'Internet'],
        },
        {
            title: 'Telephone',
            items: ['TV', 'Credit Card', 'Govt. Fees'],
        },
        {
            title: 'Insurance',
            items: ['Tracker', 'Others'],
        },
    ];

    return (
        <View>
            <TabButton
                {...tabButton}
                activeTab={activeTab}
                onTabChange={(tab) => setActiveTab(tab)}
            />
            <ScrollView style={styles.container}>
                {categories.map((section, index) => (
                    <View key={section.title}>
                        {/* Section Header */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>{section.title}</Text>
                        </View>

                        {/* Section Items */}
                        {section.items.map((item, itemIndex) => (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.item,
                                    itemIndex === 0 && section.title === 'Organization' && styles.searchItem
                                ]}
                            >
                                {item === 'Search here' && section.title === 'Organization' ? (
                                    <TextInput
                                        style={styles.searchInput}
                                        placeholder="Search here"
                                        placeholderTextColor="#999"
                                    />
                                ) : (
                                    <Text style={styles.itemText}>{item}</Text>
                                )}
                            </TouchableOpacity>
                        ))}

                        

                        {/* Divider between sections */}
                        {index !== categories.length - 1 && <View style={styles.divider} />}
                    </View>
                ))}
            </ScrollView>
        </View>

    );
};

