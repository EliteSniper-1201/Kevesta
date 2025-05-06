import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
    Dimensions
} from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import styles from './styles/EventScreen.style';
import BottomNav from '@/components/BottomNav';
import { router } from 'expo-router';

const cities = [
    { id: '1', name: 'London', flag: '🇬🇧', image: require('@/assets/images/london.jpg') },
    { id: '2', name: 'New York', flag: '🇺🇸', image: require('@/assets/images/newyork.jpg') },
    { id: '3', name: 'Paris', flag: '🇫🇷', image: require('@/assets/images/paris.jpg') },
    { id: '4', name: 'Tokyo', flag: '🇯🇵', image: require('@/assets/images/tokyo.jpg') },
    { id: '5', name: 'Singapore', flag: '🇸🇬', image: require('@/assets/images/singapore.jpg') },
    { id: '6', name: 'Rome', flag: '🇮🇹', image: require('@/assets/images/rome.jpg') },
    { id: '7', name: 'Madrid', flag: '🇪🇸', image: require('@/assets/images/madrid.jpg') },
    { id: '8', name: 'Barcelona', flag: '🇪🇸', image: require('@/assets/images/barcelona.jpg') },
];

export default function EventScreen() {
    const [activeTab, setActiveTab] = useState('events');
    // const [searchQuery, setSearchQuery] = useState('');
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

    // const filteredCities = cities.filter(city =>
    //     city.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    const handleCityPress = (city) => {
        router.push({
            pathname: '/eventlist',
            params: { city: city.name }
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('@/assets/images/night.png')}
                style={[styles.background, { height: windowHeight * 0.4 }]}
                resizeMode="cover"
            >
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => router.back()}
                        style={styles.backButton}
                    >
                        <Feather name="arrow-left" size={20} color="white" />
                        <Text style={styles.title}>Event</Text>
                    </TouchableOpacity>

                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.topButton}>
                            <Image
                                source={require('@/assets/icons/square.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.topButton}>
                            <Image
                                source={require('@/assets/icons/receipt-2.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.headerContent}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Discover Nightlife</Text>
                        <Text style={styles.headerTitle}>In Your City</Text>
                    </View>

                    <TouchableOpacity style={styles.searchContainer} activeOpacity={0.8} onPress={() => router.push('/map')}>
                        <MaterialIcons
                            name="search"
                            size={20}
                            color="rgba(255, 255, 255, 1)"
                        />
                        {/* <TextInput
                            style={styles.searchInput}
                            placeholder="Search here"
                            placeholderTextColor="rgba(255, 255, 255, 0.7)"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        /> */}
                        <Text style={styles.searchInput}>Search here</Text>
                    </TouchableOpacity>
                </View>


            </ImageBackground>

            <Text style={styles.selectText}>Select Your City</Text>

            <FlatList
                data={cities}
                numColumns={2}
                keyExtractor={(item) => item.id}
                contentContainerStyle={[styles.grid, { paddingBottom: 20 }]}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.cityCard}
                        onPress={() => handleCityPress(item)}
                    >
                        <Image
                            source={item.image}
                            style={styles.cityImage}
                            resizeMode="cover"
                        />
                        <Text style={styles.cityText}>
                            {item.flag} {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <BottomNav
                activeTab={activeTab}
                onTabPress={(tabName) => setActiveTab(tabName)}
            />
        </SafeAreaView>
    );
}