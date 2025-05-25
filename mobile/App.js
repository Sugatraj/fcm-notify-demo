import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotificationLog from './screens/NotificationLog';
import { registerDevice } from './services/api';

const Stack = createNativeStackNavigator();
const NOTIFICATION_STORAGE_KEY = '@notifications';

// Configure notification handling
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    registerForPushNotificationsAsync();
    setupNotificationListeners();
  }, []);

  // Register for push notifications
  async function registerForPushNotificationsAsync() {
    let token;

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      
      token = (await Notifications.getExpoPushTokenAsync()).data;
      
      // Register with our backend
      try {
        await registerDevice(token);
        setExpoPushToken(token);
      } catch (error) {
        console.error('Error registering with backend:', error);
      }
    } else {
      alert('Must use physical device for Push Notifications');
    }
  }

  // Set up notification listeners
  function setupNotificationListeners() {
    // Handle notifications received while app is foregrounded
    const foregroundSubscription = Notifications.addNotificationReceivedListener(handleNotification);
    
    // Handle notification opened
    const responseSubscription = Notifications.addNotificationResponseReceivedListener(handleNotificationResponse);

    return () => {
      foregroundSubscription.remove();
      responseSubscription.remove();
    };
  }

  // Handle incoming notification
  async function handleNotification(notification) {
    const { title, body } = notification.request.content;
    const sound = notification.request.content.data?.sound;

    // Play sound if specified
    if (sound && sound !== 'default') {
      try {
        const { sound: audioSound } = await Audio.Sound.createAsync(
          require(`./assets/sounds/${sound}`),
          { shouldPlay: true }
        );
        await audioSound.playAsync();
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    }

    // Store notification in history
    try {
      const newNotification = {
        title,
        body,
        sound,
        timestamp: new Date().toISOString(),
      };

      const stored = await AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY);
      const notifications = stored ? JSON.parse(stored) : [];
      notifications.unshift(newNotification);

      await AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(notifications));
    } catch (error) {
      console.error('Error storing notification:', error);
    }
  }

  // Handle notification response (when user taps notification)
  function handleNotificationResponse(response) {
    // Navigate to notification log when notification is tapped
    // You would need to implement navigation logic here
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen 
          name="NotificationLog" 
          component={NotificationLog}
          options={{ title: 'Notifications' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 