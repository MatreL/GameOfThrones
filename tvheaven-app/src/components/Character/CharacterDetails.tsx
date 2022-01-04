import { useParams } from 'react-router'
import axios from 'axios'
import {FC, useContext, useEffect, useState } from 'react'
import {CharacterContext} from '../../context/CharacterContext'
import {CharacterContextType} from "../../types/CharacterContextType"
import { ICharacter } from '../../interfaces/ICharacter'
import {useNavigate} from 'react-router-dom';

const CharacterDetails : FC = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  const {getCharacterById} = useContext( CharacterContext ) as CharacterContextType;
  const [character, setCharacter] = useState<ICharacter>();



  useEffect(() => {
    if(id){
      const character = getCharacterById( id); 
      setCharacter( character );
  }
  },)
  const deleteUrl = `https://localhost:5001/Character/${id}`

  const deleteCharacter = async () => {
    const result = await axios.delete( deleteUrl )
    alert("character deleted")
    navigate('/')
    return(
      result.data as ICharacter
  ) 
   
}

  return (
    <section style={{textAlign: "center"}}>
      <img alt={`${character?.image}`} style={{width: 300, height: 300, margin: 20}} src={`https://localhost:5001/images/${character?.image}`}/>
        <h3>This is {character?.name}, {character?.title}, Of House {character?.family}</h3>
        <article>
          <p>
            {character?.description}
          </p>
          <button onClick={deleteCharacter}>Delete character</button>
        </article>
    </section>
  )
}

export default CharacterDetails;
