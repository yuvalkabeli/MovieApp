import React from 'react';
// import type {Node} from 'react';
import {

  Button,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import { styles } from '../styles/styles';
export default function Section({ movie, navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const { title, image, rating, releaseYear, genre } = movie
  const navigateToMovie = () => {
    navigation.navigate('MovieInfo', { movie })
  }
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={styles.sectionTitle}>
        {title}
      </Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: image,
        }}
      />
      <Text
        style={styles.sectionDescription}>
        release year:{releaseYear}
      </Text>
      <Text
        style={styles.sectionDescription}>
        Rating:{rating}
      </Text>
      <Text
        style={styles.sectionDescription}>
        genres:{genre.toString()}
      </Text>
      <Button title='for more details' onPress={() => navigateToMovie()} />

    </View>
  );
};