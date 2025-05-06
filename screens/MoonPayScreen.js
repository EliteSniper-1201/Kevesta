import React, {useEffect} from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useMoonPaySdk } from '@moonpay/react-native-moonpay-sdk';
import * as WebBrowser from 'expo-web-browser';

export default function MoonPayScreen() {
    const { openWithInAppBrowser, loading, error} = useMoonPaySdk({
        sdkConfig: {
            flow: 'sell',
            environment: 'sandbox', // Change to 'production' when ready
            variant: 'overlay', // 'overlay' or 'embedded' - overlay preferred for Expo
            params: {
                apiKey: 'pk_test_53C8BPTdrgkPxs3WNugCWyVDvcqX4lq',
                baseCurrencyCode: 'usd',
                baseCurrencyAmount: '0.1',
                defaultCurrencyCode: 'eth',
                theme: 'dark',
            },
        },
        browserOpener: {
            open: async (url) => {
                await WebBrowser.openBrowserAsync(url)
            },
          },
    });

    

    const handleSell = async () => {
        try {
            await openWithInAppBrowser();
        } catch (e) {
            console.error('MoonPay SDK Error:', e);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MoonPay Off-Ramp</Text>
            <Button title="Sell Crypto" onPress={handleSell} disabled={loading} />
            {error && <Text style={styles.error}>Error: {error.message}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center'
    },
    error: {
        color: 'red',
        marginTop: 20
    }
});
