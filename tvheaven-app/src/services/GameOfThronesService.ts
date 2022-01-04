import axios from "axios";
import { ICharacter } from "../interfaces/ICharacter"
import { IContinent } from "../interfaces/IContinent";

export const GameOfThronesService = (function(){

    const urlToCharacterController = "https://localhost:5001/Character";
    const urlToCharacterUploadController =  "https://localhost:5001/characterUpload/UploadFile"
    const urlToContinentController = `https://localhost:5001/Continent/`

    const getCharacter = async () => {
        const result = await axios.get( urlToCharacterController );
        return result.data as ICharacter[];
    }

    const getContinent = async () => {
        const result = await axios.get( urlToContinentController );
        return result.data as IContinent[];
    }

    const postNewCharacter = async (newCharater: ICharacter, image: File) => {

        let formData = new FormData();
        formData.append ("file", image)

        const result = await axios.post( urlToCharacterController, newCharater );
        axios({
            url: urlToCharacterUploadController,
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/from-data" }
        })
        return result.data as ICharacter;
    }

    return{
        getCharacter,
        getContinent,
        postNewCharacter,
    }
}()) 