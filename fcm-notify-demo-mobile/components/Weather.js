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
      marginBottom: 16,
    },
    leftContent: {
      flex: 1,
    },
    condition: {
      ...getTypography('headline', 'small'),
      color: theme.colors.onSurface,
      marginBottom: 16,
    },
    temperature: {
      ...getTypography('display', 'medium'),
      color: theme.colors.primary,
      fontSize: 32,
    },
    weatherIcon: {
      backgroundColor: theme.colors.primaryContainer,
      borderRadius: 12,
      padding: 8,
      marginLeft: 8,
    },
    humidityContainer: {
      backgroundColor: theme.colors.primary,
      borderRadius: 24,
      padding: 8,
      paddingHorizontal: 12,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      marginBottom: 12,
    },
    humidityText: {
      ...getTypography('label', 'large'),
      color: theme.colors.onPrimary,
      marginLeft: 4,
    },
    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
    },
    feelsLike: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: 20,
      paddingVertical: 6,
      paddingHorizontal: 12,
    },
    feelsLikeText: {
      ...getTypography('body', 'medium'),
      color: theme.colors.onSurfaceVariant,
      marginLeft: 4,
    },
    location: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      borderRadius: 20,
      paddingVertical: 6,
      paddingHorizontal: 12,
    },
    locationText: {
      ...getTypography('label', 'large'),
      color: theme.colors.onPrimary,
      marginLeft: 4,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContent}>
          <Text style={styles.condition}>Patchy rain nearby</Text>
          <View style={styles.humidityContainer}>
            <Ionicons name="water" size={18} color={theme.colors.onPrimary} />
            <Text style={styles.humidityText}>Humidity 86%</Text>
          </View>
        </View>
        <View style={styles.weatherIcon}>
          <Ionicons name="cloud" size={24} color={theme.colors.onPrimaryContainer} />
        </View>
      </View>
      
      <View style={styles.bottomRow}>
        <View style={styles.feelsLike}>
          <Ionicons name="thermometer-outline" size={18} color={theme.colors.onSurfaceVariant} />
          <Text style={styles.feelsLikeText}>Feels 25.6°C</Text>
        </View>
        <View style={styles.location}>
          <Ionicons name="location" size={18} color={theme.colors.onPrimary} />
          <Text style={styles.locationText}>Pune</Text>
        </View>
      </View>
      
      <Text style={styles.temperature}>24°C</Text>
    </View>
  );
}; 