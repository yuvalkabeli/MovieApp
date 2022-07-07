/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import Section from './components/Section'
// import getMovies from './helpers/helpers';
//const App: () => Node = () => {

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [movies, setMovies] = useState([])
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('http://10.0.2.2:3000/getMovies')
      response = await response.json()
      setMovies([...response])
    }

    fetchMyAPI()
  }, [])



  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Movie Title1">
            information about the movie
          </Section>
          <Section title="Movie Title2">
            information about the mo
          </Section>
          <Section title="Movie Title3">
            {movies[0].rating}
          </Section>
          <Section title="Movie Title4">
            Read the docs to discover what to do next
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
