import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
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
  const [isFocused, setIsFocused] = useState(false);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 8,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isFocused ? theme.colors.surfaceContainerHighest : theme.colors.surfaceContainer,
      borderRadius: 28,
      paddingHorizontal: 16,
      height: 56,
      borderWidth: isFocused ? 1 : 0,
      borderColor: theme.colors.outline,
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
      padding: 8,
      marginLeft: -8,
      borderRadius: 20,
    },
    searchButtonPressed: {
      backgroundColor: theme.colors.surfaceVariant,
    },
    searchIcon: {
      marginRight: 8,
      color: theme.colors.onSurfaceVariant,
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
        <Pressable
          style={({ pressed }) => [
            styles.searchButton,
            pressed && styles.searchButtonPressed,
          ]}
          android_ripple={{ 
            color: theme.colors.onSurfaceVariant,
            borderless: true,
            radius: 20,
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