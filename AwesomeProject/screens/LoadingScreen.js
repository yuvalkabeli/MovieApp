import React, { useEffect, useState } from 'react'
import { View, Image } from 'react-native'
import { styles } from '../styles/styles'
export default function LoadingScreen({ navigation }) {
    const [movies, setMovies] = useState([])
    const imageSource = { uri: 'https://cdn-icons-png.flaticon.com/512/831/831277.png' }
    const getMovies = async () => {
        let response = await fetch('https://kabeli-movies-api.herokuapp.com/getMovies')
        response = await response.json()
        setMovies([...response])
    }
    useEffect(() => {
        getMovies()
    }, [])
    useEffect(() => {
        if (movies.length > 0) {
            navigation.navigate('Movies', {
                moviesArray: movies
            })
        }
    }, [movies])
    return (
        <View style={styles.loadingSCreen}>
            <Image style={styles.loadingScreenIcon} source={imageSource} />
        </View>
    );
}
