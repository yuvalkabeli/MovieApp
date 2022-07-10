import React, { useRef, useState } from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/styles'
import { Searchbar } from 'react-native-paper'
import { makeSortedMovieElements, showNotFound } from '../helpers/helpers'

export default function MoviesScreen({ route, navigation }) {
    const { moviesArray } = route.params
    const backGroundImage = { uri: "https://thumbs.dreamstime.com/b/cinema-seamless-background-modern-linear-elements-seamless-background-linear-movie-characters-vector-pattern-139002029.jpg" }
    const [moviesElements, setMoviesElements] = useState([...makeSortedMovieElements(moviesArray, navigation)])
    const [searchQuery, setSearchQuery] = useState('');
    const [resultFound, setResultFound] = useState(true)

    const onChangeSearch = (query) => {
        setSearchQuery(query)
        const searchedMovies = moviesArray.filter((movieObj) => movieObj.title.toLowerCase().includes(query.toLowerCase()))
        if (searchedMovies.length !== 0) {
            setMoviesElements([...makeSortedMovieElements(searchedMovies, navigation)]);
            setResultFound(true)
        }
        else {
            setMoviesElements([])
            setResultFound(false)
        }
    };

    return (
        <View>
            <ImageBackground source={backGroundImage} resizeMode="cover" styles={styles.backGround}>
                <SafeAreaView>
                    <ScrollView>
                        <Searchbar
                            placeholder="Search your movie"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                        />
                        {moviesElements}
                        {showNotFound(resultFound)}
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}