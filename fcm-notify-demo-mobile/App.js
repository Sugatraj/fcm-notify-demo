import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, useTheme } from './theme/ThemeProvider';
import { HomeScreen } from './screens/HomeScreen';
import { NotificationLog } from './screens/NotificationLog';
import { NotificationDetail } from './screens/NotificationDetail';

const Stack = createStackNavigator();

const AppContent = () => {
  const { theme, isDark } = useTheme();

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.surface,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={theme.colors.surface}
        barStyle={isDark ? 'light-content' : 'dark-content'}
        translucent={Platform.OS === 'android'}
      />
      <NavigationContainer
        theme={{
          dark: isDark,
          colors: {
            primary: theme.colors.primary,
            background: theme.colors.background,
            card: theme.colors.surface,
            text: theme.colors.onSurface,
            border: theme.colors.outline,
            notification: theme.colors.primary,
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: styles.container,
            cardStyleInterpolator: ({ current, layouts }) => ({
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            }),
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Notifications" component={NotificationLog} />
          <Stack.Screen name="NotificationDetail" component={NotificationDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
} 