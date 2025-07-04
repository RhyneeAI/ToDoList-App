import { AuthProvider } from '@/contexts/AuthContext';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splash" />
          <Stack.Screen name="login" />
          <Stack.Screen name="home" />
          <Stack.Screen name="scheduleList" />
          <Stack.Screen name="addToDoList" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
