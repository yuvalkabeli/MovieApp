import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width
export const styles = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    header: {
        fontSize: 20
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    movieInfoContainer: {
        alignItems: 'center',
        height: win.height,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white'

    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'white'

    },
    tinyLogo: {
        width: 200,
        height: 300,
        resizeMode: 'stretch'
    },
    bigImage: {
        width: win.width,
        height: 362 * ratio, //362 is actual height of image
        resizeMode: "contain"
    },
    backGround: {
        flex: 1,
        justifyContent: "center"
    },
    loadingSCreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#500B61',

    },
    loadingScreenIcon: {
        width: 300,
        height: 300,
        resizeMode: 'stretch'
    }
})
