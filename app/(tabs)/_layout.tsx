import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { AbletonColors } from '@/constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: AbletonColors.orange,
        tabBarInactiveTintColor: AbletonColors.textSecondary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: AbletonColors.tabBar,
          borderTopColor: AbletonColors.cardBorder,
          borderTopWidth: 1,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          letterSpacing: 0.5,
        },
      }}>
      <Tabs.Screen
        name="plugins"
        options={{
          title: 'Plugins',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="music.note" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
