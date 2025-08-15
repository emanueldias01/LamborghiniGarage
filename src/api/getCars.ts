import axios from "axios"
import { CarModel } from "../components/CardView/model";


interface ApiResponse{
    cars : CarModel[]
}

export const getCars = async (id : number) => {
    try{
        const res = await axios.get<ApiResponse>('https://digitalinnovationone.github.io/fake-data-api-lamborghini/api/lamborghini.json');
        return res.data.cars.find(c => c.id === id) || null;
    }catch(erro){
        console.error('Erro ao buscar dados da API: ' + erro);
    }
}