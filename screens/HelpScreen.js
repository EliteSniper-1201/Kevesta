import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styles from './styles/HelpScreen.styles'
import Header from '@/components/Header'
import { router } from 'expo-router';

export default function HelpPage() {
    const [activeTab, setActiveTab] = useState('Account Management');
    const [expanded, setExpanded] = useState('Popular Questions');

    const tabs = ['Account Management', 'Security', 'Payments'];
    const questions = [
        {
            title: 'Popular Questions',
            content: [
                'Go to Login > Forgot Password.',
                'Enter your email, follow the link to reset.',
            ],
        },
        {
            title: 'How do I enable 2FA',
            content: [],
        },
        {
            title: "Why can't I access my account?",
            content: [],
        },
    ];

    return (
        <View style={{flex: 1}}>
            <Header
                title="Help"
                onBack={() => router.push('/home')}
            />
            <ScrollView style={styles.container}>
                {/* Tabs */}
                <View style={styles.tabContainer}>
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[
                                styles.tab,
                                activeTab === tab && styles.activeTab,
                            ]}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* FAQ */}
                {questions.map((q) => (
                    <View key={q.title} style={styles.accordion}>
                        <TouchableOpacity onPress={() => setExpanded(expanded === q.title ? null : q.title)}>
                            <Text style={styles.accordionTitle}>{q.title}</Text>
                        </TouchableOpacity>
                        {expanded === q.title && (
                            <View style={styles.accordionContent}>
                                {q.content.length > 0 ? (
                                    q.content.map((line, index) => <Text key={index} style={styles.contentText}>• {line}</Text>)
                                ) : (
                                    <Text style={styles.contentText}>Coming soon...</Text>
                                )}
                            </View>
                        )}
                    </View>
                ))}

                {/* Support Options */}
                <View style={styles.helpSection}>
                    <Text style={styles.needHelp}>Need more help?</Text>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>📞 Contact Support</Text>
                        <Text style={styles.cardText}>+1-800-123-4567</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>💬 Chat with Us</Text>
                        <TouchableOpacity onPress={() => Linking.openURL('https://example.com/chat')}>
                            <Text style={styles.linkText}>Click here to chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>📧 Email Support</Text>
                        <Text style={styles.cardText}>support@example.com</Text>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
};
