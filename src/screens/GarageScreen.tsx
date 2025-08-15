import { StyleSheet, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import CardView from "../components/CardView/CardView"


export default function GarageScreen(){
    return(
        <View style={styles.containerGarage}>
            <StatusBar style="light"/>
            <View style={styles.cameraBox}>
                <View style={styles.triangleCorner}></View>
                <View style={[styles.triangleCorner, styles.topRight]}></View>
                <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
                <View style={[styles.triangleCorner, styles.bottomRight]}></View>
                <CardView />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerGarage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E20'
    },
    cameraBox: {
        borderWidth: 2,
        borderColor: '#FFF',
        position: 'relative',
        width: 350,
        height: '90%',
        overflow: 'hidden',
        borderRadius: 10
    },
    triangleCorner: {
        position: 'absolute',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 20,
        borderTopColor: '#FFF',
        borderRightWidth: 20,
        borderRightColor: 'transparent'
    },
    topRight: {
        top: 0,
        right: 0,
        transform: [{rotate: '90deg'}]
    },
    bottomLeft: {
        bottom: 0,
        left: 0,
        transform: [{rotate: '270deg'}]
    },
    bottomRight: {
        bottom: 0,
        right: 0,
        transform: [{rotate: '180deg'}]
    },

})