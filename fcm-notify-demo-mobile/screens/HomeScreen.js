import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Clock } from '../components/Clock';
import { Weather } from '../components/Weather';
import { Search } from '../components/Search';
import { Greeting } from '../components/Greeting';
import { NotificationFAB } from '../components/NotificationFAB';

export const HomeScreen = ({ navigation }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingVertical: 16,
    },
  });

  return (
    <View style={styles.container}>
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