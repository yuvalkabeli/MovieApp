import React, { useContext } from 'react';
import { Button, Image, Text, View, } from 'react-native';
import { MovieInfoContext } from '../context/MovieInfoContext';
import { styles } from '../styles/styles';
export default function Section({ movie, navigation }) {
  const { title, image, rating, releaseYear, genre } = movie
  const { setMovieTitle } = useContext(MovieInfoContext)
  const navigateToMovie = () => {
    setMovieTitle(title)
    navigation.navigate('MovieInfo', { movie })
  }
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={styles.sectionTitle}>
        {title}
      </Text>
      <Image
        style={styles.moviePoster}
        source={{
          uri: image,
        }}
      />
      <Text
        style={styles.sectionDescription}>
        Release year:{releaseYear}
      </Text>
      <Text
        style={styles.sectionDescription}>
        Rating:{rating}
      </Text>
      <Text
        style={styles.sectionDescription}>
        Genres: {genre.map((oneGenre, index) => {
          if (index < genre.length - 1) {
            oneGenre += ', ';
          }
          return oneGenre;
        })}
      </Text>
      <Button title='for more details' onPress={() => navigateToMovie()} />

    </View>
  );
};