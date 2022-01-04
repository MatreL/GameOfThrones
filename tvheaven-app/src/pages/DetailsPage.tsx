import {FC} from 'react'
import { CharacterProvider } from '../context/CharacterContext'
import CharacterDetails from '../components/Character/CharacterDetails'

const DetailsPage : FC = () => {
  return (
    <div>
        <CharacterProvider>
           <CharacterDetails />
        </CharacterProvider>
    </div>
  )
}

export default DetailsPage
