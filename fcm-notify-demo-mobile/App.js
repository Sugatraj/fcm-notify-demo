import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from './theme/ThemeProvider';
import { HomeScreen } from './screens/HomeScreen';
import { NotificationDetail } from './screens/NotificationDetail';
import NotificationLog from './screens/NotificationLog';

const Stack = createNativeStackNavigator();

function AppContent() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationLog} />
        <Stack.Screen name="NotificationDetail" component={NotificationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
} 