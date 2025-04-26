import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { auth } from '../firebase';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

const PhoneAuthScreen = () => {
    const  [phoneNumber,setPhoneNumber] = useState('');
    const  [verificationId,setVerificationId] = useState(null);
    const  [verificationCode,setVerificationCode] = useState('');
    const recaptchaVerifier = React.useRef(null);

    const sendVerification = async () => {
        try {
            const phoneProvider = new auth.PhoneAuthProvider(auth);
            const verificationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            Alert.alert('Verification code sent to your phone');
        } catch (err) {
            Alert.alert('Error', err.message);
        }
    };

    const confirmCode = async () => {
        try {
            const credential = auth.PhoneAuthProvider.credential(
                verificationId,
                verificationCode
            );
            await auth().signInWithCredential(credential);
            Alert.alert('Login successful!');
        } catch (err) {
            Alert.alert('Error', err.message);
        }
    };

    return (
        <View style={{ padding: 20, marginTop: 50 }}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            
            <TextInput
                placeholder="Phone number with country code"
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                autoCompleteType="tel"
                style={{ marginBottom: 10, padding: 10, fontSize: 18 }}
            />
            
            <Button
                title="Send Verification Code"
                disabled={!phoneNumber}
                onPress={sendVerification}
            />
            
            <TextInput
                placeholder="Verification Code"
                onChangeText={setVerificationCode}
                keyboardType="number-pad"
                style={{ marginVertical: 10, padding: 10, fontSize: 18 }}
            />
            
            <Button
                title="Confirm Verification Code"
                disabled={!verificationCode}
                onPress={confirmCode}
            />
        </View>
    );
};

export default PhoneAuthScreen;
