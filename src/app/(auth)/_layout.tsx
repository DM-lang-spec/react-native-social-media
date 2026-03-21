import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="verify_email" />
      <Stack.Screen name="verify_otp" />
      <Stack.Screen name="set_password" />
    </Stack>
  );
}
