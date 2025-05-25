import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Animated, Platform, StatusBar, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
import { getElevation, getTypography } from '../theme/theme';
import { getNotifications, clearNotifications } from '../services/notificationStorage';

// Mock data - replace with actual notification storage later
const mockNotifications = [
  {
    id: '1',
    title: 'New Message',
    body: 'You have received a new message from the system',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    read: false,
  },
  {
    id: '2',
    title: 'System Update',
    body: 'Your app has been updated to the latest version',
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    read: true,
  },
  {
    id: '3',
    title: 'Welcome!',
    body: 'Welcome to FCM Notify Demo. Explore our features!',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: true,
  },
];

export default function NotificationLog({ navigation }) {
  const [notifications, setNotifications] = useState([]);
  const { theme, isDark } = useTheme();
  const [fadeAnim] = useState(new Animated.Value(1));
  const [scaleAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const notificationHistory = await getNotifications();
    setNotifications(notificationHistory);
  };

  const handleClearNotifications = async () => {
    await clearNotifications();
    setNotifications([]);
  };

  const formatTime = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else {
      return `${days}d ago`;
    }
  };

  const handleNotificationPress = (notification) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.98,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      })
    ]).start(() => {
      markAsRead(notification.id);
      navigation.navigate('NotificationDetail', { notification });
    });
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const handleClearAll = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start(() => {
      handleClearNotifications();
      fadeAnim.setValue(1);
      scaleAnim.setValue(1);
    });
  };

  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
      <Text style={styles.timestamp}>
        {new Date(item.timestamp).toLocaleString()}
      </Text>
    </View>
  );

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.surface,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    statusBar: {
      backgroundColor: theme.colors.surface,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: theme.colors.surface,
      ...Platform.select({
        android: {
          paddingTop: StatusBar.currentHeight + 12,
          ...getElevation('level0', isDark ? 'dark' : 'light'),
        },
        ios: {
          ...getElevation('level0', isDark ? 'dark' : 'light'),
        },
      }),
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
    clearButton: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: theme.shape.corner.full,
    },
    clearButtonPressed: {
      backgroundColor: theme.colors.surfaceVariant,
    },
    clearButtonText: {
      ...getTypography('label', 'large'),
      color: theme.colors.primary,
    },
    scrollView: {
      flex: 1,
      padding: 16,
    },
    notificationCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.shape.corner.medium,
      padding: 16,
      marginBottom: 8,
      ...getElevation('level1', isDark ? 'dark' : 'light'),
      borderLeftWidth: 0,
    },
    notificationCardPressed: {
      backgroundColor: theme.colors.surfaceVariant,
    },
    unreadCard: {
      backgroundColor: theme.colors.primaryContainer,
      borderLeftWidth: 4,
      borderLeftColor: theme.colors.primary,
    },
    notificationHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 4,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    notificationTitle: {
      ...getTypography('title', 'small'),
      color: theme.colors.onSurface,
      marginRight: 8,
    },
    unreadDot: {
      width: 6,
      height: 6,
      borderRadius: theme.shape.corner.full,
      backgroundColor: theme.colors.primary,
      marginRight: 8,
    },
    timestamp: {
      ...getTypography('label', 'small'),
      color: theme.colors.onSurfaceVariant,
    },
    notificationBody: {
      ...getTypography('body', 'medium'),
      color: theme.colors.onSurfaceVariant,
      marginTop: 4,
    },
    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      transform: [{ scale: scaleAnim }],
      opacity: fadeAnim,
    },
    emptyIconContainer: {
      width: 56,
      height: 56,
      borderRadius: theme.shape.corner.full,
      backgroundColor: theme.colors.surfaceVariant,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      ...getElevation('level0', isDark ? 'dark' : 'light'),
    },
    emptyTitle: {
      ...getTypography('title', 'medium'),
      color: theme.colors.onSurface,
      marginBottom: 8,
    },
    emptyText: {
      ...getTypography('body', 'medium'),
      color: theme.colors.onSurfaceVariant,
      textAlign: 'center',
      maxWidth: 280,
    },
    notificationItem: {
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#f5f5f5',
      marginBottom: 12,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    body: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    timestamp: {
      fontSize: 12,
      color: '#999',
    },
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={theme.colors.surface}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
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
          <Text style={styles.title}>Notification History</Text>
          {notifications.length > 0 && (
            <TouchableOpacity 
              style={styles.clearButton} 
              onPress={handleClearAll}
            >
              <Text style={styles.clearButtonText}>Clear All</Text>
            </TouchableOpacity>
          )}
        </View>

        <ScrollView style={styles.scrollView}>
          {notifications.length === 0 ? (
            <Animated.View style={[styles.emptyState, { opacity: fadeAnim }]}>
              <View style={styles.emptyIconContainer}>
                <Ionicons 
                  name="notifications-off-outline" 
                  size={32} 
                  color={theme.colors.onSurfaceVariant} 
                />
              </View>
              <Text style={styles.emptyTitle}>No notifications</Text>
              <Text style={styles.emptyText}>
                You're all caught up! New notifications will appear here.
              </Text>
            </Animated.View>
          ) : (
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <FlatList
                data={notifications}
                renderItem={renderNotification}
                keyExtractor={(item) => item.id}
                style={styles.list}
                contentContainerStyle={styles.listContent}
              />
            </Animated.View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
} 