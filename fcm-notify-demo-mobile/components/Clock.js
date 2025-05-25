import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { getElevation, getTypography } from '../theme/theme';

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  const { theme, isDark } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: 16,
      marginBottom: 20,
    },
    clockCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.shape.corner.extraLarge,
      padding: 20,
      alignItems: 'center',
      ...getElevation('level1', isDark ? 'dark' : 'light'),
    },
    time: {
      ...getTypography('display', 'small'),
      color: theme.colors.primary,
      marginBottom: 4,
    },
    date: {
      ...getTypography('title', 'medium'),
      color: theme.colors.onSurfaceVariant,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.clockCard}>
        <Text style={styles.time}>{formatTime(time)}</Text>
        <Text style={styles.date}>{formatDate(time)}</Text>
      </View>
    </View>
  );
}; 