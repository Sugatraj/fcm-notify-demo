import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
import { getElevation, getTypography } from '../theme/theme';

const searchEngines = [
  { id: 'default', name: 'Default', icon: 'compass-outline' },
  { id: 'google', name: 'Google', icon: 'logo-google' },
  { id: 'duck', name: 'Duck', icon: 'search' },
  { id: 'bing', name: 'Bing', icon: 'globe-outline' },
  { id: 'brave', name: 'Brave', icon: 'shield-outline' },
];

export const Search = () => {
  const [selectedEngine, setSelectedEngine] = useState('default');
  const { theme, isDark } = useTheme();

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
      backgroundColor: theme.colors.surface,
      borderRadius: theme.shape.corner.extraLarge,
      paddingHorizontal: 16,
      marginBottom: 16,
      ...getElevation('level1', isDark ? 'dark' : 'light'),
    },
    searchIcon: {
      marginRight: 8,
      color: theme.colors.onSurfaceVariant,
    },
    input: {
      flex: 1,
      height: 48,
      ...getTypography('body', 'large'),
      color: theme.colors.onSurface,
    },
    searchButton: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: theme.shape.corner.large,
    },
    searchButtonText: {
      ...getTypography('label', 'large'),
      color: theme.colors.onPrimary,
    },
    engineContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    engineLabel: {
      backgroundColor: theme.colors.surface,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: theme.shape.corner.large,
      marginRight: 12,
      ...getElevation('level1', isDark ? 'dark' : 'light'),
    },
    engineLabelText: {
      ...getTypography('label', 'large'),
      color: theme.colors.onSurfaceVariant,
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
      backgroundColor: theme.colors.surface,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: theme.shape.corner.large,
      ...getElevation('level1', isDark ? 'dark' : 'light'),
    },
    engineButtonSelected: {
      backgroundColor: theme.colors.primaryContainer,
    },
    engineText: {
      marginLeft: 6,
      ...getTypography('label', 'large'),
      color: theme.colors.onSurfaceVariant,
    },
    engineTextSelected: {
      color: theme.colors.onPrimaryContainer,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons 
            name="search" 
            size={20} 
            style={styles.searchIcon} 
          />
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            placeholderTextColor={theme.colors.onSurfaceVariant}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

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
                color={selectedEngine === engine.id 
                  ? theme.colors.onPrimaryContainer 
                  : theme.colors.onSurfaceVariant}
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
  );
}; 