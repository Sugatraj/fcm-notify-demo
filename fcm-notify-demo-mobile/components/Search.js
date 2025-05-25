import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const searchEngines = [
  { id: 'default', name: 'Default', icon: 'compass-outline' },
  { id: 'google', name: 'Google', icon: 'logo-google' },
  { id: 'duck', name: 'Duck', icon: 'search' },
  { id: 'bing', name: 'Bing', icon: 'globe-outline' },
  { id: 'brave', name: 'Brave', icon: 'shield-outline' },
];

export const Search = () => {
  const [selectedEngine, setSelectedEngine] = useState('default');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#5f6368" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            placeholderTextColor="#5f6368"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.engineContainer}>
          <View style={styles.engineLabel}>
            <Text style={styles.engineLabelText}>Search With</Text>
          </View>
          <View style={styles.engineOptions}>
            {searchEngines.map((engine) => (
              <TouchableOpacity
                key={engine.id}
                style={[
                  styles.engineButton,
                  selectedEngine === engine.id && styles.engineButtonSelected,
                ]}
                onPress={() => setSelectedEngine(engine.id)}
              >
                <Ionicons
                  name={engine.icon}
                  size={18}
                  color={selectedEngine === engine.id ? '#4285f4' : '#5f6368'}
                />
                <Text
                  style={[
                    styles.engineText,
                    selectedEngine === engine.id && styles.engineTextSelected,
                  ]}
                >
                  {engine.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
  },
  searchContainer: {
    width: '100%',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#202124',
  },
  searchButton: {
    backgroundColor: '#4285f4',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  engineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  engineLabel: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  engineLabelText: {
    color: '#5f6368',
    fontSize: 14,
    fontWeight: '500',
  },
  engineOptions: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    gap: 8,
  },
  engineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  engineButtonSelected: {
    backgroundColor: '#e8f0fe',
  },
  engineText: {
    marginLeft: 6,
    color: '#5f6368',
    fontSize: 14,
    fontWeight: '500',
  },
  engineTextSelected: {
    color: '#4285f4',
  },
}); 