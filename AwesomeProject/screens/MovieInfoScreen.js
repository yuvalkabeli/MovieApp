import React from 'react'
import { Image, Text, View, ImageBackground } from 'react-native'
import { styles } from '../styles/styles'
export default function MovieInfoScreen({ navigation, route }) {
    const { image, title, rating, genre, releaseYear } = route.params.movie
    const backGroundImage = { uri: "https://thumbs.dreamstime.com/b/cinema-seamless-background-modern-linear-elements-seamless-background-linear-movie-characters-vector-pattern-139002029.jpg" }

    return (
        <ImageBackground source={backGroundImage} resizeMode="cover" styles={styles.backGround}>

            <View style={styles.movieInfoContainer} >

                <Image
                    style={styles.bigImage}
                    source={{
                        uri: image,
                    }}
                />
                <Text
                    style={styles.sectionTitle}>
                    {title}
                </Text>
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
            </View>
        </ImageBackground >
    )
}
