import { Image, StyleSheet, Text, View } from "react-native";
import logo from '../../../assets/logo.png'
import { CAR_ASSETS_BASE_URL } from "../../consts/car";
import BuyButton from "../BuyButton/BuyButton";
import PriceButtons from "../PriceButton/PriceButtons";
import { useEffect, useState } from "react";
import { getCars, getImageCars } from "../../utils/getCars";
import { CarModel } from "../../model/CarModel";

export default function CardView(){
    const [car, setCar] = useState<CarModel | null>();
    const [image, setImage] = useState<string>();
    const [idCar, setIdCar] = useState(1);

    useEffect(() => {
        async function initRender(){
            const resp = await getCars(idCar);
            setCar(resp);
            const image = getImageCars(idCar);
            setImage(image);
        }
        initRender();
    }, [idCar]);
    
    return(
        <View style={styles.containerCard}>
            <Image style={styles.image} source={logo}/>
            <View style={styles.car}>
                <Text style={styles.carBrand}>Lamborghini</Text>
                <Text style={styles.carName}>{car?.carName}</Text>
                <Image
                style={styles.imageCar} 
                source={{uri: image}}
                />
                <BuyButton />
                <PriceButtons valueCar={car?.price} setIdCar={setIdCar}/>
            </View>
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
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#01A6B3'
    },
    car: {
        alignItems: 'center',
    },
    carBrand : {
        color: '#fff',
        fontWeight: '400',
        fontSize: 18,
        fontStyle : 'italic'
    },
    carName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',

    },
    imageCar: {
        resizeMode: 'contain',
        alignItems: 'center',
        width: 300,
        height: 300,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    }
})