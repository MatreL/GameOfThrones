import { ICharacter } from "../interfaces/ICharacter";
import { IContinent } from "../interfaces/IContinent";

export type CharacterContextType = {
    characters: ICharacter[]; 
    continents: IContinent[];
    getCharacterById: ( id: string ) => ICharacter;  
}