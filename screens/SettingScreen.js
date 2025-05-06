import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Switch,
    Alert,
    ScrollView,
} from 'react-native';
import TabButtons from '@/components/TabButton';
import styles from './styles/SettingScreen.style'

export default function SettingsScreen() {
    const [tab, setTab] = useState('Dashboard');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [is2FAEnabled, setIs2FAEnabled] = useState(true);
    const [isBiometricEnabled, setIsBiometricEnabled] = useState(true);
    const [emailVerification, setEmailVerification] = useState(true);
    const [smsVerification, setSmsVerification] = useState(true);
    const [faceRecognition, setFaceRecognition] = useState(true);
    const [isLightTheme, setIsLightTheme] = useState(true);

    useEffect(() => {
        if (!is2FAEnabled) {
            setEmailVerification(false);
            setSmsVerification(false);
        }
    }, [is2FAEnabled]);

    useEffect(() => {
        if (!isBiometricEnabled) {
            setFaceRecognition(false);
        }
    }, [isBiometricEnabled]);

    const handleSave = () => {
        if (!username.trim()) {
            Alert.alert('Error', 'Username cannot be empty');
            return;
        }
        Alert.alert('Info Saved', `Username: ${username}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Settings</Text>
            </View>

            <TabButtons
                btn1="Dashboard"
                btn2="Security"
                activeTab={tab}
                onTabChange={setTab}
            />

            <ScrollView style={styles.content}>
                {tab === 'Dashboard' ? (
                    <>
                        <Text style={styles.sectionTitle}>Enter Account Details</Text>

                        <Text style={styles.label}>Username</Text>
                        <TextInput style={styles.input} value={username} onChangeText={setUsername} />

                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} value={email} onChangeText={setEmail} />

                        <Text style={styles.label}>Phone number</Text>
                        <TextInput style={styles.input} value={phone} onChangeText={setPhone} />

                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        <TouchableOpacity
                            style={[
                                styles.saveButton,
                                !username.trim() && styles.disabledButton
                            ]}
                            onPress={handleSave}
                            disabled={!username.trim()}
                        >
                            <Text style={styles.saveButtonText}>Save Info</Text>
                        </TouchableOpacity>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Security</Text>
                            <View style={styles.row}>
                                <Text style={styles.optionText}>Manage 2FA</Text>
                                <Switch value={is2FAEnabled} onValueChange={setIs2FAEnabled} />
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.optionText}>Biometric Login</Text>
                                <Switch value={isBiometricEnabled} onValueChange={setIsBiometricEnabled} />
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.optionText}>Theme</Text>
                                <View style={styles.themeSwitch}>
                                    <TouchableOpacity
                                        style={[styles.themeOption, !isLightTheme && styles.activeTheme]}
                                        onPress={() => setIsLightTheme(false)}
                                    >
                                        <Text>Dark</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.themeOption, isLightTheme && styles.activeTheme]}
                                        onPress={() => setIsLightTheme(true)}
                                    >
                                        <Text>Light</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </>
                ) : (
                    <>
                        <Text style={styles.sectionTitle}>Two-Factor Authentication</Text>
                        <View style={styles.card}>
                            <View style={styles.row}>
                                <Text style={styles.optionText}>Two-Factor Authentication</Text>
                                <Switch value={is2FAEnabled} onValueChange={setIs2FAEnabled} />
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.subOptionText}>Email Verification</Text>
                                <Switch
                                    value={emailVerification}
                                    onValueChange={setEmailVerification}
                                    disabled={!is2FAEnabled}
                                />
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.subOptionText}>SMS Verification</Text>
                                <Switch
                                    value={smsVerification}
                                    onValueChange={setSmsVerification}
                                    disabled={!is2FAEnabled}
                                />
                            </View>
                        </View>

                        <Text style={styles.sectionTitle}>Biometric Login</Text>
                        <View style={styles.card}>
                            <View style={styles.row}>
                                <Text style={styles.optionText}>Biometric Login</Text>
                                <Switch value={isBiometricEnabled} onValueChange={setIsBiometricEnabled} />
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.subOptionText}>Enable Face Recognition</Text>
                                <Switch
                                    value={faceRecognition}
                                    onValueChange={setFaceRecognition}
                                    disabled={!isBiometricEnabled}
                                />
                            </View>
                        </View>
                    </>
                )}
            </ScrollView>
        </View>
    );
}