import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
import { getElevation, getTypography } from '../theme/theme';

export const NotificationDetail = ({ route, navigation }) => {
  const { notification } = route.params;
  const { theme, isDark } = useTheme();

  const formatDateTime = (date) => {
    return new Date(date).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 16,
      backgroundColor: theme.colors.surface,
      ...getElevation('level2', isDark ? 'dark' : 'light'),
    },
    backButton: {
      padding: 8,
      borderRadius: theme.shape.corner.small,
    },
    title: {
      ...getTypography('headline', 'small'),
      color: theme.colors.onSurface,
    },
    placeholder: {
      width: 40,
    },
    content: {
      flex: 1,
      padding: 16,
    },
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.shape.corner.extraLarge,
      padding: 20,
      ...getElevation('level1', isDark ? 'dark' : 'light'),
    },
    iconContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    iconCircle: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: theme.colors.primaryContainer,
      alignItems: 'center',
      justifyContent: 'center',
    },
    notificationTitle: {
      ...getTypography('headline', 'small'),
      color: theme.colors.onSurface,
      textAlign: 'center',
      marginBottom: 8,
    },
    timestamp: {
      ...getTypography('body', 'medium'),
      color: theme.colors.onSurfaceVariant,
      textAlign: 'center',
      marginBottom: 24,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.outlineVariant,
      marginVertical: 24,
    },
    bodyTitle: {
      ...getTypography('title', 'medium'),
      color: theme.colors.onSurface,
      marginBottom: 8,
    },
    body: {
      ...getTypography('body', 'large'),
      color: theme.colors.onSurfaceVariant,
      marginBottom: 24,
    },
    metaInfo: {
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: theme.shape.corner.medium,
      padding: 16,
    },
    metaItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    metaText: {
      ...getTypography('body', 'medium'),
      color: theme.colors.onSurfaceVariant,
      marginLeft: 8,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons 
            name="arrow-back" 
            size={24} 
            color={theme.colors.primary} 
          />
        </TouchableOpacity>
        <Text style={styles.title}>Notification Details</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <Ionicons 
                name="notifications" 
                size={32} 
                color={theme.colors.onPrimaryContainer} 
              />
            </View>
          </View>

          <Text style={styles.notificationTitle}>
            {notification.title}
          </Text>

          <Text style={styles.timestamp}>
            {formatDateTime(notification.timestamp)}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.bodyTitle}>Message</Text>
          <Text style={styles.body}>
            {notification.body}
          </Text>

          <View style={styles.metaInfo}>
            <View style={styles.metaItem}>
              <Ionicons 
                name="time-outline" 
                size={20} 
                color={theme.colors.onSurfaceVariant} 
              />
              <Text style={styles.metaText}>
                Received {formatDateTime(notification.timestamp)}
              </Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons 
                name={notification.read ? "checkmark-circle" : "ellipse"} 
                size={20} 
                color={notification.read ? theme.colors.tertiary : theme.colors.primary} 
              />
              <Text style={styles.metaText}>
                {notification.read ? "Read" : "Unread"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}; 