import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Clock } from '../components/Clock';
import { Weather } from '../components/Weather';
import { Search } from '../components/Search';
import { Greeting } from '../components/Greeting';
import { NotificationFAB } from '../components/NotificationFAB';

export const HomeScreen = ({ navigation }) => {
  const { theme, isDark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingTop: StatusBar.currentHeight || 0,
      paddingHorizontal: 24,
    },
    greetingSection: {
      marginTop: 16,
      marginBottom: 48,
    },
    mainSection: {
      flexDirection: 'row',
      marginBottom: 48,
    },
    clockSection: {
      flex: 1,
      marginRight: 24,
      alignItems: 'flex-start',
    },
    weatherSection: {
      flex: 1.5,
    },
    searchSection: {
      marginTop: 16,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.greetingSection}>
          <Greeting />
        </View>

        <View style={styles.mainSection}>
          <View style={styles.clockSection}>
            <Clock />
          </View>
          <View style={styles.weatherSection}>
            <Weather />
          </View>
        </View>

        <View style={styles.searchSection}>
          <Search />
        </View>
      </ScrollView>

      <NotificationFAB onPress={() => navigation.navigate('NotificationLog')} />
    </View>
  );
}; 