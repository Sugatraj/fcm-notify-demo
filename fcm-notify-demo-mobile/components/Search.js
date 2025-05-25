import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
import { getTypography } from '../theme/theme';

const searchEngines = [
  { id: 'default', name: 'Default', icon: 'compass-outline' },
  { id: 'google', name: 'Google', icon: 'logo-google' },
  { id: 'duck', name: 'Duck', icon: 'search' },
  { id: 'bing', name: 'Bing', icon: 'globe-outline' },
  { id: 'brave', name: 'Brave', icon: 'shield-outline' },
];

export const Search = () => {
  const [selectedEngine, setSelectedEngine] = useState('default');
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      borderRadius: 30,
      height: 56,
      marginBottom: 32,
      borderWidth: 0.5,
      borderColor: theme.colors.outline,
    },
    input: {
      flex: 1,
      ...getTypography('body', 'large'),
      color: theme.colors.onSurface,
      marginLeft: 8,
      height: '100%',
      paddingVertical: 8,
    },
    searchButton: {
      padding: 16,
    },
    engineSection: {
      marginTop: 8,
    },
    engineLabel: {
      ...getTypography('title', 'small'),
      color: theme.colors.onSurface,
      marginBottom: 16,
    },
    engineGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
    engineButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 4,
    },
    engineText: {
      ...getTypography('body', 'large'),
      color: theme.colors.onSurface,
      marginLeft: 8,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchButton}>
          <Ionicons 
            name="search" 
            size={24} 
            color={theme.colors.onSurfaceVariant} 
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={theme.colors.onSurfaceVariant}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      <View style={styles.engineSection}>
        <Text style={styles.engineLabel}>Search With</Text>
        <View style={styles.engineGrid}>
          {searchEngines.map((engine) => (
            <Pressable
              key={engine.id}
              style={styles.engineButton}
              onPress={() => setSelectedEngine(engine.id)}
            >
              <Ionicons
                name={engine.icon}
                size={24}
                color={theme.colors.onSurface}
              />
              <Text style={styles.engineText}>{engine.name}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}; 