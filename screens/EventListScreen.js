import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import BottomNav from '@/components/BottomNav'
import styles from './styles/EventListScreen.styles'

const events = [
    {
        id: '1',
        date: 'Friday , 24 feb 2025',
        title: 'NYC Food & Wine Festival',
        location: 'New York City, USA.',
        price: '$30',
        img: require('@/assets/images/festival.jpg'),
        images: [
            require('@/assets/images/1.jpg'),
            require('@/assets/images/2.jpg'),
            require('@/assets/images/festival.jpg')
        ]
    },
    {
        id: '2',
        date: 'Friday , 24 feb 2025',
        title: 'NYC Food & Wine Festival',
        location: 'New York City, USA.',
        price: '$30',
        img: require('@/assets/images/festival.jpg'),
        images: [
            require('@/assets/images/1.jpg'),
            require('@/assets/images/2.jpg'),
            require('@/assets/images/festival.jpg')
        ]
    },
    {
        id: '3',
        date: 'Friday , 24 feb 2025',
        title: 'NYC Food & Wine Festival',
        location: 'New York City, USA.',
        price: '$30',
        img: require('@/assets/images/festival.jpg'),
        images: [
            require('@/assets/images/1.jpg'),
            require('@/assets/images/2.jpg'),
            require('@/assets/images/festival.jpg')
        ]
    },
];

const EventCard = ({ event }) => (
    <TouchableOpacity style={styles.card} onPress={() => router.push({
        pathname: '/eventdetail',
        params: { event: JSON.stringify({ ...event, images: event.images }) }
      })}>
        <Image source={event.img} style={styles.image} />
        <View style={styles.dateTag}>
            <Text style={styles.dateText}>{event.date}</Text>
        </View>
        <View style={styles.infoContainer}>
            <View style={styles.subinfo}>
                <Text style={styles.ticketLabel}>Ticket Available</Text>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={styles.location}>{event.location}</Text>
            </View>
            <View style={styles.subinfo}>
                <Text style={styles.price}>{event.price}</Text>
                <Text style={styles.startFrom}>Start From</Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default function EventListScreen() {
    const [activeTab, setActiveTab] = useState('events');
    const params = useLocalSearchParams();
    const city = params.city;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
            >
                <Feather name="arrow-left" size={20} color="black" />
                <Text style={styles.title}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.heading}>Things to do in <Text style={styles.city}>{city}</Text></Text>
            <FlatList
                data={events}
                renderItem={({ item }) => (
                    <EventCard event={item}/>
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
            <BottomNav
                activeTab={activeTab}
                onTabPress={(tabName) => setActiveTab(tabName)}
            />
        </View>
    );
};
