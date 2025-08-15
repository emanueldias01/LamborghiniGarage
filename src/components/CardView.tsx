import { Image, StyleSheet, View } from "react-native";
import logo from '../../assets/logo.png'

export default function CardView(){
    return(
        <View style={styles.containerCard}>
            <Image style={styles.image} source={logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        width: '65%',
        height: '30%',
        marginBottom: 200,
        borderBottomWidth: 2,
        borderBottomColor: '#01A6B3'
    }
})