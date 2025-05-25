import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
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
      hour: 'numeric',
      minute: 'numeric',
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
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: theme.colors.surface,
      ...getElevation('level0', isDark ? 'dark' : 'light'),
    },
    backButton: {
      padding: 8,
      borderRadius: theme.shape.corner.full,
      marginRight: 8,
    },
    backButtonPressed: {
      backgroundColor: theme.colors.surfaceVariant,
    },
    title: {
      ...getTypography('title', 'large'),
      color: theme.colors.onSurface,
      flex: 1,
    },
    content: {
      flex: 1,
      padding: 16,
    },
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.shape.corner.medium,
      padding: 16,
      ...getElevation('level1', isDark ? 'dark' : 'light'),
    },
    notificationTitle: {
      ...getTypography('headline', 'small'),
      color: theme.colors.onSurface,
      marginBottom: 8,
    },
    timestamp: {
      ...getTypography('label', 'medium'),
      color: theme.colors.onSurfaceVariant,
      marginBottom: 16,
    },
    message: {
      ...getTypography('body', 'medium'),
      color: theme.colors.onSurfaceVariant,
      marginBottom: 24,
    },
    metaSection: {
      borderTopWidth: 1,
      borderTopColor: theme.colors.outlineVariant,
      paddingTop: 16,
    },
    metaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    metaLabel: {
      ...getTypography('label', 'medium'),
      color: theme.colors.onSurfaceVariant,
      width: 100,
    },
    metaValue: {
      ...getTypography('body', 'medium'),
      color: theme.colors.onSurface,
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable 
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed
          ]}
          onPress={() => navigation.goBack()}
          android_ripple={{
            color: theme.colors.onSurfaceVariant,
            borderless: true,
          }}
        >
          <Ionicons 
            name="arrow-back" 
            size={24} 
            color={theme.colors.onSurfaceVariant} 
          />
        </Pressable>
        <Text style={styles.title}>Notification Details</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.timestamp}>
            {formatDateTime(notification.timestamp)}
          </Text>
          <Text style={styles.message}>{notification.body}</Text>
          
          <View style={styles.metaSection}>
            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Status</Text>
              <Text style={styles.metaValue}>
                {notification.read ? 'Read' : 'Unread'}
              </Text>
            </View>
            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Received</Text>
              <Text style={styles.metaValue}>
                {formatDateTime(notification.timestamp)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}; 