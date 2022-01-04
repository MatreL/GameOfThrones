import {FC, createContext, useState, useEffect} from 'react'
import { ICharacter } from '../interfaces/ICharacter'
import  {CharacterContextType} from "../types/CharacterContextType"
import { GameOfThronesService } from '../services/GameOfThronesService';
import { IContinent } from '../interfaces/IContinent';

export const CharacterContext = createContext<CharacterContextType | null>(null);

export const CharacterProvider:FC =  ({children}) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [continents, setContinents] = useState<IContinent[]>([]);

  useEffect(() => {
    getCharacterFromService();
    getContinentFromService();
      }, [])


  const getCharacterFromService = async () => {
    const _character = await GameOfThronesService.getCharacter();
    setCharacters(_character);
  }

  const getContinentFromService = async () => {
    const _continent = await GameOfThronesService.getContinent();
    setContinents(_continent);
  }


  const getCharacterById = (id: string) => {
    return characters.find( character => character.id === id ) as ICharacter ;
  }

  return(
    <CharacterContext.Provider value={{continents, characters, getCharacterById}}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterContext
