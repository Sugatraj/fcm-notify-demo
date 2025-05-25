import React from 'react';
import { StyleSheet, Pressable, View, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
import { getElevation, getTypography } from '../theme/theme';

export const NotificationFAB = ({ onPress }) => {
  const { theme, isDark } = useTheme();
  const [scaleAnim] = React.useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
      speed: 12,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 12,
      bounciness: 4,
    }).start();
  };

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      borderRadius: theme.shape.corner.large,
      overflow: 'hidden',
      ...getElevation('level3', isDark ? 'dark' : 'light'),
    },
    fab: {
      width: 56,
      height: 56,
      backgroundColor: theme.colors.primaryContainer,
      alignItems: 'center',
      justifyContent: 'center',
    },
    stateLayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.colors.onPrimaryContainer,
      opacity: 0,
    },
    stateLayerHovered: {
      opacity: theme.state.hover,
    },
    stateLayerPressed: {
      opacity: theme.state.pressed,
    },
    iconContainer: {
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <Animated.View style={[
      styles.container,
      { transform: [{ scale: scaleAnim }] }
    ]}>
      <Pressable 
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        android_ripple={{
          color: theme.colors.onPrimaryContainer,
          borderless: false,
          foreground: true,
        }}
      >
        {({ pressed, hovered }) => (
          <View style={styles.fab}>
            <View style={[
              styles.stateLayer,
              hovered && styles.stateLayerHovered,
              pressed && styles.stateLayerPressed,
            ]} />
            <View style={styles.iconContainer}>
              <Ionicons 
                name="notifications" 
                size={24} 
                color={theme.colors.onPrimaryContainer}
              />
            </View>
          </View>
        )}
      </Pressable>
    </Animated.View>
  );
}; 