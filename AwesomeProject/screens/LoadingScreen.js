import React, { useEffect, useState } from 'react'
import { View, Text, Button, ImageBackground, Image } from 'react-native'
import { styles } from '../styles/styles'
export default function LoadingScreen({ navigation }) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function getMovies() {
            let response = await fetch('http://10.0.2.2:3000/getMovies')
            response = await response.json()
            setMovies([...response])
        }

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
            {/* <Text style={styles.loadingScreenText} >Loading data</Text> */}
            <Image style={styles.loadingScreenIcon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/831/831277.png' }} />
        </View>
    );
}
