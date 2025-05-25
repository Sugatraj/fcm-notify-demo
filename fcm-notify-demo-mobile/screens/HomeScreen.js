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
      padding: 16,
    },
    section: {
      marginBottom: 24,
      backgroundColor: theme.colors.surface,
      borderRadius: 28,
      padding: 16,
    },
    topSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    clockContainer: {
      flex: 1,
      marginRight: 16,
    },
    weatherContainer: {
      flex: 2,
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
        <View style={styles.section}>
          <Greeting />
        </View>

        <View style={styles.topSection}>
          <View style={[styles.section, styles.clockContainer]}>
            <Clock />
          </View>
          <View style={[styles.section, styles.weatherContainer]}>
            <Weather />
          </View>
        </View>

        <View style={styles.section}>
          <Search />
        </View>
      </ScrollView>

      <NotificationFAB onPress={() => navigation.navigate('NotificationLog')} />
    </View>
  );
}; 