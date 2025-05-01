import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import Header from '@/components/Header';
import styles from './styles/TermsConditionsScreen.styles'

export default function TermsAndConditions() {
    return (
        <View style={{flex: 1}}>
            <Header
                title="Terms and Conditions"
                onBack={() => router.push('/home')}
            />
            <ScrollView contentContainerStyle={styles.container}>

                {/* Section 1 */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
                    <Text style={styles.bodyText}>
                        By creating an account or using the dashboard, you agree to these terms and conditions,
                        our privacy policy, and any additional guidelines or rules provided.
                    </Text>
                </View>

                {/* Section 2 */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>2. User Accounts</Text>
                    <Text style={styles.subSectionTitle}>Account Responsibility</Text>
                    <Text style={styles.bodyText}>
                        You are responsible for maintaining the confidentiality of your account information,
                        including your username and password.
                    </Text>

                    <Text style={styles.subSectionTitle}>Eligibility</Text>
                    <Text style={styles.bodyText}>
                        You must be at least 18 years old or meet the legal age requirement in your jurisdiction
                        to use this service.
                    </Text>

                    <Text style={styles.subSectionTitle}>Account Termination</Text>
                    <Text style={styles.bodyText}>
                        We reserve the right to suspend or terminate your account if you breach these terms.
                    </Text>
                </View>

                {/* Section 3 */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>3. Use of Services</Text>
                    <Text style={styles.subSectionTitle}>Permitted Use</Text>
                    <Text style={styles.bodyText}>
                        You are responsible for maintaining the confidentiality of your account information,
                        including your username and password.
                    </Text>

                    <Text style={styles.subSectionTitle}>Prohibited Activities</Text>
                    <Text style={styles.bodyText}>
                        Unauthorized access or reverse engineering of the platform.
                    </Text>
                </View>

                {/* Section 4 */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>4. Data Privacy</Text>
                    <Text style={styles.bodyText}>
                        Your data is protected under our Privacy Policy. By using the dashboard, you consent
                        to the collection and use of your information as outlined in the policy.
                    </Text>
                </View>

                {/* Section 5 */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>5. Fees and Payments</Text>
                    <Text style={styles.bodyText}>
                        Certain features may require payment.
                    </Text>
                </View>
            </ScrollView>
        </View>

    );
};
