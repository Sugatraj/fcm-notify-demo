import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const NotificationDetail = ({ route, navigation }) => {
  const { notification } = route.params;

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#4285f4" />
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
                color="#4285f4" 
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
              <Ionicons name="time-outline" size={20} color="#5f6368" />
              <Text style={styles.metaText}>
                Received {formatDateTime(notification.timestamp)}
              </Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons 
                name={notification.read ? "checkmark-circle" : "ellipse"} 
                size={20} 
                color={notification.read ? "#34A853" : "#4285f4"} 
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f6ff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#202124',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#e8f0fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#202124',
    textAlign: 'center',
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 14,
    color: '#5f6368',
    textAlign: 'center',
    marginBottom: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#e8eaed',
    marginVertical: 24,
  },
  bodyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    color: '#5f6368',
    lineHeight: 24,
    marginBottom: 24,
  },
  metaInfo: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  metaText: {
    fontSize: 14,
    color: '#5f6368',
    marginLeft: 8,
  },
}); 