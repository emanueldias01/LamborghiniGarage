import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'

export default function BuyButton(){

    const handleBuy = () => {
        Alert.alert("Your Lamborghini has been successfully purchased!");
    }

    return(
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleBuy}>
                <AntDesign name="shoppingcart" size={20} color={'white'} />
                <Text style={styles.text}>Buy This!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#01A6B3',
        padding: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8
    },
    button: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        gap: 5
    },
    text: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white'
    }
})