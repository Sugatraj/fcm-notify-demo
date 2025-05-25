import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { getTypography } from '../theme/theme';

export const Clock = () => {
  const { theme } = useTheme();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).replace(' ', ' ');
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
      alignItems: 'center',
    },
    timeText: {
      ...getTypography('display', 'large'),
      color: theme.colors.primary,
      fontSize: 48,
      letterSpacing: -1,
      marginBottom: 4,
    },
    dateText: {
      ...getTypography('title', 'medium'),
      color: theme.colors.onSurfaceVariant,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{formatTime(time)}</Text>
      <Text style={styles.dateText}>{formatDate(time)}</Text>
    </View>
  );
}; 