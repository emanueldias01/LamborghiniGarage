import axios from "axios"
import { CarModel } from "../model/CarModel";
import { CAR_ASSETS_BASE_URL } from "../consts/car";


interface ApiResponse{
    cars : CarModel[]
}

export const getCars = async (id: number): Promise<CarModel | null> => {
    try {
        const res = await axios.get<ApiResponse>('https://digitalinnovationone.github.io/fake-data-api-lamborghini/api/lamborghini.json');
        return res.data.cars.find(c => c.id === id) || null;
    } catch (erro) {
        console.error('Erro ao buscar dados da API: ' + erro);
        return null;
    }
}

export const getImageCars = (id : number) => {
    return `${CAR_ASSETS_BASE_URL}${id}.png`;
}