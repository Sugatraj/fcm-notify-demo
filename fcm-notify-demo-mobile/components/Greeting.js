import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { getTypography } from '../theme/theme';

export const Greeting = () => {
  const { theme } = useTheme();
  const userName = 'John'; // Replace with actual user name

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 16,
    },
    greeting: {
      ...getTypography('display', 'small'),
      color: theme.colors.onSurface,
      marginBottom: 4,
    },
    message: {
      ...getTypography('title', 'medium'),
      color: theme.colors.onSurfaceVariant,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{getGreeting()}</Text>
      <Text style={styles.message}>Welcome back, {userName}</Text>
    </View>
  );
}; 