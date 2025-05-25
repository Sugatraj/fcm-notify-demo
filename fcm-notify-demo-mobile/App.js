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
import { ThemeProvider, useTheme } from './theme/ThemeProvider';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar 
        barStyle={theme.isDark ? "light-content" : "dark-content"} 
        backgroundColor={theme.colors.background} 
      />
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

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationLog} />
        <Stack.Screen name="NotificationDetail" component={NotificationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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