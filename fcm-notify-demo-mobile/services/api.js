import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BACKEND_URL = 'http://your-ngrok-url'; // Replace with your ngrok URL
const PUSH_ENDPOINT = `${BACKEND_URL}/register`;

export async function registerForPushNotificationsAsync() {
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
    
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    
    // Store token in AsyncStorage
    await AsyncStorage.setItem('pushToken', token.data);
    
    // Send token to backend
    try {
      const response = await fetch(PUSH_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token.data,
          deviceId: Device.deviceName,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to register token with backend');
      }
    } catch (error) {
      console.error('Error registering token:', error);
    }
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
} 