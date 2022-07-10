import React from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Section from '../components/Section'
import { styles } from '../styles/styles'

export default function MoviesScreen({ route, navigation }) {
    const { moviesArray } = route.params
    const sortedMoviesArray = moviesArray.sort((a, b) => {
        if (a.rating > b.rating)
            return -1
        if (a.rating < b.rating)
            return 1
        return 0

    })
    const makeMovies = () => {
        return sortedMoviesArray.map((movie, index) => {
            return <Section key={index} movie={movie} navigation={navigation} />
        })
    }
    const backGroundImage = { uri: "https://thumbs.dreamstime.com/b/cinema-seamless-background-modern-linear-elements-seamless-background-linear-movie-characters-vector-pattern-139002029.jpg" }

    return (
        <View>
            <ImageBackground source={backGroundImage} resizeMode="cover" styles={styles.backGround}>
                <SafeAreaView>
                    <ScrollView>
                        {makeMovies()}
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}