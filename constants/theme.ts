/**
 * Ableton-inspired color palette and typography constants.
 */

import { Platform } from 'react-native';

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const AbletonColors = {
  // Backgrounds
  background: '#1A1A1A',
  backgroundSecondary: '#222222',
  card: '#2A2A2A',
  cardBorder: '#333333',
  tabBar: '#111111',

  // Accent
  orange: '#FF6B00',
  orangeLight: '#FF8C33',
  orangeDim: 'rgba(255, 107, 0, 0.15)',

  // Category accents
  instrument: '#FF6B00',
  audioEffect: '#3A8FD6',
  midiEffect: '#9B59B6',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#999999',
  textMuted: '#555555',

  // Utility
  white: '#FFFFFF',
  black: '#000000',
  separator: '#2E2E2E',
};

export const Colors = {
  light: {
    text: AbletonColors.textPrimary,
    background: AbletonColors.background,
    tint: AbletonColors.orange,
    icon: AbletonColors.textSecondary,
    tabIconDefault: AbletonColors.textSecondary,
    tabIconSelected: AbletonColors.orange,
  },
  dark: {
    text: AbletonColors.textPrimary,
    background: AbletonColors.background,
    tint: AbletonColors.orange,
    icon: AbletonColors.textSecondary,
    tabIconDefault: AbletonColors.textSecondary,
    tabIconSelected: AbletonColors.orange,
  },
};
