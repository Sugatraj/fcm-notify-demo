import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIFICATION_HISTORY_KEY = '@notification_history';

export const saveNotification = async (notification) => {
  try {
    const existingNotifications = await getNotifications();
    const newNotification = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      title: notification.request?.content?.title || notification.title,
      body: notification.request?.content?.body || notification.body,
    };
    
    const updatedNotifications = [newNotification, ...existingNotifications];
    await AsyncStorage.setItem(NOTIFICATION_HISTORY_KEY, JSON.stringify(updatedNotifications));
    return updatedNotifications;
  } catch (error) {
    console.error('Error saving notification:', error);
    return [];
  }
};

export const getNotifications = async () => {
  try {
    const notifications = await AsyncStorage.getItem(NOTIFICATION_HISTORY_KEY);
    return notifications ? JSON.parse(notifications) : [];
  } catch (error) {
    console.error('Error getting notifications:', error);
    return [];
  }
};

export const clearNotifications = async () => {
  try {
    await AsyncStorage.removeItem(NOTIFICATION_HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing notifications:', error);
  }
}; 