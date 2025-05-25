import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from './theme/ThemeProvider';
import { HomeScreen } from './screens/HomeScreen';
import { NotificationDetail } from './screens/NotificationDetail';
import NotificationLog from './screens/NotificationLog';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

// Configure notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Stack = createNativeStackNavigator();

function TokenDisplay() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const registerForPushNotificationsAsync = async () => {
    let token;
    
    try {
      setLoading(true);
      
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }

      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        
        if (finalStatus !== 'granted') {
          Alert.alert('Error', 'Failed to get push token for push notification!');
          setLoading(false);
          return;
        }

        // Get the token
        token = (await Notifications.getExpoPushTokenAsync({
          projectId: 'ad0e432e-2f27-458e-9deb-12c38ca899a6' // Updated project ID
        })).data;
        
        console.log('Expo Push Token:', token);
      } else {
        Alert.alert('Error', 'Must use physical device for Push Notifications');
      }

      setExpoPushToken(token || '');
    } catch (error) {
      console.error('Error getting push token:', error);
      Alert.alert('Error', 'Failed to get push token: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await Clipboard.setStringAsync(expoPushToken);
      Alert.alert('Success', 'Token copied to clipboard!');
    } catch (error) {
      Alert.alert('Error', 'Failed to copy token');
    }
  };

  return (
    <View style={styles.tokenContainer}>
      <Text style={styles.tokenText} numberOfLines={1} ellipsizeMode="middle">
        {loading ? 'Loading token...' : (expoPushToken || 'No token available')}
      </Text>
      <TouchableOpacity 
        style={[styles.copyButton, !expoPushToken && styles.disabledButton]} 
        onPress={copyToClipboard}
        disabled={!expoPushToken}
      >
        <Text style={styles.copyButtonText}>Copy Token</Text>
      </TouchableOpacity>
    </View>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <TokenDisplay />
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
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tokenContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 35,
  },
  tokenText: {
    flex: 1,
    fontSize: 12,
    color: '#666',
    marginRight: 10,
  },
  copyButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  copyButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
}); 