import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Clock } from './components/Clock';
import { Weather } from './components/Weather';
import { Search } from './components/Search';
import { Greeting } from './components/Greeting';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
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