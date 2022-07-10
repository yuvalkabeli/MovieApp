import Section from "../../components/Section"
import React from "react"
import NotFound from "../../components/NotFound"
export const makeSortedMovieObjects = (moviesArray, navigation) => {
    const newArray = moviesArray.sort((a, b) => {
        if (a.rating > b.rating)
            return -1
        if (a.rating < b.rating)
            return 1
        return 0
    })

    return newArray.map((movie, index) => {
        return <Section key={index} movie={movie} navigation={navigation} />
    })
}
export const showNotFound = (resultFound) => {
    if (!resultFound) {
        return <NotFound />
    }
}