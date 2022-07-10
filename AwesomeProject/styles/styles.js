import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
const ratio = win.width / 541;
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
        fontSize: 20,
        height: win.height * 0.2
    },
    sectionContainer: {
        alignItems: 'center',
        marginTop: 32,
        paddingHorizontal: 24,
        height: win.height * 0.8
    },
    movieInfoContainer: {
        alignItems: 'center',
        height: win.height,
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'

    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 22,
        fontWeight: '500',
        color: 'white'

    },
    tinyLogo: {
        width: 200,
        height: 300,
        resizeMode: 'stretch'
    },
    bigImage: {
        width: win.width,
        height: 362 * ratio,
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
    },
    notFound: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#500B61',
        height: win.height,
        color: 'white',
    }
})
