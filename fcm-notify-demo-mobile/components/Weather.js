import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
import { getElevation, getTypography } from '../theme/theme';

export const Weather = () => {
  const { theme, isDark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 16,
      marginBottom: 20,
    },
    weatherCard: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.shape.corner.extraLarge,
      padding: 16,
      marginRight: 12,
      ...getElevation('level1', isDark ? 'dark' : 'light'),
    },
    weatherText: {
      ...getTypography('title', 'large'),
      color: theme.colors.onSurface,
      marginBottom: 12,
    },
    humidityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    humidityBar: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      borderRadius: theme.shape.corner.large,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginRight: 8,
    },
    humidityText: {
      ...getTypography('label', 'large'),
      color: theme.colors.onPrimary,
    },
    humidityIcon: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.colors.primaryContainer,
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surfaceVariant,
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: theme.shape.corner.large,
    },
    infoText: {
      marginLeft: 6,
      ...getTypography('body', 'medium'),
      color: theme.colors.onSurfaceVariant,
    },
    locationItem: {
      backgroundColor: theme.colors.primary,
    },
    locationText: {
      marginLeft: 6,
      ...getTypography('label', 'large'),
      color: theme.colors.onPrimary,
    },
    temperatureCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.shape.corner.extraLarge,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
      ...getElevation('level1', isDark ? 'dark' : 'light'),
      width: 100,
    },
    temperature: {
      ...getTypography('headline', 'medium'),
      color: theme.colors.primary,
      marginBottom: 8,
    },
    weatherIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.primaryContainer,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.weatherCard}>
        <Text style={styles.weatherText}>Patchy rain nearby</Text>
        
        <View style={styles.humidityContainer}>
          <View style={styles.humidityBar}>
            <Text style={styles.humidityText}>Humidity 86%</Text>
          </View>
          <View style={styles.humidityIcon}>
            <Ionicons name="water" size={20} color={theme.colors.primary} />
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Ionicons name="thermometer-outline" size={20} color={theme.colors.onSurfaceVariant} />
            <Text style={styles.infoText}>Feels 25.6°C</Text>
          </View>
          <View style={[styles.infoItem, styles.locationItem]}>
            <Ionicons name="location" size={20} color={theme.colors.onPrimary} />
            <Text style={styles.locationText}>Pune</Text>
          </View>
        </View>
      </View>

      <View style={styles.temperatureCard}>
        <Text style={styles.temperature}>24°C</Text>
        <View style={styles.weatherIcon}>
          <Ionicons name="cloudy-night" size={24} color={theme.colors.primary} />
        </View>
      </View>
    </View>
  );
}; 