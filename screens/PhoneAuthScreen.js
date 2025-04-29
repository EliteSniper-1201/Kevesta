import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebase, auth, firebaseConfig } from '../firebase';

export default function PhoneAuthScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const recaptchaVerifier = useRef(null);

  // Send OTP using Firebase v8 syntax
  const sendVerification = async () => {
    try {
      const formattedPhone = phoneNumber.startsWith('+') 
      ? phoneNumber 
      : `+${phoneNumber.replace(/[^0-9]/g, '')}`;
      
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      Alert.alert('Success', 'Verification code sent!');
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  // Confirm OTP using Firebase v8 syntax
  const confirmCode = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await auth.signInWithCredential(credential);
      Alert.alert('Success', 'Logged in!');
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
        placeholder="Phone number (e.g., +1234567890)"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={{ marginBottom: 10, padding: 10, fontSize: 18 }}
      />

      <Button
        title="Send OTP"
        disabled={!phoneNumber}
        onPress={sendVerification}
      />

      {verificationId && (
        <>
          <TextInput
            placeholder="Verification Code"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
            style={{ marginVertical: 10, padding: 10, fontSize: 18 }}
          />
          
          <Button
            title="Confirm Code"
            disabled={!verificationCode}
            onPress={confirmCode}
          />
        </>
      )}
    </View>
  );
};
