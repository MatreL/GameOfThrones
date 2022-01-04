import {FC} from 'react'
import CharacterFrom from '../components/Character/CreateCharacterFrom'

const CreateCharacter : FC = () => {
  return (
    <div>
            <h3>Add new character</h3>
            <CharacterFrom />
    </div>
  )
}

export default CreateCharacter
