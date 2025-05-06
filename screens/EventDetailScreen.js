import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams } from 'expo-router';

export default function EventDetailScreen() {
    const params = useLocalSearchParams();
    const event = JSON.parse(params.event);
    const [ticketType, setTicketType] = useState('Standard');
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const images = event.images;

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (activeIndex + 1) % images.length;
            setActiveIndex(newIndex);
            flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const renderItem = ({ item }) => (
        <Image source={item} style={styles.eventImage} resizeMode="cover" />
    );

    return (
        <ScrollView style={styles.container}>
            {/* Image Carousel */}
            <FlatList
                ref={flatListRef}
                data={images}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    const contentOffset = event.nativeEvent.contentOffset.x;
                    const index = Math.round(contentOffset / styles.eventImage.width);
                    setActiveIndex(index);
                }}
                keyExtractor={(item, index) => index.toString()}
            />

            {/* Pagination Dots */}
            <View style={styles.pagination}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor: index === activeIndex ? '#007AFF' : '#D3D3D3' }
                        ]}
                    />
                ))}
            </View>

            <View style={styles.tagRow}>
                <Text style={styles.ticketAvailable}>Ticket Available</Text>
                <Text style={styles.countdown}>2 Day : 4 Hour : 3 Second</Text>
            </View>

            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.description}>
                Indulge in a culinary journey with top chefs, wine tastings, and live music in the heart of NYC. Experience gourmet food, exclusive wine pairings, and interactive cooking sessions.
            </Text>

            <Text style={styles.location}>📍 {event.location}</Text>
            <Image
                source={{ uri: 'https://via.placeholder.com/300x150?text=Map' }}
                style={styles.map}
            />

            {/* Ticket Type Selector */}
            <Text style={styles.subheading}>Select Ticket Type</Text>
            <View style={styles.ticketRow}>
                <Picker
                    selectedValue={ticketType}
                    style={styles.picker}
                    onValueChange={(itemValue) => setTicketType(itemValue)}
                >
                    <Picker.Item label="Standard" value="Standard" />
                    <Picker.Item label="VIP" value="VIP" />
                </Picker>
                <Text style={styles.price}>{event.price}</Text>
            </View>

            {/* Payment Options */}
            <Text style={styles.subheading}>Payment options</Text>
            <View style={styles.paymentRow}>
                {['mastercard', 'stripe', 'apple', 'google'].map((method, i) => (
                    <Image
                        key={i}
                        source={{ uri: `https://via.placeholder.com/40x40?text=${method}` }}
                        style={styles.paymentIcon}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.purchaseButton}>
                <Text style={styles.purchaseText}>Purchase Ticket</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    eventImage: { width: '100%', height: 200 },
    pagination: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        flexDirection: 'row', 
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    tagRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
    },
    ticketAvailable: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        paddingHorizontal: 8,
        borderRadius: 4,
        fontSize: 12,
    },
    countdown: { color: '#555', fontSize: 12 },
    title: { fontSize: 20, fontWeight: '700', padding: 12 },
    description: { fontSize: 14, color: '#555', paddingHorizontal: 12, marginBottom: 8 },
    location: { fontSize: 14, paddingHorizontal: 12, marginBottom: 8 },
    map: { height: 150, marginHorizontal: 12, borderRadius: 8, marginBottom: 16 },
    subheading: { fontWeight: '600', fontSize: 14, marginLeft: 12, marginTop: 12 },
    ticketRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 12,
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
    },
    picker: { width: 150 },
    price: { fontSize: 16, fontWeight: '600' },
    paymentRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 12,
    },
    paymentIcon: { width: 40, height: 40 },
    purchaseButton: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 10,
        marginHorizontal: 12,
        marginBottom: 24,
    },
    purchaseText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
    },
});
