import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { getElevation, getTypography } from '../theme/theme';

export const Greeting = () => {
  const [greeting, setGreeting] = useState('');
  const { theme, isDark } = useTheme();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: 16,
      marginBottom: 20,
    },
    greetingCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.shape.corner.extraLarge,
      padding: 16,
      ...getElevation('level1', isDark ? 'dark' : 'light'),
    },
    name: {
      ...getTypography('headline', 'small'),
      color: theme.colors.primary,
      marginBottom: 4,
    },
    message: {
      ...getTypography('title', 'medium'),
      color: theme.colors.onSurfaceVariant,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.greetingCard}>
        <Text style={styles.name}>hey, RAJX</Text>
        <Text style={styles.message}>{greeting}</Text>
      </View>
    </View>
  );
}; 