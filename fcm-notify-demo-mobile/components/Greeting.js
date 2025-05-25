import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.greetingCard}>
        <Text style={styles.name}>hey, RAJX</Text>
        <Text style={styles.message}>{greeting}</Text>
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
  greetingCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 20,
    color: '#4285f4',
    fontWeight: '600',
    marginBottom: 4,
  },
  message: {
    fontSize: 16,
    color: '#5f6368',
    fontWeight: '500',
  },
}); 