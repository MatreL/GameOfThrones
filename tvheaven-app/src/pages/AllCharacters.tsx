import {FC} from 'react'
import CharacterList from '../components/Character/CharacterList'
import { CharacterProvider } from '../context/CharacterContext'

const AllCharacters :  FC = () => {
  return (
    <div style={{margin: 10}}>
      <h3> Characters </h3>
        <CharacterProvider>
          <CharacterList />
        </CharacterProvider>
      </div>
  )
}

export default AllCharacters
