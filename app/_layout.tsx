import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="favorite"
        options={{ headerShown: true }}
      />
      <Stack.Screen 
        name="trading"
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="withdrawal"
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="payment"
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="subscription"
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="help"
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="terms"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="cards"
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="event"
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="map"
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="phoneauth"
        options={{ headerShown: true }}
      />
    </Stack>
  );
}
