import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { AbletonColors } from '@/constants/theme';

const AbletonTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: AbletonColors.orange,
    background: AbletonColors.background,
    card: AbletonColors.tabBar,
    text: AbletonColors.textPrimary,
    border: AbletonColors.cardBorder,
  },
};

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <ThemeProvider value={AbletonTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="light" backgroundColor={AbletonColors.background} />
    </ThemeProvider>
  );
}
