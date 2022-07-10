import React, { useContext } from 'react';
// import type {Node} from 'react';
import {

  Button,
  Image,
  Text,
  View,
} from 'react-native';
import { MovieInfoContext, movieInfoContext } from '../context/MovieInfoContext';
import { styles } from '../styles/styles';
export default function Section({ movie, navigation }) {
  const { title, image, rating, releaseYear, genre } = movie
  const movieTitleState = useContext(MovieInfoContext)
  const navigateToMovie = () => {
    movieTitleState.setMovieTitle(title)
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