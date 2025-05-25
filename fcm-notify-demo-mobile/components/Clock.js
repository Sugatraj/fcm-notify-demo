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
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatPeriod = () => {
    return time.getHours() >= 12 ? 'PM' : 'AM';
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
      alignItems: 'flex-start',
    },
    timeContainer: {
      marginBottom: 8,
  },
    timeText: {
      ...getTypography('display', 'large'),
      color: theme.colors.primary,
      fontSize: 64,
      lineHeight: 72,
      letterSpacing: -2,
    },
    periodText: {
      ...getTypography('display', 'large'),
      color: theme.colors.primary,
      fontSize: 48,
      lineHeight: 56,
  },
    dateText: {
      ...getTypography('title', 'medium'),
      color: theme.colors.onSurfaceVariant,
  },
}); 

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{formatTime(time)}</Text>
        <Text style={styles.periodText}>{formatPeriod()}</Text>
      </View>
      <Text style={styles.dateText}>{formatDate(time)}</Text>
    </View>
  );
}; 