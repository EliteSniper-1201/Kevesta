import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    Dimensions
} from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import styles from './styles/EventScreen.style';
import BottomNav from '@/components/BottomNav';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function EventScreen() {
    const [activeTab, setActiveTab] = useState('Home');

    const cities = [
        'London',
        'New York',
        'Paris',
        'Tokyo',
        'Singapore',
        'Rome',
        'Madrid',
        'Barcelona'
    ];

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('@/assets/images/night.jpg')}
                style={[styles.background, { height: windowHeight * 0.4, width: windowWidth }]}
                resizeMode='cover'
            >
                {/* Header with menu icon */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Discover Nightlife{"\n"}In Your City</Text>
                    <View style={{ width: 24 }} />
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <MaterialIcons name="search" size={20} color="rgba(255, 255, 255, 1)" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search here"
                        placeholderTextColor="rgba(255, 255, 255, 1)"
                    />
                </View>
            </ImageBackground>
            <View style={styles.container}>
                {/* City List */}
                <FlatList
                    data={cities}
                    contentContainerStyle={styles.cityList}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.cityItem}>
                            <Text style={styles.cityText}>{item}</Text>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

                <BottomNav
                    activeTab={activeTab}
                    onTabPress={(tabName) => setActiveTab(tabName)}
                />
            </View>

        </View>
    );
};