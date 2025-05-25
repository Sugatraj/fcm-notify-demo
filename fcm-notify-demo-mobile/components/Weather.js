import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Weather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.weatherCard}>
        <Text style={styles.weatherText}>Patchy rain nearby</Text>
        
        <View style={styles.humidityContainer}>
          <View style={styles.humidityBar}>
            <Text style={styles.humidityText}>Humidity 86%</Text>
          </View>
          <View style={styles.humidityIcon}>
            <Ionicons name="water" size={20} color="#4285f4" />
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Ionicons name="thermometer-outline" size={20} color="#5f6368" />
            <Text style={styles.infoText}>Feels 25.6°C</Text>
          </View>
          <View style={[styles.infoItem, styles.locationItem]}>
            <Ionicons name="location" size={20} color="#fff" />
            <Text style={styles.locationText}>Pune</Text>
          </View>
        </View>
      </View>

      <View style={styles.temperatureCard}>
        <Text style={styles.temperature}>24°C</Text>
        <View style={styles.weatherIcon}>
          <Ionicons name="cloudy-night" size={24} color="#4285f4" />
        </View>
      </View>
    </View>
  );
};

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
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginRight: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  weatherText: {
    fontSize: 16,
    color: '#202124',
    marginBottom: 12,
    fontWeight: '500',
  },
  humidityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  humidityBar: {
    flex: 1,
    backgroundColor: '#4285f4',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  humidityText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  humidityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e8f0fe',
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
    backgroundColor: '#f8f9fa',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  infoText: {
    marginLeft: 6,
    color: '#5f6368',
    fontSize: 14,
  },
  locationItem: {
    backgroundColor: '#4285f4',
  },
  locationText: {
    marginLeft: 6,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  temperatureCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: 100,
  },
  temperature: {
    fontSize: 24,
    color: '#4285f4',
    fontWeight: '500',
    marginBottom: 8,
  },
  weatherIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e8f0fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 