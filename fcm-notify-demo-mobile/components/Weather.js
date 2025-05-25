import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
import { getTypography } from '../theme/theme';

export const Weather = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 24,
    },
    leftContent: {
      flex: 1,
    },
    condition: {
      ...getTypography('headline', 'medium'),
      color: theme.colors.onSurface,
      marginBottom: 12,
    },
    weatherIcon: {
      backgroundColor: theme.colors.surfaceContainerLowest,
      borderRadius: 16,
      padding: 12,
      marginLeft: 16,
    },
    humidityContainer: {
      backgroundColor: theme.colors.primary,
      borderRadius: 24,
      paddingVertical: 8,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
    },
    humidityText: {
      ...getTypography('label', 'large'),
      color: theme.colors.onPrimary,
      marginLeft: 8,
    },
    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    feelsLike: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surfaceContainerLowest,
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    feelsLikeText: {
      ...getTypography('body', 'medium'),
      color: theme.colors.onSurface,
      marginLeft: 8,
    },
    location: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    locationText: {
      ...getTypography('label', 'large'),
      color: theme.colors.onPrimary,
      marginLeft: 8,
    },
    temperature: {
      ...getTypography('display', 'large'),
      color: theme.colors.primary,
      fontSize: 48,
      lineHeight: 56,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContent}>
          <Text style={styles.condition}>Patchy rain nearby</Text>
          <View style={styles.humidityContainer}>
            <Ionicons name="water" size={20} color={theme.colors.onPrimary} />
            <Text style={styles.humidityText}>Humidity 86%</Text>
          </View>
        </View>
        <View style={styles.weatherIcon}>
          <Ionicons name="cloud" size={28} color={theme.colors.onSurface} />
        </View>
      </View>
      
      <View style={styles.bottomRow}>
        <View style={styles.feelsLike}>
          <Ionicons name="thermometer-outline" size={20} color={theme.colors.onSurface} />
          <Text style={styles.feelsLikeText}>Feels 25.6°C</Text>
        </View>
        <View style={styles.location}>
          <Ionicons name="location" size={20} color={theme.colors.onPrimary} />
          <Text style={styles.locationText}>Pune</Text>
        </View>
      </View>
      
      <Text style={styles.temperature}>24°C</Text>
    </View>
  );
}; 