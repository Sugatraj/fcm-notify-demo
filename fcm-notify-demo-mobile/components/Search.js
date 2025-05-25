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
      backgroundColor: isFocused ? theme.colors.surfaceContainerHighest : theme.colors.surfaceContainerLowest,
      borderRadius: 28,
      paddingHorizontal: 4,
      height: 56,
      marginBottom: 24,
    },
    input: {
      flex: 1,
      ...getTypography('body', 'large'),
      color: theme.colors.onSurface,
      marginLeft: 12,
      height: '100%',
      paddingVertical: 8,
    },
    searchButton: {
      padding: 12,
      borderRadius: 24,
    },
    searchButtonPressed: {
      backgroundColor: theme.colors.surfaceVariant,
    },
    engineSection: {
      marginTop: 8,
    },
    engineLabel: {
      ...getTypography('label', 'medium'),
      color: theme.colors.onSurfaceVariant,
      marginBottom: 12,
    },
    engineGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    engineButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surfaceContainerLowest,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
    },
    engineButtonSelected: {
      backgroundColor: theme.colors.surfaceContainerHighest,
    },
    engineText: {
      ...getTypography('label', 'large'),
      color: theme.colors.onSurface,
      marginLeft: 8,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.searchButton,
            pressed && styles.searchButtonPressed,
          ]}
          android_ripple={{ 
            color: theme.colors.onSurfaceVariant,
            borderless: true,
            radius: 24,
          }}
        >
          <Ionicons 
            name="search" 
            size={24} 
            color={theme.colors.onSurfaceVariant} 
          />
        </Pressable>
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
              style={[
                styles.engineButton,
                selectedEngine === engine.id && styles.engineButtonSelected,
              ]}
              onPress={() => setSelectedEngine(engine.id)}
              android_ripple={{ 
                color: theme.colors.onSurfaceVariant,
                borderless: true,
              }}
            >
              <Ionicons
                name={engine.icon}
                size={20}
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