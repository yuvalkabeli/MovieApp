import React from 'react'
import { View } from 'react-native'
import Section from './Section'

export default function Movies({ moviesArray }) {
    const sortedMoviesArray = moviesArray.sort((a, b) => {
        if (a.rating > b.rating)
            return -1
        if (a.rating < b.rating)
            return 1
        return 0

    })
    const makeMovies = () => {
        return sortedMoviesArray.map((movie) => {
            return <Section movie={movie} />
        })
    }

    return (
        <View>
            {makeMovies()}
        </View>
    )
}
