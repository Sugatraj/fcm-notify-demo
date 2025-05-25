import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIFICATION_STORAGE_KEY = '@notifications';
const MAX_NOTIFICATIONS = 50;

export const storeNotification = async (notification) => {
  try {
    const stored = await AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY);
    let notifications = stored ? JSON.parse(stored) : [];
    
    const newNotification = {
      ...notification,
      timestamp: new Date().toISOString(),
    };
    
    notifications.unshift(newNotification);
    
    if (notifications.length > MAX_NOTIFICATIONS) {
      notifications = notifications.slice(0, MAX_NOTIFICATIONS);
    }
    
    await AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(notifications));
    return true;
  } catch (error) {
    console.error('Error storing notification:', error);
    return false;
  }
};

export const getNotifications = async () => {
  try {
    const stored = await AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error getting notifications:', error);
    return [];
  }
};

export const clearNotifications = async () => {
  try {
    await AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing notifications:', error);
    return false;
  }
}; 