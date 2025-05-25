import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.clockCard}>
        <Text style={styles.time}>{formatTime(time)}</Text>
        <Text style={styles.date}>{formatDate(time)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  clockCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  time: {
    fontSize: 36,
    fontWeight: '600',
    color: '#4285f4',
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    color: '#5f6368',
    fontWeight: '500',
  },
}); 