import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Clock } from './components/Clock';
import { Weather } from './components/Weather';
import { Search } from './components/Search';
import { Greeting } from './components/Greeting';
import { NotificationLog } from './screens/NotificationLog';
import { NotificationDetail } from './screens/NotificationDetail';
import { NotificationFAB } from './components/NotificationFAB';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f6ff" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Clock />
        <Weather />
        <Greeting />
        <Search />
      </ScrollView>
      <NotificationFAB onPress={() => navigation.navigate('Notifications')} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#f0f6ff' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationLog} />
        <Stack.Screen name="NotificationDetail" component={NotificationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f6ff',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingTop: 40,
    paddingBottom: 20,
  },
});

export default App; 