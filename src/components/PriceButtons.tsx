import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function PriceButtons(){
    return(
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={{color : 'white'}}>{'<'}</Text>
            </TouchableOpacity>
            <View style={styles.containerPrice}>
                <Text style={styles.textPrice}>VALUE</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{color : 'white'}}>{'>'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        width: '60%',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#01A6B3',
        padding: 15,
        borderRadius: 8,
    },
    containerPrice: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingVertical: 15,
        marginHorizontal: 5,
        borderRadius: 8,
    },
    textPrice: {
        color: 'white',
        fontWeight: 'bold'
    }
});
