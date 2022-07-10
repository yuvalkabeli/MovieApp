import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/styles'

export default function NotFound() {
    return (
        <View style={styles.notFound} >
            <Text style={styles.sectionDescription}>
                looks like we could'nt find your movie...
            </Text>
        </View>
    )
}
